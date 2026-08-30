import { Link } from 'react-router-dom';
import { posts, catColors } from './blogData';
import './Blog.css';

const categories = ['All', 'Policy Analysis', 'Career & Professional', 'Science Communication', 'Explainer', 'Event Recap'];

export default function Blog() {
  const featured = posts.filter(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <div className="blog-page">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{color:'rgba(255,255,255,.65)'}}>Blog &amp; Articles</span>
          <h1 className="serif page-hero-title">Written by students, for everyone</h1>
          <p className="page-hero-sub">
            Policy analysis, career reflections, science explainers, and event recaps —
            all written by SPG members from across UCLA's departments.
          </p>
        </div>
      </div>

      <div className="blog-body">
        <div className="container">

          {/* Featured posts */}
          <div className="blog-featured-grid">
            {featured.map(p => {
              const c = catColors[p.categoryColor];
              return (
                <article key={p.id} className="blog-featured-card card">
                  {p.img && (
                    <div className="blog-featured-img-wrap">
                      <img src={p.img} alt={p.title} className="blog-featured-img" loading="lazy" />
                    </div>
                  )}
                  <div className="blog-featured-body">
                    <div className="blog-card-meta">
                      <span className="blog-cat" style={{background: c.bg, color: c.color}}>{p.category}</span>
                      <span className="blog-date">{p.date}</span>
                    </div>
                    <h2 className="blog-featured-title serif">{p.title}</h2>
                    <p className="blog-excerpt">{p.excerpt}</p>
                    <div className="blog-card-footer">
                      <span className="blog-author">{p.author} · {p.readTime}</span>
                      <Link to={`/blog/${p.slug}`} className="blog-read-link">Read more →</Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* All posts */}
          <div className="blog-all-head">
            <h3 className="serif blog-all-title">More from the blog</h3>
          </div>
          <div className="blog-list">
            {rest.map(p => {
              const c = catColors[p.categoryColor];
              return (
                <article key={p.id} className="blog-list-item card">
                  {p.img && (
                    <div className="blog-list-thumb-wrap">
                      <img src={p.img} alt={p.title} className="blog-list-thumb" loading="lazy" />
                    </div>
                  )}
                  <div className="blog-list-left">
                    <div className="blog-card-meta" style={{marginBottom:'8px'}}>
                      <span className="blog-cat" style={{background: c.bg, color: c.color}}>{p.category}</span>
                      <span className="blog-date">{p.date}</span>
                    </div>
                    <h3 className="blog-list-title">{p.title}</h3>
                    <p className="blog-list-excerpt">{p.excerpt}</p>
                    <div className="blog-card-footer" style={{marginTop:'12px'}}>
                      <span className="blog-author">{p.author} · {p.readTime}</span>
                      <Link to={`/blog/${p.slug}`} className="blog-read-link">Read more →</Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="blog-sub-cta">
            <div className="blog-sub-card">
              <span className="blog-sub-icon">📬</span>
              <div>
                <div className="blog-sub-title">Get new pieces in your inbox</div>
                <p className="blog-sub-desc">We publish new articles 2–3 times per month during the academic year.</p>
              </div>
              <Link to="/get-involved#mailing-list" className="btn btn-outline blog-sub-btn">Subscribe via Email</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
