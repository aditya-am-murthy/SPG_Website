import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Nav.css';

const links = [
  { label: 'About',       to: '/about' },
  { label: 'Programs',    to: '/programs' },
  { label: 'Our Work',    to: '/projects' },
  { label: 'Blog',        to: '/blog' },
  { label: 'Leadership',  to: '/leadership' },
  { label: 'Contact',     to: '/contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On page change, close mobile menu and scroll to top
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header className={`nav-header${scrolled ? ' scrolled' : ''}${transparent ? ' transparent' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="nav-brand">
          <span className="nav-brand-abbr">SPG</span>
          <span className="nav-brand-full">Science Policy Group · UCLA</span>
        </Link>

        <nav className="nav-links">
          {links.map(l => (
            <NavLink key={l.label} to={l.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/get-involved" className="btn btn-primary nav-cta">Get Involved</Link>
        </nav>

        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="nav-drawer">
          {links.map(l => (
            <NavLink key={l.label} to={l.to} className="nav-drawer-link"
              onClick={() => setMenuOpen(false)}>{l.label}</NavLink>
          ))}
          <Link to="/get-involved" className="btn btn-primary"
            onClick={() => setMenuOpen(false)}>Get Involved</Link>
        </div>
      )}
    </header>
  );
}
