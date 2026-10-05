import { forwardRef, useState } from 'react';
import { FAQ } from '../lib/content';

const Faq = forwardRef<HTMLElement>(function Faq(_, ref) {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq" ref={ref}>
      <h2 className="giant faq-title">
        <span>Good</span>
        <span>questions</span>
      </h2>
      <div className="faq-body">
        <p className="faq-note">Six things people ask before the first can.</p>
        <div className="faq-list">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="faq-q">{item.q}</span>
                    <span className="pm" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq-a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default Faq;
