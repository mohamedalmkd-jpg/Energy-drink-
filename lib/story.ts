import type { Key } from './ease';
import { PANEL } from './label';
import type { Rig } from './rig';

/**
 * The whole scroll story as data. Time is measured in viewport heights of
 * scrolling: t = 1 means the visitor has scrolled one full screen.
 *
 *   0    flavor selector
 *   1    the chosen flavor
 *   2    what is inside: the four rows on the back of the can
 *   5    zero sugar
 *   6.4  maximum energy
 *   7.8  flux formula
 *   9.2  the lineup
 */
export const T = {
  lineup: 9.2,
  travel: 10.6,
  travelEnd: 12.8,
  exit: 13,
  end: 13.8,
};

/**
 * "What is inside": the four moments (start, end) at which the light rests
 * on one row of the panel on the can. Between them it glides to the next.
 */
export const HOLDS: [number, number][] = [
  [2.35, 2.67],
  [2.98, 3.32],
  [3.63, 3.97],
  [4.28, 4.8],
];

/** Moment each lineup can sits in the centre of the frame. */
export const lineupTime = (k: number) => T.travel + (k * (T.travelEnd - T.travel)) / 4;

export interface Chapter {
  id: string;
  label: string;
  /** Scroll position the navigation jumps to. */
  at: number;
  /** The chapter is current from this time on. */
  from: number;
}

export const CHAPTERS: Chapter[] = [
  { id: 'select', label: 'Choose a flavor', at: 0, from: 0 },
  { id: 'inside', label: 'What is inside', at: 2.5, from: 2 },
  { id: 'zero', label: 'Zero sugar', at: 5.75, from: 5.05 },
  { id: 'energy', label: 'Maximum energy', at: 7.15, from: 6.4 },
  { id: 'formula', label: 'Flux form¶»§q«^