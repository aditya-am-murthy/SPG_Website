import './Programs.css';

const programs = [
  {
    id: 'advocacy',
    color: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v13H3z"/><path d="M8 21h8M12 17v4"/>
        <path d="M7 8h2M11 8h6M7 11h4M13 11h4"/>
      </svg>
    ),
    label: 'Science Advocacy',
    summary: 'Building the case for evidence-based policy',
    description:
      'Research a science policy issue in depth — produce an infographic, policy memo, or brief — then meet with local lawmakers to present findings on proposed legislation or regulations. Past issues have spanned climate, healthcare, and emerging technology.',
    tags: ['Policy Memos', 'Lawmaker Meetings', 'Infographics'],
  },
  {
    id: 'outreach',
    color: 'teal',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/>
        <path d="M17 13l2 2 4-4"/>
      </svg>
    ),
    label: 'Science Outreach',
    summary: 'Inspiring the next generation of scientists',
    description:
      'Partner with organizations that demystify STEM for K–12 students. Host virtual field trips with the UCLA Science Project, run a booth at Explore Your Universe, or connect through Skype a Scientist. We help you craft compelling presentations.',
    tags: ['K–12 Engagement', 'UCLA Science Project', 'Explore Your Universe'],
  },
  {
    id: 'communication',
    color: 'gold',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    label: 'Science Communication',
    summary: 'Connecting research to broader audiences',
    description:
      'Effective science communication builds trust between scientists and the public. Learn to connect your research to real-world applications, develop your writing voice, and produce work that resonates beyond academic journals.',
    tags: ['Science Writing', 'Public Engagement', 'Media Skills'],
  },
  {
    id: 'political',
    color: 'purple',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    label: 'Political Engagement',
    summary: 'Demystifying local and state government',
    description:
      'Local government shapes science policy in ways that are often overlooked. We create accessible resources explaining the LA County Board of Supervisors, voting districts, and local elections, and host events where you can engage directly with officials.',
    tags: ['Local Government', 'Civic Education', 'Lawmaker Events'],
  },
  {
    id: 'career',
    color: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    label: 'Career Development',
    summary: 'Pathways into science policy careers',
    description:
      'What does a career at the NSF, EPA, or a think tank actually look like? We host professionals across science policy backgrounds for workshops, Q&As, and networking — and help you find internships and build a portfolio that opens doors.',
    tags: ['Networking', 'Internships', 'Professional Workshops'],
  },
  {
    id: 'community',
    color: 'teal',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: 'Community',
    summary: 'Finding your people across disciplines',
    description:
      "Come to events, join a writing team, or participate in an interest group — we make it easy to find fellow students who share your passion. Already have a topic? We'll introduce you to others. New to science policy? We'll keep you in the loop.",
    tags: ['Interest Groups', 'Writing Teams', 'Social Events'],
  },
];

const colorMap = {
  blue:   { bg: 'var(--ucla-blue-lt)', icon: 'var(--ucla-blue)', border: 'rgba(39,116,174,.2)' },
  teal:   { bg: 'var(--teal-lt)',      icon: 'var(--teal)',      border: 'rgba(29,123,116,.2)' },
  gold:   { bg: 'var(--gold-lt)',      icon: 'var(--gold-dk)',   border: 'rgba(212,175,55,.28)'  },
  purple: { bg: '#f0eef8',             icon: '#6B52AE',          border: 'rgba(107,82,174,.2)' },
};

export default function Programs() {
  return (
    <section id="programs" className="section programs-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Do</span>
          <h2 className="serif programs-heading">Six pathways to science policy impact</h2>
          <p className="programs-sub">
            Choose the area that matches your interests — or get involved in all of them.
            Every program is student-led and open to members from any discipline.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map(p => {
            const c = colorMap[p.color];
            return (
              <article key={p.id} className="program-card card">
                <div className="program-card-top" style={{ background: c.bg, borderBottom: `1px solid ${c.border}` }}>
                  <div className="program-icon" style={{ color: c.icon }}>{p.icon}</div>
                  <div>
                    <span className="program-label">{p.label}</span>
                    <p className="program-summary" style={{ color: c.icon }}>{p.summary}</p>
                  </div>
                </div>
                <div className="program-card-body">
                  <p className="program-desc">{p.description}</p>
                  <div className="program-tags">
                    {p.tags.map(t => (
                      <span key={t} className="program-tag" style={{ background: c.bg, color: c.icon, border: `1px solid ${c.border}` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
