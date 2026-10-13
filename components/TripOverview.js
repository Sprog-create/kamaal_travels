import Link from 'next/link';
import { TRIPS } from '@/data/trips';
import { img } from '@/lib/images';
import EnquireButton from './EnquireButton';
import { CheckIcon } from './Icons';
import Photo from './Photo';

export default function TripOverview() {
  return (
    <section id="trips" className="section section--white" aria-labelledby="trips-title">
      <div className="container">
        <h2 id="trips-title" className="section-title">Choose your Kashmir trip</h2>
        <div className="overview-grid">
          {TRIPS.map((trip) => (
            <article id={`trip-${trip.slug}`} className="overview-card" key={trip.slug}>
              <Link href={`/trips/${trip.slug}`} className="overview-photo" tabIndex={-1} aria-hidden="true">
                <Photo
                  image={img(trip.imageKey, trip.title)}
                  alt={trip.imageAlt}
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 280px, calc(100vw - 32px)"
                />
              </Link>
              <div className="overview-body">
                <p className="eyebrow eyebrow--saffron">{trip.eyebrow}</p>
                <h3 className="card-title">{trip.title}</h3>
                <p className="overview-meta">
                  <span>{trip.duration}</span>
                  <span aria-hidden="true">·</span>
                  <span>
                    From <strong>₹{trip.price}</strong> {trip.priceUnit}
                  </span>
                </p>
                <ul className="check-list">
                  {trip.highlights.map((item) => (
                    <li key={item}>
                      <CheckIcon className="check-icon" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="button-row">
                  <Link href={`/trips/${trip.slug}`} className="btn btn-secondary btn-bordered">
                    View Itinerary
                  </Link>
                  <EnquireButton tripType={trip.tripType} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
