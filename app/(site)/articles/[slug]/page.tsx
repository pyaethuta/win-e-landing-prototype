import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextComponents } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/client';
import { formatDate } from '@/sanity/lib/formatDate';
import { urlFor } from '@/sanity/lib/image';
import { ARTICLE_QUERY, ARTICLE_SLUGS_QUERY } from '@/sanity/lib/queries';
import type { Article, SanityImage } from '@/sanity/lib/types';

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) =>
      value?.asset ? (
        <Image src={urlFor(value).width(1400).url()} alt={value.alt || ''} width={1400} height={900} />
      ) : null,
  },
};

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>({ query: ARTICLE_SLUGS_QUERY });
  return slugs.map((slug) => ({ slug }));
}

async function getArticle(slug: string) {
  return sanityFetch<Article | null>({ query: ARTICLE_QUERY, params: { slug } });
}

export async function generateMetadata({ params }: Props) {
  const article = await getArticle((await params).slug);
  if (!article) {
    return { title: 'Article Not Found' };
  }
  return {
    title: `${article.title} | Win Everest Articles`,
    description: article.excerpt,
  };
}

export default async function ArticleDetail({ params }: Props) {
  const article = await getArticle((await params).slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <section className="project-detail-hero">
        <div>
          <Link className="back-link" href="/articles">Articles</Link>
          <p className="eyebrow">
            {article.category}
            {article.publishedAt && ` · ${formatDate(article.publishedAt)}`}
          </p>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
        </div>
        {article.mainImage?.asset && (
          <Image
            src={urlFor(article.mainImage).width(1600).url()}
            alt={article.mainImage.alt || article.title}
            width={800}
            height={600}
          />
        )}
      </section>
      <section className="detail-layout">
        <div className="rich-copy">
          {article.body && <PortableText value={article.body} components={components} />}
        </div>
      </section>
    </>
  );
}
