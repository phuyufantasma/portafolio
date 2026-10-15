import type { Video } from '../types/scrollytelling';
import { YOUTUBE, videoThumb } from './media';

const VITROLA = { label: 'La Vitrola · Nunca será / Chiguayante', url: 'https://www.youtube.com/watch?v=KA8joI1tEMg' };

function video(id: string, title: string, context: string, date: string, channel = YOUTUBE): Video {
  return { id, title, context, date, channel, thumb: videoThumb(id, `Fotograma de ${title}, Phuyu y la Fantasma`, `${title} / ${context}. Miniatura del video publicado el ${date}.`) };
}

/** Upload dates read from YouTube metadata (yt-dlp) on 2026-10-11. */
export const VIDEOS = {
  metamorfosis: video('6xiEmHKNYHk', 'Meta/morfosis', 'video oficial', '15.10.2022'),
  depreda: video('qKvzn7sKncQ', 'Depreda/Sueños', 'video oficial', '06.11.2023'),
  valeLaPenaAlt: video('4IhCGjiJ5FQ', 'vale la pena, intentar (versión alternativa)', 'video oficial', '18.02.2024'),
  valeLaPenaVivo: video('LoSlv7J5R_E', 'vale la pena, intentar / Giro Argumental/Spoiler', 'en vivo', '03.10.2024'),
  tetralogia: video('pGWCAPn6lt8', 'A| Tetralogía de Bichos y Setas', 'álbum completo y letras', '23.09.2024'),
  decimas: video('4Os4f8DK8do', 'B| Décimas de Phuyu y la fantasma', 'álbum completo y letras', '11.11.2024'),
  elefante: video('HFVdPpLkDJg', 'la mantis social / balance de muerte e indiferencia', 'en vivo en Espacio Elefante', '25.11.2024'),
  erizos: video('VMSiv1sKkB0', 'Erizos/Acorazados', 'en vivo', '07.06.2024'),
  colonal: video('4KDMAznNiyA', 'Coloñal', 'en vivo', '01.06.2024'),
  gavilan: video('a6hf3BepTR0', 'El Gavilán (Violeta Parra)', 'en vivo', '09.06.2023'),
  giro: video('VJeRKYhWUpA', 'Giro Argumental/Spoiler ft. Javiera Electra', 'en vivo', '16.04.2023'),
  cantata: video('sWTXnOYwn0s', 'Cantata del Desierto Verde', 'disco completo', '22.02.2026'),
  vitrola: video('KA8joI1tEMg', 'Nunca será', 'sesión La Vitrola, Chiguayante', '11.02.2026', VITROLA),
};

export const ALL_VIDEOS: Video[] = Object.values(VIDEOS).sort((a, b) => b.date.split('.').reverse().join().localeCompare(a.date.split('.').reverse().join()));
