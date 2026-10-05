This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Sanity CMS

Projects and Articles are managed in [Sanity](https://www.sanity.io). The Studio is embedded at [`/studio`](http://localhost:3000/studio).

1. The site uses Sanity project `3x1jdne9` / dataset `production` by default (see `sanity/env.ts`). To point at another project, copy `.env.example` to `.env.local` and change the values.
2. Run `npm run dev` and open `/studio` to edit content. Published changes appear on the site within ~60 seconds.
3. Optional: `npm run seed` loads the original site content into an empty dataset (needs `SANITY_API_WRITE_TOKEN` with Editor rights).

Schemas live in `sanity/schemaTypes`, GROQ queries in `sanity/lib/queries.ts`. When deploying to a new domain, add it under **API → CORS origins** in [sanity.io/manage](https://www.sanity.io/manage) (with credentials allowed) so the Studio can log in.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
