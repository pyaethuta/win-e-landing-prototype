import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Projects | Win Everest Construction Company Limited',
  description: 'Project portfolio for Win Everest Construction Company Limited, including university, institutional, foundation, rebar, and design-build work.',
};

export default function Projects() {
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
        <article className="project-card featured">
          <Link href="/projects/taunggyi-education-degree-college">
            <div className="project-card-image">
              <Image src="/assets/client-photos/win-everest-site-wide.png" alt="Win Everest construction site structure" fill />
            </div>
          </Link>
          <div>
            <span className="project-type">Education campus</span>
            <h2><Link href="/projects/taunggyi-education-degree-college">Taunggyi Education Degree College</Link></h2>
            <p>Campus building work covering exterior completion, circulation areas, site coordination, and handover readiness.</p>
            <dl><div><dt>Scope</dt><dd>Building construction, finishing, site coordination</dd></div><div><dt>Focus</dt><dd>Quality completion and campus usability</dd></div></dl>
            <Link className="text-link" href="/projects/taunggyi-education-degree-college">View details</Link>
          </div>
        </article>

        <article className="project-card">
          <Link href="/projects/meiktila-university">
            <div className="project-card-image">
              <Image src="/assets/client-photos/site-corridor-concrete-truck.png" alt="Construction work and project inspection" fill />
            </div>
          </Link>
          <div>
            <span className="project-type">University work</span>
            <h2><Link href="/projects/meiktila-university">Meiktila University</Link></h2>
            <p>Structural work, scaffolding, site supervision, and completion planning for university facilities.</p>
            <Link className="text-link" href="/projects/meiktila-university">View details</Link>
          </div>
        </article>

        <article className="project-card">
          <Link href="/projects/mandalar-university">
            <div className="project-card-image">
              <Image src="/assets/client-photos/sunset-cranes-towers.png" alt="Tower cranes over high-rise construction" fill />
            </div>
          </Link>
          <div>
            <span className="project-type">Campus upgrade</span>
            <h2><Link href="/projects/mandalar-university">Mandalar University</Link></h2>
            <p>Site review, stakeholder coordination, and practical construction management for campus improvement work.</p>
            <Link className="text-link" href="/projects/mandalar-university">View details</Link>
          </div>
        </article>

        <article className="project-card">
          <Link href="/projects/meikhtilar-monetaine">
            <div className="project-card-image">
              <Image src="/assets/client-photos/rebar-safety-crew.png" alt="Construction team coordinating rebar work" fill />
            </div>
          </Link>
          <div>
            <span className="project-type">Low-rise facility</span>
            <h2><Link href="/projects/meikhtilar-monetaine">Meikhtilar Monetaine</Link></h2>
            <p>Masonry, roof work, exterior completion, inspection, and practical handover preparation.</p>
            <Link className="text-link" href="/projects/meikhtilar-monetaine">View details</Link>
          </div>
        </article>

        <article className="project-card">
          <Link href="/projects/institutional-building">
            <div className="project-card-image">
              <Image src="/assets/client-photos/win-everest-site-wide.png" alt="Institutional building construction structure" fill />
            </div>
          </Link>
          <div>
            <span className="project-type">Completed build</span>
            <h2><Link href="/projects/institutional-building">Institutional Building Completion</Link></h2>
            <p>Exterior quality, circulation planning, site presentation, and durable public-use environments.</p>
            <Link className="text-link" href="/projects/institutional-building">View details</Link>
          </div>
        </article>

        <article className="project-card">
          <Link href="/projects/foundation-rebar-works">
            <div className="project-card-image">
              <Image src="/assets/client-photos/foundation-rebar-detail.png" alt="Foundation and rebar construction work" fill />
            </div>
          </Link>
          <div>
            <span className="project-type">Foundation works</span>
            <h2><Link href="/projects/foundation-rebar-works">Foundation & Rebar Works</Link></h2>
            <p>Ground preparation, excavation, rebar installation, formwork, concrete pouring, and early quality checks.</p>
            <Link className="text-link" href="/projects/foundation-rebar-works">View details</Link>
          </div>
        </article>

        <article className="project-card">
          <Link href="/projects/design-build-complex">
            <div className="project-card-image">
              <Image src="/assets/client-photos/highrise-crane-vertical.png" alt="Design and build construction process" fill />
            </div>
          </Link>
          <div>
            <span className="project-type">Design-build</span>
            <h2><Link href="/projects/design-build-complex">Design-Build Multi-Storey Complex</Link></h2>
            <p>Concept coordination, design translation, structural framing, space planning, and turnkey delivery.</p>
            <Link className="text-link" href="/projects/design-build-complex">View details</Link>
          </div>
        </article>
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
