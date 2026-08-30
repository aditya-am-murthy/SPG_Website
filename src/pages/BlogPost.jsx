import { useParams, Link } from 'react-router-dom';
import { posts, catColors } from './blogData';
import './BlogPost.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="page-hero">
          <div className="container">
            <h1 className="serif page-hero-title">Article not found</h1>
          </div>
        </div>
        <div className="container" style={{ padding: '80px 0' }}>
          <p>This article doesn't exist. <Link to="/blog" style={{ color: 'var(--ucla-blue)' }}>← Back to the blog</Link></p>
        </div>
      </div>
    );
  }

  const c = catColors[post.categoryColor];

  return (
    <div className="blog-post-page">

      {/* Hero */}
      <div className="bp-hero">
        {post.img && (
          <div className="bp-hero-img-wrap">
            <img src={post.img} alt={post.title} className="bp-hero-img" />
            <div className="bp-hero-img-overlay" />
          </div>
        )}
        <div className="container bp-hero-content">
          <Link to="/blog" className="bp-back">← Back to Blog</Link>
          <div className="bp-meta">
            <span className="blog-cat" style={{ background: c.bg, color: c.color }}>{post.category}</span>
            <span className="bp-date">{post.date}</span>
          </div>
          <h1 className="serif bp-title">{post.title}</h1>
          <div className="bp-byline">{post.author} · {post.readTime}</div>
        </div>
      </div>

      {/* Body */}
      <div className="container bp-body">
        <div className="bp-content">
          {post.body.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i} className="serif bp-h2">{block.text}</h2>;
            // Handle **bold** inline markdown
            const parts = block.text.split(/(\*\*[^*]+\*\*)/g);
            return (
              <p key={i} className="bp-p">
                {parts.map((part, j) =>
                  part.startsWith('**') && part.endsWith('**')
                    ? <strong key={j}>{part.slice(2, -2)}</strong>
                    : part
                )}
              </p>
            );
          })}
        </div>

        {/* Related / back nav */}
        <div className="bp-footer">
          <Link to="/blog" className="btn btn-outline">← All Articles</Link>
          <div className="bp-related">
            {posts.filter(p => p.id !== post.id).slice(0, 2).map(p => {
              const rc = catColors[p.categoryColor];
              return (
                <Link key={p.id} to={`/blog/${p.slug}`} className="bp-related-card card">
                  {p.img && <img src={p.img} alt={p.title} className="bp-related-img" loading="lazy" />}
                  <div className="bp-related-body">
                    <span className="blog-cat" style={{ background: rc.bg, color: rc.color }}>{p.category}</span>
                    <div className="bp-related-title">{p.title}</div>
                    <div className="bp-related-meta">{p.author} · {p.readTime}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
