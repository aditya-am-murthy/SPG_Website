import { Link } from 'react-router-dom';
import './Footer.css';

const cols = [
  {
    heading: 'Organization',
    links: [
      { label: 'About SPG',   to: '/about' },
      { label: 'Leadership',  to: '/leadership' },
      { label: 'Programs',    to: '/programs' },
    ],
  },
  {
    heading: 'Our Work',
    links: [
      { label: 'Past Projects', to: '/projects' },
      { label: 'Blog & Articles', to: '/blog' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Get Involved', to: '/get-involved' },
      { label: 'Contact',      to: '/contact' },
      { label: 'Instagram',    href: 'https://www.instagram.com/scipolucla' },
      { label: 'LinkedIn',     href: 'https://www.linkedin.com/company/science-policy-group-ucla' },
      { label: 'Email Us',     href: 'mailto:scipolucla@gmail.com' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-mark serif">SPG</div>
          <div className="footer-brand-name">Science Policy Group at UCLA</div>
          <p className="footer-brand-desc">
            A non-partisan, student-led organization bridging science and public policy
            at the University of California, Los Angeles. Founded 2018.
          </p>
          <div className="footer-brand-np">Non-Partisan · Student-Led · Open to All Disciplines</div>
        </div>
        {cols.map(col => (
          <div key={col.heading} className="footer-col">
            <div className="footer-col-head">{col.heading}</div>
            <ul className="footer-col-links">
              {col.links.map(l => (
                <li key={l.label}>
                  {l.to
                    ? <Link to={l.to} className="footer-link">{l.label}</Link>
                    : <a href={l.href} className="footer-link" target="_blank" rel="noopener noreferrer">{l.label}</a>
                  }
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Science Policy Group at UCLA. All rights reserved.</span>
          <span className="footer-email">
            <a href="mailto:scipolucla@gmail.com" className="footer-link">scipolucla@gmail.com</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
