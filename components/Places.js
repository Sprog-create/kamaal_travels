import { PLACES } from '@/data/content';
import { img } from '@/lib/images';
import Photo from './Photo';

function PlaceCard({ place, large }) {
  return (
    <article className={`place-card${large ? ' place-card--large' : ''}`}>
      <Photo
        image={img(place.imageKey, place.name)}
        alt={place.alt}
        sizes={
          large
            ? '(min-width: 768px) 560px, calc(100vw - 32px)'
            : '(min-width: 1024px) 300px, (min-width: 768px) 340px, calc(100vw - 32px)'
        }
        overlay="bottom"
        showLabel={false}
      >
        <div className="photo-caption place-caption">
          <h3 className="place-title">{place.name}</h3>
          <p className="place-text">{place.text}</p>
          <a href="/#trips" className="text-link text-link--light">
            See trips<span className="chevron" aria-hidden="true">&gt;</span>
            <span className="visually-hidden"> to {place.name}</span>
          </a>
        </div>
      </Photo>
    </article>
  );
}

export default function Places() {
  const [first, ...rest] = PLACES;
  return (
    <section id="destinations" className="section section--mist" aria-labelledby="places-title">
      <div className="container">
        <div className="section-intro">
          <h2 id="places-title" className="section-title">Places we cover</h2>
          <p>
            We keep our trips to the places we know best, so we can plan every day properly. Most trips combine Srinagar
            with two or three of these.
          </p>
        </div>
        <div className="places-grid">
          <PlaceCard place={first} large />
          <div className="places-side">
            {rest.map((place) => (
              <PlaceCard place={place} key={place.name} />
            ))}
            <div className="places-help">
              <p className="places-help-title">Not sure where to go?</p>
              <p>Tell us your dates and who is travelling, and we will suggest a route.</p>
              <a href="/#enquiry" className="text-link">
                Plan My Trip<span className="chevron" aria-hidden="true">&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
