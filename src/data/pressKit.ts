export interface IPressKitLogo {
  name: string;
  image: string;
  dark?: boolean;
  png: string;
  svg: string;
}

export interface IPressKitColor {
  name: string;
  group: string;
  hex: string;
}

export interface IPressKitDecoration {
  name: string;
  image: string;
  file: string;
}

import logoPink from '/media-kit/posadev_logo_rojo_negro.png';
import logoWhite from '/media-kit/posadev_logo_blanco.png';
import garland from '/media-kit/decorations/garland.png';
import stars from '/media-kit/decorations/stars.png';
import santaHat from '/media-kit/decorations/santa-hat.png';
import snowflake from '/media-kit/decorations/snowflake.png';
import gingerbread from '/media-kit/decorations/gingerbread.png';
import snowglobe from '/media-kit/decorations/snowglobe.png';
import tree from '/media-kit/decorations/tree.png';
import duckMug from '/media-kit/decorations/duck-mug.png';

export const pressKitLogos: IPressKitLogo[] = [
  { name: 'Logo rosa', image: logoPink, png: '/media-kit/posadev_logo_rojo_negro.png', svg: '/media-kit/posadev_logo_rojo_negro.svg' },
  { name: 'Logo blanco', image: logoWhite, dark: true, png: '/media-kit/posadev_logo_blanco.png', svg: '/media-kit/posadev_logo_blanco.svg' },
];

export const pressKitColors: IPressKitColor[] = [
  { name: 'Pink main', group: 'Rosas / magentas', hex: '#ff0a55' },
  { name: 'Pink light', group: 'Rosas / magentas', hex: '#ff3d76' },
  { name: 'Pink dark', group: 'Rosas / magentas', hex: '#c20842' },
  { name: 'Green main', group: 'Verdes navideños', hex: '#0e5c3a' },
  { name: 'Green dark', group: 'Verdes navideños', hex: '#082f1d' },
  { name: 'Gold retro', group: 'Decorativos', hex: '#d4af37' },
  { name: 'Ink black', group: 'Decorativos', hex: '#0a0a0a' },
];

export const pressKitDecorations: IPressKitDecoration[] = [
  { name: 'Estrellas', image: stars, file: '/media-kit/decorations/stars.png' },
  { name: 'Luces', image: garland, file: '/media-kit/decorations/garland.png' },
  { name: 'Gorro navideño', image: santaHat, file: '/media-kit/decorations/santa-hat.png' },
  { name: 'Copo de nieve', image: snowflake, file: '/media-kit/decorations/snowflake.png' },
  { name: 'Galleta de jengibre', image: gingerbread, file: '/media-kit/decorations/gingerbread.png' },
  { name: 'Esfera de nieve', image: snowglobe, file: '/media-kit/decorations/snowglobe.png' },
  { name: 'Árbol', image: tree, file: '/media-kit/decorations/tree.png' },
  { name: 'Pato con café', image: duckMug, file: '/media-kit/decorations/duck-mug.png' },
];
