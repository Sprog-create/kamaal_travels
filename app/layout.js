import { Barlow_Condensed, Nunito_Sans, Source_Serif_4 } from 'next/font/google';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SITE } from '@/lib/site';
import './globals.css';

const display = Barlow_Condensed({
  subsets: ['latin'],
  weight: '800',
  variable: '--font-display',
  display: 'swap',
});

const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-serif',
  display: 'swap',
});

const sans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Kashmir Tour Packages for Students, Families & Honeymoon | KamaalTravels',
    template: '%s | KamaalTravels',
  },
  description:
    'Kashmir-only tour packages for students, families and honeymooners. Srinagar, Gulmarg, Pahalgam and Sonamarg trips planned by a local team, with honest all-inclusive prices.',
  openGraph: {
    type: 'website',
    siteName: 'KamaalTravels',
    locale: 'en_IN',
    images: [{ url: '/images/promo-winter.webp', width: 960, height: 1200, alt: 'Snow season in Kashmir' }],
  },
  twitter: { card: 'summary_large_image', images: ['/images/promo-winter.webp'] },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#1F2632',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
