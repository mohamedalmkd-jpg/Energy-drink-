import { sample } from './ease';
import { rig } from './rig';
import type { Bind, Story, Unit } from './story';

interface Node {
  el: HTMLElement;
  bind: Bind;
  shown: boolean | null;
  opacity: string;
  transform: string;
}

const px = (value: number, unit: Unit, vw: number, vh: number) => {
  if (unit === 'vw') return `${(value * vw).toFixed(2)}px`;
  if (unit === 'vh') return `${(value * vh).toFixed(2)}px`;
  return `${value.toFixed(3)}${unit}`;
};

/**
 * Plays a Story: writes its rig tracks into the shared rig and its DOM tracks
 * into every element marked with a matching `data-s` attribute. Only opacity,
 * transform and visibility are ever touched, so a frame never causes layout.
 */
export class Director {
  private nodes: Node[] = [];

  constructor(root: ParentNode, private story: Story) {
    for (const name in story.dom) {
      root.querySelectorAll<HTMLElement>(`[data-s="${name}"]`).forEach((el) => {
        this.nodes.push({ el, bind: story.dom[name], shown: null, opacity: '', transform: '' });
      });
    }
  }

  render(t: number) {
    const target = rig as unknown as Record<string, number>;
    const tracks = this.story.rig as Record<string, Parameters<typeof sample>[0]>;
    for (const key in tracks) target[key] = sample(tracks[key], t);

    const vw = window.innerWidth / 100;
    const vh = window.innerHeight / 100;

    for (const n of this.nodes) {
      const b = n.bind;
      const o = b.o ? sample(b.o, t) : 1;
      const shown = o > 0.001;
¶»§q«^