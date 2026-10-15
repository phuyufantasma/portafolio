import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import { TIMELINE_ACTS } from '../data/timeline';
import { CONTACT, LOGO, OFFICIAL_LINKS } from '../data/media';

const ENTRIES = [
  ...TIMELINE_ACTS.map(act => ({ id: act.id, number: `0${act.actNumber}`, title: act.year, label: act.label })),
  { id: 'videos', number: '+', title: 'Videos', label: 'archivo audiovisual' },
];

export function ArchiveNavigation() {
  const [active, setActive] = useState(-1);
  const [open, setOpen] = useState(false);
  const progress = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(progress.current, { scaleX: 0, transformOrigin: 'left center' });
      const setProgress = gsap.quickSetter(progress.current, 'scaleX');
      ScrollTrigger.create({ start: 0, end: 'max', onUpdate: self => setProgress(self.progress), onRefresh: self => setProgress(self.progress) });
      ENTRIES.forEach((entry, i) => ScrollTrigger.create({
        trigger: `#${entry.id}`, start: 'top 45%', end: 'bottom 45%',
        onEnter: () => setActive(i), onEnterBack: () => setActive(i),
        onLeaveBack: () => { if (i === 0) setActive(-1); },
      }));
    });
    return () => ctx.revert();
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); button.current?.focus(); } };
    const outside = (event: PointerEvent) => { if (!container.current?.contains(event.target as Node)) setOpen(false); };
    window.addEventListener('keydown', escape);
    window.addEventListener('pointerdown', outside);
    return () => { window.removeEventListener('keydown', escape); window.removeEventListener('pointerdown', outside); };
  }, [open]);
  function choose(id: string) {
    setOpen(false);
    requestAnimationFrame(() => document.getElementById(id)?.focus({ preventScroll: true }));
  }
  const links = (className: string) => (
    <ul className={className}>
      {OFFICIAL_LINKS.map(link => <li key={link.url}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></li>)}
      <li><a href={`mailto:${CONTACT}`}>Contacto</a></li>
    </ul>
  );
  const position = active < 0 ? 'PYLF / introducción' : active < TIMELINE_ACTS.length ? `${TIMELINE_ACTS[active].year} / ${TIMELINE_ACTS[active].label}` : ENTRIES[active].title;
  return (
    <>
      <a className="skip-link" href={`#${TIMELINE_ACTS[0].id}`}>Ir al relato</a>
      <nav ref={container} className="archive-nav" aria-label="Navegación del archivo">
        <a className="archive-wordmark" href="#inicio" aria-label="Phuyu y la Fantasma: volver al inicio"><img src={LOGO.src} srcSet={LOGO.srcSet} sizes="44px" width={LOGO.width} height={LOGO.height} alt="" /><span className="wordmark-name">Phuyu y la Fantasma</span></a>
        <nav className="nav-links-wrap" aria-label="Plataformas oficiales">{links('nav-links')}</nav>
        <button ref={button} className="index-trigger" aria-expanded={open} aria-controls="act-index" onClick={() => setOpen(!open)}><span>Índice</span>{open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}</button>
        <div className="reading-progress" aria-hidden="true"><div ref={progress} /></div>
        <div id="act-index" className="act-index" hidden={!open} data-lenis-prevent>
          <p className="eyebrow">De 2026 a 2020 / una raíz</p>
          <ol>{ENTRIES.map((entry, i) => <li key={entry.id}><a href={`#${entry.id}`} onClick={() => choose(entry.id)} aria-current={active === i ? 'location' : undefined}><span className="index-number">{entry.number}</span><span><strong>{entry.title}</strong><small>{entry.label}</small></span><span aria-hidden="true">↘</span></a></li>)}</ol>
          <p className="eyebrow index-links-title">Plataformas y contacto</p>
          {links('index-links')}
        </div>
      </nav>
      <nav className="act-rail" aria-label="Acceso rápido a los actos">{TIMELINE_ACTS.map((act, i) => <a key={act.id} href={`#${act.id}`} onClick={() => choose(act.id)} title={`${act.year} · ${act.label}`} aria-label={`${act.year} · ${act.label}`} aria-current={active === i ? 'location' : undefined}><span aria-hidden="true">0{act.actNumber}</span><i /></a>)}</nav>
      <div className="archive-position eyebrow" aria-hidden="true"><span>{position}</span><span className="position-rule" /> Tierra / ruido / memoria</div>
    </>
  );
}
