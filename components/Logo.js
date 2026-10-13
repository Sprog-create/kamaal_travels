import { SITE } from '@/lib/site';

export default function Logo() {
  return (
    <span className="logo">
      <span className="logo-name">
        Kamaal<span className="logo-accent">Travels</span>
      </span>
      <span className="logo-tagline">Kashmir Specialists Since {SITE.sinceYear}</span>
    </span>
  );
}
