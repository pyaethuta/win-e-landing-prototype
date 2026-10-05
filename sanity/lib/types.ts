import type { PortableTextBlock } from 'next-sanity';

export type SanityImage = {
  _type: 'image';
  asset?: { _ref: string; _type: 'reference' };
  alt?: string;
};

export type ProjectCard = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  description?: string;
  scope?: string;
  focus?: string;
  image?: SanityImage;
  featured?: boolean;
};

export type Project = ProjectCard & {
  sector?: string;
  type?: string;
  overview?: string;
  scopeHighlights?: string[];
  deliveryValue?: string;
  related?: { _id: string; title: string; slug: string }[];
};

export type ArticleCard = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  excerpt?: string;
  publishedAt?: string;
  mainImage?: SanityImage;
  featured?: boolean;
};

export type Article = ArticleCard & {
  body?: PortableTextBlock[];
};
