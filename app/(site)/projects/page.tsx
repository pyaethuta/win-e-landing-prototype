import Image from 'next/image';
import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import type { ProjectCard } from '@/sanity/lib/types';

export const revalidate = 60;

export const metadata = {
  title: 'Projects | Win Everest Construction Company Limited',
  description: 'Project portfolio for Win Everest Construction Company Limited, including university, institutional, foundation, rebar, and design-build work.',
};

export default async function Projects() {
  const projects = await sanityFetch<ProjectCard[]>({ query: PROJECTS_QUERY });

  return (
    <>
      <section className="page-hero project-hero">
        <div>
          <p className="eyebrow">Project Portfolio</p>
          <h1>Proof of work across campuses, structures, foundations, and site delivery.</h1>
          <p>Browse Win Everest project experience by sector, scope, and delivery focus. Each project page explains what the work demonstrates for future clients and partners.</p>
        </div>
        <Image
          src="/assets/client-photos/highrise-crane-vertical.png"
          alt="Large building construction in progress with crane"
          width={800}
          height={600}
        />
      </section>

      <section className="portfolio-intro">
        <div>
          <p className="eyebrow">Portfolio Coverage</p>
          <h2>From first groundworks to completed institutional environments.</h2>
        </div>
        <div className="portfolio-stats">
          <article><strong>Education</strong><span>University and campus project experience</span></article>
          <article><strong>Structural</strong><span>Foundations, rebar, concrete, and RCC works</span></article>
          <article><strong>Delivery</strong><span>Coordination from site setup to completion</span></article>
        </div>
      </section>

      <section className="project-index-grid" aria-label="Project list">
        {projects.map((project) => (
          <article className={project.featured ? 'project-card featured' : 'project-card'} key={project._id}>
            <Link href={`/projects/${project.slug}`}>
              <div className="project-card-image">
                {project.image?.asset && (
                  <Image src={urlFor(project.image).width(1200).url()} alt={project.image.alt || project.title} fill />
                )}
              </div>
            </Link>
            <div>
              <span className="project-type">{project.category}</span>
              <h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2>
              <p>{project.description}</p>
              {project.featured && (
                <dl><div><dt>Scope</dt><dd>{project.scope}</dd></div><div><dt>Focus</dt><dd>{project.focus}</dd></div></dl>
              )}
              <Link className="text-link" href={`/projects/${project.slug}`}>View details</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="delivery-matrix">
        <div>
          <p className="eyebrow">Delivery Method</p>
          <h2>How Win Everest turns project intent into finished work.</h2>
        </div>
        <div className="matrix-grid">
          <article><span>01</span><h3>Site Establishment</h3><p>Survey confirmation, logistics planning, site access, material storage, and boundary control before major work begins.</p></article>
          <article><span>02</span><h3>Structural Execution</h3><p>Excavation, reinforced steel, formwork, concrete pouring, scaffolding, and construction sequencing.</p></article>
          <article><span>03</span><h3>Project Control</h3><p>Schedule monitoring, manpower coordination, procurement timing, subcontractor alignment, and client communication.</p></article>
          <article><span>04</span><h3>Completion Quality</h3><p>Exterior and interior finishing, safety checks, environmental controls, and handover readiness.</p></article>
        </div>
      </section>
    </>
  );
}
