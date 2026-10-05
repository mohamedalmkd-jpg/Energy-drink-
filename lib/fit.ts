/**
 * Size display type so a line spans a share of the viewport width.
 *
 *   data-fit="92"        target width in vw
 *   data-fit-cap="40"    largest allowed font size in vh
 *   data-fit-p / data-fit-cap-p   overrides for portrait screens
 */
export function fitText(root: ParentNode, portrait: boolean) {
  const vw = window.innerWidth / 100;
  const vh = window.innerHeight / 100;
  root.querySelectorAll<HTMLElement>('[data-fit]').forEach((el) => {
    const d = el.dataset;
    const fit = parseFloat((portrait && d.fitP) || d.fit || '0');
    const cap = parseFloat((portrait && d.fitCapP) || d.fitCap || '0');
    if (!fit) return;
    el.style.fontSize = '100px';
    const width = el.offsetWidth;
    if (!width) {
      el.style.fontSize = '';
      return;
    }
    let size = (100 * fit * vw) / width;
    if (cap) size = Math.min(size, cap * vh);
    el.style.fontSize = `${size.toFixed(1)}px`;
  });
}
