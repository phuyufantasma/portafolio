import type { ArchiveImage, ArchiveLink } from '../types/scrollytelling';
import { file } from './files';

export const INTERVIEW: ArchiveLink = {
  label: 'Wavromance · entrevista a Rodrigo Romero, 22.03.2026',
  url: 'https://wavromance.substack.com/p/todo-esta-conectado-phuyu-y-la-fantasma',
};
export const INSTAGRAM: ArchiveLink = { label: 'Instagram de la banda', url: 'https://www.instagram.com/phuyu_fantasma/' };
export const YOUTUBE: ArchiveLink = { label: 'Canal oficial en YouTube', url: 'https://www.youtube.com/@phuyuylafantasma' };
export const CONTACT = 'phuyufantasma@gmail.com';

export const ALBUM_URLS = {
  patio: 'https://registromovil.bandcamp.com/album/el-patio-de-los-callaos-remasterizado',
  original: 'https://registromovil.bandcamp.com/album/anticuecas-subterr-neas',
  pacifico: 'https://registromovil.bandcamp.com/album/el-pac-fico-albergar-nuestros-huesos',
  a: 'https://registromovil.bandcamp.com/album/a-tetralog-a-de-bichos-y-setas',
  b: 'https://registromovil.bandcamp.com/album/b-d-cimas-de-phuyu-y-la-fantasma',
  cantata: 'https://registromovil.bandcamp.com/album/cantata-del-desierto-verde-ep',
  rebuilt: 'https://registromovil.bandcamp.com/album/anticuecas-subterr-neas-reconstruidas',
};

export function artwork(id: keyof typeof ALBUM_URLS, artId: string, title: string, width = 3000): ArchiveImage {
  return {
    src: file(`${id}-1200`),
    srcSet: `${file(`${id}-960`)} 960w, ${file(`${id}-1200`)} 1200w, ${file(`${id}-2400`)} ${Math.min(width, 2400)}w`,
    originalUrl: `https://f4.bcbits.com/img/a${artId}_0.jpg`,
    source: { label: 'Registro Móvil / Bandcamp', url: ALBUM_URLS[id] },
    width, height: width,
    alt: `Portada oficial de ${title}, de Phuyu y la Fantasma`,
    caption: `${title} / arte de la edición publicada por Registro Móvil.`,
    blendMode: 'normal',
  };
}

/** Photos from the band's Instagram: the profile doesn't state author or date. */
function instagram(slug: string, alt: string, caption: string, credit: string, width = 1440, height = 1440, position?: string): ArchiveImage {
  return {
    src: file(`ig-${slug}-1440`),
    srcSet: `${file(`ig-${slug}-960`)} 960w, ${file(`ig-${slug}-1440`)} ${width}w`,
    originalUrl: INSTAGRAM.url, source: { label: `Fotografía: @${credit}`, url: `https://www.instagram.com/${credit}/` }, width, height, alt,
    caption: `${caption} / fotografía: @${credit}. Archivo Instagram de la banda.`,
    position, blendMode: 'normal',
  };
}

export function videoThumb(id: string, alt: string, caption: string, width = 1280): ArchiveImage {
  const h = Math.round(width * 9 / 16);
  return {
    src: file(`video-${id}-1280`),
    srcSet: `${file(`video-${id}-640`)} 640w, ${file(`video-${id}-1280`)} ${width}w`,
    originalUrl: `https://www.youtube.com/watch?v=${id}`, source: YOUTUBE,
    width, height: h, alt, caption, blendMode: 'normal',
  };
}

export const MEDIA = {
  live: {
    src: file('live-2400'),
    srcSet: `${file('live-960')} 960w, ${file('live-2400')} 2400w`,
    originalUrl: 'https://substack-post-media.s3.amazonaws.com/public/images/59f4bc35-1d00-4831-999a-5d65d90f5a17_4750x3167.jpeg',
    source: INTERVIEW, width: 4750, height: 3167,
    alt: 'Rodrigo Romero canta al micrófono y toca guitarra eléctrica en un concierto de Phuyu y la Fantasma',
    caption: 'Rodrigo Romero en vivo / fotografía publicada por Wavromance, 2026. Autor y fecha de toma no indicados.',
    position: '50% 42%', blendMode: 'luminosity',
  } satisfies ArchiveImage,
  band: {
    src: file('band-2400'),
    srcSet: `${file('band-960')} 960w, ${file('band-2400')} 2400w`,
    originalUrl: 'https://substack-post-media.s3.amazonaws.com/public/images/f31380fa-ce84-47ec-a4b5-4ae4e72a53c8_5923x3949.jpeg',
    source: { label: 'Fotografía: @unlenteroro', url: 'https://www.instagram.com/unlenteroro/' }, width: 5923, height: 3949,
    alt: 'Catalina Parra, Rodrigo Romero, Óscar Hernández e Ignacio Romero juntos en el escenario de Rockódromo 2024',
    caption: 'El cuarteto en Rockódromo, 2024 / fotografía: @unlenteroro. Publicada por Wavromance.',
    position: '50% 65%', blendMode: 'luminosity',
  } satisfies ArchiveImage,
  estrellas: instagram('estrellas', 'Los cuatro integrantes de Phuyu y la Fantasma de noche, bajo un cielo estrellado', 'La banda bajo las estrellas', 'xavii.romf', 1080, 1080),
  bateria: instagram('bateria', 'Baterista de Phuyu y la Fantasma tocando bajo luz magenta y azul', 'Batería en vivo', 'pabloiob.ph'),
  ladrillo: instagram('ladrillo', 'Guitarrista de Phuyu y la Fantasma frente a un muro de ladrillo', 'Guitarra frente al muro', 'wladdrums', 1080, 1350, '50% 30%'),
  neon: instagram('neon', 'Phuyu y la Fantasma en vivo bajo luces de neón', 'La banda en escena', 'pabloiob.ph'),
  voz: instagram('voz', 'Cantante de Phuyu y la Fantasma al micrófono, fotografía en blanco y negro', 'Voz y guitarra', 'xavii.romf', 1080, 1080),
  collage2: instagram('collage2', 'Segundo collage en blanco y negro de Phuyu y la Fantasma en vivo', 'Collage de escena II', 'las.fotos.del.popin'),
};

/** Band logo supplied by the user (black line art), recolored to paper for the dark site. */
export const LOGO = { src: file('logo-320'), srcSet: `${file('logo-320')} 320w, ${file('logo-960')} 960w`, width: 755, height: 960 };

export const OFFICIAL_LINKS: ArchiveLink[] = [
  { label: 'Bandcamp', url: 'https://registromovil.bandcamp.com/music' },
  { label: 'Spotify', url: 'https://open.spotify.com/artist/5CfGxPnJI6v2I76sJO1WqB' },
  { label: 'YouTube', url: YOUTUBE.url },
  { label: 'Instagram', url: INSTAGRAM.url },
  { label: 'RateYourMusic', url: 'https://rateyourmusic.com/artist/phuyu-y-la-fantasma' },
  { label: 'Registro Móvil', url: 'https://registromovil.cl' },
];
