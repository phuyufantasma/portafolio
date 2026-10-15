import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Headphones, X } from 'lucide-react';
import type { Album } from '../types/scrollytelling';
import { useEmbed } from '../hooks/useEmbed';

/** Official Bandcamp player, mounted only after the visitor asks for it; closing unmounts it.
 *  `scope` keeps the act player and the discography player of the same album independent. */
export function AlbumPlayer({ album, scope, light = false, compact = false }: { album: Album; scope: string; light?: boolean; compact?: boolean }) {
  const key = `${scope}-${album.key}`;
  const { open, show, hide } = useEmbed(`album-${key}`);
  const [loading, setLoading] = useState(true);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    setLoading(true);
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { hide(); trigger.current?.focus(); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, hide]);
  const colors = light ? 'bgcol=D7CDA6/linkcol=9C6772' : 'bgcol=151611/linkcol=c57e60';
  return (
    <div className={`album-player ${open ? 'is-open' : ''} ${compact ? 'album-player--compact' : ''}`}>
      <button ref={trigger} className="play-button" aria-expanded={open} aria-controls={open ? `player-${key}` : undefined} onClick={() => (open ? hide() : show())}>
        <span className="record-grooves" aria-hidden="true" />
        <span className="play-button-text"><small>{album.releaseDate} · {album.catalog}</small><strong>{open ? 'Cerrar escucha' : compact ? 'Escuchar' : `Escuchar ${album.title}`}</strong>{!compact && <span>{album.format}</span>}</span>
        <Headphones size={18} aria-hidden="true" />
      </button>
      {open && (
        <div id={`player-${key}`} className="player-panel" role="region" aria-label={`Reproductor de ${album.title}`}>
          <div className="player-head"><p role="status">{loading ? 'Cargando el reproductor oficial…' : 'Reproductor oficial de Bandcamp. Pulsa reproducir para escuchar.'}</p><button ref={closeButton} className="icon-button" onClick={() => { hide(); trigger.current?.focus(); }} aria-label="Cerrar y detener el reproductor"><X size={18} aria-hidden="true" /></button></div>
          <iframe title={`Escuchar ${album.title} en Bandcamp`} src={`https://bandcamp.com/EmbeddedPlayer/album=${album.albumId}/size=large/${colors}/tracklist=false/artwork=small/transparent=true/`} height="120" allow="autoplay" onLoad={() => setLoading(false)} />
          <a className="player-fallback" href={album.url} target="_blank" rel="noopener noreferrer">Si no carga, escuchar en Bandcamp <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      )}
    </div>
  );
}
