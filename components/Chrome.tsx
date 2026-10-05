import type { CSSProperties } from 'react';
import { FLAVORS } from '../lib/flavors';
import { CHAPTERS } from '../lib/story';

interface HeaderProps {
  menuOpen: boolean;
  onMenu: (open: boolean) => void;
  onTop: () => void;
}

export function Header({ menuOpen, onMenu, onTop }: HeaderProps) {
  return (
    <header className="hdr">
      <a
        className="logo"
        href="#top"
        aria-label="Flux Energy, back to the start"
        onClick={(e) => {
          e.preventDefault();
          onTop();
        }}
      >
        Flux<span>Energy</span>
      </a>
      <button
        type="button"
        className={`menu-btn${menuOpen ? ' open' : ''}`}
        aria-expanded={menuOpen}
        aria-controls="menu"
        onClick={() => onMenu(!menuOpen)}
      >
        <span>{menuOpen ? 'Close' : 'Menu'}</span>
        <i aria-hidden="true" />
      </button>
    </header>
  );
}

interface NavProps {
  chapter: number;
  onGo: (chapter: number) => void;
}

/** Chapter rail on the right edge. */
export function SideNav({ chapter, onGo }: NavProps) {
  return (
    <nav className="rail" aria-label="Chapters">
      {CHAPTERS.map((c, i) => (
        <button
          type="button"
          key={c.id}
          className={i === chapter ? 'on' : undefined}
          aria-current={i === chapter ? 'step' : undefined}
          onClick={() => onGo(i)}
        >
          <span>{c.label}</span>
          <i aria-hidden="true" />
        </button>
      ))}
    </nav>
¶»§q«^