import * as THREE from 'three';
import { clampFrame, DEFAULT_FRAME, quickFrame } from './clock';
import { FLAVORS, FLAVOR_COUNT } from './flavors';
import { LabelFonts, paintBeam, paintGlow, paintLabel, paintPanelLit } from './label';
import { computeFrame, createFrame } from './layout';
import { CAM, CAN, LINE, rig } from './rig';

export interface Stage {
  /** One-off preparation behind the loading screen; see below. */
  warmUp(): Promise<void>;
  render(time: number, delta: number): void;
  resize(): void;
  dispose(): void;
}

const points = (list: number[][]) => list.map(([x, y]) => new THREE.Vector2(x, y));

/** A dark studio with a few softboxes, baked once into the reflection map. */
function buildStudio(): THREE.Scene {
  const studio = new THREE.Scene();
  const box = new THREE.BoxGeometry(1, 1, 1);

  const room = new THREE.Mesh(
    box,
    new THREE.MeshBasicMaterial({ color: 0x101216, side: THREE.BackSide }),
  );
  room.scale.set(26, 18, 26);
  studio.add(room);

  const softbox = (power: number, w: number, h: number, x: number, y: number, z: number) => {
    const m = new THREE.Mesh(
      box,
      new THREE.MeshBasicMaterial({ color: new THREE.Color().setScalar(power) }),
    );
    m.scale.set(w, h, 0.1);
    m.position.set(x, y, z);
    m.lookAt(0, 0, 0);
    studio.add(m);
  };

  softbox(5, 7, 7, 0, 7.5, 1); // overhead
  softbox(16, 1.6, 9, -8, 1, 3); // long strip, camera left
  softbox(10, 1, 9, 8, 0.5, 1.5); // thinner strip, camera right
  softb¶»§q«^