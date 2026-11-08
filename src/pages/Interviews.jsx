import { Link } from 'react-router-dom';
import { interviews } from './interviewData';
import WorkTabs from '../components/WorkTabs';
import './Projects.css';
import './Work.css';

export default function Interviews() {
  return (
    <div className="projects-page">
      <div className="page-hero work-list-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.65)' }}>Past Work</span>
          <h1 className="serif page-hero-title">Alumni interviews</h1>
          <p className="page-hero-sub">
            Conversations with SPG alumni about fellowships, life after UCLA,
            and what it actually takes to move from the lab into policy.
          </p>
        </div>
      </div>

      <div className="projects-body">
        <div className="container">
          <WorkTabs />
          <div className="interview-grid">
            {interviews.map(person => (
              <Link key={person.slug} to={`/projects/interviews/${person.slug}`} className="interview-card card">
                {person.img && (
                  <div className="interview-card-img-wrap">
                    <img src={person.img} alt={person.name} className="interview-card-img" />
                  </div>
                )}
                <div className="interview-card-body">
                  <span className="interview-card-date">{person.dateLabel}</span>
                  <h2 className="serif interview-card-name">{person.name}</h2>
                  <p className="interview-card-role">{person.role}</p>
                  <p className="interview-card-excerpt">{person.excerpt}</p>
                  <span className="work-read-link">Read the interview →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
