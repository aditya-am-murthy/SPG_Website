import { Link } from 'react-router-dom';
import './Programs.css';

const programs = [
  {
    id: 'advocacy',
    color: 'blue',
    emoji: '📋',
    label: 'Science Advocacy',
    tagline: 'Building the case for evidence-based policy',
    description: 'Advocacy teams research a specific science policy question in depth, then produce a deliverable — a policy brief, legislative memo, or infographic — and take it to the people who need to see it: legislative staff, local officials, and agency representatives.',
    whatWeVeDone: [
      'Delivered wildfire smoke & pediatric health brief to LA County supervisorial staff',
      'Presented EV infrastructure equity memo to LA City Council staff',
      'Met with Assembly member offices on air quality monitoring gaps in the San Fernando Valley',
    ],
    joinText: 'Advocacy cohorts form each fall. No prior policy experience needed.',
    tags: ['Policy Briefs', 'Legislative Meetings', 'Research'],
  },
  {
    id: 'outreach',
    color: 'teal',
    emoji: '🔬',
    label: 'Science Outreach',
    tagline: 'Inspiring the next generation of scientists',
    description: "We partner with organizations that bring STEM to students who don't always see it: K–12 classrooms, community events, and public science fairs. SPG members volunteer as presenters, mentors, and booth organizers — and we help you do it well.",
    whatWeVeDone: [
      'Hosted virtual field trips with the UCLA Science Project for elementary classrooms',
      'Ran "What is Science Policy?" booth at Explore Your Universe — 600+ visitors in 2023',
      'Participated in Skype a Scientist with over 20 classrooms since 2021',
    ],
    joinText: 'Outreach is open to all members. Events happen year-round.',
    tags: ['K–12 Engagement', 'Community Events', 'STEM Access'],
  },
  {
    id: 'communication',
    color: 'gold',
    emoji: '✍️',
    label: 'Science Communication',
    tagline: 'Connecting research to the people it affects',
    description: "Writing and communicating science for a general audience is a distinct skill set — one that most scientists are never formally taught. SPG runs workshops and writing teams that help you build that skill in a low-stakes, supportive environment, and publish the results.",
    whatWeVeDone: [
      'Published 30+ pieces on the SPG blog since 2020',
      'Ran a four-session "Science Writing for Non-Scientists" workshop series',
      'Members have placed op-eds and explainers in campus and local publications',
    ],
    joinText: 'The writing team accepts new members each quarter.',
    tags: ['Blog Writing', 'Op-Eds', 'Workshops'],
  },
  {
    id: 'political',
    color: 'purple',
    emoji: '🏛️',
    label: 'Political Engagement',
    tagline: 'Demystifying local and state government',
    description: "Most scientists are surprisingly unfamiliar with how local government actually works — and that's a problem, because that's where a lot of science policy gets made. We create resources, host events, and facilitate direct engagement so SPG members can actually show up.",
    whatWeVeDone: [
      'Produced a guide to the LA County Board of Supervisors for scientists and researchers',
      'Hosted an in-conversation event with a Los Angeles City Council member',
      'Ran a "Your Vote on Science Issues" voter resource series during the 2022 election cycle',
    ],
    joinText: 'The Political Engagement interest group meets biweekly.',
    tags: ['Local Government', 'Voter Resources', 'Civic Events'],
  },
  {
    id: 'career',
    color: 'blue',
    emoji: '💼',
    label: 'Career Development',
    tagline: 'Opening doors to science policy careers',
    description: "Science policy is a career, not just a topic — and it includes dozens of paths: federal agencies, state government, think tanks, advocacy nonprofits, international organizations, and more. We connect members with professionals who have walked those paths.",
    whatWeVeDone: [
      'Hosted Science Policy Career Night annually since 2022, with 80+ attendees in 2024',
      'Brought in speakers from the NIH, EPA, FDA, RAND, and Congressional offices',
      'Maintained a database of science policy internships, fellowships, and job postings for members',
    ],
    joinText: 'Career events are open to all SPG members. Check the newsletter for dates.',
    tags: ['Networking', 'Internship Database', 'Speaker Events'],
  },
  {
    id: 'community',
    color: 'teal',
    emoji: '🤝',
    label: 'Community',
    tagline: 'Finding your people across disciplines',
    description: "Some of the best conversations in SPG happen between a biochemistry PhD student and an undergraduate political science major who would never otherwise cross paths. We make that happen — through interest groups, social events, and a culture that genuinely welcomes newcomers.",
    whatWeVeDone: [
      'Maintained active interest groups in climate, health, and tech policy since 2021',
      'Host quarterly social events and informal journal clubs',
      'Grew from ~30 to 150+ members over six years, driven almost entirely by word of mouth',
    ],
    joinText: 'Just show up. We mean it.',
    tags: ['Interest Groups', 'Social Events', 'Interdisciplinary Community'],
  },
];

const colorMap = {
  blue:   { bg: 'var(--ucla-blue-lt)', icon: 'var(--ucla-blue)', border: 'rgba(39,116,174,.2)' },
  teal:   { bg: '#e2f4f3', icon: '#1D7B74', border: 'rgba(29,123,116,.2)' },
  gold:   { bg: 'var(--gold-lt)', icon: 'var(--gold-dk)', border: 'rgba(212,175,55,.28)'  },
  purple: { bg: '#f0eef8', icon: '#6B52AE', border: 'rgba(107,82,174,.2)' },
};

export default function Programs() {
  return (
    <div className="programs-page">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{color:'rgba(255,255,255,.65)'}}>Programs</span>
          <h1 className="serif page-hero-title">Six ways to make an impact</h1>
          <p className="page-hero-sub">
            Choose what resonates with you — or get involved in all of it.
            Every program is student-led and open to members from any discipline.
          </p>
        </div>
      </div>

      <div className="programs-body">
        <div className="container">
          {programs.map((p, i) => {
            const c = colorMap[p.color];
            const reversed = i % 2 !== 0;
            return (
              <article key={p.id} id={p.id}
                className={`program-section${reversed ? ' reversed' : ''}`}>
                <div className="program-icon-block" style={{ background: c.bg, border: `1.5px solid ${c.border}` }}>
                  <span className="program-emoji">{p.emoji}</span>
                  <div className="program-tags-list">
                    {p.tags.map(t => (
                      <span key={t} className="prog-tag" style={{ background: 'white', color: c.icon, border: `1px solid ${c.border}` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="program-join-note" style={{ color: c.icon }}>
                    💡 {p.joinText}
                  </p>
                </div>
                <div className="program-text-block">
                  <span className="eyebrow" style={{ color: c.icon }}>{p.label}</span>
                  <h2 className="serif program-heading">{p.tagline}</h2>
                  <p className="program-desc">{p.description}</p>
                  <div className="program-accomplishments">
                    <div className="prog-acc-label">What we've done</div>
                    <ul className="prog-acc-list">
                      {p.whatWeVeDone.map(a => (
                        <li key={a} className="prog-acc-item">
                          <span className="prog-acc-dot" style={{ background: c.icon }} />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="programs-join-footer">
        <div className="container programs-join-inner">
          <div>
            <div className="serif programs-join-q">Ready to find your program?</div>
            <p className="programs-join-sub">Get on the newsletter for dates, or jump in on Slack.</p>
          </div>
          <div className="programs-join-actions">
            <Link to="/get-involved#mailing-list" className="btn btn-outline">Subscribe via Email</Link>
            <Link to="/get-involved" className="btn btn-primary">Get Involved →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
