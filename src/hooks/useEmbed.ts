import { useMemo, useSyncExternalStore } from 'react';

/** One third-party iframe (Bandcamp or YouTube) mounted at a time, site-wide. */
let current = '';
const listeners = new Set<() => void>();
function set(id: string) { current = id; listeners.forEach(listener => listener()); }
const subscribe = (listener: () => void) => { listeners.add(listener); return () => { listeners.delete(listener); }; };

export function useEmbed(id: string) {
  const open = useSyncExternalStore(subscribe, () => current === id, () => false);
  const actions = useMemo(() => ({ show: () => set(id), hide: () => { if (current === id) set(''); } }), [id]);
  return { open, ...actions };
}
