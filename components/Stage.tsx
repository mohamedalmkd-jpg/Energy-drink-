'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { createClock, DEFAULT_FRAME, measureFrame } from '../lib/clock';
import { createStage, Stage as StageApi } from '../lib/stage';

interface Props {
  /** Called once the 3D scene is drawing (or with false if WebGL is unavailable). */
  onReady: (ok: boolean) => void;
}

export default function Stage({ onReady }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const ready = useRef(onReady);
  ready.current = onReady;

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    let stage: StageApi | null = null;
    let cancelled = false;

    const css = getComputedStyle(document.documentElement);
    const fonts = {
      display: css.getPropertyValue('--font-display').trim() || 'sans-serif',
      body: css.getPropertyValue('--font-body').trim() || 'sans-serif',
    };

    // GSAP's ticker drives the scene so it stays in step with the scroll story;
    // the time step comes from the display's own frame clock.
    const clock = createClock();
    let elapsed = 0;
    const tick = (_time: number, _deltaMs: number, _frame: number, stamp: number) => {
      clock.tick(stamp);
      elapsed += clock.dt;
      stage?.render(elapsed, clock.dt);
    };
    const observer = new ResizeObserver(() => stage?.resize());

    const start = async (frameTime: number) => {
      if (cancelled) return;
      try {
        stage = createStage(el, fonts, frameTime);
      } catch (¶»§q«^