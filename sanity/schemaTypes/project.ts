import { defineArrayMember, defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'category', type: 'string', description: 'Short label shown above the title, e.g. "University work".' }),
    defineField({ name: 'description', type: 'text', rows: 3, description: 'Summary used on cards and in the page header.' }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alternative text' })],
    }),
    defineField({ name: 'sector', type: 'string', group: 'snapshot' }),
    defineField({ name: 'type', type: 'string', group: 'snapshot' }),
    defineField({ name: 'scope', type: 'string', group: 'snapshot' }),
    defineField({ name: 'focus', type: 'string', group: 'snapshot' }),
    defineField({ name: 'overview', type: 'text', rows: 5, group: 'details' }),
    defineField({
      name: 'scopeHighlights',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      group: 'details',
    }),
    defineField({ name: 'deliveryValue', type: 'text', rows: 4, group: 'details' }),
    defineField({
      name: 'related',
      title: 'Related projects',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'project' }] })],
      validation: (rule) => rule.unique(),
      group: 'details',
    }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false, group: 'display', description: 'Show as the large card on the Projects page.' }),
    defineField({ name: 'showInSlider', type: 'boolean', initialValue: false, group: 'display', description: 'Show in the home page project slider.' }),
    defineField({ name: 'orderRank', title: 'Sort order', type: 'number', group: 'display', description: 'Lower numbers appear first.' }),
  ],
  groups: [
    { name: 'snapshot', title: 'Snapshot' },
    { name: 'details', title: 'Details' },
    { name: 'display', title: 'Display' },
  ],
  orderings: [
    { title: 'Sort order', name: 'orderRankAsc', by: [{ field: 'orderRank', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' },
  },
});
