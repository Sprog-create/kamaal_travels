import { notFound } from 'next/navigation';
import Accordion from '@/components/Accordion';
import EnquireButton from '@/components/EnquireButton';
import EnquirySection from '@/components/EnquirySection';
import { CheckIcon, CrossIcon } from '@/components/Icons';
import Photo from '@/components/Photo';
import { getTrip, TRIPS } from '@/data/trips';
import { img } from '@/lib/images';

export const dynamicParams = false;

export function generateStaticParams() {
  return TRIPS.map((trip) => ({ slug: trip.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const trip = getTrip(slug);
  if (!trip) return {};
  const title = `${trip.title}: ${trip.pageDuration} Kashmir Itinerary`;
  return {
    title,
    description: `${trip.intro} Day-by-day plan, inclusions and stays for our Kashmir ${trip.title.toLowerCase()}.`,
    alternates: { canonical: `/trips/${trip.slug}` },
    openGraph: {
      title: `${title} | KamaalTravels`,
      url: `/trips/${trip.slug}`,
      images: [{ url: `/images/trip-${trip.slug}.webp`, width: 800, height: 1200, alt: trip.imageAlt }],
    },
  };
}

export default async function TripPage({ params }) {
  const { slug } = await params;
  const trip = getTrip(slug);
  if (!trip) notFound();

  const facts = [
    ['Duration', trip.quickFacts.duration],
    ['Best season', trip.quickFacts.season],
    ["Who it's for", trip.quickFacts.who],
    ['Stay type', trip.quickFacts.stay],
    ['Starting point', trip.quickFacts.start],
  ];

  return (
    <>
      <section className="trip-hero" aria-labelledby="trip-title">
        <div className="container trip-hero-grid">
          <Photo
            image={img(trip.imageKey, trip.title)}
            alt={trip.imageAlt}
            sizes="(min-width: 768px) 400px, 100vw"
            className="trip-hero-photo"
            overlay="bottom"
            showLabel={false}
          />
          <div className="trip-hero-text">
            <p className="eyebrow eyebrow--saffron">{trip.eyebrow}</p>
            <h1 id="trip-title" className="display trip-hero-title">
              {trip.title}
            </h1>
            <p className="trip-hero-meta">
              {trip.pageDuration} · From <strong>₹{trip.price}</strong> {trip.priceUnit}
            </p>
          </div>
          <div className="trip-hero-more">
            <p className="trip-hero-intro">{trip.intro}</p>
            <EnquireButton tripType={trip.tripType} className="btn btn-primary trip-hero-cta">
              Enquire for this trip
            </EnquireButton>
          </div>
        </div>
      </section>

      <section className="section section--mist section--compact" aria-label="Quick facts">
        <div className="container">
          <dl className="facts-row">
            {facts.map(([label, value]) => (
              <div className="fact" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="days-title">
        <div className="container container--narrow">
          <h2 id="days-title" className="section-title">Day by day</h2>
          <Accordion items={trip.days} defaultOpen={0} />
          {trip.extras ? (
            <div className="extras">
              <h3 className="card-title">Honeymoon extras</h3>
              <ul className="check-list">
                {trip.extras.map((extra) => (
                  <li key={extra}>
                    <CheckIcon className="check-icon" />
                    {extra}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section section--mist" aria-labelledby="included-title">
        <div className="container">
          <h2 id="included-title" className="section-title">What&apos;s included</h2>
          <div className="included-grid">
            <div className="included-card">
              <h3 className="card-title">Included</h3>
              <ul className="check-list">
                {trip.included.map((item) => (
                  <li key={item}>
                    <CheckIcon className="check-icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="included-card">
              <h3 className="card-title">Not included</h3>
              <ul className="check-list check-list--cross">
                {trip.notIncluded.map((item) => (
                  <li key={item}>
                    <CrossIcon className="cross-icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="stay-title">
        <div className="container">
          <h2 id="stay-title" className="section-title">Where you&apos;ll stay</h2>
        </div>
        <div className="container container--bleed-mobile">
          <ul className="swipe-row stay-row">
            {trip.stays.map((stay) => (
              <li className="swipe-item stay-item" key={stay.title}>
                <article className="exp-card">
                  <Photo
                    image={img(stay.imageKey, stay.title)}
                    alt={stay.title}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 33vw, 72vw"
                  />
                  <h3 className="exp-title">{stay.title}</h3>
                  <p className="exp-text">{stay.text}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EnquirySection defaultTripType={trip.tripType} title={`Enquire about ${trip.title.toLowerCase()}`} />
    </>
  );
}
