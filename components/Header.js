import Link from 'next/link';
import { SITE, telLink } from '@/lib/site';
import { PhoneIcon } from './Icons';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

export const NAV_LINKS = [
  { label: 'Trips', href: '/#trips' },
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Experiences', href: '/#experiences' },
  { label: 'About Us', href: '/#about' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo-link" aria-label={`${SITE.name} home`}>
          <Logo />
        </Link>

        <nav className="desktop-nav" aria-label="Main">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href={telLink()} className="btn-icon btn-icon--outline" aria-label={`Call us on ${SITE.phoneDisplay}`}>
            <PhoneIcon />
          </a>
          <a href="/#enquiry" className="btn btn-primary header-cta">
            Plan My Trip
          </a>
          <MobileMenu links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
