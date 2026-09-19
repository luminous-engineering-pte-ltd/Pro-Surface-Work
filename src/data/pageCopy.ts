import rawPages from './page-copy.json';
import { services, servicePath, subServicePath, type FaqItem } from './services';

export type CopyBlock = {
  kind: 'eyebrow' | 'heading' | 'paragraph' | 'list' | 'link' | 'facts' | 'table';
  text?: string;
  rows?: [string, string][];
};

export type CopySection = {
  eyebrow: string;
  title: string;
  blocks: CopyBlock[];
};

export type CopyPage = {
  url: string;
  title: string;
  description: string;
  intro: CopyBlock[];
  sections: CopySection[];
};

export const pageCopy = rawPages as Record<string, CopyPage>;

const serviceAlias: Record<string, string> = {
  'Cement-Based Regrouting': 'tile-marble-regrouting'
};

export function contentHref(label: string): string | undefined {
  const clean = label.replace(/\s*\u2192\s*$/, '').replace(/^Explore\s+/, '').trim();
  if (/project/i.test(clean)) return '/projects/';
  if (/team/i.test(clean)) return '/about/';
  if (/(quote|assessment|contact)/i.test(clean)) return '/contact/';

  const service = services.find((item) => item.title === clean);
  if (service) return servicePath(service);

  const childSlug = serviceAlias[clean];
  for (const category of services) {
    const child = category.subServices.find((item) => item.title === clean || item.slug === childSlug);
    if (child) return subServicePath(category, child);
  }
}

export function inlineContentParts(value: string): { text: string; href?: string }[] {
  if (!/\b(see|explore)\b|Projects page/i.test(value)) return [{ text: value }];

  const targets = [
    { text: 'Projects page', href: '/projects/' },
    { text: 'Grouting hub', href: '/services/grouting/' },
    ...services.map((service) => ({ text: service.title, href: servicePath(service) })),
    ...services.flatMap((service) => service.subServices.map((sub) => ({ text: sub.title, href: subServicePath(service, sub) })))
  ].sort((a, b) => b.text.length - a.text.length);

  const parts: { text: string; href?: string }[] = [];
  let cursor = 0;
  while (cursor < value.length) {
    let next: { text: string; href: string; index: number } | undefined;
    for (const target of targets) {
      const index = value.indexOf(target.text, cursor);
      if (index < 0) continue;
      if (!next || index < next.index || (index === next.index && target.text.length > next.text.length)) {
        next = { ...target, index };
      }
    }
    if (!next) break;
    if (next.index > cursor) parts.push({ text: value.slice(cursor, next.index) });
    parts.push({ text: next.text, href: next.href });
    cursor = next.index + next.text.length;
  }
  if (cursor < value.length) parts.push({ text: value.slice(cursor) });
  return parts.length ? parts : [{ text: value }];
}

export function pageFaqs(page: CopyPage): FaqItem[] {
  const faq = page.sections.find((section) => section.eyebrow === 'FAQ');
  if (!faq) return [];
  const items: FaqItem[] = [];
  for (let index = 0; index < faq.blocks.length - 1; index++) {
    const question = faq.blocks[index];
    const answer = faq.blocks[index + 1];
    if (question.kind === 'heading' && answer.kind === 'paragraph') {
      items.push({ question: question.text ?? '', answer: answer.text ?? '' });
      index++;
    }
  }
  return items;
}

export function faqSchema(page: CopyPage) {
  const faqs = pageFaqs(page);
  if (!faqs.length) return undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
  };
}
