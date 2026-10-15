import { useEffect, useRef } from 'react';
import { Play, X } from 'lucide-react';
import type { Video } from '../types/scrollytelling';
import { useEmbed } from '../hooks/useEmbed';

/** Local poster; the youtube-nocookie iframe is created only when the visitor presses play. */
export function VideoEmbed({ video, scope, className = '' }: { video: Video; scope: string; className?: string }) {
  const { open, show, hide } = useEmbed(`video-${scope}-${video.id}`);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { hide(); trigger.current?.focus(); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, hide]);
  return (
    <figure className={`video-embed ${open ? 'is-open' : ''} ${className}`}>
      <div className="video-frame" data-tilt-pointer>
        {open ? (
          <iframe title={video.title} src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
        ) : (
          <button ref={trigger} className="video-poster" onClick={show} aria-label={`Reproducir ${video.title}`}>
            <img src={video.thumb.src} srcSet={video.thumb.srcSet} sizes="(max-width: 700px) 100vw, 45vw" width={video.thumb.width} height={video.thumb.height} alt="" loading="lazy" decoding="async" />
            <span className="play-badge" aria-hidden="true"><Play size={22} /></span>
          </button>
        )}
        {open && <button ref={closeButton} className="icon-button video-close" onClick={() => { hide(); trigger.current?.focus(); }} aria-label="Cerrar video"><X size={18} aria-hidden="true" /></button>}
      </div>
      <figcaption><strong>{video.title}</strong><span>{video.context} · {video.date}</span><a href={video.thumb.originalUrl} target="_blank" rel="noopener noreferrer">Ver en YouTube ↗</a></figcaption>
    </figure>
  );
}
