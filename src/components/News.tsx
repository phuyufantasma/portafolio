import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NEWS } from '../data/news';
import { useScene } from '../hooks/useScene';

export function News() {
  const ref = useRef<HTMLElement>(null);
  useScene(ref);
  return (
    <section ref={ref} id="noticias" className="news" tabIndex={-1} aria-labelledby="noticias-title">
      <p className="eyebrow" data-reveal>Prensa</p>
      <h2 id="noticias-title" className="section-title" data-reveal>Noticias</h2>
      <p className="section-lede" data-reveal>Lo que se ha escrito sobre Anticuecas Subterráneas (Reconstruidas).</p>
      <ul className="news-grid">
        {NEWS.map(item => (
          <li key={item.id} data-reveal>
            <a className="news-card" href={item.url} target="_blank" rel="noopener noreferrer">
              <span className="eyebrow news-meta">Reseña · {item.date}</span>
              <h3>{item.outlet}<small>{item.origin}{item.author ? ` · ${item.author}` : ''}</small></h3>
              <p className="news-excerpt">«{item.excerpt}»</p>
              <span className="news-more">Leer más<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> en {item.outlet} (se abre en una pestaña nueva)</span></span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
