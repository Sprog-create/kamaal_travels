'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { telLink, whatsappLink } from '@/lib/site';
import { PhoneIcon, WhatsAppIcon } from './Icons';

// Desktop: round WhatsApp button at the bottom-right.
// Mobile: sticky Call | WhatsApp | Enquire bar, hidden while the form is on screen.
// On itinerary pages the third button becomes "Enquire for this trip".
export default function FloatingContact() {
  const pathname = usePathname();
  const isTripPage = pathname.startsWith('/trips/');
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    setFormVisible(false);
    const section = document.getElementById('enquiry');
    if (!section || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), {
      rootMargin: '0px 0px -10% 0px',
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, [pathname]);

  const enquireHref = pathname === '/' || isTripPage ? '#enquiry' : '/#enquiry';

  return (
    <>
      <a
        href={whatsappLink()}
        className="whatsapp-fab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with KamaalTravels on WhatsApp"
      >
        <WhatsAppIcon width={28} height={28} />
      </a>

      <nav
        className={`mobile-bar${isTripPage ? ' mobile-bar--trip' : ''}${formVisible ? ' is-hidden' : ''}`}
        aria-label="Quick contact"
        aria-hidden={formVisible ? true : undefined}
      >
        <a href={telLink()} className="mobile-bar-btn" tabIndex={formVisible ? -1 : undefined}>
          <PhoneIcon /> <span className="mobile-bar-label">Call</span>
        </a>
        <a
          href={whatsappLink()}
          className="mobile-bar-btn"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={formVisible ? -1 : undefined}
        >
          <WhatsAppIcon /> <span className="mobile-bar-label">WhatsApp</span>
        </a>
        <a href={enquireHref} className="mobile-bar-btn mobile-bar-btn--primary" tabIndex={formVisible ? -1 : undefined}>
          {isTripPage ? 'Enquire for this trip' : 'Enquire'}
        </a>
      </nav>
    </>
  );
}
