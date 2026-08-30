import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left: info */}
          <div className="contact-info">
            <span className="eyebrow">Contact</span>
            <h2 className="serif contact-heading">Let's connect</h2>
            <p className="contact-body">
              Whether you're a student curious about science policy, an organization
              interested in collaboration, or a researcher looking to translate your
              work into impact — we'd love to hear from you.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-icon">✉️</span>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <a href="mailto:scipolucla@gmail.com" className="contact-detail-val">
                    scipolucla@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon">📍</span>
                <div>
                  <div className="contact-detail-label">Location</div>
                  <div className="contact-detail-val">University of California, Los Angeles</div>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon">📅</span>
                <div>
                  <div className="contact-detail-label">Meetings</div>
                  <div className="contact-detail-val">Check our newsletter for upcoming events</div>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a href="https://www.instagram.com/scipolucla" target="_blank" rel="noopener noreferrer" className="social-btn">
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/science-policy-group-ucla" target="_blank" rel="noopener noreferrer" className="social-btn">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form
            className="contact-form card"
            onSubmit={e => { e.preventDefault(); alert("Thanks! We will be in touch."); }}
          >
            <h3 className="contact-form-title serif">Send us a message</h3>

            <div className="form-row">
              <label className="form-label" htmlFor="cf-name">Name</label>
              <input id="cf-name" className="form-input" type="text" placeholder="Your name" required />
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="cf-email">Email</label>
              <input id="cf-email" className="form-input" type="email" placeholder="you@example.com" required />
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="cf-type">I am a…</label>
              <select id="cf-type" className="form-input">
                <option value="">Select one</option>
                <option>UCLA student interested in joining</option>
                <option>Prospective partner organization</option>
                <option>Speaker / researcher</option>
                <option>Media / press inquiry</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="cf-msg">Message</label>
              <textarea id="cf-msg" className="form-input form-textarea" placeholder="Tell us a bit about yourself and what you're looking for…" rows={5} required />
            </div>

            <button type="submit" className="btn btn-primary" style={{width:'100%', justifyContent:'center'}}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
