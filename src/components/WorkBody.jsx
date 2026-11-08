export default function WorkBody({ blocks }) {
  return (
    <div className="work-content">
      {blocks.map((block, i) => {
        if (block.type === 'h2') return <h2 key={i} className="serif work-h2">{block.text}</h2>;
        if (block.type === 'q') return <h3 key={i} className="work-q">{block.text}</h3>;
        if (block.type === 'quote') {
          return (
            <blockquote key={i} className="work-quote">
              <p className="serif">{block.text}</p>
              {block.cite && <cite>{block.cite}</cite>}
            </blockquote>
          );
        }
        if (block.type === 'ul') {
          return (
            <ul key={i} className="work-ul">
              {block.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          );
        }
        if (block.type === 'img') {
          return (
            <figure key={i} className="work-figure">
              <img src={block.src} alt={block.alt || ''} />
              {block.caption && <figcaption>{block.caption}</figcaption>}
            </figure>
          );
        }
        return <p key={i} className="work-p">{block.text}</p>;
      })}
    </div>
  );
}
