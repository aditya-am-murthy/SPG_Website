import { useParams, Link } from 'react-router-dom';
import { projects, areaColors, areaBgs } from './workData';
import WorkTabs from '../components/WorkTabs';
import WorkBody from '../components/WorkBody';
import './Projects.css';
import './Work.css';

export default function ProjectPost() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="work-article-page">
        <div className="page-hero">
          <div className="container">
            <h1 className="serif page-hero-title">Project not found</h1>
          </div>
        </div>
        <div className="container" style={{ padding: '80px 0' }}>
          <p>This project doesn’t exist. <Link to="/projects" style={{ color: 'var(--ucla-blue)' }}>← Back to past work</Link></p>
        </div>
      </div>
    );
  }

  const related = projects.filter(p => p.slug !== project.slug && p.img).slice(0, 2);

  return (
    <div className="work-article-page">
      <div className="bp-hero">
        {project.img && (
          <div className="bp-hero-img-wrap">
            <img src={project.img} alt="" className="bp-hero-img" />
            <div className="bp-hero-img-overlay" />
          </div>
        )}
        <div className="container bp-hero-content">
          <Link to="/projects" className="bp-back">← Past Projects</Link>
          <div className="bp-meta">
            <span className="project-item-area"
              style={{ background: areaBgs[project.areaColor], color: areaColors[project.areaColor] }}>
              {project.area}
            </span>
            <span className="bp-date">{project.dateLabel}</span>
          </div>
          <h1 className="serif bp-title">{project.title}</h1>
        </div>
      </div>

      <div className="container bp-body">
        <WorkTabs />
        {project.body
          ? <WorkBody blocks={project.body} />
          : <p className="work-p">{project.description}</p>}

        {project.gallery?.length > 0 && (
          <div className="work-gallery">
            {project.gallery.map(src => (
              <img key={src} src={src} alt="" loading="lazy" />
            ))}
          </div>
        )}

        {project.link && (
          <p className="work-p">
            <a href={project.link.href} className="work-read-link" target="_blank" rel="noopener noreferrer">
              {project.link.label} →
            </a>
          </p>
        )}

        {project.outcome && (
          <div className="project-outcome work-outcome">
            <span className="project-outcome-label">Outcome</span>
            <p className="project-outcome-text">{project.outcome}</p>
          </div>
        )}

        <div className="bp-footer">
          <Link to="/projects" className="btn btn-outline">← All Projects</Link>
          {related.length > 0 && (
            <div className="bp-related">
              {related.map(p => (
                <Link key={p.slug} to={`/projects/${p.slug}`} className="bp-related-card card">
                  {p.img && <img src={p.img} alt="" className="bp-related-img" loading="lazy" />}
                  <div className="bp-related-body">
                    <span className="project-item-area"
                      style={{ background: areaBgs[p.areaColor], color: areaColors[p.areaColor] }}>
                      {p.area}
                    </span>
                    <div className="bp-related-title">{p.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
