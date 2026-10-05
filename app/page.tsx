import Link from 'next/link';
import Image from 'next/image';
import ProjectSlider from '@/components/ProjectSlider';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image-container">
          <Image
            className="hero-image home-banner-image"
            src="/assets/banners/home-banner-enhanced.png"
            alt="Shwedagon Pagoda and the Yangon skyline under a clear blue sky"
            width={1920}
            height={1080}
            priority
          />
        </div>
        <div className="hero-panel">
          <p className="eyebrow">Established 2017 / Myanmar</p>
          <h1>Building trusted places for partners, clients, and communities.</h1>
          <p>Win Everest Construction Company Limited delivers construction, project management, site coordination, and material support for durable places across Myanmar.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/projects">Explore Projects</Link>
            <Link className="button ghost" href="/contact">Start an Enquiry</Link>
          </div>
        </div>
        <div className="hero-stat">
          <strong>Reaching Everest heights together.</strong>
          <span>Company promise</span>
        </div>
      </section>

      <section className="metric-bar" aria-label="Company highlights">
        <article><strong>2017</strong><span>Established</span></article>
        <article><strong>6+</strong><span>Service categories</span></article>
        <article><strong>RCC / Steel</strong><span>Construction capability</span></article>
        <article><strong>Yangon</strong><span>Head office</span></article>
      </section>

      <section className="pathway-section" aria-label="Company information paths">
        <div className="section-label">
          <span>Company information source</span>
          <strong>Start with what matters to your decision.</strong>
        </div>
        <div className="pathway-grid">
          <Link href="/about">
            <span>01</span>
            <h2>Company Credibility</h2>
            <p>History, leadership message, vision, mission, values, office details, and operating approach.</p>
          </Link>
          <Link href="/services">
            <span>02</span>
            <h2>Service Scope</h2>
            <p>Building construction, civil engineering, infrastructure, management, renovation, and equipment support.</p>
          </Link>
          <Link href="/projects">
            <span>03</span>
            <h2>Proof of Work</h2>
            <p>Foundations, rebar, multi-story execution, university projects, and completed institutional buildings.</p>
          </Link>
          <Link href="/safety">
            <span>04</span>
            <h2>Site Standards</h2>
            <p>Safety rules, prohibited actions, method statement controls, and environmental commitments.</p>
          </Link>
        </div>
      </section>

      <section className="intro-grid">
        <div>
          <p className="eyebrow">Company Profile</p>
          <h2>A trusted construction partner for institutional, commercial, and infrastructure work.</h2>
        </div>
        <div className="copy-stack">
          <p>Win Everest Construction Company has grown as a construction partner with experience across site preparation, structural foundations, large-scale building execution, project management, and completed institutional buildings.</p>
          <p>The website is organized as a company information source. Each area has its own page so clients can review background, services, projects, safety practices, environmental commitments, company updates, and contact details clearly.</p>
        </div>
      </section>

      <section className="project-overview" aria-label="Selected project overview">
        <div className="project-overview-head">
          <div>
            <p className="eyebrow">Project Overview</p>
            <h2>Selected work across campuses, foundations, and building delivery.</h2>
          </div>
          <Link className="button secondary" href="/projects">See All Projects</Link>
        </div>
        <ProjectSlider />
      </section>

      <section className="confidence-section">
        <div>
          <p className="eyebrow">Partner Confidence</p>
          <h2>Built for clients who need clarity before they commit.</h2>
          <p>Win Everest's company information is organized for practical review: what the company does, how work is controlled, which projects demonstrate experience, and what standards guide safety and environmental responsibility.</p>
        </div>
        <div className="confidence-grid">
          <article><strong>01</strong><h3>Clear capability</h3><p>Services are separated by construction, civil engineering, infrastructure, management, renovation, equipment, and trading support.</p></article>
          <article><strong>02</strong><h3>Visible proof</h3><p>Project pages describe scope, sector, site delivery, and the client value demonstrated by each project type.</p></article>
          <article><strong>03</strong><h3>Operational standards</h3><p>Safety, method statement controls, environmental measures, and site discipline are documented for partner confidence.</p></article>
        </div>
      </section>

      <section className="feature-grid">
        <Link className="feature-card large" href="/services">
          <div className="feature-card-image">
            <Image src="/assets/client-photos/site-corridor-concrete-truck.png" alt="Design and build construction progress" fill />
          </div>
          <span>Services</span>
          <h3 style={{ color: '#fff' }}>From design and build to project management.</h3>
        </Link>
        <Link className="feature-card" href="/projects">
          <div className="feature-card-image">
            <Image src="/assets/client-photos/foundation-rebar-detail.png" alt="Foundation construction work" fill />
          </div>
          <span>Projects</span>
          <h3 style={{ color: '#fff' }}>Strong foundations and completed buildings.</h3>
        </Link>
        <Link className="feature-card" href="/safety">
          <div className="feature-card-image">
            <Image src="/assets/client-photos/rebar-safety-crew.png" alt="Construction crew working safely around rebar and scaffolding" fill />
          </div>
          <span>Safety</span>
          <h3 style={{ color: '#fff' }}>Clear rules for safer worksites.</h3>
        </Link>
      </section>

      <section className="split-band">
        <Image src="/assets/client-photos/sunset-cranes-towers.png" alt="Tower cranes and building structures at sunset" width={800} height={600} />
        <div>
          <p className="eyebrow">Why Choose Us</p>
          <h2>Experience, quality control, safe execution, and client satisfaction.</h2>
          <div className="point-list">
            <article><h3>Experience & Expertise</h3><p>Engineers, architects, builders, and site teams work across residential, commercial, institutional, and infrastructure-related projects.</p></article>
            <article><h3>Quality & Safety</h3><p>Structural integrity, workforce well-being, durable materials, and quality control are treated as daily operating requirements.</p></article>
            <article><h3>Innovation & Technology</h3><p>Modern building techniques, BIM-informed coordination, and sustainable practices help reduce waste and improve project efficiency.</p></article>
            <article><h3>Client Satisfaction</h3><p>Transparent communication, schedule discipline, and budget awareness support long-term relationships based on trust.</p></article>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div>
          <p className="eyebrow">Ready to discuss a project?</p>
          <h2>Build with a team that manages the details from ground preparation to completion.</h2>
        </div>
        <Link className="button primary" href="/contact">Contact Win Everest</Link>
      </section>
    </>
  );
}
