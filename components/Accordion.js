'use client';

import { useId, useState } from 'react';
import { ChevronDownIcon } from './Icons';

/**
 * Accordion with bold titles, chevrons and thin dividers.
 * One item open at a time. `defaultOpen` is an index, or -1 for all closed.
 * `headingLevel` sets the heading tag that wraps each button.
 */
export default function Accordion({ items, defaultOpen = -1, onChange, headingLevel = 3, className = '' }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const baseId = useId();
  const Heading = `h${headingLevel}`;

  function toggle(index) {
    const next = openIndex === index ? -1 : index;
    setOpenIndex(next);
    onChange?.(next, index);
  }

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div className={`accordion-item${open ? ' is-open' : ''}`} key={item.title}>
            <Heading className="accordion-heading">
              <button
                type="button"
                id={buttonId}
                className="accordion-button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span>{item.title}</span>
                <ChevronDownIcon className="accordion-chevron" />
              </button>
            </Heading>
            <div id={panelId} role="region" aria-labelledby={buttonId} className="accordion-panel" hidden={!open}>
              <div className="accordion-content">{typeof item.body === 'string' ? <p>{item.body}</p> : item.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
