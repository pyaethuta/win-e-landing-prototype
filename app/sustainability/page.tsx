import Image from 'next/image';

export const metadata = {
  title: 'Sustainability | Win Everest Construction Company Limited',
  description: 'Win Everest environmental sustainability commitments for construction projects.',
};

export default function Sustainability() {
  return (
    <>
      <section className="page-hero compact green sustainability-banner">
        <div>
          <p className="eyebrow">Environmental Sustainability</p>
          <h1>Minimizing environmental impact on every construction project.</h1>
          <p>Win Everest aims to reduce worksite impact through material reuse, responsible disposal, logistics control, water management, and collaboration with authorities and partners.</p>
        </div>
        <Image
          src="/assets/banners/sustainability-banner.png"
          alt="Construction cranes beside green landscaping and modern buildings"
          width={800}
          height={600}
        />
      </section>

      <section className="process-strip green-strip">
        <article><strong>01</strong><h3>Reuse Materials</h3><p>Prioritize recyclable construction materials such as timber, steel, structural wood, and bamboo whenever possible.</p></article>
        <article><strong>02</strong><h3>Control Waste</h3><p>Dispose of unnecessary worksite materials in coordination with relevant departments. Open burning is prohibited.</p></article>
        <article><strong>03</strong><h3>Optimize Logistics</h3><p>Manage transport and delivery activity to reduce unnecessary fuel consumption and exhaust emissions.</p></article>
        <article><strong>04</strong><h3>Protect Resources</h3><p>Manage water usage and protect nearby crops, vegetation, agricultural land, streams, and water resources.</p></article>
      </section>

      <section className="two-column-copy">
        <div>
          <p className="eyebrow">Implementation</p>
          <h2>Practical worksite measures</h2>
        </div>
        <div className="rich-copy">
          <p>During construction, the company plans for lower environmental impact through noise control, sound-absorbing measures where appropriate, careful disposal, reduced vehicle movement, and responsible management of natural resources.</p>
          <p>Where trees or plants are affected by a worksite, relocation and replanting are preferred. If cutting is unavoidable, replacement planting with fast-growing, environmentally beneficial trees is part of the mitigation approach.</p>
          <p>Collaboration with government authorities, relevant organizations, and partner companies supports compliance, awareness, training, and responsible site operation.</p>
        </div>
      </section>

      <section className="capability-band green-soft">
        <div>
          <p className="eyebrow">Environmental Commitments</p>
          <h2>Practical controls for cleaner, more responsible construction sites.</h2>
        </div>
        <div className="capability-list">
          <article><h3>Design Decisions</h3><p>Prioritize buildings and systems that reduce unnecessary energy use, including natural light, efficient plumbing, and responsible drainage.</p></article>
          <article><h3>Site Protection</h3><p>Prevent excessive excavation, careless disposal, open burning, and unnecessary damage to crops, vegetation, streams, and nearby land.</p></article>
          <article><h3>Green Handover</h3><p>Begin shade-tree planning early where possible so completed projects support a more pleasant surrounding environment.</p></article>
        </div>
      </section>
    </>
  );
}
