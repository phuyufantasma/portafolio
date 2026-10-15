import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ALL_VIDEOS } from '../data/videos';
import { YOUTUBE } from '../data/media';
import { VideoEmbed } from './VideoEmbed';
import { useScene } from '../hooks/useScene';

export function VideoArchive() {
  const ref = useRef<HTMLElement>(null);
  useScene(ref);
  return (
    <section ref={ref} id="videos" className="video-archive" tabIndex={-1} aria-labelledby="videos-title">
      <div className="act-topline"><span className="eyebrow">Archivo audiovisual</span><a className="eyebrow" href={YOUTUBE.url} target="_blank" rel="noopener noreferrer">Canal oficial ↗</a></div>
      <h2 id="videos-title" className="section-title" data-reveal>Videos</h2>
      <p className="section-lede" data-reveal>Registros en vivo, discos completos y videos oficiales, del más reciente al más antiguo. Cada video se carga solo cuando lo pides. <a href={YOUTUBE.url} target="_blank" rel="noopener noreferrer">Ver el canal completo <ArrowUpRight size={14} aria-hidden="true" /></a></p>
      <div className="video-grid">{ALL_VIDEOS.map(video => <VideoEmbed key={video.id} video={video} scope="videos" />)}</div>
    </section>
  );
}
