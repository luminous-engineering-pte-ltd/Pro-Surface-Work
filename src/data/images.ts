import manifest from './image-manifest.json';

type OptimizedImage = {
  src: string;
  width: number;
  height: number;
  candidates: { src: string; width: number }[];
  card?: OptimizedImage;
  hero?: { src: string; type: string };
  mobileHero?: { src: string; type: string };
};
const images = manifest as Record<string, OptimizedImage>;

export function imageSource(src: string): string {
  return images[src]?.src ?? src;
}

export function heroStyle(src: string): string {
  const fallback = `url("${imageSource(src)}")`;
  const hero = images[src]?.hero;
  const mobile = images[src]?.mobileHero;
  return `--hero-image: ${fallback};${hero ? `--hero-modern-image: image-set(url("${hero.src}") type("image/avif"), ${fallback} type("image/webp"));` : ''}${mobile ? `--hero-mobile-image: image-set(url("${mobile.src}") type("image/avif"), ${fallback} type("image/webp"));` : ''}`;
}

export function preloadImage(src: string) {
  const hero = images[src]?.hero;
  const mobile = images[src]?.mobileHero;
  if (hero && mobile) {
    return [
      { href: mobile.src, type: mobile.type, media: '(max-width: 640px) and (max-aspect-ratio: 3/4)' },
      { href: hero.src, type: hero.type, media: 'not all and (max-width: 640px) and (max-aspect-ratio: 3/4)' }
    ];
  }
  return [hero ? { href: hero.src, type: hero.type } : { href: imageSource(src) }];
}

export function responsiveImage(src: string, sizes: string, crop?: 'card') {
  const original = images[src];
  const image = crop === 'card' ? original?.card ?? original : original;
  if (!image) return { src };
  return {
    src: image.src,
    width: image.width,
    height: image.height,
    srcset: image.candidates.map((candidate) => `${candidate.src} ${candidate.width}w`).join(', '),
    sizes
  };
}
