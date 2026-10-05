export interface Flavor {
  id: string;
  name: string;
  /** Name split into the two lines of the stacked lockup. */
  lines: [string, string];
  notes: string;
  blurb: string;
  /** Bright accent. */
  c1: string;
  /** Saturated mid tone. */
  c2: string;
  /** Near-black tint used for depth. */
  deep: string;
}

/** Order here is the order of the lineup, left to right. */
export const FLAVORS: Flavor[] = [
  {
    id: 'red-shift',
    name: 'Red Shift',
    lines: ['Red', 'Shift'],
    notes: 'Sour cherry, pomegranate',
    blurb: 'Dark fruit with a sharp edge. The one to open when the night is only half done.',
    c1: '#ff5a6a',
    c2: '#d0002f',
    deep: '#2b0010',
  },
  {
    id: 'solar-mango',
    name: 'Solar Mango',
    lines: ['Solar', 'Mango'],
    notes: 'Ripe mango, blood orange',
    blurb: 'Bright, juicy and a little bitter at the end, like fruit eaten in full sun.',
    c1: '#ffc533',
    c2: '#ff5a0a',
    deep: '#391000',
  },
  {
    id: 'arctic-volt',
    name: 'Arctic Volt',
    lines: ['Arctic', 'Volt'],
    notes: 'Glacier mint, lime',
    blurb: 'Cold mint over sharp lime. It hits clean and leaves nothing behind.',
    c1: '#45e8ff',
    c2: '#0b4bff',
    deep: '#020a33',
  },
  {
    id: 'acid-lime',
    name: 'Acid Lime',
    lines: ['Acid', 'Lime'],
    notes: 'Lime, yuzu',
    blurb: 'All citrus, no sweetness to hide behind. Tart enough to wake you up twice.',
    c1: '#dcff3a',
    c2: '#12a843',
    deep: '#03260f',
  },
  {
    id: 'plas¶»§q«^