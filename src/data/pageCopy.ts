import rawPages from './page-copy.json';
import { services, servicePath, subServicePath, type FaqItem } from './services';

export type CopyBlock = {
  kind: 'eyebrow' | 'heading' | 'paragraph' | 'list' | 'link' | 'facts';
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
