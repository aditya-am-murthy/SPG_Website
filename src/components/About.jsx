import './About.css';

const pillars = [
  {
    icon: '🔬',
    title: 'Science Accessibility',
    desc: 'Making scientific knowledge legible and actionable for policymakers, advocates, and the public.',
  },
  {
    icon: '🏛️',
    title: 'Policy Engagement',
    desc: 'Bridging the gap between research institutions and the legislative bodies that shape our world.',
  },
  {
    icon: '🎓',
    title: 'Student Development',
    desc: 'Building the next generation of scientists, researchers, and advocates who can speak both languages.',
  },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Text */}
          <div className="about-text">
            <span className="eyebrow">Who We Are</span>
            <h2 className="serif about-heading">
              A non-partisan student organization at UCLA's intersection of science and society
            </h2>
            <p className="about-body">
              The Science Policy Group at UCLA (SPG) believes that sound science must inform sound policy.
              We are a student-led, non-partisan organization that works to close the gap between the
              knowledge produced at research universities and the decisions made in government, communities,
              and public life.
            </p>
            <p className="about-body">
              Whether you study biochemistry or political science, environmental engineering or public health,
              SPG is a place to translate your expertise into civic impact — and to learn from others doing
              the same across disciplines.
            </p>
            <div className="about-actions">
              <a href="#programs" className="btn btn-primary">Our Programs</a>
              <a href="#join" className="btn btn-outline">Get Involved</a>
            </div>
          </div>

          {/* Pillars */}
          <div className="about-pillars">
            {pillars.map(p => (
              <div key={p.title} className="pillar-card">
                <span className="pillar-icon">{p.icon}</span>
                <div>
                  <h3 className="pillar-title">{p.title}</h3>
                  <p className="pillar-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission banner */}
        <div className="about-mission">
          <blockquote className="serif mission-quote">
            "We strive to make policy more accessible to scientists,
            and science more accessible to the public."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
