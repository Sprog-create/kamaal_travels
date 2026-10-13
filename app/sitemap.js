import { TRIPS } from '@/data/trips';
import { SITE } from '@/lib/site';

export default function sitemap() {
  const pages = ['', ...TRIPS.map((trip) => `/trips/${trip.slug}`), '/privacy-policy', '/terms', '/cancellation-policy'];
  return pages.map((path) => ({ url: `${SITE.url}${path}` }));
}
