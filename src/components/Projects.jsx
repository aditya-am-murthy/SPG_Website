import './Projects.css';

const projects = [
  {
    area: 'Science Advocacy',
    areaColor: 'blue',
    title: 'Wildfire Smoke & Public Health: A Policy Brief for LA County',
    desc: 'Analyzed the evidence on wildfire smoke exposure and respiratory outcomes, then presented findings to LA County supervisorial staff during the 2023 wildfire season.',
    year: '2023',
  },
  {
    area: 'Science Communication',
    areaColor: 'gold',
    title: 'Demystifying CRISPR: Public Explainer Series',
    desc: 'A three-part series published on our blog that breaks down gene-editing technology for a general audience, covering the science, ethics, and regulatory landscape.',
    year: '2023',
  },
  {
    area: 'Political Engagement',
    areaColor: 'purple',
    title: 'LA Unified Science Curriculum Review',
    desc: 'Compiled a district-level analysis of K–12 science curriculum standards and presented recommendations to the LAUSD board to strengthen science literacy outcomes.',
    year: '2022',
  },
  {
    area: 'Science Outreach',
    areaColor: 'teal',
    title: 'Explore Your Universe 2022',
    desc: "Designed and ran an interactive \"Science & Society\" booth at UCLA's annual public science fair, reaching over 500 visitors with hands-on science policy activities.",
    year: '2022',
  },
  {
    area: 'Career Development',
    areaColor: 'blue',
    title: 'Science Policy Career Panel Series',
    desc: 'Hosted professionals from the NSF, FDA, RAND Corporation, and Congressional offices for a three-session panel exploring diverse pathways into science policy careers.',
    year: '2022',
  },
  {
    area: 'Science Advocacy',
    areaColor: 'blue',
    title: 'EV Infrastructure Equity Memo',
    desc: 'Researched disparities in electric vehicle charging infrastructure access across Los Angeles neighborhoods and produced a policy memo for city council consideration.',
    year: '2021',
  },
];

const areaColors = {
  blue:   'var(--ucla-blue)',
  teal:   '#1D7B74',
  gold:   'var(--gold)',
  purple: '#6B52AE',
};

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Past Work</span>
          <h2 className="serif programs-heading">Projects that move the needle</h2>
          <p className="programs-sub">
            Snapshots of the advocacy, communication, and outreach work SPG members
            have produced in recent years.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(p => (
            <article key={p.title} className="project-card card">
              <div className="project-meta">
                <span className="project-area" style={{ color: areaColors[p.areaColor] }}>
                  {p.area}
                </span>
                <span className="project-year">{p.year}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-bar" style={{ background: areaColors[p.areaColor] }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
