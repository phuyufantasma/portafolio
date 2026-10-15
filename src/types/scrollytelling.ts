export interface ArchiveLink { label: string; url: string }

export interface ArchiveImage {
  src: string;
  srcSet: string;
  originalUrl: string;
  source: ArchiveLink;
  width: number;
  height: number;
  alt: string;
  caption: string;
  position?: string;
  blendMode?: 'normal' | 'luminosity' | 'overlay';
}

export interface Track { n: number; title: string; duration: string }

export interface Album {
  key: string;
  title: string;
  releaseDate: string;
  catalog: string;
  format: string;
  /** Bandcamp album id for the official embedded player. */
  albumId: string;
  url: string;
  cover: ArchiveImage;
  tracks: Track[];
}

export interface Video {
  id: string;
  title: string;
  context: string;
  date: string;
  channel: ArchiveLink;
  thumb: ArchiveImage;
}

/** Three accents: large glow, secondary glow, fine trace. `light` flips text to ink. */
export interface Palette { base: string; accents: [string, string, string]; light?: boolean }

export interface ActItem {
  id: `acto-${number}`;
  actNumber: number;
  year: '2020' | '2021' | '2023' | '2024' | '2025' | '2026';
  label: string;
  tagline: string;
  narrative: string[];
  contextNotes?: string;
  quote?: { text: string; author: string; source: ArchiveLink };
  albums?: Album[];
  image: ArchiveImage;
  companionImage?: ArchiveImage;
  sources: ArchiveLink[];
  palette: Palette;
  /** Second half of a split backdrop (díptico). */
  paletteB?: Palette;
  motif: 'mist' | 'room' | 'roots' | 'pacific' | 'mycelium' | 'live' | 'cantata' | 'reconstituted' | 'epilogue';
}
