param(
  [string]$SourceDirectory = 'C:\Projects\pro-surface-pages'
)

Add-Type -AssemblyName System.IO.Compression.FileSystem

$documents = [ordered]@{
  home = 'Pro Surface Works - Homepage (1).docx'
  about = 'Pro Surface Works - About Us.docx'
  services = 'Pro Surface Works - Services Hub (1).docx'
  'marble-stone-care' = 'Pro Surface Works - Marble & Stone Care (1).docx'
  grouting = 'Pro Surface Works - Grouting Services.docx'
  'general-floor-care' = 'Pro Surface Works - General Floor Care.docx'
  'parquet-flooring' = 'Pro Surface Works - Parquet Flooring.docx'
  'timber-wood-repair' = 'Pro Surface Works - Timber & Wood Repair.docx'
  'wood-decking' = 'Pro Surface Works - Wood Decking.docx'
  'vinyl-flooring' = 'Pro Surface Works - Vinyl Flooring.docx'
  'epoxy-grouting' = 'Pro Surface Works - Epoxy Grouting.docx'
  'floor-polishing-buffing' = 'Pro Surface Works - Floor Polishing  Buffing.docx'
  'floor-refinishing-restoration' = 'Pro Surface Works - Floor Refinishing  Restoration.docx'
  'kitchen-countertop-polishing' = 'Pro Surface Works - Kitchen Countertop Polishing.docx'
  'marble-floor-polishing' = 'Pro Surface Works - Marble Floor Polishing.docx'
  'marble-gum-grouting' = 'Pro Surface Works - Marble Gum Grouting.docx'
  'marble-restoration' = 'Pro Surface Works - Marble Restoration.docx'
  'old-varnish-removal' = 'Pro Surface Works - Old Varnish Removal.docx'
  'parquet-floor-polishing' = 'Pro Surface Works - Parquet Floor Polishing.docx'
  'parquet-floor-sanding-varnishing' = 'Pro Surface Works - Parquet Floor Sanding  Varnishing.docx'
  'parquet-flooring-installation' = 'Pro Surface Works - Parquet Flooring Installation.docx'
  'parquet-repair-restoration' = 'Pro Surface Works - Parquet Repair  Restoration.docx'
  'skirting-installation-repair' = 'Pro Surface Works - Skirting Installation  Repair.docx'
  'staircase-sanding-varnishing' = 'Pro Surface Works - Staircase Sanding  Varnishing.docx'
  'tile-marble-regrouting' = 'Pro Surface Works - Tile  Marble Regrouting.docx'
  'vanity-basin-top-polishing' = 'Pro Surface Works - Vanity  Basin Top Polishing.docx'
  'vinyl-flooring-installation' = 'Pro Surface Works - Vinyl Flooring Installation.docx'
  'wood-deck-installation-repair' = 'Pro Surface Works - Wood Deck Installation  Repair.docx'
}

function Get-Text($node, $ns) {
  return (($node.SelectNodes('.//w:t', $ns) | ForEach-Object { $_.InnerText }) -join '').Trim()
}

function Get-Paragraph($node, $ns) {
  $value = Get-Text $node $ns
  if (-not $value) { return $null }

  $styleNode = $node.SelectSingleNode('./w:pPr/w:pStyle', $ns)
  $style = if ($styleNode) { $styleNode.GetAttribute('val', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main') } else { '' }
  $runs = @($node.SelectNodes('.//w:r[.//w:t]', $ns))
  $boldRuns = @($runs | Where-Object { $_.SelectSingleNode('./w:rPr/w:b', $ns) })
  $kind = if ($style -match '^Heading[1-6]$') { 'section' }
    elseif ($style -eq 'ListParagraph' -or ($value -match '^\d+\.\s' -and $runs.Count -ne $boldRuns.Count)) { 'list' }
    elseif ($value -match '\s*\u2192\s*$' -or $value -eq 'Request a Free Assessment') { 'link' }
    elseif ($runs.Count -gt 0 -and $runs.Count -eq $boldRuns.Count) { 'heading' }
    else { 'paragraph' }

  return @{ kind = $kind; text = $value }
}

$output = Join-Path $PSScriptRoot '..\src\data\page-copy.json'
$existingPages = if (Test-Path -LiteralPath $output) {
  [System.IO.File]::ReadAllText($output, [System.Text.Encoding]::UTF8) | ConvertFrom-Json
} else { $null }
$pages = [ordered]@{}
$imported = 0
foreach ($key in $documents.Keys) {
  $path = Join-Path $SourceDirectory $documents[$key]
  if (-not (Test-Path -LiteralPath $path)) {
    $existing = if ($existingPages) { $existingPages.PSObject.Properties[$key] } else { $null }
    if (-not $existing) { throw "Missing document and imported copy: $path" }
    $pages[$key] = $existing.Value
    continue
  }
  $imported++
  $zip = [System.IO.Compression.ZipFile]::OpenRead($path)
  try {
    $reader = New-Object System.IO.StreamReader($zip.GetEntry('word/document.xml').Open())
    try { [xml]$doc = $reader.ReadToEnd() } finally { $reader.Dispose() }
    $ns = New-Object System.Xml.XmlNamespaceManager($doc.NameTable)
    $ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
    $body = $doc.SelectSingleNode('//w:body', $ns)
    $meta = @{}
    $intro = New-Object System.Collections.ArrayList
    $sections = New-Object System.Collections.ArrayList
    $current = $null
    $firstTable = $true

    foreach ($node in $body.ChildNodes) {
      if ($node.LocalName -eq 'tbl') {
        $rows = New-Object System.Collections.ArrayList
        foreach ($row in $node.SelectNodes('./w:tr', $ns)) {
          $cells = @($row.SelectNodes('./w:tc', $ns) | ForEach-Object { Get-Text $_ $ns })
          if ($cells.Count -ge 2) { [void]$rows.Add(@($cells[0], $cells[1])) }
        }
        if ($firstTable) {
          foreach ($row in $rows) { $meta[$row[0]] = $row[1] }
          $firstTable = $false
        } elseif ($current) {
          $kind = if ($key -eq 'about') { 'facts' } else { 'table' }
          [void]$current.blocks.Add(@{ kind = $kind; rows = @($rows.ToArray()) })
        }
        continue
      }
      if ($node.LocalName -ne 'p') { continue }
      $paragraph = Get-Paragraph $node $ns
      if (-not $paragraph -or $paragraph.text -eq 'PAGE META') { continue }
      if ($paragraph.kind -eq 'section') {
        $eyebrow = if ($paragraph.text -eq 'Frequently Asked Questions') { 'FAQ' } else { '' }
        $current = @{ eyebrow = $eyebrow; title = $paragraph.text; blocks = (New-Object System.Collections.ArrayList) }
        [void]$sections.Add($current)
        continue
      }
      if ($paragraph.kind -eq 'heading' -and $paragraph.text -ceq $paragraph.text.ToUpperInvariant() -and $paragraph.text -match '[A-Z]') {
        if ($key -eq 'home' -and $intro.Count -eq 0) {
          [void]$intro.Add(@{ kind = 'eyebrow'; text = $paragraph.text })
          continue
        }
        $current = @{ eyebrow = $paragraph.text; title = ''; blocks = (New-Object System.Collections.ArrayList) }
        [void]$sections.Add($current)
        continue
      }
      if ($current -and -not $current.title -and $paragraph.kind -eq 'heading') {
        $current.title = $paragraph.text
      } elseif ($current) {
        [void]$current.blocks.Add($paragraph)
      } else {
        [void]$intro.Add($paragraph)
      }
    }

    $pages[$key] = @{
      url = $meta['Full URL']
      title = $meta['Meta Title']
      description = $meta['Meta Description']
      intro = @($intro.ToArray())
      sections = @($sections | ForEach-Object { @{ eyebrow = $_.eyebrow; title = $_.title; blocks = @($_.blocks.ToArray()) } })
    }
  } finally { $zip.Dispose() }
}

$json = ConvertTo-Json -InputObject $pages -Depth 20
[System.IO.File]::WriteAllText($output, $json, (New-Object System.Text.UTF8Encoding($false)))
Write-Output "Imported $imported documents; $($pages.Count) pages available in $output"
