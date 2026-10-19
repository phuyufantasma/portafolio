import { useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { LOGO, MEDIA } from '../data/media';
import { ALBUM, ALBUMS } from '../data/discography';
import { TIMELINE_ACTS } from '../data/timeline';
import { ArchiveFigure } from './ArchiveFigure';
import { Static } from './Static';
import { useScene } from '../hooks/useScene';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  useScene(ref, true);
  const latest = ALBUM.rebuilt;
  return (
    <header ref={ref} className="hero" id="inicio" tabIndex={-1}>
      <Static className="hero-engraving" seed={11} />
      <ArchiveFigure media={MEDIA.live} className="hero-image" priority showCaption={false} parallax={0.3} />
      <div className="hero-content">
        <p className="eyebrow hero-kicker" data-reveal><span className="signal-mark" /> Un archivo de tierra & ruido <span className="hero-kicker-location">Chillán, Chile</span></p>
        <h1 className="hero-title" data-reveal><span data-parallax="0.15">Phuyu</span>{' '}<em data-parallax="0.35">y la Fantasma</em></h1>
        <div className="hero-story" data-reveal>
          <img className="hero-logo" src={LOGO.src} srcSet={LOGO.srcSet} sizes="150px" width={LOGO.width} height={LOGO.height} alt="Logotipo de Phuyu y la Fantasma: fantasma sobre olas" decoding="async" data-parallax="0.4" />
          <p>Banda de Chillán, Ñuble.<br />Folclor, anticueca y ruido desde 2020.<br /><span>{ALBUMS.length} discos publicados en Registro Móvil, de la habitación al cuarteto.</span></p>
        </div>
        <div className="hero-bottom" data-reveal>
          <a className="enter-link" href={`#${TIMELINE_ACTS[0].id}`}><span>Entrar al archivo<small>De 2026 a 2020</small></span><ArrowDown size={22} aria-hidden="true" /></a>
          <a className="release-link" href={latest.url} target="_blank" rel="noopener noreferrer"><span className="eyebrow">{latest.releaseDate} / nueva edición</span><span>{latest.title}<ArrowUpRight size={16} aria-hidden="true" /></span></a>
        </div>
      </div>
      <div className="hero-photo-credit"><a href={MEDIA.live.source.url} target="_blank" rel="noopener noreferrer">Archivo fotográfico / Wavromance ↗</a></div>
    </header>
  );
}
