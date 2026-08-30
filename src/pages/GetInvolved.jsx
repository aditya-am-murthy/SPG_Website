import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, sendFormSubmit } from '../formsubmit';
import './GetInvolved.css';

const SLACK_INVITE = 'https://join.slack.com/t/uclascipol/shared_invite/zt-48e4ikghe-1JdJMXALzhOVvw9pTGRDuQ';

const faqs = [
  {
    q: "What departments or majors can join?",
    a: "Every department is welcome. Our members come from neuroscience, law, public health, engineering, economics, political science, environmental science, and more. Science policy sits at the intersection of many fields, and that mix is part of what makes SPG work."
  },
  {
    q: "Do I need prior policy experience?",
    a: "Everyone is welcome to start here. Many of our members join to learn policy for the first time. We teach the skills — from how to read a bill to how to write a policy memo — through the programs themselves."
  },
  {
    q: "How much of a time commitment is it?",
    a: "You can choose the level that fits your quarter. Reading the newsletter and coming to events is a great way to stay connected. Joining an advocacy cohort or writing team is roughly 3–5 hours per week during active project phases."
  },
  {
    q: "Is SPG only for graduate students?",
    a: "SPG welcomes undergraduates, graduate students, postdocs, and professional students across UCLA. We have active members at every level."
  },
  {
    q: "When do new members join?",
    a: "We welcome new members any time. The best way to start is to attend one of our public events or join our Slack community."
  },
];

export default function GetInvolved() {
  const [mailStatus, setMailStatus] = useState('idle');

  async function handleSubscribe(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setMailStatus('sending');
    try {
      await sendFormSubmit({
        _subject: 'SPG newsletter signup',
        fname: form.fname.value,
        lname: form.lname.value,
        email: form.email.value,
        _honey: form._honey.value,
      });
      form.reset();
      setMailStatus('sent');
    } catch {
      setMailStatus('error');
    }
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.styledcalendar.com/assets/parent-window.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);

    const hash = window.location.hash;
    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    return () => { script.remove(); };
  }, []);

  return (
    <div className="get-involved-page">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{color:'rgba(255,255,255,.65)'}}>Get Involved</span>
          <h1 className="serif page-hero-title">There is a place for you here</h1>
          <p className="page-hero-sub">
            SPG is open to every UCLA student, from every department. Here is how to find your footing.
          </p>
        </div>
      </div>

      <div className="gi-body">
        <div className="container">

          {/* Three paths */}
          <div className="gi-paths">
            <div className="gi-path card">
              <div className="gi-path-icon">📝</div>
              <h2 className="serif gi-path-title">Join as a Student Member</h2>
              <p className="gi-path-desc">
                Open to all UCLA students. Join Slack, get on the newsletter, attend general meetings,
                and find the programs and projects that match your interests. There is no
                application to just show up.
              </p>
              <div className="gi-path-steps">
                <div className="gi-step">
                  <div className="gi-step-n">1</div>
                  <div>Join our Slack workspace — that is how the group communicates</div>
                </div>
                <div className="gi-step">
                  <div className="gi-step-n">2</div>
                  <div>Attend a general meeting (held early each quarter)</div>
                </div>
                <div className="gi-step">
                  <div className="gi-step-n">3</div>
                  <div>Sign up for a program, interest group, or writing team</div>
                </div>
              </div>
              <a href={SLACK_INVITE} target="_blank" rel="noopener noreferrer"
                className="btn btn-primary gi-path-cta">Join Our Slack</a>
            </div>

            <div className="gi-path card">
              <div className="gi-path-icon">🤝</div>
              <h2 className="serif gi-path-title">Partner Organization</h2>
              <p className="gi-path-desc">
                Is your lab, research center, nonprofit, or government office working at the
                science-policy interface? We welcome collaborative relationships — whether
                that means co-hosting an event, serving as a placement for our advocacy
                teams, or contributing expertise to our work.
              </p>
              <div className="gi-path-partners">
                <div className="gi-partner-label">Past and current partners include:</div>
                <ul className="gi-partner-list">
                  <li>UCLA Science Project</li>
                  <li>LA County Department of Public Health</li>
                  <li>California Legislature (staff offices)</li>
                  <li>Skype a Scientist</li>
                  <li>UCLA Institute of the Environment & Sustainability</li>
                </ul>
              </div>
              <a href="mailto:uclascipolgroup@gmail.com?subject=Partnership Interest"
                className="btn btn-outline gi-path-cta">Get in Touch</a>
            </div>

            <div className="gi-path card">
              <div className="gi-path-icon">🎤</div>
              <h2 className="serif gi-path-title">Speak at an Event</h2>
              <p className="gi-path-desc">
                If you work in science policy — at an agency, nonprofit, government office,
                think tank, or in academia — we would love to have you share your experience
                with our members. Panels, solo talks, Q&As, and informal fireside chats
                are all formats we use.
              </p>
              <div className="gi-path-note">
                We typically host 8–12 speakers per academic year. We try to represent
                a wide range of career paths and policy areas.
              </div>
              <a href="mailto:uclascipolgroup@gmail.com?subject=Speaker Interest"
                className="btn btn-outline gi-path-cta">Reach Out</a>
            </div>
          </div>

          {/* Calendar */}
          <section id="calendar" className="gi-calendar-section">
            <h2 className="serif gi-section-title">Upcoming events</h2>
            <p className="gi-section-sub">
              Officer meetings, workshops, and public events — the same calendar we share with members.
            </p>
            <div className="gi-calendar-frame">
              <iframe
                src="https://embed.styledcalendar.com/#EJlkIJnv81yqJSG91MSt"
                title="SPG event calendar"
                className="styled-calendar-container"
                style={{ width: '100%', border: 'none', minHeight: '700px' }}
                data-cy="calendar-embed-iframe"
              />
            </div>
          </section>

          {/* Mailing list */}
          <section id="mailing-list" className="gi-mail-section">
            <h2 className="serif gi-section-title">Join our mailing list</h2>
            <p className="gi-section-sub">
              We share upcoming events, ongoing projects, external opportunities, and news highlights.
            </p>
            <form className="gi-mail-form" onSubmit={handleSubscribe}>
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <input className="form-input" type="text" name="fname" placeholder="First name" required />
              <input className="form-input" type="text" name="lname" placeholder="Last name" required />
              <input className="form-input" type="email" name="email" placeholder="Email address" required />
              <button type="submit" className="btn btn-primary" disabled={mailStatus === 'sending'}>
                {mailStatus === 'sending' ? 'Sending…' : 'Subscribe'}
              </button>
            </form>
            {mailStatus === 'sent' && (
              <p className="gi-mail-status ok">You're on the list — we'll be in touch.</p>
            )}
            {mailStatus === 'error' && (
              <p className="gi-mail-status err">
                Something went wrong. Email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            )}
          </section>

          {/* FAQ */}
          <div className="gi-faq">
            <h2 className="serif gi-faq-title">Common questions</h2>
            <div className="gi-faq-list">
              {faqs.map(f => (
                <div key={f.q} className="gi-faq-item">
                  <div className="gi-faq-q">{f.q}</div>
                  <p className="gi-faq-a">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact strip */}
          <div className="gi-contact-strip">
            <div>
              <div className="serif gi-contact-title">Still have questions?</div>
              <p className="gi-contact-sub">Email us at <a href="mailto:uclascipolgroup@gmail.com" style={{color:'var(--ucla-blue)', fontWeight:600}}>uclascipolgroup@gmail.com</a> — we respond within two business days.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Contact Form →</Link>
          </div>

        </div>
      </div>
    </div>
  );
}
