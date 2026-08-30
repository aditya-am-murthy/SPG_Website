import './Hero.css';

/* Inline SVG background: abstract network of nodes suggesting interdisciplinary connection */
function NetworkSVG() {
  return (
    <svg className="hero-network" viewBox="0 0 900 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Connection lines */}
      <line x1="180" y1="140" x2="420" y2="200" stroke="#2774AE" strokeWidth="1.2" strokeOpacity=".18"/>
      <line x1="420" y1="200" x2="680" y2="120" stroke="#2774AE" strokeWidth="1.2" strokeOpacity=".18"/>
      <line x1="420" y1="200" x2="540" y2="370" stroke="#2774AE" strokeWidth="1.2" strokeOpacity=".18"/>
      <line x1="540" y1="370" x2="310" y2="420" stroke="#2774AE" strokeWidth="1.2" strokeOpacity=".18"/>
      <line x1="310" y1="420" x2="180" y2="140" stroke="#2774AE" strokeWidth="1.2" strokeOpacity=".15"/>
      <line x1="680" y1="120" x2="760" y2="340" stroke="#2774AE" strokeWidth="1.2" strokeOpacity=".15"/>
      <line x1="760" y1="340" x2="540" y2="370" stroke="#2774AE" strokeWidth="1.2" strokeOpacity=".15"/>
      <line x1="80"  y1="320" x2="310" y2="420" stroke="#FFD100" strokeWidth="1" strokeOpacity=".2"/>
      <line x1="420" y1="200" x2="310" y2="420" stroke="#1D7B74" strokeWidth="1" strokeOpacity=".15"/>
      <line x1="80"  y1="320" x2="180" y2="140" stroke="#2774AE" strokeWidth="1" strokeOpacity=".12"/>
      <line x1="760" y1="340" x2="820" y2="460" stroke="#FFD100" strokeWidth="1" strokeOpacity=".15"/>
      <line x1="540" y1="370" x2="660" y2="490" stroke="#1D7B74" strokeWidth="1" strokeOpacity=".15"/>

      {/* Secondary smaller nodes */}
      <circle cx="290" cy="260" r="3" fill="#2774AE" fillOpacity=".25"/>
      <circle cx="600" cy="250" r="3" fill="#2774AE" fillOpacity=".25"/>
      <circle cx="450" cy="300" r="3" fill="#1D7B74" fillOpacity=".3"/>

      {/* Primary nodes */}
      <circle cx="180" cy="140" r="9" fill="white" stroke="#2774AE" strokeWidth="2" strokeOpacity=".5"/>
      <circle cx="420" cy="200" r="14" fill="white" stroke="#2774AE" strokeWidth="2.5" strokeOpacity=".7"/>
      <circle cx="680" cy="120" r="8" fill="white" stroke="#FFD100" strokeWidth="2" strokeOpacity=".5"/>
      <circle cx="540" cy="370" r="11" fill="white" stroke="#1D7B74" strokeWidth="2" strokeOpacity=".6"/>
      <circle cx="310" cy="420" r="9" fill="white" stroke="#2774AE" strokeWidth="2" strokeOpacity=".5"/>
      <circle cx="760" cy="340" r="10" fill="white" stroke="#FFD100" strokeWidth="2" strokeOpacity=".5"/>
      <circle cx="80"  cy="320" r="7" fill="white" stroke="#1D7B74" strokeWidth="2" strokeOpacity=".4"/>
      <circle cx="820" cy="460" r="6" fill="white" stroke="#2774AE" strokeWidth="1.5" strokeOpacity=".3"/>
      <circle cx="660" cy="490" r="6" fill="white" stroke="#1D7B74" strokeWidth="1.5" strokeOpacity=".3"/>

      {/* Subtle grid */}
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2774AE" strokeWidth=".4" strokeOpacity=".06"/>
        </pattern>
      </defs>
      <rect width="900" height="560" fill="url(#grid)"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <NetworkSVG />
      <div className="container hero-content">
        <div className="hero-tag">
          <span className="hero-dot" />
          University of California, Los Angeles
        </div>
        <h1 className="hero-title serif">
          Where Science<br/>Meets Public Policy
        </h1>
        <p className="hero-sub">
          The Science Policy Group at UCLA connects students, researchers,
          and communities to drive evidence-based solutions to society's
          most pressing challenges.
        </p>
        <div className="hero-actions">
          <a href="#join" className="btn btn-primary">Join SPG</a>
          <a href="#about" className="btn btn-ghost">Learn More</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">6</span>
            <span className="hero-stat-label">Program Areas</span>
          </div>
          <div className="hero-stat-div" />
          <div className="hero-stat">
            <span className="hero-stat-num">100+</span>
            <span className="hero-stat-label">Student Members</span>
          </div>
          <div className="hero-stat-div" />
          <div className="hero-stat">
            <span className="hero-stat-num">20+</span>
            <span className="hero-stat-label">Policy Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
