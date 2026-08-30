import './Projects.css';

const projects = [
  {
    year: '2024',
    area: 'Science Advocacy',
    areaColor: 'blue',
    title: 'Wildfire Smoke & Pediatric Asthma: A Policy Brief for LA County',
    description: 'Our 2024 advocacy cohort synthesized three years of epidemiological evidence on wildfire smoke exposure and respiratory outcomes in children, then presented findings to a Los Angeles County supervisorial aide. The brief recommended expanded low-cost sensor networks in underserved ZIP codes.',
    outcome: 'Brief delivered to LA County Supervisor office. Ongoing correspondence with county public health staff.',
  },
  {
    year: '2023',
    area: 'Political Engagement',
    areaColor: 'purple',
    title: 'Meeting with Assembly Member Friedman\'s Office: Air Quality Monitoring Gaps',
    description: 'Members of our Political Engagement group prepared a science communication brief on ambient air quality monitoring density in the San Fernando Valley and met with state legislative staff to present the data and discuss proposed regulatory action.',
    outcome: 'Established ongoing contact with legislative staff. Members invited to submit written testimony.',
  },
  {
    year: '2023',
    area: 'Science Outreach',
    areaColor: 'teal',
    title: 'Explore Your Universe 2023',
    description: 'SPG ran an interactive "What is Science Policy?" booth at UCLA\'s annual public science fair, designing hands-on activities that helped visitors understand how scientific evidence enters — and often gets filtered out of — policy decisions. Over 600 visitors engaged with the booth.',
    outcome: 'Largest outreach event in SPG history. Returning for 2024 with expanded programming.',
  },
  {
    year: '2022',
    area: 'Science Advocacy',
    areaColor: 'blue',
    title: 'EV Infrastructure Equity Memo',
    description: 'Members researched the spatial distribution of electric vehicle charging infrastructure across Los Angeles, found significant disparities in low-income and high-density neighborhoods, and produced a memo with recommendations for city planners and the LA Department of Transportation.',
    outcome: 'Memo presented to LA City Council staff. Available on the SPG resources page.',
  },
  {
    year: '2022',
    area: 'Career Development',
    areaColor: 'blue',
    title: 'Science Policy Career Night — First Annual',
    description: 'SPG hosted its first Science Policy Career Night, bringing together professionals from the NSF, FDA, RAND Corporation, a Congressional office, and an environmental nonprofit. 70+ attendees joined for an evening of structured Q&A and networking.',
    outcome: 'Now an annual tradition. 2024 event drew 80+ attendees and added two new professional partners.',
  },
  {
    year: '2022',
    area: 'Science Outreach',
    areaColor: 'teal',
    title: 'UCLA Science Project Partnership — Virtual Field Trips',
    description: 'SPG members partnered with the UCLA Science Project to design and deliver virtual field trip presentations for elementary school classrooms across LA Unified, focusing on "How scientists talk to the community" and "What is peer review?"',
    outcome: '12 classroom visits completed. Partnership renewed for 2023–2024.',
  },
  {
    year: '2021',
    area: 'Science Communication',
    areaColor: 'gold',
    title: 'Demystifying CRISPR: A Three-Part Public Explainer Series',
    description: 'A writing team produced a three-part series breaking down CRISPR gene-editing technology for a general audience — covering the mechanism, the ethics, and the regulatory landscape — published on the SPG blog and shared through UCLA social media channels.',
    outcome: 'Over 4,000 combined reads. Used as a resource in two UCLA undergraduate courses.',
  },
  {
    year: '2021',
    area: 'Political Engagement',
    areaColor: 'purple',
    title: 'LAUSD Science Curriculum Review',
    description: 'Members conducted a district-level analysis of K–12 science curriculum standards in LA Unified, identifying gaps in climate science, public health, and science-society integration. Recommendations were compiled into a memo presented to LAUSD board staff.',
    outcome: 'Memo shared with board staff and three school district contacts.',
  },
];

const areaColors = {
  blue:   'var(--ucla-blue)',
  teal:   '#1D7B74',
  gold:   'var(--gold-dk)',
  purple: '#6B52AE',
};
const areaBgs = {
  blue:   'var(--ucla-blue-lt)',
  teal:   '#e2f4f3',
  gold:   'var(--gold-lt)',
  purple: '#f0eef8',
};

const years = [...new Set(projects.map(p => p.year))];

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{color:'rgba(255,255,255,.65)'}}>Past Work</span>
          <h1 className="serif page-hero-title">Projects that moved the needle</h1>
          <p className="page-hero-sub">
            A record of what SPG members have produced, presented, and delivered
            to the people who make decisions — since 2018.
          </p>
        </div>
      </div>

      <div className="projects-body">
        <div className="container">
          {years.map(year => (
            <div key={year} className="projects-year-block">
              <div className="projects-year-label serif">{year}</div>
              <div className="projects-year-items">
                {projects.filter(p => p.year === year).map(p => (
                  <article key={p.title} className="project-item card">
                    <div className="project-item-header">
                      <span className="project-item-area"
                        style={{ background: areaBgs[p.areaColor], color: areaColors[p.areaColor] }}>
                        {p.area}
                      </span>
                    </div>
                    <h3 className="project-item-title">{p.title}</h3>
                    <p className="project-item-desc">{p.description}</p>
                    <div className="project-outcome">
                      <span className="project-outcome-label">Outcome</span>
                      <p className="project-outcome-text">{p.outcome}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
