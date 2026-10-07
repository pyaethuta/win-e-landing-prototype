'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import type { ProjectCard } from '@/sanity/lib/types';

export default function ProjectSlider({ projects }: { projects: ProjectCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const prev = prevRef.current;
    const next = nextRef.current;

    if (!track || !prev || !next) return;

    const getStep = () => {
      const card = track.querySelector('.overview-card');
      return card ? card.getBoundingClientRect().width + 22 : track.clientWidth * 0.8;
    };

    const syncControls = () => {
      const maxScroll = track.scrollWidth - track.clientWidth - 2;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= maxScroll;
    };

    const scrollPrev = () => track.scrollBy({ left: -getStep(), behavior: 'smooth' });
    const scrollNext = () => track.scrollBy({ left: getStep(), behavior: 'smooth' });

    prev.addEventListener('click', scrollPrev);
    next.addEventListener('click', scrollNext);
    track.addEventListener('scroll', syncControls, { passive: true });
    window.addEventListener('resize', syncControls);
    syncControls();

    return () => {
      prev.removeEventListener('click', scrollPrev);
      next.removeEventListener('click', scrollNext);
      track.removeEventListener('scroll', syncControls);
      window.removeEventListener('resize', syncControls);
    };
  }, [projects]);

  return (
    <div className="overview-slider" data-project-slider>
      <button className="slider-control prev" type="button" aria-label="Previous projects" data-slider-prev ref={prevRef}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6"></path></svg>
      </button>
      <div className="overview-track" data-slider-track tabIndex={0} ref={trackRef}>
        {projects.map((project) => (
          <article className="overview-card" key={project._id}>
            <div className="overview-card-image">
              {project.image?.asset && (
                <Image src={urlFor(project.image).width(900).url()} alt={project.image.alt || project.title} fill />
              )}
            </div>
            <div>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link className="text-link" href={`/projects/${project.slug}`}>View details</Link>
            </div>
          </article>
        ))}
      </div>
      <button className="slider-control next" type="button" aria-label="Next projects" data-slider-next ref={nextRef}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>
      </button>
    </div>
  );
}
