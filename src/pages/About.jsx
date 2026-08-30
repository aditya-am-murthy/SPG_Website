import { Link } from 'react-router-dom';
import './About.css';

const timeline = [
  { year: '2018', event: 'SPG founded by a small group of UCLA graduate students and postdocs interested in connecting science to local and state policy.' },
  { year: '2019', event: 'First Science Advocacy cohort completes briefs on climate adaptation and water policy, delivered to LA County staff.' },
  { year: '2020', event: 'Pivoted to virtual events; launched our science communication workshop series and grew membership 2x during the pandemic.' },
  { year: '2021', event: 'Partnered with the UCLA Science Project for K-12 outreach and launched our first internal writing team producing peer-reviewed policy memos.' },
  { year: '2022', event: 'Hosted our first Science Policy Career Night; ran booths at Explore Your Universe; reached over 1,000 community members through outreach.' },
  { year: '2023', event: 'Members met with Assembly member offices on air quality and EV infrastructure. Launched a dedicated Political Engagement interest group.' },
  { year: '2024', event: 'Continuing to grow. New interest groups, a revamped blog, and the largest advocacy cohort in SPG history.' },
];

const CDN = 'https://images.squarespace-cdn.com/content/v1/5f5679c017299d539905d4a6/';
const leadership = [
  { name: 'Aditya Murthy',          role: 'President',                              img: CDN + 'f13e9643-ade9-4dc8-ad61-8932ad9909a7/Aditya+Murthy+headshot.png', href: 'https://aditya-am-murthy.github.io' },
  { name: 'Stephanie Wert',         role: 'Chair, External Relations',              img: CDN + '751e60c2-8bfc-42bb-ad39-fb23ea5be76f/StephanieWertHeadshot.png' },
  { name: 'Joan Chimezie',          role: 'Chair, External Relations',              img: CDN + '2ba8ac0e-967f-4d44-9a7c-a72462019e2d/IMG_2695+2.JPG' },
  { name: 'Mariam Baghdasarian',    role: 'Chair, External Relations',              img: CDN + '63f51cd4-d1a6-4163-81c8-b6e865801fc5/F241D319-6CDB-4608-9809-97DD859D756B_1_201_a.jpg', href: 'https://www.linkedin.com/in/mariam-baghdasarian' },
  { name: 'Abhinanda Dash',         role: 'Project Chair',                          img: CDN + '16e58d25-e4c5-4c94-8444-9a808254ad9c/Dash.jpg' },
  { name: 'Ava Francis',            role: 'Chair, Media & Communications',          img: CDN + '45c5154e-3443-4339-968d-ebb8c6e70cc7/AF_PFP.jpg' },
  { name: 'Robert "Bobby" del Carlo', role: 'Chair, Science Communication',         img: CDN + '03efd23f-97fd-49a8-81ed-d8dd04789acc/headshot_robert_del_carlo_2026.jpg' },
  { name: 'Soham Ray',              role: 'Chair, Finance & Funding Opportunities', img: CDN + '1fb659ee-47e3-49ff-ab30-7a7836046ac0/SohamRay.jpg' },
];

const values = [
  { icon: '⚖️', title: 'Non-Partisan', desc: 'We take no position on contested political questions. Our role is to ensure decision-makers have access to the best available scientific evidence — not to advocate for a party, candidate, or ideology.' },
  { icon: '🤝', title: 'Open to All', desc: 'Science policy belongs to every discipline. Whether you study biology or law, engineering or humanities — you belong here. We actively recruit across departments.' },
  { icon: '🌱', title: 'Student-Led', desc: 'Every project, event, and publication is conceived and executed by students. We grow alongside our members, not ahead of them.' },
  { icon: '🔗', title: 'Evidence-Based', desc: 'We hold ourselves to the same standard we ask of policymakers: claims grounded in evidence, presented with appropriate uncertainty.' },
];

export default function About() {
  return (
    <div className="about-page">

      {/* Page header */}
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{color:'rgba(255,255,255,.65)'}}>About SPG</span>
          <h1 className="serif page-hero-title">Six years of closing the gap</h1>
          <p className="page-hero-sub">
            We started as a small group of researchers who wanted to do more than publish papers.
            We wanted to show up where decisions get made.
          </p>
        </div>
      </div>

      {/* Who we are */}
      <section className="section">
        <div className="container about-intro-grid">
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="serif about-intro-h">A student organization rooted in science, built for impact</h2>
            <p className="about-p">
              The Science Policy Group at UCLA (SPG) was founded in 2018 by graduate students
              who saw a persistent disconnect: the world's scientific knowledge was accumulating
              faster than the public and policymakers could absorb it. SPG was their answer.
            </p>
            <p className="about-p">
              Today we are a community of undergraduate students, graduate students, postdocs,
              and alumni from across UCLA's schools and departments. We work on real projects —
              policy briefs delivered to legislative staff, science communication pieces that reach
              real audiences, outreach that puts SPG members in front of thousands of community
              members each year.
            </p>
            <p className="about-p">
              We are resolutely non-partisan. We do not advocate for parties or politicians.
              We advocate for the use of sound scientific evidence in public decision-making —
              a principle that transcends political affiliation.
            </p>
          </div>
          <div className="about-values-col">
            {values.map(v => (
              <div key={v.title} className="value-card card">
                <span className="value-icon">{v.icon}</span>
                <div>
                  <div className="value-title">{v.title}</div>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline-section">
        <div className="container">
          <span className="eyebrow">Our History</span>
          <h2 className="serif about-section-h">How we got here</h2>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={t.year} className="timeline-item">
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-line" />
                <div className="timeline-content">
                  <p className="timeline-text">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" id="leadership">
        <div className="container">
          <span className="eyebrow">Leadership</span>
          <h2 className="serif about-section-h">The people running SPG</h2>
        </div>
        <div className="about-officers-grid">
          {leadership.map(l => (
            <div key={l.name} className="about-officer-card">
              <div className="about-officer-photo-wrap">
                <img src={l.img} alt={l.name} className="about-officer-photo" loading="lazy" />
                {l.href && (
                  <a
                    href={l.href}
                    className="officer-connect"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="officer-connect-pill">
                      Connect with {l.name.split(' ')[0]} <span aria-hidden="true">↗</span>
                    </span>
                  </a>
                )}
              </div>
              <div className="about-officer-nameplate">
                <div className="about-officer-name">{l.name}</div>
                <div className="about-officer-role">{l.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="container">
          <p className="about-sub-text" style={{marginTop: '28px'}}>
            <Link to="/leadership" style={{color:'var(--ucla-blue)', fontWeight:600}}>
              Meet the full team — bios, past officers, and more →
            </Link>
          </p>
        </div>
      </section>

    </div>
  );
}
