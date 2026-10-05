import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Articles & Events | Win Everest Construction Company Limited',
  description: 'Company articles, events, project updates, safety posts, and community highlights from Win Everest Construction Company Limited.',
};

export default function Articles() {
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

      <section className="article-feature">
        <div>
          <p className="eyebrow">Featured Update</p>
          <h2>Staff Party 2026</h2>
          <p>A company event page can highlight internal milestones, staff appreciation moments, team culture, and leadership messages without mixing them into the project portfolio.</p>
          <Link className="text-link" href="/contact">Share an update</Link>
        </div>
        <div className="feature-note">
          <span>Company event</span>
          <strong>Culture, recognition, and team connection</strong>
          <p>Ideal for event recaps, photo galleries, announcements, and partner-facing company moments.</p>
        </div>
      </section>

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
          <article className="article-card">
            <div className="article-card-image">
              <Image src="/assets/client-photos/highrise-crane-vertical.png" alt="High-rise construction site progress" fill />
            </div>
            <div>
              <span>Project update</span>
              <h2>Site progress notes</h2>
              <p>Publish progress stories that explain what stage the work has reached, what teams are coordinating, and what partners should know next.</p>
              <Link className="text-link" href="/projects">Related projects</Link>
            </div>
          </article>

          <article className="article-card">
            <div className="article-card-image">
              <Image src="/assets/client-photos/foundation-rebar-detail.png" alt="Foundation construction work" fill />
            </div>
            <div>
              <span>Technical post</span>
              <h2>Foundation and rebar highlights</h2>
              <p>Use article posts to explain ground preparation, formwork, concrete pouring, and structural quality checks in a client-friendly way.</p>
              <Link className="text-link" href="/projects/foundation-rebar-works">View example</Link>
            </div>
          </article>

          <article className="article-card">
            <div className="article-card-image">
              <Image src="/assets/client-photos/rebar-safety-crew.png" alt="Construction site crew with safety equipment" fill />
            </div>
            <div>
              <span>Safety post</span>
              <h2>Worksite safety reminders</h2>
              <p>Highlight PPE rules, prohibited actions, emergency readiness, and practical site discipline for teams and visitors.</p>
              <Link className="text-link" href="/safety">Safety page</Link>
            </div>
          </article>

          <article className="article-card">
            <div className="article-card-image">
              <Image src="/assets/client-photos/win-everest-site-wide.png" alt="Win Everest construction site structure" fill />
            </div>
            <div>
              <span>Community</span>
              <h2>Completed work and handover stories</h2>
              <p>Showcase completed spaces, handover moments, usability improvements, and the practical value created for campuses or communities.</p>
              <Link className="text-link" href="/projects">See portfolio</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
