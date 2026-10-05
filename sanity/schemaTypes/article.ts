import { defineArrayMember, defineField, defineType } from 'sanity';

export const ARTICLE_CATEGORIES = [
  'Company event',
  'Project update',
  'Technical post',
  'Safety post',
  'Sustainability',
  'Community',
];

export const articleType = defineType({
  name: 'article',
  title: 'Article / Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: { list: ARTICLE_CATEGORIES },
    }),
    defineField({ name: 'publishedAt', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'excerpt', type: 'text', rows: 3, description: 'Short summary shown on the Articles page.' }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alternative text' })],
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [defineField({ name: 'alt', type: 'string', title: 'Alternative text' })],
        }),
      ],
    }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false, description: 'Show as the featured update at the top of the Articles page.' }),
  ],
  orderings: [
    { title: 'Published, newest', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'mainImage' },
  },
});
