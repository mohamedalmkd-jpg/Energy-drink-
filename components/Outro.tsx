import { forwardRef } from 'react';
import { Chips } from './Chrome';

interface Props {
  flavor: number;
  onPick: (flavor: number) => void;
  onTop: () => void;
}

const Outro = forwardRef<HTMLElement, Props>(function Outro({ flavor, onPick, onTop }, ref) {
  return (
    <section className="outro" ref={ref} aria-label="Choose your flavor">
      <div className="outro-ui">
        <div>
          <p className="outro-label">Change the can</p>
          <Chips flavor={flavor} onPick={onPick} />
        </div>
        <button type="button" className="pill" onClick={onTop}>
          Back to the start
        </button>
      </div>
      <footer className="foot">
        <p>© 2026 Flux Energy</p>
        <p>High caffeine content. Not recommended for children or during pregnancy.</p>
      </footer>
    </section>
  );
});

export default Outro;
