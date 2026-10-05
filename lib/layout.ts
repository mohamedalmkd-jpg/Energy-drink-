import { EASE, clamp, lerp, smoothstep } from './ease';
import { FLAVOR_COUNT } from './flavors';
import { CAM, HALF_H, LINE, Rig } from './rig';

export interface CanPose {
  x: number;
  y: number;
  z: number;
  rx: number;
  ry: number;
  rz: number;
  s: number;
  vis: boolean;
  /** Strength of the light pool under the can (lineup only). */
  pool: number;
}

export interface Frame {
  cans: CanPose[];
  cam: { x: number; y: number; z: number; tx: number; ty: number; tz: number; fov: number };
  ring: { x: number; y: number; z: number; s: number; o: number };
  /** Index of the can that currently plays the hero. */
  hero: number;
  /** False when nothing is on screen and the stage can skip drawing. */
  any: boolean;
}

const N = FLAVOR_COUNT;
const TAU = Math.PI * 2;

export function createFrame(): Frame {
  return {
    cans: Array.from({ length: N }, () => ({
      x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0, s: 1, vis: true, pool: 0,
    })),
    cam: { x: 0, y: 0, z: 9, tx: 0, ty: 0, tz: 0, fov: CAM.fov },
    ring: { x: 0, y: 0, z: 0, s: 1, o: 0 },
    hero: 0,
    any: true,
  };
}

/** Signed distance of flavor `i` from the selected one, wrapped to Â±N/2. */
export function offsetOf(i: number, sel: number): number {
  const h = N / 2;
  return ((((i - sel + h) % N) + N) % N) - h;
}

/** Closest angle to `from` that is equivalent to `angle`. */
const nearest = (angle: number, from: number) => angle + TAU * Math.round((from - angle) / TAU);

/**
 * Turn the rig into co¶»§q«^