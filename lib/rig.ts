import { DEFAULT_FLAVOR } from './flavors';

/** Can proportions in world units (a slim 330 ml can). */
export const CAN = { H: 1.7, R: 0.315, wallBottom: -0.755, wallTop: 0.6 };

/** Base camera. Story positions are authored against this view. */
export const CAM = { fov: 28, dist: 9 };
export const TAN = Math.tan((CAM.fov * Math.PI) / 360);
/** Half of the visible height at z = 0 for the base camera. */
export const HALF_H = CAM.dist * TAN;

/** The lineup stands on the outside of a circle; the camera orbits it. */
export const LINE = { radius: 3, step: 0.5 };

/**
 * Everything the 3D stage needs to draw one frame. Scroll timelines and
 * interaction tweens write into this object; the stage only reads it.
 */
export interface Rig {
  /** Selected flavor as a continuous index (may run past the array; it wraps). */
  sel: number;
  /** Opening reveal, 0 â†’ 1. */
  intro: number;

  /** Hero can during the story. x / y are fractions of the half viewport. */
  hx: number;
  hy: number;
  hz: number;
  hrx: number;
  hry: number;
  hrz: number;
  hs: number;

  /** 0 = flavor selector arc, 1 = story (side cans have flown out). */
  spread: number;
  /** Base camera distance. */
  camZ: number;
  /** Vertical field of view in degrees. */
  fov: number;
  /** Exposure and coloured rim-light strength, keyed per chapter. */
  exp: number;
  rim: number;
  /** 0 â†’ 1 as the cans assemble into the lineup. */
  lineup: number;
  /** 0 â†’ 1 as the lineup lifts out of frame. */
  lif¶»§q«^