import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference) and (pointer: fine)', () => {
      const lenis = new Lenis({ duration: 1.05, smoothWheel: true, anchors: true });
      const update = (time: number) => lenis.raf(time * 1000);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(update);
      return () => {
        gsap.ticker.remove(update);
        lenis.off('scroll', ScrollTrigger.update);
        lenis.destroy();
      };
    });
    let disposed = false;
    const refresh = () => { if (!disposed) ScrollTrigger.refresh(); };
    void document.fonts.ready.then(refresh);
    // Capture image loads: dimensions remain reserved, positions are remeasured.
    window.addEventListener('load', refresh);
    document.addEventListener('load', refresh, true);
    refresh();
    return () => {
      disposed = true;
      window.removeEventListener('load', refresh);
      document.removeEventListener('load', refresh, true);
      mm.revert();
    };
  }, []);
  return <>{children}</>;
}
