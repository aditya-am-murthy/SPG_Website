import { Link } from 'react-router-dom';
import { projects, projectYears, areaColors, areaBgs } from './workData';
import WorkTabs from '../components/WorkTabs';
import './Projects.css';
import './Work.css';

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.65)' }}>Past Work</span>
          <h1 className="serif page-hero-title">Projects that moved the needle</h1>
          <p className="page-hero-sub">
            Advocacy, outreach, panels, and publications — a record of what SPG members
            have produced and delivered since 2018.
          </p>
        </div>
      </div>

      <div className="projects-body">
        <div className="container">
          <WorkTabs />
          {projectYears.map(year => (
            <div key={year} className="projects-year-block">
              <div className="projects-year-label serif">{year}</div>
              <div className="projects-year-items">
                {projects.filter(p => p.year === year).map(p => (
                  <article key={p.slug} className="project-item card">
                    {p.img && (
                      <Link to={`/projects/${p.slug}`} className="project-item-img-wrap">
                        <img src={p.img} alt="" className="project-item-img" loading="lazy" />
                      </Link>
                    )}
                    <div className="project-item-copy">
                      <div className="project-item-header">
                        <span className="project-item-area"
                          style={{ background: areaBgs[p.areaColor], color: areaColors[p.areaColor] }}>
                          {p.area}
                        </span>
                        <span className="project-item-date">{p.dateLabel}</span>
                      </div>
                      <h3 className="project-item-title">
                        <Link to={`/projects/${p.slug}`}>{p.title}</Link>
                      </h3>
                      <p className="project-item-desc">{p.description}</p>
                      {p.outcome && (
                        <div className="project-outcome">
                          <span className="project-outcome-label">Outcome</span>
                          <p className="project-outcome-text">{p.outcome}</p>
                        </div>
                      )}
                      <div className="project-item-links">
                        <Link to={`/projects/${p.slug}`} className="work-read-link">Read more →</Link>
                        {p.link && (
                          <a href={p.link.href} className="work-read-link" target="_blank" rel="noopener noreferrer">
                            {p.link.label} →
                          </a>
                        )}
                      </div>
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
