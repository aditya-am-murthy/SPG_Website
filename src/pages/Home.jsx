import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/* ─── Photo carousel ────────────────────────────── */
const CDN = 'https://images.squarespace-cdn.com/content/v1/5f5679c017299d539905d4a6/';
const carouselSlides = [
  { img: CDN + '1745790270571-RGM5KHS8W5XIQYG48KFM/unnamed.jpg',                                         title: '#MakingOurCase 2025',                      date: 'April 2025',    caption: 'SPG members traveled to Washington D.C. for a prestigious science advocacy workshop.' },
  { img: CDN + '1743019200250-M8G9GGZNKLQRNYOSKOD5/SUFSstreetview.jpg',                                  title: 'Stand Up For Science',                     date: 'March 2025',    caption: 'SPG members joined thousands of scientists and allies rallying for evidence-based policy.' },
  { img: CDN + '1749621414650-FNBWS2ZA7AOXFZGHSV8S/20250528_171737.jpg',                                 title: 'Science Advocacy Workshop',                date: 'June 2025',     caption: 'Hands-on training in translating research into actionable policy recommendations.' },
  { img: CDN + 'affde5f1-6fe5-4cc5-b9d9-025536e851b4/Screenshot+2025-02-23+at+11.59.50%E2%80%AFPM.png', title: '2025 AAAS Annual Meeting',                 date: 'February 2025', caption: 'SPG members attended the nation\'s largest general scientific society meeting.' },
  { img: CDN + '1739536921111-D9OJ4TQZ7M6VB9IC9Y1X/JoanCCSTShowcase.png',                               title: 'CCST Science Translation Fellowship',       date: 'February 2025', caption: 'SPG\'s Joan Chimezie selected as a CCST Science & Technology Policy Fellow.' },
  { img: CDN + '1716352415304-F1TENSH7ZVM1EXI2RXHZ/Community+Voices+in+AI+poster_CROP.jpg',              title: 'Community Voices in AI',                   date: 'May 2024',      caption: 'A community forum bridging AI research and public understanding of its policy implications.' },
  { img: CDN + '1712213116495-BRN7UD962M7ASUZB55W4/IMG_7812.png',                                        title: 'Clean Transportation Panel',               date: 'April 2024',    caption: 'SPG and E3 co-hosted a panel on clean transportation policy with industry and government experts.' },
  { img: CDN + '1701998400183-FUQGRD19MLRILCUJH7DR/IMG_6104.JPG',                                        title: 'Science Policy Career Panel',              date: 'December 2023', caption: 'Students connected with professionals from the NIH, EPA, RAND, and a Congressional office.' },
];

function wrapOffset(index, current, length) {
  let offset = index - current;
  const half = Math.floor(length / 2);
  if (offset > half) offset -= length;
  if (offset < -half) offset += length;
  return offset;
}

function HomeCarousel() {
  const [current, setCurrent] = useState(0);
  const n = carouselSlides.length;
  const next = useCallback(() => setCurrent(c => (c + 1) % n), [n]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + n) % n), [n]);

  // Restart the timer after every advance (auto or manual) so slides keep rotating.
  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [current, next]);

  const s = carouselSlides[current];

  return (
    <section
      className="home-carousel-section"
      aria-roledescription="carousel"
      aria-label="SPG in photos"
    >
      <div className="home-carousel">
        <div className="home-carousel-stage">
          {carouselSlides.map((sl, i) => {
            const offset = wrapOffset(i, current, n);
            const abs = Math.abs(offset);
            const hidden = abs > 2;
            return (
              <article
                key={sl.title}
                className={`home-carousel-card${offset === 0 ? ' active' : ''}`}
                style={{
                  transform: `translateX(${offset * 42}%) scale(${offset === 0 ? 1 : 0.82 - (abs - 1) * 0.08})`,
                  opacity: hidden ? 0 : offset === 0 ? 1 : 0.55,
                  zIndex: offset === 0 ? 20 : 8 - abs,
                  pointerEvents: hidden ? 'none' : 'auto',
                }}
                onClick={() => offset !== 0 && setCurrent(i)}
                aria-hidden={offset !== 0}
              >
                <img
                  src={sl.img}
                  alt={sl.title}
                  className="home-carousel-img"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </article>
            );
          })}
        </div>

        <button className="home-carousel-arrow left" onClick={prev} aria-label="Previous photo">&#8592;</button>
        <button className="home-carousel-arrow right" onClick={next} aria-label="Next photo">&#8594;</button>
      </div>

      <div className="home-carousel-meta">
        <span className="home-carousel-date">{s.date}</span>
        <h3 className="home-carousel-title serif">{s.title}</h3>
        <p className="home-carousel-caption">{s.caption}</p>
        <div className="home-carousel-dots">
          {carouselSlides.map((sl, i) => (
            <button
              key={sl.title}
              className={`home-carousel-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Show ${sl.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Inline SVG network motif (subtle, not startup-y)
───────────────────────────────────────────────── */
function NetworkSVG() {
  return (
    <svg className="hero-network" viewBox="0 0 960 580" fill="none"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth=".4" strokeOpacity=".05"/>
        </pattern>
      </defs>
      <rect width="960" height="580" fill="url(#grid)"/>
      <line x1="200" y1="160" x2="460" y2="220" stroke="#ffffff" strokeWidth="1" strokeOpacity=".12"/>
      <line x1="460" y1="220" x2="720" y2="140" stroke="#ffffff" strokeWidth="1" strokeOpacity=".12"/>
      <line x1="460" y1="220" x2="580" y2="390" stroke="#ffffff" strokeWidth="1" strokeOpacity=".12"/>
      <line x1="580" y1="390" x2="340" y2="440" stroke="#ffffff" strokeWidth="1" strokeOpacity=".10"/>
      <line x1="720" y1="140" x2="810" y2="360" stroke="#ffffff" strokeWidth="1" strokeOpacity=".10"/>
      <line x1="810" y1="360" x2="580" y2="390" stroke="#ffffff" strokeWidth="1" strokeOpacity=".10"/>
      <line x1="100" y1="350" x2="340" y2="440" stroke="#FFD100" strokeWidth="1" strokeOpacity=".18"/>
      <line x1="460" y1="220" x2="340" y2="440" stroke="#ffffff" strokeWidth=".8" strokeOpacity=".08"/>
      <circle cx="200" cy="160" r="7" fill="white" fillOpacity=".2"/>
      <circle cx="460" cy="220" r="12" fill="white" fillOpacity=".25"/>
      <circle cx="720" cy="140" r="7" fill="white" fillOpacity=".2"/>
      <circle cx="580" cy="390" r="9" fill="white" fillOpacity=".2"/>
      <circle cx="340" cy="440" r="7" fill="white" fillOpacity=".2"/>
      <circle cx="810" cy="360" r="8" fill="white" fillOpacity=".18"/>
      <circle cx="100" cy="350" r="5" fill="#FFD100" fillOpacity=".55"/>
    </svg>
  );
}

/* ─── Recent highlights ─────────────────────────── */
const highlights = [
  {
    date: 'Apr 2024',
    label: 'Event',
    color: 'blue',
    title: 'Science Policy Career Night drew 80+ attendees',
    body: 'Hosted professionals from the NIH, LA County Department of Public Health, and RAND Corporation for a panel on non-academic science careers.',
  },
  {
    date: 'Feb 2024',
    label: 'Publication',
    color: 'gold',
    title: 'New policy brief: Wildfire Smoke & Pediatric Asthma in LA',
    body: 'Our research team synthesized the latest evidence and presented findings to a California state legislative aide.',
  },
  {
    date: 'Nov 2023',
    label: 'Outreach',
    color: 'teal',
    title: 'Explore Your Universe — 600 visitors reached',
    body: 'SPG ran an interactive "What is Science Policy?" booth at UCLA\'s annual science fair, our largest outreach event to date.',
  },
  {
    date: 'Oct 2023',
    label: 'Advocacy',
    color: 'purple',
    title: 'Meeting with Assembly Member Friedman\'s office',
    body: 'Members presented a science communication brief on air quality monitoring gaps in the San Fernando Valley to state legislative staff.',
  },
];

const highlightColors = {
  blue:   { bg: 'var(--ucla-blue-lt)', color: 'var(--ucla-blue)' },
  gold:   { bg: 'var(--gold-lt)', color: 'var(--gold-dk)' },
  teal:   { bg: '#e2f4f3', color: '#1D7B74' },
  purple: { bg: '#f0eef8', color: '#6B52AE' },
};

/* ─── Member voices ─────────────────────────────── */
const voices = [
  {
    quote: "SPG gave me the vocabulary to talk about my research to people who actually make decisions. That's irreplaceable.",
    name: 'Maya R.',
    role: 'PhD student, Environmental Science',
    initials: 'MR',
    color: 'var(--ucla-blue)',
  },
  {
    quote: "I came in knowing nothing about policy. Within a quarter I was co-authoring a brief that went to a county supervisor's office.",
    name: 'Daniel K.',
    role: 'Undergraduate, Public Affairs',
    initials: 'DK',
    color: '#1D7B74',
  },
  {
    quote: "The people here are genuinely curious and kind. Science policy can feel overwhelming — SPG makes it feel possible.",
    name: 'Priya N.',
    role: 'Masters student, Public Health',
    initials: 'PN',
    color: 'var(--gold)',
  },
];

/* ─── Program snapshot ──────────────────────────── */
const programSnaps = [
  { icon: '📋', name: 'Science Advocacy', desc: 'Policy briefs to legislators' },
  { icon: '🔬', name: 'Science Outreach', desc: 'K–12 engagement & STEM demystification' },
  { icon: '✍️', name: 'Science Communication', desc: 'Public writing & media training' },
  { icon: '🏛️', name: 'Political Engagement', desc: 'Local government literacy' },
  { icon: '💼', name: 'Career Development', desc: 'Networking with policy professionals' },
  { icon: '🤝', name: 'Community', desc: 'Interdisciplinary connection' },
];

export default function Home() {
  return (
    <div className="home">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="home-hero">
        <NetworkSVG />
        <div className="container home-hero-content">
          <div className="home-hero-tag">
            <span className="home-hero-dot" />
            Est. 2018 · University of California, Los Angeles
          </div>
          <h1 className="serif home-hero-title">
            Scientists who<br />speak policy.<br />
            <em>And mean it.</em>
          </h1>
          <p className="home-hero-sub">
            The Science Policy Group at UCLA is a student-run, non-partisan organization
            that has been connecting UCLA researchers with lawmakers, communities, and the
            public since 2018. We don't just study the gap between science and policy —
            we spend every quarter closing it.
          </p>
          <div className="home-hero-actions">
            <Link to="/get-involved" className="btn btn-primary">Join SPG</Link>
            <Link to="/about" className="btn btn-ghost">Our Story →</Link>
          </div>
          <div className="home-hero-stats">
            <div className="home-stat">
              <span className="home-stat-n">8</span>
              <span className="home-stat-l">Years Active</span>
            </div>
            <div className="home-stat-div" />
            <div className="home-stat">
              <span className="home-stat-n">300+</span>
              <span className="home-stat-l">Members &amp; Alumni</span>
            </div>
            <div className="home-stat-div" />
            <div className="home-stat">
              <span className="home-stat-n">30+</span>
              <span className="home-stat-l">Policy Projects</span>
            </div>
            <div className="home-stat-div" />
            <div className="home-stat">
              <span className="home-stat-n">20+</span>
              <span className="home-stat-l">Partner Events</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Recent Highlights ────────────────────── */}
      <section className="section home-highlights-section">
        <div className="container">
          <div className="home-section-head">
            <span className="eyebrow">What We've Been Up To</span>
            <h2 className="serif home-section-title">Recent highlights</h2>
            <p className="home-section-sub">
              A running record of what SPG members have been doing this year.
            </p>
          </div>
          <div className="highlights-grid">
            {highlights.map(h => {
              const c = highlightColors[h.color];
              return (
                <article key={h.title} className="highlight-card card">
                  <div className="highlight-top">
                    <span className="highlight-label" style={{ background: c.bg, color: c.color }}>
                      {h.label}
                    </span>
                    <span className="highlight-date">{h.date}</span>
                  </div>
                  <h3 className="highlight-title">{h.title}</h3>
                  <p className="highlight-body">{h.body}</p>
                </article>
              );
            })}
          </div>
          <div className="highlights-footer">
            <Link to="/projects" className="btn btn-outline">See All Past Work →</Link>
          </div>
        </div>
      </section>

      {/* ── Photo Carousel ───────────────────────── */}
      <HomeCarousel />

      {/* ── What We Do — compact ─────────────────── */}
      <section className="section home-programs-section">
        <div className="container">
          <div className="home-section-head">
            <span className="eyebrow">How We Work</span>
            <h2 className="serif home-section-title">Six ways to make an impact</h2>
          </div>
          <div className="home-programs-grid">
            {programSnaps.map(p => (
              <div key={p.name} className="home-program-item">
                <span className="home-program-icon">{p.icon}</span>
                <div>
                  <div className="home-program-name">{p.name}</div>
                  <div className="home-program-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="highlights-footer">
            <Link to="/programs" className="btn btn-outline">Explore Programs →</Link>
          </div>
        </div>
      </section>

      {/* ── Mission Banner ───────────────────────── */}
      <section className="home-banner">
        <div className="container">
          <p className="serif home-banner-quote">
            "We strive to make policy more accessible to scientists —
            and science more accessible to the public."
          </p>
          <Link to="/about" className="btn btn-ghost home-banner-btn">Our Mission &amp; Values →</Link>
        </div>
      </section>

      {/* ── Member Voices ────────────────────────── */}
      <section className="section home-voices-section">
        <div className="container">
          <div className="home-section-head">
            <span className="eyebrow">Member Voices</span>
            <h2 className="serif home-section-title">Straight from the people who show up</h2>
          </div>
          <div className="voices-grid">
            {voices.map(v => (
              <div key={v.name} className="voice-card card">
                <p className="voice-quote serif">"{v.quote}"</p>
                <div className="voice-person">
                  <div className="voice-avatar" style={{ background: v.color }}>
                    {v.initials}
                  </div>
                  <div>
                    <div className="voice-name">{v.name}</div>
                    <div className="voice-role">{v.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join CTA ─────────────────────────────── */}
      <section className="home-join-cta">
        <div className="container home-join-inner">
          <div>
            <h2 className="serif home-join-title">Open to every discipline at UCLA</h2>
            <p className="home-join-sub">
              Science policy isn't owned by any single department. Whether you study
              biology, law, engineering, or public health — there's a role for you here.
            </p>
          </div>
          <div className="home-join-actions">
            <Link to="/get-involved" className="btn btn-primary">Join SPG</Link>
            <Link to="/contact" className="btn btn-ghost">Get in Touch</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
