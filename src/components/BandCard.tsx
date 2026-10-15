import { useRef } from 'react';
import { Mail } from 'lucide-react';
import { CONTACT, MEDIA } from '../data/media';
import { ArchiveFigure } from './ArchiveFigure';
import { useScene } from '../hooks/useScene';

export const MEMBERS = [
  { name: 'Rodrigo Romero', role: 'Voz / guitarra / piano / composición' },
  { name: 'Catalina Parra', role: 'Voces / piano y teclados en la formación' },
  { name: 'Ignacio Romero', role: 'Bajo / contrabajo' },
  { name: 'Óscar Hernández', role: 'Batería' },
  { name: 'José Rocandio', role: 'Colaboración / percusiones nativas, charango y quena' },
];

export function BandCard() {
  const ref = useRef<HTMLElement>(null);
  useScene(ref);
  return (
    <section ref={ref} id="la-banda" className="band-card" tabIndex={-1} aria-labelledby="la-banda-title">
      <div className="band-card-copy">
        <p className="eyebrow" data-reveal>Ficha</p>
        <h2 id="la-banda-title" className="band-card-title" data-reveal>La banda</h2>
        <dl className="band-facts" data-reveal>
          <div><dt>Ciudad</dt><dd>Chillán, Ñuble, Chile</dd></div>
          <div><dt>Desde</dt><dd>2020</dd></div>
          <div><dt>Sello</dt><dd>Registro Móvil Discográfica</dd></div>
          <div><dt>Discos</dt><dd>Siete, 2020 - 2026</dd></div>
        </dl>
        <div className="members"><h3 className="eyebrow">Quienes le dan cuerpo</h3><dl>{MEMBERS.map((member, i) => <div key={member.name} data-reveal><span aria-hidden="true">0{i + 1}</span><dt>{member.name}</dt><dd>{member.role}</dd></div>)}</dl></div>
        <a className="contact-link" data-reveal href={`mailto:${CONTACT}`}><Mail size={18} aria-hidden="true" /><span>{CONTACT}</span></a>
      </div>
      <ArchiveFigure media={MEDIA.band} className="band-card-image" tilt="right" />
    </section>
  );
}
