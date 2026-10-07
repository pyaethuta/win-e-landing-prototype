import { defineQuery } from 'next-sanity';

const projectCardFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  scope,
  focus,
  image
`;

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)] | order(orderRank asc, title asc) {
    ${projectCardFields},
    featured
  }
`);

export const SLIDER_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current) && showInSlider == true] | order(orderRank asc, title asc) {
    ${projectCardFields}
  }
`);

export const PROJECT_SLUGS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)].slug.current
`);

export const PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    ${projectCardFields},
    sector,
    type,
    overview,
    scopeHighlights,
    deliveryValue,
    "related": related[]->{ _id, title, "slug": slug.current }
  }
`);

const articleCardFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  publishedAt,
  mainImage
`;

export const ARTICLES_QUERY = defineQuery(`
  *[_type == "article" && defined(slug.current)] | order(publishedAt desc) {
    ${articleCardFields},
    featured
  }
`);

export const ARTICLE_SLUGS_QUERY = defineQuery(`
  *[_type == "article" && defined(slug.current)].slug.current
`);

export const ARTICLE_QUERY = defineQuery(`
  *[_type == "article" && slug.current == $slug][0] {
    ${articleCardFields},
    body
  }
`);
