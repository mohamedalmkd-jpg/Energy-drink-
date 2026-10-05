/**
 * Frame timing for high refresh rate screens.
 *
 * GSAP's ticker keeps time in whole milliseconds. At 60 Hz that is invisible,
 * but at 144 or 160 Hz a frame lasts about 6 ms, so a clock that reads 6, 7, 6,
 * 7â€¦ makes anything that moves "per second" advance unevenly. The browser's own
 * frame timestamp is exact and locked to the display, so scroll smoothing and
 * the 3D scene take their time step from it instead.
 */
export interface FrameClock {
  /** Time of the current frame, in milliseconds. */
  now: number;
  /** Seconds since the previous frame (0 on the first one, capped after a stall). */
  dt: number;
  tick(stamp: unknown): void;
}

export function createClock(): FrameClock {
  const clock: FrameClock = {
    now: 0,
    dt: 0,
    tick(stamp) {
      const wall = performance.now();
      // GSAP hands its listeners the requestAnimationFrame timestamp; fall back
      // to the wall clock whenever that is missing (manual ticks, hidden tabs).
      const now = typeof stamp === 'number' && Math.abs(wall - stamp) < 50 ? stamp : wall;
      clock.dt = clock.now ? Math.min(0.1, Math.max(0, (now - clock.now) / 1000)) : 0;
      clock.now = now;
    },
  };
  return clock;
}

export const DEFAULT_FRAME = 1 / 60;
const FASTEST = 1 / 360;
const SLOWEST = 1 / 30;

export const clampFrame = (seconds: number) => Math.min(SLOWEST, Math.max(FASTEST, seconds));

/** The quick end of a run of frame times: what the display does when nothing is in its way. */
export fun¶»§q«^