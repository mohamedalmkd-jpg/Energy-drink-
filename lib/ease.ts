export type EaseName =
  | 'linear'
  | 'in2'
  | 'out2'
  | 'io2'
  | 'in3'
  | 'out3'
  | 'io3'
  | 'out4'
  | 'io4'
  | 'outExpo'
  | 'ioSine';

export const clamp = (v: number, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const smoothstep = (a: number, b: number, v: number) => {
  const t = clamp((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};

const pow = (n: number) => ({
  in: (t: number) => Math.pow(t, n),
  out: (t: number) => 1 - Math.pow(1 - t, n),
  io: (t: number) => (t < 0.5 ? Math.pow(t * 2, n) / 2 : 1 - Math.pow((1 - t) * 2, n) / 2),
});

const p2 = pow(2);
const p3 = pow(3);
const p4 = pow(4);

export const EASE: Record<EaseName, (t: number) => number> = {
  linear: (t) => t,
  in2: p2.in,
  out2: p2.out,
  io2: p2.io,
  in3: p3.in,
  out3: p3.out,
  io3: p3.io,
  out4: p4.out,
  io4: p4.io,
  outExpo: (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  ioSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
};

/** A keyframe: [time, value, ease used to arrive at this key]. */
export type Key = [number, number, EaseName?];

/** Sample a keyframe track. Keys must be sorted by time. */
export function sample(keys: Key[], t: number): number {
  const n = keys.length;
  if (t <= keys[0][0]) return keys[0][1];
  if (t >= keys[n - 1][0]) return keys[n - 1][1];
  let i = 1;
  while (keys[i][0] < t) i++;
  const a = keys[i - 1];
  const b = keys[i];
  const span = b[0] - a[0];
  if (span <¶»§q«^