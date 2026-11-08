import { Link, useLocation } from 'react-router-dom';
import './WorkTabs.css';

export default function WorkTabs() {
  const { pathname } = useLocation();
  const onInterviews = pathname.startsWith('/projects/interviews');
  const onProjects = pathname.startsWith('/projects') && !onInterviews;

  return (
    <div className="work-tabs">
      <Link to="/projects" className={`work-tab${onProjects ? ' active' : ''}`}>
        Past Projects
      </Link>
      <Link to="/projects/interviews" className={`work-tab${onInterviews ? ' active' : ''}`}>
        Interviews
      </Link>
    </div>
  );
}
