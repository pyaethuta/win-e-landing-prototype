import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PROJECT_QUERY, PROJECT_SLUGS_QUERY } from '@/sanity/lib/queries';
import type { Project } from '@/sanity/lib/types';

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>({ query: PROJECT_SLUGS_QUERY });
  return slugs.map((slug) => ({ slug }));
}

async function getProject(slug: string) {
  return sanityFetch<Project | null>({ query: PROJECT_QUERY, params: { slug } });
}

export async function generateMetadata({ params }: Props) {
  const project = await getProject((await params).slug);
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  return {
    title: `${project.title} | Win Everest Projects`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const project = await getProject((await params).slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="project-detail-hero">
        <div>
          <Link className="back-link" href="/projects">Projects</Link>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        {project.image?.asset && (
          <Image
            src={urlFor(project.image).width(1600).url()}
            alt={project.image.alt || project.title}
            width={800}
            height={600}
          />
        )}
      </section>
      <section className="detail-layout">
        <aside className="project-facts">
          <strong>Project Snapshot</strong>
          <span>Sector: {project.sector}</span>
          <span>Type: {project.type}</span>
          <span>Scope: {project.scope}</span>
          <span>Focus: {project.focus}</span>
        </aside>
        <div className="rich-copy">
          <h2>Project Overview</h2>
          <p>{project.overview}</p>
          <h2>Scope Highlights</h2>
          <ul className="scope-list">
            {project.scopeHighlights?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2>Delivery Value</h2>
          <p>{project.deliveryValue}</p>
        </div>
      </section>
      {!!project.related?.length && (
        <section className="related-projects">
          <h2>Related Projects</h2>
          <div className="related-grid">
            {project.related.map((related) => (
              <Link key={related._id} href={`/projects/${related.slug}`}>
                {related.title}
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
