import type { Album, Track } from '../types/scrollytelling';
import { ALBUM_URLS, artwork } from './media';

const t = (rows: [string, string][]): Track[] => rows.map(([title, duration], i) => ({ n: i + 1, title, duration }));

/** Chronological. Data verified on each Bandcamp page (dates, catalog, credits, tracklist). */
export const ALBUMS: Album[] = [
  {
    key: 'patio', title: 'El Patio de los Calla’os', releaseDate: '09.10.2020', catalog: 'regmvl121',
    format: 'LP solista, grabación casera / edición remasterizada',
    albumId: '3605239342', url: ALBUM_URLS.patio, cover: artwork('patio', '4124594411', 'El Patio de los Calla’os', 2000),
    tracks: t([['Hormonas Pestilentes', '3:12'], ['Alzheimer Juvenil', '3:02'], ['Descuencas tus Ojos', '3:58'], ['La Displicencia', '3:28'], ['- Interludio -', '2:32'], ['Una Mentira Se Escapó', '3:13'], ['La Palabra', '2:56'], ['Bailar No Sé', '3:50'], ['El Patio de los Calla’os', '1:59'], ['Quisiera Ser Como El Cactus', '1:48'], ['Herida Insidiosa', '2:16'], ['Es Difícil Ser Una Estatua', '2:48']]),
  },
  {
    key: 'original', title: 'Anticuecas Subterráneas', releaseDate: '27.05.2021', catalog: 'regmvl132',
    format: 'LP solista / digital, cassette y CD',
    albumId: '1965785172', url: ALBUM_URLS.original, cover: artwork('original', '0203426669', 'Anticuecas Subterráneas'),
    tracks: t([['meta/mórfosis', '3:46'], ['depreda/sueños', '3:44'], ['sacr/art-ificio', '3:26'], ['nunca pudo ser/nunca será', '3:34'], ['erizos/acorazados', '3:03'], ['coloñal/', '5:47'], ['can/último hálito', '3:32'], ['giro argumental/spoiler', '3:49'], ['entre, ni/medio', '3:50']]),
  },
  {
    key: 'pacifico', title: 'El Pacífico Albergará Nuestros Huesos', releaseDate: '02.06.2023', catalog: 'regmvl165',
    format: 'EP solista / cierre del ciclo solista',
    albumId: '1744569430', url: ALBUM_URLS.pacifico, cover: artwork('pacifico', '3849920471', 'El Pacífico Albergará Nuestros Huesos'),
    tracks: t([['recuerdo mi infancia, cuando era viejo', '6:11'], ['la vida que, y no hay certeza', '2:48'], ['me marchitaré, solo quiero dormir (ft. Tulipán)', '3:35'], ['vale la pena, intentar', '6:08'], ['qué más da, si el huracán', '4:05']]),
  },
  {
    key: 'a', title: 'A| Tetralogía de Bichos y Setas', releaseDate: '18.09.2024', catalog: 'regmvl198',
    format: 'Primera parte del disco doble / primer disco grabado como banda',
    albumId: '796181496', url: ALBUM_URLS.a, cover: artwork('a', '0424227316', 'A| Tetralogía de Bichos y Setas'),
    tracks: t([['I| EL EXOESQUELETO DEL CAPITAL', '1:13'], ['hormigas rojas y azules', '2:27'], ['te privatizaron', '2:47'], ['reciclan crisis ciclicas', '2:29'], ['II| ANOMALÍA DEL MICELIO HUMANO', '1:12'], ['va (i) ven', '3:28'], ['la mantis social', '2:06'], ['balance de muerte e indiferencia', '2:11'], ['III| TODAS LAS HUIDAS, LA HUIDA', '1:19'], ['palomeando rotos', '2:22'], ['hacienda Xu', '2:19'], ['la Berenice (ft. Javiera Electra)', '2:11'], ['IV| MUTUALISMO COEVOLUTIVO', '1:20'], ['bioluminiscencia', '2:09'], ['cucharitas', '1:52'], ['líquen', '2:01']]),
  },
  {
    key: 'b', title: 'B| Décimas de Phuyu y la fantasma', releaseDate: '22.11.2024', catalog: 'regmvl206',
    format: 'Segunda parte del disco doble / una sola pista en décimas',
    albumId: '2502758374', url: ALBUM_URLS.b, cover: artwork('b', '0409686699', 'B| Décimas de Phuyu y la fantasma'),
    tracks: t([['Décimas de Phuyu y la fantasma', '30:53']]),
  },
  {
    key: 'cantata', title: 'Cantata del Desierto Verde', releaseDate: '15.02.2026', catalog: 'regmvl234',
    format: 'EP / charango, quena, guitarrón chileno, cuatro, kultrun',
    albumId: '2373676277', url: ALBUM_URLS.cantata, cover: artwork('cantata', '2859856508', 'Cantata del Desierto Verde'),
    tracks: t([['Preludio: Costo Marginal', '2:06'], ['Aria: Decreto 701', '3:53'], ['Coro: una lágrima para la cámara', '3:56'], ['Recitativo: Terrenos de aptitud forestal', '4:04'], ['Pregón: El ixofillmogen', '3:31']]),
  },
  {
    key: 'rebuilt', title: 'Anticuecas Subterráneas (Reconstruidas)', releaseDate: '01.10.2026', catalog: 'regmvl250',
    format: 'LP / banda completa, grabado en vivo en estudio',
    albumId: '2549611797', url: ALBUM_URLS.rebuilt, cover: artwork('rebuilt', '1243948115', 'Anticuecas Subterráneas (Reconstruidas)'),
    tracks: t([['META/MORFOSIS', '3:46'], ['DEPREDA/SUEÑOS', '4:04'], ['SACRIFICIO/ARTIFICIO', '3:40'], ['NUNCA PUDO SER/NUNCA SERÁ', '3:46'], ['ERIZOS/ACORAZADOS', '3:03'], ['COLOÑAL/DESTINO MANIFIESTO', '7:12'], ['CAN/ÚLTIMO HÁLITO', '3:15'], ['GIRO ARGUMENTAL/SPOILER', '4:02'], ['ENTRE, NI/MEDIO', '3:02'], ['EL GAVILÁN/GAVILÁN', '12:57']]),
  },
];

export const ALBUM = Object.fromEntries(ALBUMS.map(album => [album.key, album])) as Record<'patio' | 'original' | 'pacifico' | 'a' | 'b' | 'cantata' | 'rebuilt', Album>;
