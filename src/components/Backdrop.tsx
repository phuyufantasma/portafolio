import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Palette } from '../types/scrollytelling';

gsap.registerPlugin(ScrollTrigger);

export interface Scene { id: string; palette: Palette; paletteB?: Palette }

const vars = ({ palette, paletteB = palette }: Scene) => ({
  '--bg-base': palette.base, '--bg-a': palette.accents[0], '--bg-b': palette.accents[1], '--bg-c': palette.accents[2],
  '--bg2-base': paletteB.base, '--bg2-a': paletteB.accents[0], '--bg2-b': paletteB.accents[1], '--bg2-c': paletteB.accents[2],
});

/**
 * Fixed full-viewport layer with two static children, `from` (previous scene) and `to` (next scene).
 * While a section crosses the viewport only the opacity of `to` changes, a compositor-only property;
 * the gradients are plain CSS set per transition, so a scroll frame never re-rasterizes them.
 */
export function Backdrop({ scenes }: { scenes: Scene[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const [from, to] = Array.from(el.children) as HTMLElement[];
    gsap.set([el, from, to], vars(scenes[0]));
    gsap.set(to, { opacity: 0 });
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    const ctx = gsap.context(() => {
      scenes.forEach((scene, i) => {
        if (i === 0) return;
        // Palettes and opacity are written together so that, on an anchor jump past several
        // transitions, every trigger that fires leaves the layers in a consistent state.
        ScrollTrigger.create({
          trigger: `#${scene.id}`, start: 'top 80%', end: 'top 20%',
          onUpdate: self => { gsap.set(from, vars(scenes[i - 1])); gsap.set([el, to], vars(scene)); gsap.set(to, { opacity: self.progress }); },
        });
        ScrollTrigger.create({
          trigger: `#${scene.id}`, start: 'top 50%', end: 'bottom 50%',
          onToggle: self => {
            if (!self.isActive) return;
            document.documentElement.toggleAttribute('data-light', !!scene.palette.light);
            meta?.setAttribute('content', scene.palette.base);
          },
        });
      });
    });
    return () => { ctx.revert(); document.documentElement.removeAttribute('data-light'); };
  }, [scenes]);
  return <div ref={ref} className="backdrop" aria-hidden="true"><div /><div /></div>;
}
