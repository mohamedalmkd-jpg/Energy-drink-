import { useRef } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react';
import { FORMULA, SPECS, ZERO_FACTS } from '../lib/content';
import { FLAVORS, FLAVOR_COUNT } from '../lib/flavors';

/** Full-screen colour environments. The story cross-fades between them. */
export function Backdrop() {
  return (
    <div className="layer bg" aria-hidden="true">
      <div className="bg-sel" data-s="bg-sel" />
      <div className="bg-flavor" data-s="bg-flavor" />
      <div className="bg-light" data-s="bg-light" />
      <div className="bg-hot" data-s="bg-hot" />
      <div className="bg-spec" data-s="bg-spec" />
      <div className="bg-formula" data-s="bg-formula" />
      <div className="bg-floor" data-s="bg-floor" />
      <div className="bg-outro" data-s="bg-outro" />
    </div>
  );
}

/** Type that sits behind the cans. */
export function TypeBack({ flavor }: { flavor: number }) {
  const f = FLAVORS[flavor];
  return (
    <div className="layer back">
      <div className="slot sel-word-slot">
        <h1 className="giant sel-word" data-s="sel-word" data-fit="94" data-fit-cap="62" aria-label="Flux Energy">
          <span>Flux</span>
        </h1>
      </div>

      <div className="slot fl-name-slot" aria-hidden="true">
        <div className="giant fl-name wide" data-s="fl-name" data-fit="94" data-fit-cap="44">
          {f.name}
        </div>
        <div className="fl-name stack tall" data-s="fl-name">
          <span className="gia¶»§q«^