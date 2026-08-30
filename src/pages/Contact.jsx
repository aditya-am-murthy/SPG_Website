import { useState } from 'react';
import './Contact.css';

const CONTACT_EMAIL = 'uclascipolgroup@gmail.com';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      type: form.type.value || 'Not specified',
      message: form.msg.value,
      _subject: 'SPG website contact form',
    };
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('submit failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{color:'rgba(255,255,255,.65)'}}>Contact</span>
          <h1 className="serif page-hero-title">We'd love to hear from you</h1>
          <p className="page-hero-sub">
            Whether you're a student, researcher, potential partner, or just curious —
            drop us a line and we will get back to you.
          </p>
        </div>
      </div>

      <div className="contact-body">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Reach Us</span>
            <h2 className="serif contact-info-h">Let's connect</h2>
            <p className="contact-info-p">
              SPG is entirely student-run, so response times may vary during finals
              or breaks. We do our best to reply within two business days.
            </p>
            <div className="contact-details-list">
              <div className="contact-detail-row">
                <span className="contact-detail-icon">✉️</span>
                <div>
                  <div className="contact-detail-lbl">Email</div>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="contact-detail-val">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-icon">📍</span>
                <div>
                  <div className="contact-detail-lbl">Location</div>
                  <div className="contact-detail-val">University of California, Los Angeles</div>
                </div>
              </div>
            </div>
            <div className="contact-socials">
              <a href="https://www.instagram.com/scipolucla" target="_blank" rel="noopener noreferrer" className="social-pill">
                📸 Instagram
              </a>
              <a href="https://www.linkedin.com/company/science-policy-group-ucla" target="_blank" rel="noopener noreferrer" className="social-pill">
                💼 LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            <h3 className="serif contact-form-h">Send a message</h3>
            <div className="form-row">
              <label className="form-lbl" htmlFor="name">Name</label>
              <input id="name" name="name" className="form-input" type="text" placeholder="Your name" required />
            </div>
            <div className="form-row">
              <label className="form-lbl" htmlFor="email">Email</label>
              <input id="email" name="email" className="form-input" type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-row">
              <label className="form-lbl" htmlFor="type">I am a...</label>
              <select id="type" name="type" className="form-input">
                <option value="">Select one</option>
                <option>UCLA student interested in joining</option>
                <option>Prospective partner organization</option>
                <option>Researcher / speaker</option>
                <option>Media / press inquiry</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-row">
              <label className="form-lbl" htmlFor="msg">Message</label>
              <textarea id="msg" name="msg" className="form-input form-textarea" rows={5}
                placeholder="Tell us a bit about yourself and what you're looking for..." required />
            </div>
            {status === 'sent' && (
              <p className="contact-form-status ok">Thanks — your message is on its way to {CONTACT_EMAIL}.</p>
            )}
            {status === 'error' && (
              <p className="contact-form-status err">
                Something went wrong. Email us directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            )}
            <button type="submit" className="btn btn-primary" style={{width:'100%',justifyContent:'center'}}
              disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
