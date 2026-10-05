'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectSlider() {
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

    prev.addEventListener('click', () => {
      track.scrollBy({ left: -getStep(), behavior: 'smooth' });
    });

    next.addEventListener('click', () => {
      track.scrollBy({ left: getStep(), behavior: 'smooth' });
    });

    track.addEventListener('scroll', syncControls, { passive: true });
    window.addEventListener('resize', syncControls);
    syncControls();

    return () => {
      prev.removeEventListener('click', () => {});
      next.removeEventListener('click', () => {});
      track.removeEventListener('scroll', syncControls);
      window.removeEventListener('resize', syncControls);
    };
  }, []);

  return (
    <div className="overview-slider" data-project-slider>
      <button className="slider-control prev" type="button" aria-label="Previous projects" data-slider-prev ref={prevRef}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6"></path></svg>
      </button>
      <div className="overview-track" data-slider-track tabIndex={0} ref={trackRef}>
        <article className="overview-card">
          <div className="overview-card-image">
            <Image src="/assets/client-photos/win-everest-site-wide.png" alt="Win Everest construction site with structural frame" fill />
          </div>
          <div>
            <span>Education campus</span>
            <h3>Taunggyi Education Degree College</h3>
            <p>Completed campus building work with exterior finishing, circulation planning, and handover readiness.</p>
            <Link className="text-link" href="/projects/taunggyi-education-degree-college">View details</Link>
          </div>
        </article>
        <article className="overview-card">
          <div className="overview-card-image">
            <Image src="/assets/client-photos/highrise-crane-vertical.png" alt="High-rise construction site with tower crane" fill />
          </div>
          <div>
            <span>University work</span>
            <h3>Meiktila University</h3>
            <p>Structural execution, scaffolding coordination, site supervision, and completion planning.</p>
            <Link className="text-link" href="/projects/meiktila-university">View details</Link>
          </div>
        </article>
        <article className="overview-card">
          <div className="overview-card-image">
            <Image src="/assets/client-photos/foundation-rebar-detail.png" alt="Foundation rebar and formwork detail" fill />
          </div>
          <div>
            <span>Foundation works</span>
            <h3>Foundation & Rebar Works</h3>
            <p>Ground preparation, excavation, formwork, concrete pouring, and early quality checks.</p>
            <Link className="text-link" href="/projects/foundation-rebar-works">View details</Link>
          </div>
        </article>
        <article className="overview-card">
          <div className="overview-card-image">
            <Image src="/assets/client-photos/site-corridor-concrete-truck.png" alt="Construction corridor with concrete truck and high-rise structures" fill />
          </div>
          <div>
            <span>Design-build</span>
            <h3>Design-Build Multi-Storey Complex</h3>
            <p>Concept coordination, design translation, structural framing, and turnkey delivery.</p>
            <Link className="text-link" href="/projects/design-build-complex">View details</Link>
          </div>
        </article>
        <article className="overview-card">
          <div className="overview-card-image">
            <Image src="/assets/client-photos/rebar-safety-crew.png" alt="Construction crew installing rebar on site" fill />
          </div>
          <div>
            <span>Completed build</span>
            <h3>Institutional Building Completion</h3>
            <p>Exterior quality, site presentation, circulation, and durable public-use environments.</p>
            <Link className="text-link" href="/projects/institutional-building">View details</Link>
          </div>
        </article>
      </div>
      <button className="slider-control next" type="button" aria-label="Next projects" data-slider-next ref={nextRef}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>
      </button>
    </div>
  );
}
