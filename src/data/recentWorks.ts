import { services } from './services';

export type RecentWorkProject = {
  image: string;
  alt: string;
  serviceTitle: string;
  label: string;
  title: string;
  text: string;
  featured?: boolean;
};

export const defaultRecentWorks: RecentWorkProject[] = [
  {
    image: services[0].image,
    alt: 'Refined Floor Care Finish by Pro Surface Works',
    serviceTitle: services[0].title,
    label: 'Floor Restoration',
    title: 'Refined Floor Care Finish',
    text: 'A cleaner, more polished floor presentation planned around surface condition, daily use and a consistent final finish.',
    featured: true
  },
  {
    image: services[4].image,
    alt: 'Timber Surface Renewal by Pro Surface Works',
    serviceTitle: services[4].title,
    label: 'Timber Care',
    title: 'Timber Surface Renewal',
    text: 'Focused wood repair and restoration support for worn timber surfaces that need a neater, better-maintained look.'
  },
  {
    image: services[6].image,
    alt: 'Modern Vinyl Installation by Pro Surface Works',
    serviceTitle: services[6].title,
    label: 'Vinyl Flooring',
    title: 'Modern Vinyl Installation',
    text: 'Practical flooring installation with attention to preparation, edges and a clean finished result for everyday spaces.'
  },
  {
    image: services[5].image,
    alt: 'Outdoor Deck Refresh by Pro Surface Works',
    serviceTitle: services[5].title,
    label: 'Wood Decking',
    title: 'Outdoor Deck Refresh',
    text: 'Decking work planned around board condition, outdoor exposure and a cleaner, more usable finished surface.'
  }
];

export const recentWorksByService: Record<string, RecentWorkProject[]> = {};

export function recentWorksForPage(slug?: string): RecentWorkProject[] {
  return slug && recentWorksByService[slug] ? recentWorksByService[slug] : defaultRecentWorks;
}
