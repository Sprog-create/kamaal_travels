import { getImageProps } from 'next/image';
import { TRIPS } from '@/data/trips';
import { img } from '@/lib/images';
import PromoCard from './PromoCard';
import TripCard from './TripCard';
import TripFinder from './TripFinder';

// 1×1 transparent GIF: on desktop (1024px+) the <picture> picks this instead
// of hero-bg.webp, so desktop visitors never download the mobile photo.
const BLANK_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export default function Hero() {
  const hero = img('heroBg');
  const { props: heroProps } = getImageProps({
    src: hero.src,
    width: hero.width,
    height: hero.height,
    alt: 'Snow-capped mountains above a green Kashmir valley under a blue sky',
    sizes: '100vw',
  });
  const { style: heroStyle, ...heroImgProps } = heroProps;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-photo photo" style={{ aspectRatio: hero.ratio }}>
        <picture>
          <source media="(min-width: 1024px)" srcSet={BLANK_GIF} />
          <img
            {...heroImgProps}
            alt={heroProps.alt}
            loading="eager"
            fetchPriority="high"
            className="photo-img"
            style={{ ...heroStyle, objectPosition: hero.position }}
          />
        </picture>
        <div className="photo-overlay photo-overlay--top" aria-hidden="true" />
      </div>

      <div className="container hero-grid">
        <div className="hero-main">
          <h1 id="hero-title" className="display hero-title">
            <span className="hero-line">One valley.</span>
            <span className="hero-line">Three ways to</span>
            <span className="hero-line accent">Fall in love</span>
            <span className="hero-line accent">with Kashmir</span>
          </h1>

          <TripFinder />

          <div className="swipe-row hero-trips" role="list" aria-label="Our trips">
            {TRIPS.map((trip) => (
              <div role="listitem" className="swipe-item hero-trip" key={trip.slug}>
                <TripCard
                  trip={trip}
                  image={img(trip.imageKey, trip.title)}
                  sizes="(min-width: 1024px) 220px, (min-width: 768px) 280px, 72vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hero-side">
          <PromoCard image={img('promoWinter', 'Snow season in Kashmir')} />
        </div>
      </div>
    </section>
  );
}
