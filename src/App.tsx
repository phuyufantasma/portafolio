import { useEffect } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Backdrop, type Scene } from './components/Backdrop';
import { NoiseOverlay } from './components/NoiseOverlay';
import { Hero } from './components/Hero';
import { News } from './components/News';
import { BandCard } from './components/BandCard';
import { ActSection } from './components/ActSection';
import { VideoArchive } from './components/VideoArchive';
import { Manifesto } from './components/Manifesto';
import { ArchiveNavigation } from './components/ArchiveNavigation';
import { EARTH, TIMELINE_ACTS } from './data/timeline';

const acts = TIMELINE_ACTS.slice(0, -1);
const epilogue = TIMELINE_ACTS[TIMELINE_ACTS.length - 1];
/** Backdrop scenes in page order; each id must be a section in <main>. */
const SCENES: Scene[] = [
  { id: 'inicio', palette: EARTH },
  { id: 'la-banda', palette: EARTH },
  ...acts.map(act => ({ id: act.id, palette: act.palette, paletteB: act.paletteB })),
  { id: 'videos', palette: EARTH },
  { id: epilogue.id, palette: epilogue.palette },
];

export default function App() {
  // Child effects (scroll animations) have run by now: reveal the prerendered page without a flash.
  useEffect(() => { document.getElementById('root')?.removeAttribute('data-ssr'); }, []);
  return (
    <SmoothScroll>
      <Backdrop scenes={SCENES} />
      <NoiseOverlay />
      <ArchiveNavigation />
      <main>
        <Hero />
        <News />
        <BandCard />
        {acts.map((act, index) => <ActSection key={act.id} act={act} index={index} />)}
        <VideoArchive />
        <Manifesto act={epilogue} />
      </main>
    </SmoothScroll>
  );
}
