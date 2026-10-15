import type { ActItem, Palette } from '../types/scrollytelling';
import { ALBUM } from './discography';
import { INTERVIEW, INSTAGRAM, MEDIA, YOUTUBE } from './media';

const ROCKAXIS = {
  label: 'Rockaxis · reseña, 02.10.2026',
  url: 'https://www.rockaxis.com/rock/disco/52153/anticuecas-subterraneas-reconstruidas--phuyu-y-la-fantasma/',
};
const LUCUMA = { label: 'Lúcuma · el díptico y la antropofagia', url: 'https://lucumalucuma.com/resenas-cpt/phuyu-y-la-fantasma-a-tetralogia-de-bichos-y-setas/' };
const notes = (key: keyof typeof ALBUM, label: string) => ({ label: `Registro Móvil · ${label}`, url: ALBUM[key].url });

/** Measured on the cover art; see PLAN §1.2. */
export const EARTH: Palette = { base: '#11120f', accents: ['#324035', '#2a2d25', '#9c442b'] };
const PALETTES = {
  mist: EARTH,
  patio: { base: '#121212', accents: ['#83477B', '#5F4B5C', '#F7E7F9'] },
  original: { base: '#0C0C08', accents: ['#13BB91', '#03F7E8', '#5a2a2a'] },
  pacifico: { base: '#D7CDA6', accents: ['#DFB550', '#CB9FB5', '#9C6772'], light: true },
  a: { base: '#090607', accents: ['#531B31', '#9A3A60', '#ADA144'] },
  b: { base: '#050608', accents: ['#354652', '#426596', '#B8AD4B'] },
  live: { base: '#11120f', accents: ['#9c442b', '#3a2a3a', '#e7dfcd'] },
  cantata: { base: '#191513', accents: ['#53341E', '#B45E18', '#DE9320'] },
  rebuilt: { base: '#141312', accents: ['#59B79B', '#60DAA2', '#B5DECB'] },
} satisfies Record<string, Palette>;

const ACTS: ActItem[] = [
  {
    id: 'acto-0', actNumber: 0, year: '2020', label: 'El origen', motif: 'mist', palette: PALETTES.mist,
    tagline: 'Phuyu: nube, niebla.',
    narrative: [
      'Phuyu significa nube o niebla en quechua. En Chillán, durante el confinamiento de 2020, Rodrigo Romero comienza un proyecto solitario. La habitación es refugio, estudio y lugar de búsqueda: volver al folclor para reconocer una identidad que se estaba moviendo bajo sus pies.',
      'La obra de Violeta Parra abre un camino. En sus anticuecas, la guitarra permite torcer las expectativas del baile y escuchar la tradición como una fuerza experimental. De esa inquietud nace Phuyu y la Fantasma.',
    ],
    contextNotes: 'La fotografía pertenece al archivo posterior de la banda en Instagram; acompaña el relato de origen y no documenta el confinamiento.',
    image: MEDIA.estrellas,
    sources: [INTERVIEW, { label: 'Glosario quechua · nube / niebla', url: 'https://www.curriculumnacional.cl/614/articles-134497_recurso_pdf.pdf' }, INSTAGRAM],
  },
  {
    id: 'acto-1', actNumber: 1, year: '2020', label: 'La habitación', motif: 'room', palette: PALETTES.patio,
    tagline: 'El Patio de los Calla’os',
    narrative: [
      'El primer disco se publica el 9 de octubre de 2020. El Patio de los Calla’os lleva el encierro a una grabación doméstica: charango, guitarra, bajo, sintetizadores y ritmos construidos golpeando objetos de la casa y haciendo beatbox.',
      'El folclor aparece como una memoria que se puede intervenir. La búsqueda que inaugura este dormitorio encontrará en la anticueca de Violeta una manera de romper la métrica predecible y de hacer sitio a la inquietud, el duelo y la disonancia.',
    ],
    quote: { text: 'Todo ha sido un trabajo individual de cuarentena', author: 'Rodrigo Romero · notas del disco, 2020', source: notes('patio', 'notas de El Patio') },
    albums: [ALBUM.patio],
    image: ALBUM.patio.cover,
    sources: [notes('patio', 'edición, fecha y créditos'), INTERVIEW],
  },
  {
    id: 'acto-2', actNumber: 2, year: '2021', label: 'La raíz subterránea', motif: 'roots', palette: PALETTES.original,
    tagline: 'Anticuecas Subterráneas',
    narrative: [
      'El 27 de mayo de 2021 aparece Anticuecas Subterráneas. Rodrigo registra el álbum en solitario y a baja fidelidad, como un ensayo: guitarras distorsionadas, bajo y batería al servicio de la forma de la anticueca.',
      'Registro Móvil publica la obra en digital y también en cassette y CD. Las canciones nacen en una habitación, pero ya contienen una posibilidad colectiva: llevar esa guitarra de anticueca al cuerpo de una banda.',
    ],
    quote: { text: 'grabado como si fuese un ensayo, para mantener la intimidad de baja fidelidad con que las composiciones de Violeta fueron grabadas en su momento', author: 'Rodrigo Romero · notas del disco, 2021', source: notes('original', 'notas de Anticuecas') },
    albums: [ALBUM.original],
    image: ALBUM.original.cover,
    sources: [notes('original', 'Anticuecas originales'), INTERVIEW],
  },
  {
    id: 'acto-3', actNumber: 3, year: '2023', label: 'El Pacífico', motif: 'pacific', palette: PALETTES.pacifico,
    tagline: 'El Pacífico Albergará Nuestros Huesos',
    narrative: [
      'El 2 de junio de 2023 Registro Móvil publica el EP El Pacífico Albergará Nuestros Huesos. Son canciones grabadas después de Anticuecas y guardadas durante un año, mientras empezaba la producción de un nuevo disco con Ignacio y Óscar, los nuevos integrantes.',
      'Rodrigo las describe como más suaves que las de Anticuecas, pero más detalladas y barrocas: una búsqueda orquestal y progresiva que mantiene la esencia folclórica, con leitmotivs y versos que se repiten entre las cinco canciones. Con este EP se cierra el ciclo solista y comienza la fase de banda: junto a Rodrigo, Catalina Parra en voces y piano; Ignacio Romero en bajo; Óscar Hernández en batería.',
    ],
    quote: { text: 'cerrar el ciclo “solista” de Phuyu y poder entrar a la fase banda', author: 'Rodrigo Romero · notas del EP, 2023', source: notes('pacifico', 'notas de El Pacífico') },
    albums: [ALBUM.pacifico],
    image: ALBUM.pacifico.cover, companionImage: MEDIA.ladrillo,
    sources: [notes('pacifico', 'EP, fecha y créditos'), INTERVIEW, { label: 'Las Dunas Records · del solista al cuarteto', url: 'https://lasdunasrecords.com/blogs/media/phuyu-y-la-fantasma-a-tetralogia-de-bichos-y-setas' }],
  },
  {
    id: 'acto-4', actNumber: 4, year: '2024', label: 'El micelio', motif: 'mycelium', palette: PALETTES.a, paletteB: PALETTES.b,
    tagline: 'La Antropofagia Nos Une',
    narrative: [
      'Dos cuerpos para una misma obra: A| Tetralogía de Bichos y Setas y B| Décimas de Phuyu y la fantasma. El díptico de 2024 es el primer disco grabado como banda. El lado A es un disco de cueca en cuatro pies de tres canciones, separados por interludios; el lado B, una sola pista de más de treinta minutos narrada en décimas.',
      'Insectos, hongos y relaciones simbióticas atraviesan una crítica a la privatización y a las estructuras de poder. Las Décimas cuentan la historia de Phuyu, una niña en un mundo donde los océanos consumieron los continentes, y su encuentro con la fantasma de un charango de quirquincho. Ambos lados retoman temas y leitmotivs de El Pacífico y cierran una etapa.',
    ],
    quote: { text: 'Es un disco de cueca propiamente tal, ya que cada canción está compuesta siguiendo la estructura clásica de este género', author: 'Rodrigo Romero · notas de Tetralogía, 2024', source: notes('a', 'notas del lado A') },
    albums: [ALBUM.a, ALBUM.b],
    image: ALBUM.a.cover, companionImage: ALBUM.b.cover,
    sources: [notes('a', 'lado A, 18.09.2024'), notes('b', 'lado B, 22.11.2024'), LUCUMA],
  },
  {
    id: 'acto-5', actNumber: 5, year: '2025', label: 'El registro vivo', motif: 'live', palette: PALETTES.live,
    tagline: 'La banda en escena.',
    narrative: [
      'En septiembre de 2025, La Vitrola registra a Phuyu y la Fantasma en Chiguayante. La sesión, publicada en febrero de 2026, acerca la voz, las cuerdas y el espacio: Nunca pudo ser/Nunca será.',
      'El canal oficial conserva registros anteriores en vivo: El Gavilán de Violeta Parra y Giro Argumental con Javiera Electra en 2023; Coloñal, Erizos/Acorazados y la sesión en Espacio Elefante en 2024. Las fotografías de este tramo provienen del archivo de Instagram de la banda.',
    ],
    contextNotes: 'Las fechas de los videos son las de publicación en YouTube. Los fotogramas y fotografías no indican autor; se enlazan a su fuente.',
    image: MEDIA.voz, companionImage: MEDIA.bateria,
    sources: [{ label: 'La Vitrola · Nunca será / Chiguayante', url: 'https://www.youtube.com/watch?v=KA8joI1tEMg' }, YOUTUBE, INSTAGRAM],
  },
  {
    id: 'acto-6', actNumber: 6, year: '2026', label: 'La cantata', motif: 'cantata', palette: PALETTES.cantata,
    tagline: 'Cantata del Desierto Verde',
    narrative: [
      'El 15 de febrero de 2026 llega Cantata del Desierto Verde. El EP enfrenta la devastación del negocio forestal desde la memoria y el folclor: preludio, aria, coro, recitativo y pregón, con charango, cuatro venezolano, quena, guitarrón chileno, bombo legüero y kultrun.',
      'José Rocandio aporta quenas, guitarrón y percusiones; Ignacio Romero, bajo y contrabajo; Catalina Parra, voz. Ignacio Herrera firma el arte de portada. Una semana después del lanzamiento, la banda publica el disco completo en su canal.',
    ],
    quote: { text: 'Este disco nace como un acto de memoria', author: 'Rodrigo Romero · notas del EP, 2026', source: notes('cantata', 'notas de la Cantata') },
    albums: [ALBUM.cantata],
    image: ALBUM.cantata.cover,
    sources: [notes('cantata', 'fecha y créditos'), INTERVIEW],
  },
  {
    id: 'acto-7', actNumber: 7, year: '2026', label: 'La reconstrucción', motif: 'reconstituted', palette: PALETTES.rebuilt,
    tagline: 'El sonido de banda en vivo, cinco años después.',
    narrative: [
      '1 de octubre de 2026. Anticuecas Subterráneas regresa reconstruido por la banda completa, grabado en vivo en los estudios de DuocUC. La obra que Rodrigo había grabado a solas en 2021 recoge ahora cinco años de crecimiento compartido.',
      'Bajo y batería sostienen un muro eléctrico. Las voces, el piano y las percusiones nativas de José Rocandio, pandero, kaskawilla y chajcha, abren nuevas texturas. El disco suma El Gavilán de Violeta Parra, casi trece minutos que la banda venía tocando en vivo desde 2023.',
    ],
    contextNotes: 'El título oficial del sello es «Anticuecas Subterráneas (Reconstruidas)». Los créditos del álbum asignan el piano a Rodrigo Romero y la voz a Catalina Parra.',
    quote: { text: 'Aquí está la mejor versión de estas canciones', author: 'Rodrigo Romero · notas del disco, 2026', source: notes('rebuilt', 'notas de Reconstruidas') },
    albums: [ALBUM.rebuilt],
    image: ALBUM.rebuilt.cover, companionImage: MEDIA.neon,
    sources: [notes('rebuilt', 'lanzamiento y créditos'), ROCKAXIS],
  },
  {
    id: 'acto-8', actNumber: 8, year: '2026', label: 'El epílogo', motif: 'epilogue', palette: EARTH,
    tagline: 'De una habitación a una banda.',
    narrative: [
      'De una habitación en Chillán a una obra compartida. La historia de Phuyu y la Fantasma se escucha en esa transformación: una tradición que cambia de manos, se contamina de ruido y encuentra otras formas de reunirse.',
      'Esta lectura editorial termina donde la banda sigue: siete discos en Registro Móvil, los escenarios y los próximos registros. Para escuchar, escribir o programar a la banda, los enlaces y el contacto están en la cabecera.',
    ],
    image: MEDIA.band,
    sources: [INTERVIEW, notes('rebuilt', 'créditos de Reconstruidas')],
  },
];

/** Page order: from today back to the origin; the epilogue closes. */
export const TIMELINE_ACTS: ActItem[] = [...ACTS.slice(0, -1).reverse(), ACTS[ACTS.length - 1]];
