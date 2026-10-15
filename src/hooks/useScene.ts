import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animates descendants of `ref` by data attribute:
 * - data-parallax[="factor"]: vertical drift scrubbed over the scene (factor scales it; layers at different speeds).
 * - data-tilt[="left"|"right"]: 3D rotation scrubbed by scroll (needs perspective on an ancestor).
 * - data-tilt-pointer: soft tilt following the pointer, fine pointers only.
 * - data-reveal: fade-up once, or staggered on mount when `hero`.
 * Everything is skipped under prefers-reduced-motion.
 */
export function useScene(ref: RefObject<HTMLElement>, hero = false) {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add({ desktop: '(min-width: 800px)', mobile: '(max-width: 799px)', reduce: '(prefers-reduced-motion: reduce)', fine: '(pointer: fine)' }, context => {
      if (context.conditions?.reduce || !ref.current) return;
      const scope = ref.current;
      const amount = context.conditions?.desktop ? 48 : 16;
      scope.querySelectorAll<HTMLElement>('[data-parallax]').forEach(target => {
        const factor = Number(target.dataset.parallax) || 1;
        gsap.fromTo(target, { y: amount * factor }, {
          y: -amount * factor, ease: 'none',
          scrollTrigger: { trigger: scope, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
        });
      });
      scope.querySelectorAll<HTMLElement>('[data-tilt]').forEach(target => {
        const side = target.dataset.tilt === 'left' ? -1 : target.dataset.tilt === 'right' ? 1 : 0;
        gsap.fromTo(target, { rotationX: 10, rotationY: -7 * side }, {
          rotationX: -10, rotationY: 7 * side, ease: 'none',
          scrollTrigger: { trigger: target, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
        });
      });
      const cleanups: (() => void)[] = [];
      if (context.conditions?.fine) scope.querySelectorAll<HTMLElement>('[data-tilt-pointer]').forEach(target => {
        const rx = gsap.quickTo(target, 'rotationX', { duration: 0.7, ease: 'power2.out' });
        const ry = gsap.quickTo(target, 'rotationY', { duration: 0.7, ease: 'power2.out' });
        const move = (event: PointerEvent) => {
          const rect = target.getBoundingClientRect();
          rx(((event.clientY - rect.top) / rect.height - 0.5) * -9);
          ry(((event.clientX - rect.left) / rect.width - 0.5) * 9);
        };
        const leave = () => { rx(0); ry(0); };
        target.addEventListener('pointermove', move);
        target.addEventListener('pointerleave', leave);
        cleanups.push(() => { target.removeEventListener('pointermove', move); target.removeEventListener('pointerleave', leave); });
      });
      const elements = scope.querySelectorAll('[data-reveal]');
      if (hero) {
        gsap.from(elements, { y: 24, opacity: 0, duration: 1.15, stagger: 0.1, ease: 'power3.out', clearProps: 'all' });
      } else {
        elements.forEach(target => gsap.from(target, {
          y: 22, opacity: 0, duration: 0.85, ease: 'power2.out', clearProps: 'all',
          scrollTrigger: { trigger: target, start: 'top 93%', once: true },
        }));
      }
      return () => cleanups.forEach(fn => fn());
    }, ref);
    return () => mm.revert();
  }, [ref, hero]);
}
