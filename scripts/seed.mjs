// Seeds the Sanity dataset with the site's original hardcoded content.
// Usage: npm run seed  (requires NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN)
import { createClient } from '@sanity/client';
import { readFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const { NEXT_PUBLIC_SANITY_PROJECT_ID: projectId, NEXT_PUBLIC_SANITY_DATASET: dataset, SANITY_API_WRITE_TOKEN: token } = process.env;

if (!projectId || !dataset || !token) {
  console.error('Set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET and SANITY_API_WRITE_TOKEN (e.g. in .env.local).');
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: '2025-10-01', useCdn: false });

const readJson = async (file) => JSON.parse(await readFile(join(root, 'scripts/seed-data', file), 'utf8'));
const uploaded = new Map();

async function imageField(publicPath, alt) {
  if (!uploaded.has(publicPath)) {
    const buffer = await readFile(join(root, 'public', publicPath));
    const asset = await client.assets.upload('image', buffer, { filename: basename(publicPath) });
    uploaded.set(publicPath, asset._id);
  }
  return { _type: 'image', asset: { _type: 'reference', _ref: uploaded.get(publicPath) }, alt };
}

const toBlocks = (paragraphs) =>
  paragraphs.map((text, i) => ({
    _type: 'block',
    _key: `b${i}`,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `s${i}`, text, marks: [] }],
  }));

const projects = await readJson('projects.json');
const articles = await readJson('articles.json');
const tx = client.transaction();

for (const p of projects) {
  tx.createOrReplace({
    _id: `project-${p.slug}`,
    _type: 'project',
    title: p.title,
    slug: { _type: 'slug', current: p.slug },
    category: p.category,
    description: p.description,
    image: await imageField(p.image, p.imageAlt),
    sector: p.sector,
    type: p.type,
    scope: p.scope,
    focus: p.focus,
    overview: p.overview,
    scopeHighlights: p.scopeHighlights,
    deliveryValue: p.deliveryValue,
    related: p.related.map((slug) => ({ _type: 'reference', _key: slug, _ref: `project-${slug}` })),
    featured: p.featured,
    showInSlider: p.showInSlider,
    orderRank: p.orderRank,
  });
}

for (const a of articles) {
  tx.createOrReplace({
    _id: `article-${a.slug}`,
    _type: 'article',
    title: a.title,
    slug: { _type: 'slug', current: a.slug },
    category: a.category,
    publishedAt: a.publishedAt,
    excerpt: a.excerpt,
    mainImage: await imageField(a.image, a.imageAlt),
    body: toBlocks(a.body),
    featured: Boolean(a.featured),
  });
}

await tx.commit();
console.log(`Seeded ${projects.length} projects and ${articles.length} articles into ${projectId}/${dataset}.`);
