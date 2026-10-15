import { useRef } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import type { ActItem } from '../types/scrollytelling';
import { CONTACT, MEDIA } from '../data/media';
import { Static } from './Static';
import { ArchiveFigure } from './ArchiveFigure';
import { ArchiveSources } from './ArchiveSources';
import { useScene } from '../hooks/useScene';

export function Manifesto({ act }: { act: ActItem }) {
  const ref = useRef<HTMLElement>(null);
  useScene(ref);
  const words = act.tagline.split(' ');
  return (
    <section ref={ref} id={act.id} className="manifesto" tabIndex={-1} aria-labelledby={`${act.id}-title`}>
      <Static className="manifesto-engraving" seed={23} />
      <div className="act-topline"><span className="eyebrow">0{act.actNumber} / {act.label.toLowerCase()}</span><span className="eyebrow">La última palabra es de la música</span></div>
      <div className="manifesto-intro">
        <div><h2 className="act-heading" id={`${act.id}-title`} data-reveal>{act.year}</h2><p className="manifesto-title" data-reveal>{words.slice(0, 3).join(' ')}<br /><em>{words.slice(3).join(' ')}</em></p></div>
        <div className="manifesto-copy narrative">{act.narrative.map((text, i) => <p data-reveal key={i}>{text}</p>)}<span className="eyebrow">Manifiesto / lectura editorial</span></div>
      </div>
      <div className="manifesto-body">
        <ArchiveFigure media={act.image} className="manifesto-image" tilt="left" />
        <ArchiveFigure media={MEDIA.collage2} className="manifesto-image manifesto-image--second" tilt="right" parallax={1.4} />
      </div>
      <ArchiveSources act={act} />
      <footer className="colophon"><span>Phuyu y la Fantasma<br /><span>Chillán, Ñuble, Chile / 2020 - 2026</span></span><a className="colophon-contact" href={`mailto:${CONTACT}`}><Mail size={16} aria-hidden="true" />{CONTACT}</a><span>Archivo editorial independiente<br /><span>Fuentes y créditos en cada acto</span></span><a href="#inicio">Volver a la superficie<ArrowUp size={18} aria-hidden="true" /></a></footer>
    </section>
  );
}
