'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createClock } from '../lib/clock';
import { Director } from '../lib/director';
import { fitText } from '../lib/fit';
import { DEFAULT_FLAVOR, FLAVORS, FLAVOR_COUNT } from '../lib/flavors';
import { rig } from '../lib/rig';
import { buildOutro, buildStory, chapterAt, CHAPTERS, lightUiAt } from '../lib/story';
import Scaffold from './Scaffold';

const Stage = dynamic(() => import('./Stage'), { ssr: false });

const FAQ_CHAPTER = CHAPTERS.length - 1;
/** How quickly the picture catches up with the scroll position, per second. */
const FOLLOW = 7.7;
const isPortrait = () => window.innerWidth / window.innerHeight < 0.9;

export default function Experience() {
  const [flavor, setFlavor] = useState(DEFAULT_FLAVOR);
  const [chapter, setChapter] = useState(0);
  const [ready, setReady] = useState(false);
  const [staged, setStaged] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portrait, setPortrait] = useState<boolean | null>(null);

  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const faq = useRef<HTMLElement>(null);
  const outro = useRef<HTMLElement>(null);
  const progress = useRef<HTMLDivElement>(null);

  const lenis = useRef<Lenis | null>(null);
  const reduced = useRef(fa¶»§q«^