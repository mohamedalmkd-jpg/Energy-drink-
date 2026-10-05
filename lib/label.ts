import { Flavor, mixHex } from './flavors';

export interface LabelFonts {
  display: string;
  body: string;
}

export type LabelMode = 'color' | 'orm';

/**
 * In the surface map green is roughness and blue is metalness.
 * INK is satin print over aluminium, BARE is the polished metal itself.
 */
const INK = 'rgb(0, 107, 132)';
const BARE = 'rgb(0, 46, 255)';
const WHITE = '#f4f6f8';

/**
 * The formula panel on the back of the can: four rows stacked down the label.
 * `rows` are the row centres as a share of the label height, from the top.
 * The stage uses the same numbers to aim the light at one row at a time.
 */
export const PANEL = {
  phi: 180,
  rows: [0.2, 0.36, 0.52, 0.68],
  items: [
    { big: '160 MG', name: 'CAFFEINE' },
    { big: '1000 MG', name: 'TAURINE' },
    { big: 'B3 B6 B12', name: 'B-VITAMINS' },
    { big: '0 G', name: 'SUGAR' },
  ],
};

const spaced = (ctx: CanvasRenderingContext2D, em: number) => {
  if ('letterSpacing' in ctx) (ctx as unknown as { letterSpacing: string }).letterSpacing = `${em}em`;
};

/**
 * The four rows of the formula panel, centred on x. `ink` is the colour of
 * the print; the same routine draws the quiet tone-on-tone version on the
 * label and the bright version that the light reveals.
 */
function drawPanel(
  ctx: CanvasRenderingContext2D,
  x: number,
  H: number,
  k: number,
  fonts: LabelFonts,
  ink: string,
) {
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = ink;

  c¶»§q«^