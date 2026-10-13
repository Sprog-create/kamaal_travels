import { SITE, telLink, whatsappLink } from '@/lib/site';
import FooterColumn from './FooterColumn';
import { DownloadIcon, FacebookIcon, InstagramIcon, PhoneIcon, WhatsAppIcon, YouTubeIcon } from './Icons';
import Logo from './Logo';

const ABOUT_LINKS = [
  { label: 'About KamaalTravels', href: '/#about' },
  { label: 'Our Team', href: '/#about' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/#enquiry' },
];

const RESOURCE_LINKS = [
  { label: 'Student Trips', href: '/trips/students' },
  { label: 'Family Trips', href: '/trips/family' },
  { label: 'Honeymoon Trips', href: '/trips/honeymoon' },
  { label: 'FAQs', href: '/#faq' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
  { label: 'Terms', href: '/terms' },
];

function PreFooter() {
  const items = [
    {
      icon: <PhoneIcon />,
      text: (
        <>
          Need help planning? <span className="nowrap">Call us {SITE.phoneDisplay}</span>
        </>
      ),
      href: telLink(),
    },
    { icon: <WhatsAppIcon />, text: 'Chat with us on WhatsApp', href: whatsappLink(), external: true },
  ];
  if (SITE.brochureUrl) {
    items.push({ icon: <DownloadIcon />, text: 'Download our Kashmir brochure', href: SITE.brochureUrl, download: true });
  }

  return (
    <div className="prefooter">
      <ul className="container prefooter-list">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="prefooter-item"
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(item.download ? { download: true } : {})}
            >
              <span className="icon-circle">{item.icon}</span>
              <span className="prefooter-text">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="container">
        <hr className="footer-divider" />
      </div>
    </div>
  );
}

export default function Footer() {
  const socials = [
    { label: 'Instagram', href: SITE.social.instagram, icon: <InstagramIcon /> },
    { label: 'Facebook', href: SITE.social.facebook, icon: <FacebookIcon /> },
    { label: 'YouTube', href: SITE.social.youtube, icon: <YouTubeIcon /> },
  ];

  return (
    <footer className="site-footer">
      <PreFooter />
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p className="footer-tagline">Tours to one place only: Kashmir, planned by people who know it.</p>
          <a href="/#enquiry" className="btn btn-primary">
            Plan My Trip
          </a>
          <ul className="social-list" aria-label="Follow us">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} className="icon-circle icon-circle--link" aria-label={`KamaalTravels on ${social.label}`} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn title="About Us">
          <ul className="footer-links">
            {ABOUT_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Trip Resources">
          <ul className="footer-links">
            {RESOURCE_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Book Today">
          <p className="footer-book">{SITE.advancePercent}% advance confirms your trip.</p>
          <ul className="payment-list" aria-label="Payment methods we accept">
            {SITE.paymentMethods.map((method) => (
              <li key={method} className="payment-chip">
                {method}
              </li>
            ))}
          </ul>
        </FooterColumn>
      </div>

      <div className="container footer-registration">
        <p>{SITE.registration}</p>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 KamaalTravels. All rights reserved.</p>
          <ul className="footer-legal">
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
            </li>
            <li>
              <a href="/cancellation-policy">Cancellation Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
