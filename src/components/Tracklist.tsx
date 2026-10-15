import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Album } from '../types/scrollytelling';

export function Tracklist({ album }: { album: Album }) {
  const count = album.tracks.length;
  return (
    <details className="tracklist" onToggle={() => ScrollTrigger.refresh()}>
      <summary>Tracklist · {count} {count === 1 ? 'pista' : 'pistas'} <span aria-hidden="true">+</span></summary>
      <ol>{album.tracks.map(track => <li key={track.n}><span>{String(track.n).padStart(2, '0')}</span><span>{track.title}</span><span>{track.duration}</span></li>)}</ol>
    </details>
  );
}
