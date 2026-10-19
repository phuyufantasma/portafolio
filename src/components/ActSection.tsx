import { useRef, type CSSProperties } from 'react';
import type { ActItem } from '../types/scrollytelling';
import { ArchiveFigure } from './ArchiveFigure';
import { ArchiveSources } from './ArchiveSources';
import { AlbumPlayer } from './AlbumPlayer';
import { Tracklist } from './Tracklist';
import { Static } from './Static';
import { useScene } from '../hooks/useScene';

export function ActSection({ act, index }: { act: ActItem; index: number }) {
  const ref = useRef<HTMLElement>(null);
  useScene(ref);
  const reverse = index % 2 === 1;
  const split = !!act.paletteB;
  const light = !!act.palette.light;
  const style = { '--act-accent': act.palette.accents[0], '--act-base': act.palette.base, '--act-accent-b': act.paletteB?.accents[0] } as CSSProperties;
  return (
    <section ref={ref} id={act.id} tabIndex={-1} aria-labelledby={`${act.id}-title`}
      className={`act act--${act.motif} ${reverse ? 'act--reverse' : ''} ${split ? 'act--split' : ''} ${light ? 'act--light' : ''}`} style={style}>
      <div className="act-topline"><span className="eyebrow">{String(act.actNumber).padStart(2, '0')} / {act.label}</span><span className="eyebrow">{Number(act.year) <= 2021 ? 'Chillán' : 'Concepción'} · {act.year}</span></div>
      <Static className="act-engraving" seed={act.actNumber + 1} />
      <div className="act-layout">
        <div className="act-copy">
          <h2 id={`${act.id}-title`} className="act-heading" data-reveal>{act.year}</h2>
          <p className="act-tagline" data-reveal>{act.tagline}</p>
          <div className="narrative">{act.narrative.map((paragraph, i) => <p key={i} data-reveal>{paragraph}</p>)}</div>
          {act.quote && <blockquote className="pull-quote" data-reveal><p>«{act.quote.text}»</p><cite><a href={act.quote.source.url} target="_blank" rel="noopener noreferrer">{act.quote.author} ↗</a></cite></blockquote>}
          {act.albums?.map(album => <div key={album.key} className="act-album" data-reveal><AlbumPlayer album={album} scope={act.id} light={light} /><Tracklist album={album} /></div>)}
          <ArchiveSources act={act} />
        </div>
        <div className={`act-visual ${act.companionImage ? 'act-visual--pair' : ''}`}>
          <ArchiveFigure media={act.image} tilt={split ? 'left' : reverse ? 'left' : 'right'} />
          {act.companionImage && <ArchiveFigure media={act.companionImage} className="companion-figure" tilt={split ? 'right' : 'center'} parallax={1.3} />}
          <span className="visual-registration" aria-hidden="true">+ &nbsp; PYLF / {String(act.actNumber).padStart(2, '0')} &nbsp; +</span>
        </div>
      </div>
    </section>
  );
}
