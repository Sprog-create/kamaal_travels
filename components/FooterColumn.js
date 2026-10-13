'use client';

import { useId, useState } from 'react';
import { ChevronDownIcon } from './Icons';

// On mobile the column is an accordion; from 1024px it is always open
// and the heading button is not interactive (see .footer-col in globals.css).
export default function FooterColumn({ title, children }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={`footer-col${open ? ' is-open' : ''}`}>
      <h2 className="footer-heading">
        <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
          {title}
          <ChevronDownIcon className="footer-chevron" />
        </button>
      </h2>
      <div id={id} className="footer-col-body">
        {children}
      </div>
    </div>
  );
}
