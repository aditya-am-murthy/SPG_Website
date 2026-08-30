import './Publications.css';

const pubs = [
  {
    type: 'Policy Brief',
    title: 'Air Quality Monitoring Gaps in Southern California: Recommendations for Equitable Sensor Deployment',
    authors: 'SPG Research Team',
    year: '2023',
    link: '#',
  },
  {
    type: 'Blog Post',
    title: 'What Scientists Need to Know About the California Budget Process',
    authors: 'Priya N., Marcus W.',
    year: '2023',
    link: '#',
  },
  {
    type: 'Infographic',
    title: 'How a Bill Becomes a Science Policy in California',
    authors: 'SPG Communications Team',
    year: '2022',
    link: '#',
  },
  {
    type: 'Policy Memo',
    title: 'Strengthening Lead Pipe Replacement Timelines: A Local Government Toolkit',
    authors: 'Jordan K., Amara L.',
    year: '2022',
    link: '#',
  },
];

const typeColors = {
  'Policy Brief': { bg: 'var(--ucla-blue-lt)', color: 'var(--ucla-blue)' },
  'Blog Post':    { bg: '#e2f4f3', color: '#1D7B74' },
  'Infographic':  { bg: 'var(--gold-lt)', color: 'var(--gold-dk)' },
  'Policy Memo':  { bg: '#f0eef8', color: '#6B52AE' },
};

export default function Publications() {
  return (
    <section id="publications" className="section publications-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Publications &amp; Resources</span>
          <h2 className="serif programs-heading">Student-produced knowledge</h2>
          <p className="programs-sub">
            Policy briefs, memos, infographics, and essays written by SPG members
            and made freely available to the public.
          </p>
        </div>

        <div className="pubs-list">
          {pubs.map(p => {
            const c = typeColors[p.type] || { bg: '#eee', color: '#333' };
            return (
              <a key={p.title} href={p.link} className="pub-row card">
                <span className="pub-type" style={{ background: c.bg, color: c.color }}>{p.type}</span>
                <div className="pub-info">
                  <h3 className="pub-title">{p.title}</h3>
                  <span className="pub-authors">{p.authors} · {p.year}</span>
                </div>
                <span className="pub-arrow">→</span>
              </a>
            );
          })}
        </div>

        <div className="pubs-cta">
          <p className="text-muted">More resources available to SPG members on our shared drive.</p>
          <a href="#join" className="btn btn-outline" style={{marginTop: '12px', display: 'inline-flex'}}>Join to Access All Resources</a>
        </div>
      </div>
    </section>
  );
}
