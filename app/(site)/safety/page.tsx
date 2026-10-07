import Image from 'next/image';

export const metadata = {
  title: 'Safety | Win Everest Construction Company Limited',
  description: 'Win Everest safety rules, worksite controls, prohibited actions, and method statement practices.',
};

export default function Safety() {
  return (
    <>
      <section className="page-hero compact">
        <div>
          <p className="eyebrow">Safety First</p>
          <h1>Worksite rules that protect people, property, and progress.</h1>
          <p>Safety is handled through meetings, PPE rules, signboards, supervised electrical work, fire protection, and controlled site behavior.</p>
        </div>
        <Image
          src="/assets/client-photos/rebar-safety-crew.png"
          alt="Workers using safety gear on a construction site"
          width={800}
          height={600}
        />
      </section>

      <section className="content-grid">
        <aside className="sticky-note danger">
          <strong>Safety Priorities</strong>
          <span>Attendance at safety meetings</span>
          <span>Directional and emergency signage</span>
          <span>Hard hats, belts, goggles, gloves</span>
          <span>Fire extinguishers available on site</span>
        </aside>
        <div className="rich-copy">
          <h2>Rules to Follow</h2>
          <div className="info-cards">
            <article><h3>PPE Requirements</h3><p>Anyone entering the worksite must wear hard hats and safety belts where required. Safety goggles and gloves are required when welding, grinding, or cutting.</p></article>
            <article><h3>Worksite Direction</h3><p>Directional signboards and emergency exit signs are placed to guide movement and support emergency response.</p></article>
            <article><h3>Fire Safety</h3><p>Fire extinguishers must be provided and kept readily available, especially around welding, cutting, and spark-producing work.</p></article>
            <article><h3>Electrical Supervision</h3><p>Temporary and permanent electrical wiring tasks are performed only under the supervision of skilled technicians.</p></article>
          </div>

          <h2>Prohibited Actions</h2>
          <ul className="rule-list">
            <li>Do not perform welding or grinding without designated safety goggles and gloves.</li>
            <li>Do not work at heights of 2 meters and above without wearing a safety belt.</li>
            <li>Do not move or remove protective barriers and guards without permission.</li>
            <li>Do not throw materials or objects down from heights.</li>
            <li>Do not install or use temporary electrical wiring without proper authorization.</li>
            <li>Do not tamper with fire extinguishers, directional signboards, or warning notices.</li>
          </ul>

          <h2>Method Statement Controls</h2>
          <p>The project manager manages construction operations step by step according to project scope, technical specification, site condition, and authorized procedures. The objective is to maintain continuity, reduce risk, and keep the site team aligned.</p>

          <h2>Site Control System</h2>
          <div className="info-cards">
            <article><h3>Daily Awareness</h3><p>Safety meetings and site briefings keep workers aware of hazards, work zones, equipment movement, and required precautions.</p></article>
            <article><h3>Controlled Access</h3><p>Signboards, emergency exits, barriers, and worksite directions help keep movement predictable and reduce avoidable risk.</p></article>
            <article><h3>Technical Supervision</h3><p>Electrical, welding, cutting, and height-related activities are managed with supervision, protective equipment, and permission controls.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
