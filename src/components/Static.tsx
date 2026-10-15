/**
 * Deterministic, quiet "static": a few VHS tear bars and scattered ticks.
 * Seeded so the same section always draws the same noise. A handful of plain shapes, no
 * SVG fills, filters or blend modes: those showed up as scroll jank in profiling.
 */
export function Static({ className = '', seed = 1 }: { className?: string; seed?: number }) {
  let s = seed * 7919 + 104729;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const bars = Array.from({ length: 9 }, () => ({ y: rnd() * 800, h: 1 + rnd() * rnd() * 18, x: rnd() * 320 - 120, w: 260 + rnd() * 720, o: .15 + rnd() * .45 }));
  const ticks = Array.from({ length: 18 }, () => ({ x: rnd() * 800, y: rnd() * 800, l: 5 + rnd() * 14, v: rnd() > .5 }));
  return (
    <svg className={`static ${className}`} viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {bars.map((b, i) => <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill="currentColor" opacity={b.o} />)}
      <g stroke="currentColor" strokeWidth="1" opacity=".7">
        {ticks.map((t, i) => <line key={i} x1={t.x} y1={t.y} x2={t.v ? t.x : t.x + t.l} y2={t.v ? t.y + t.l : t.y} />)}
        <path d="M60 60v24M48 72h24M740 700v24M728 712h24" />
      </g>
    </svg>
  );
}
