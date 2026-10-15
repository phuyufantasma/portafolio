import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ActItem } from '../types/scrollytelling';

export function ArchiveSources({ act }: { act: ActItem }) {
  return (
    <details className="archive-sources" onToggle={() => ScrollTrigger.refresh()}>
      <summary>Notas y fuentes del archivo <span aria-hidden="true">+</span></summary>
      {act.contextNotes && <p>{act.contextNotes}</p>}
      <ul>{act.sources.map(source => (
        <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>
      ))}</ul>
    </details>
  );
}
