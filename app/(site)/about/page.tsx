import Image from 'next/image';

export const metadata = {
  title: 'About | Win Everest Construction Company Limited',
  description: 'About Win Everest Construction Company Limited, its history, vision, mission, values, leadership, and company information.',
};

export default function About() {
  return (
    <>
      <section className="page-hero compact">
        <div>
          <p className="eyebrow">About Win Everest</p>
          <h1>Established in 2017 and built around trust, safety, and delivery.</h1>
        </div>
        <Image
          src="/assets/client-photos/win-everest-site-wide.png"
          alt="Win Everest construction structure in progress"
          width={800}
          height={600}
        />
      </section>

      <section className="content-grid">
        <aside className="sticky-note">
          <strong>Company Snapshot</strong>
          <span>Win Everest Construction Company Limited</span>
          <span>Established: 2017</span>
          <span>Office: Diamond Condo, Pyay Road, Kamayut Township, Yangon</span>
          <span>Phone: +95 95020323</span>
        </aside>
        <div className="rich-copy">
          <h2>Company Background</h2>
          <p>Win Everest Construction Company has emerged as a growing name in Myanmar's construction industry with a history of delivering projects through engineering discipline, site coordination, and client-focused project management.</p>
          <p>The company has played a role in shaping cities and communities through institutional, commercial, residential, infrastructure, and support-service projects. Its work includes site preparation, structural foundations, RCC and steel construction, building completion, and related material supply.</p>

          <h2>Vision, Mission, and Values</h2>
          <div className="info-cards">
            <article><h3>Vision</h3><p>To be a respectable building contractor delivering beyond expectation, always.</p></article>
            <article><h3>Mission</h3><p>To procure projects at competitive pricing, provide safe working conditions, and deliver quality work within a reasonable time frame.</p></article>
            <article><h3>Values</h3><p>To provide clients with an "I am assured" experience through clear communication and follow-through procedures that keep client objectives as the priority.</p></article>
          </div>

          <h2>Leadership Message</h2>
          <blockquote className="quote-card">
            <p>Since our inception, we have been dedicated to delivering high-quality, innovative construction solutions. Our experienced professionals are committed to exceeding client expectations on every project, whether residential, commercial, or infrastructure.</p>
            <cite>Ms. Su Su Hlaing, Managing Director</cite>
          </blockquote>

          <h2>Operating Approach</h2>
          <p>Win Everest assigns project leadership to manage work throughout design, construction, and defect-liability stages. This gives clients continuity and a single point of contact from project commencement through completion.</p>

          <h2>What Clients Can Expect</h2>
          <div className="info-cards">
            <article><h3>Continuity</h3><p>A project manager stays connected from commencement through completion so decisions do not become fragmented.</p></article>
            <article><h3>Documentation</h3><p>Contract documents, bookkeeping, finance, and progress records support accountable project delivery.</p></article>
            <article><h3>Site Discipline</h3><p>Foremen, engineers, supervisors, and skilled workers coordinate daily activity around safety rules and technical requirements.</p></article>
          </div>
        </div>
      </section>

      <section className="organization-section" aria-labelledby="organization-title">
        <div className="organization-intro">
          <div>
            <p className="eyebrow">Company Structure</p>
            <h2 id="organization-title">Clear leadership. Connected delivery.</h2>
          </div>
          <p>Our structure keeps corporate oversight, project administration, engineering, and site operations connected from the boardroom to the worksite.</p>
        </div>

        <div className="organization-grid">
          <article className="org-panel org-panel--corporate">
            <header className="org-panel__header">
              <span className="org-panel__number">01</span>
              <div><p>Corporate Governance</p><h3>Leadership &amp; Administration</h3></div>
            </header>
            <div className="org-chart-scroll" tabIndex={0} aria-label="Corporate governance organization chart. Scroll horizontally on smaller screens.">
              <div className="org-tree org-tree--corporate">
                <div className="org-level org-level--single"><div className="org-node org-node--primary">Shareholders</div></div>
                <div className="org-connector" aria-hidden="true"></div>
                <div className="org-level org-level--single"><div className="org-node org-node--primary">Board of Directors</div></div>
                <div className="org-connector" aria-hidden="true"></div>
                <div className="org-level org-level--single"><div className="org-node org-node--accent">General Administration Director</div></div>
                <div className="org-branch org-branch--two" aria-hidden="true"></div>
                <div className="org-level org-level--two">
                  <div className="org-node org-node--secondary">Assistant Organization</div>
                  <div className="org-node org-node--secondary">Advisory Organization</div>
                </div>
                <div className="org-connector" aria-hidden="true"></div>
                <div className="org-level org-level--three">
                  <div className="org-role-group">
                    <div className="org-node org-node--accent">Employment</div>
                    <ul><li>Contract Documentation</li><li>Finance &amp; Bookkeeping</li><li>Materials Management</li></ul>
                  </div>
                  <div className="org-role-group">
                    <div className="org-node org-node--accent">Projects</div>
                    <ul><li>Project Engineering</li><li>Engineers</li><li>Labor Supervision</li></ul>
                  </div>
                  <div className="org-role-group">
                    <div className="org-node org-node--accent">Mechanical</div>
                    <ul><li>Drivers</li><li>Mechanics</li><li>Equipment Support</li></ul>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="org-panel org-panel--site">
            <header className="org-panel__header">
              <span className="org-panel__number">02</span>
              <div><p>Project Delivery</p><h3>Site Operations Unit</h3></div>
            </header>
            <div className="org-chart-scroll" tabIndex={0} aria-label="Site operations organization chart. Scroll horizontally on smaller screens.">
              <div className="org-tree org-tree--site">
                <div className="org-level org-level--single"><div className="org-node org-node--primary">Operations Director</div></div>
                <div className="org-connector" aria-hidden="true"></div>
                <div className="org-level org-level--single"><div className="org-node org-node--primary">Chief Engineer</div></div>
                <div className="org-connector" aria-hidden="true"></div>
                <div className="org-level org-level--single"><div className="org-node org-node--accent">Site Engineer</div></div>
                <div className="org-branch org-branch--two" aria-hidden="true"></div>
                <div className="org-level org-level--two org-level--site">
                  <div className="org-role-group">
                    <div className="org-node org-node--secondary">Administration &amp; Finance</div>
                    <ul><li>Warehouse Supervision</li><li>Purchasing</li><li>Security &amp; Maintenance</li></ul>
                  </div>
                  <div className="org-role-group">
                    <div className="org-node org-node--secondary">Foremen</div>
                    <ul><li>Skilled Trades</li><li>General Workers</li><li>Daily Wage Teams</li></ul>
                  </div>
                </div>
              </div>
            </div>
            <footer className="org-panel__footer"><span aria-hidden="true"></span>All activities comply with site safety rules and operating procedures.</footer>
          </article>
        </div>
      </section>
    </>
  );
}
