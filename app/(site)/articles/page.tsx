import Image from 'next/image';
import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { ARTICLES_QUERY } from '@/sanity/lib/queries';
import type { ArticleCard } from '@/sanity/lib/types';
import { formatDate } from '@/sanity/lib/formatDate';

export const revalidate = 60;

export const metadata = {
  title: 'Articles & Events | Win Everest Construction Company Limited',
  description: 'Company articles, events, project updates, safety posts, and community highlights from Win Everest Construction Company Limited.',
};

export default async function Articles() {
  const articles = await sanityFetch<ArticleCard[]>({ query: ARTICLES_QUERY });
  const featured = articles.find((article) => article.featured) ?? articles[0];
  const others = articles.filter((article) => article !== featured);

  return (
    <>
      <section className="page-hero article-hero">
        <div>
          <p className="eyebrow">Articles & Events</p>
          <h1>Company updates, site stories, and event highlights in one place.</h1>
          <p>Use this page to publish project progress, staff activities, safety announcements, sustainability notes, and partner-facing company news.</p>
        </div>
        <Image
          src="/assets/banners/articles-banner.png"
          alt="High-rise construction site with tower cranes"
          width={800}
          height={600}
        />
      </section>

      {featured && (
        <section className="article-feature">
          <div>
            <p className="eyebrow">Featured Update</p>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <Link className="text-link" href={`/articles/${featured.slug}`}>Read more</Link>
          </div>
          <div className="feature-note">
            <span>{featured.category}</span>
            {featured.publishedAt && <strong>{formatDate(featured.publishedAt)}</strong>}
            <p>{featured.excerpt}</p>
          </div>
        </section>
      )}

      <section className="article-layout">
        <aside className="topic-panel">
          <p className="eyebrow">Post Categories</p>
          <h2>Keep updates easy to browse.</h2>
          <ul>
            <li>Company events and announcements</li>
            <li>Project progress and milestones</li>
            <li>Safety notices and site rules</li>
            <li>Sustainability and environmental actions</li>
            <li>Community and partner activities</li>
          </ul>
        </aside>

        <div className="article-grid">
          {others.map((article) => (
            <article className="article-card" key={article._id}>
              <div className="article-card-image">
                {article.mainImage?.asset && (
                  <Image src={urlFor(article.mainImage).width(900).url()} alt={article.mainImage.alt || article.title} fill />
                )}
              </div>
              <div>
                <span>{article.category}</span>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <Link className="text-link" href={`/articles/${article.slug}`}>Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
