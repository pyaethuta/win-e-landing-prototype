import Image from 'next/image';

export const metadata = {
  title: 'Services | Win Everest Construction Company Limited',
  description: 'Construction, civil engineering, infrastructure development, project management, renovation, remodeling, and equipment rental services by Win Everest.',
};

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Our Services</p>
          <h1>Complete support from planning and foundations to handover.</h1>
          <p>Win Everest combines construction execution with project leadership, technical coordination, equipment support, and material supply.</p>
        </div>
        <Image
          src="/assets/client-photos/site-corridor-concrete-truck.png"
          alt="Large construction site with concrete truck"
          width={800}
          height={600}
        />
      </section>

      <section className="service-page-grid">
        <article data-index="01">
          <span>01</span>
          <h2>Building Construction</h2>
          <p>Commercial, residential, institutional, and multi-story building construction with quality craftsmanship from foundation to finish.</p>
          <ul>
            <li>RCC and steel structure work</li>
            <li>Commercial and institutional buildings</li>
            <li>Final exterior and interior completion</li>
          </ul>
        </article>
        <article data-index="02">
          <span>02</span>
          <h2>Civil Engineering</h2>
          <p>Engineering solutions for complex projects where structural integrity, planning, and coordination are essential.</p>
          <ul>
            <li>Groundwork and structural preparation</li>
            <li>Reinforced steel and concrete systems</li>
            <li>Inspection and quality control support</li>
          </ul>
        </article>
        <article data-index="03">
          <span>03</span>
          <h2>Infrastructure Development</h2>
          <p>Infrastructure work that supports progress and connectivity, including roads, bridges, utilities, and related site systems.</p>
          <ul>
            <li>Road-related construction</li>
            <li>Utilities and civil support works</li>
            <li>Site access and logistics coordination</li>
          </ul>
        </article>
        <article data-index="04">
          <span>04</span>
          <h2>Project Management</h2>
          <p>End-to-end leadership to coordinate timelines, budgets, materials, manpower, subcontractors, and technical requirements.</p>
          <ul>
            <li>Single point of contact</li>
            <li>Design-to-completion continuity</li>
            <li>Progress reporting and site control</li>
          </ul>
        </article>
        <article data-index="05">
          <span>05</span>
          <h2>Renovation & Remodeling</h2>
          <p>Transforming existing spaces through practical renovation, modernization, and remodeling that improves value and function.</p>
          <ul>
            <li>Existing building upgrades</li>
            <li>Interior and exterior improvements</li>
            <li>Functional layout adjustments</li>
          </ul>
        </article>
        <article data-index="06">
          <span>06</span>
          <h2>Equipment Rental</h2>
          <p>Top-tier, well-maintained construction equipment support for efficient and safe execution.</p>
          <ul>
            <li>Heavy machinery support</li>
            <li>Site equipment coordination</li>
            <li>Efficient project execution</li>
          </ul>
        </article>
      </section>

      <section className="capability-band">
        <div>
          <p className="eyebrow">How Services Work Together</p>
          <h2>One construction partner across planning, execution, control, and support.</h2>
        </div>
        <div className="capability-list">
          <article><h3>Before Construction</h3><p>Site survey confirmation, logistics review, project sequencing, procurement planning, equipment needs, and worksite preparation.</p></article>
          <article><h3>During Construction</h3><p>Structural work, RCC and steel execution, rebar, concrete, masonry, scaffolding, supervision, safety control, and material movement.</p></article>
          <article><h3>Through Completion</h3><p>Finishing, quality checks, environmental housekeeping, handover readiness, progress documentation, and client communication.</p></article>
        </div>
      </section>

      <section className="delivery-matrix">
        <div>
          <p className="eyebrow">Service Standards</p>
          <h2>Designed for dependable project delivery.</h2>
        </div>
        <div className="matrix-grid">
          <article><span>01</span><h3>Cost Awareness</h3><p>Competitive procurement and practical planning help keep work aligned with budget expectations.</p></article>
          <article><span>02</span><h3>Safe Conditions</h3><p>Worksites are managed around PPE, signage, controlled access, fire readiness, and supervised technical tasks.</p></article>
          <article><span>03</span><h3>Quality Work</h3><p>Materials, workmanship, structural integrity, and inspection routines are treated as core delivery responsibilities.</p></article>
          <article><span>04</span><h3>Reasonable Time Frame</h3><p>Project leadership coordinates manpower, materials, and sequencing to protect progress and completion goals.</p></article>
        </div>
      </section>
    </>
  );
}
