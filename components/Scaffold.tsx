import type { ReactNode, Ref } from 'react';
import { FLAVORS } from '../lib/flavors';
import { T } from '../lib/story';
import { Header, Loader, Menu, SideNav } from './Chrome';
import Faq from './Faq';
import { Backdrop, TypeBack, TypeFront } from './Layers';
import Outro from './Outro';

export interface ScaffoldProps {
  flavor: number;
  chapter: number;
  ready: boolean;
  menuOpen: boolean;
  stage: ReactNode;
  rootRef: Ref<HTMLDivElement>;
  trackRef: Ref<HTMLDivElement>;
  faqRef: Ref<HTMLElement>;
  outroRef: Ref<HTMLElement>;
  progressRef: Ref<HTMLDivElement>;
  onStep: (dir: 1 | -1) => void;
  onPick: (flavor: number) => void;
  onGo: (chapter: number) => void;
  onMenu: (open: boolean) => void;
  onTop: () => void;
}

/**
 * Everything you can see, without any behaviour. Fixed layers are stacked
 * back to front: environment, type behind the cans, the WebGL stage, type in
 * front. The scrolling column on top only provides scroll distance for the
 * story, then carries the questions and the closing scene.
 */
export default function Scaffold(p: ScaffoldProps) {
  return (
    <div className={`flux${p.ready ? ' is-ready' : ''}`} ref={p.rootRef} id="top">
      <Backdrop />
      <TypeBack flavor={p.flavor} />
      <div className="stage-slot" aria-hidden="true">
        {p.stage}
      </div>
      <TypeFront flavor={p.flavor} interactive={p.chapter === 0 && !p.menuOpen} onStep={p.onStep} />

      <div className="progress" ref={p.progressRef} aria-hidden="true"¶»§q«^