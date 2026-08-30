import './Join.css';

const ways = [
  {
    icon: '📝',
    title: 'Join as a Student Member',
    desc: 'Open to all UCLA students regardless of major. Attend meetings, join a working group, and get access to events and resources.',
    cta: 'Apply Now',
    href: 'mailto:scipolucla@gmail.com?subject=Student Membership Interest',
  },
  {
    icon: '🤝',
    title: 'Partner Organization',
    desc: 'Is your organization working at the science-policy interface? We welcome partnerships with research groups, nonprofits, and government offices.',
    cta: 'Get in Touch',
    href: '#contact',
  },
  {
    icon: '🎤',
    title: 'Speak at an Event',
    desc: "Are you a science policy professional, researcher, or policymaker? We're always looking for guests to share career journeys and expertise.",
    cta: 'Reach Out',
    href: '#contact',
  },
];

export default function Join() {
  return (
    <section id="join" className="section join-section">
      <div className="container">
        <div className="join-top">
          <div className="join-text">
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Get Involved</span>
            <h2 className="serif join-heading">
              Ready to bridge science and society?
            </h2>
            <p className="join-sub">
              SPG is open to students from every department at UCLA —
              policy impact doesn't belong to any single discipline.
              Here's how you can plug in.
            </p>
          </div>
        </div>

        <div className="join-cards">
          {ways.map(w => (
            <div key={w.title} className="join-card">
              <span className="join-card-icon">{w.icon}</span>
              <h3 className="join-card-title">{w.title}</h3>
              <p className="join-card-desc">{w.desc}</p>
              <a href={w.href} className="btn btn-ghost join-card-btn">{w.cta} →</a>
            </div>
          ))}
        </div>

        <div className="join-note">
          Questions? Email us at{' '}
          <a href="mailto:scipolucla@gmail.com" style={{color: 'rgba(255,255,255,.9)', fontWeight: 600}}>
            scipolucla@gmail.com
          </a>
          . We typically respond within two business days.
        </div>
      </div>
    </section>
  );
}
