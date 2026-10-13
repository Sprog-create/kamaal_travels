'use client';

import { useEffect, useRef, useState } from 'react';
import { SITE, telLink } from '@/lib/site';
import { CloseIcon, MenuIcon, PhoneIcon } from './Icons';
import Logo from './Logo';

export default function MobileMenu({ links }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
      toggleRef.current?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="btn-icon menu-toggle"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </button>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
      >
        <div className="mobile-menu-top">
          <Logo />
          <button ref={closeRef} type="button" className="btn-icon" aria-label="Close menu" onClick={close}>
            <CloseIcon />
          </button>
        </div>
        <nav aria-label="Mobile">
          <ul className="mobile-menu-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu-actions">
          <a href="/#enquiry" className="btn btn-primary btn-block" onClick={close}>
            Plan My Trip
          </a>
          <a href={telLink()} className="btn btn-ghost btn-block">
            <PhoneIcon /> Call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
