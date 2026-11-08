import { useParams, Link } from 'react-router-dom';
import { interviews } from './interviewData';
import WorkTabs from '../components/WorkTabs';
import WorkBody from '../components/WorkBody';
import './Work.css';

export default function InterviewPost() {
  const { slug } = useParams();
  const person = interviews.find(p => p.slug === slug);

  if (!person) {
    return (
      <div className="work-article-page">
        <div className="page-hero">
          <div className="container">
            <h1 className="serif page-hero-title">Interview not found</h1>
          </div>
        </div>
        <div className="container" style={{ padding: '80px 0' }}>
          <p>This interview doesn’t exist. <Link to="/projects/interviews" style={{ color: 'var(--ucla-blue)' }}>← Back to interviews</Link></p>
        </div>
      </div>
    );
  }

  return (
    <div className="work-article-page">
      <div className="bp-hero">
        {(person.awardImg || person.img) && (
          <div className="bp-hero-img-wrap">
            <img src={person.awardImg || person.img} alt="" className="bp-hero-img" />
            <div className="bp-hero-img-overlay" />
          </div>
        )}
        <div className="container bp-hero-content">
          <Link to="/projects/interviews" className="bp-back">← Interviews</Link>
          <div className="bp-meta">
            <span className="project-item-area" style={{ background: 'var(--ucla-blue-lt)', color: 'var(--ucla-blue)' }}>
              Interview
            </span>
            <span className="bp-date">{person.dateLabel}</span>
          </div>
          <h1 className="serif bp-title">{person.name}</h1>
          <div className="bp-byline">{person.role}</div>
        </div>
      </div>

      <div className="container bp-body">
        <WorkTabs />
        {person.img && (
          <img src={person.img} alt={person.name} className="work-portrait" />
        )}
        <WorkBody blocks={person.body} />
        <div className="bp-footer">
          <Link to="/projects/interviews" className="btn btn-outline">← All Interviews</Link>
        </div>
      </div>
    </div>
  );
}
