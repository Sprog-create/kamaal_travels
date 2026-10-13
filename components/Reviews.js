import { REVIEWS } from '@/data/content';
import { StarIcon } from './Icons';

// Only real reviews go in data/content.js. Until there are some, this shows
// three clearly marked placeholder cards so the layout can be reviewed.
const PLACEHOLDERS = [1, 2, 3].map((n) => ({
  name: `[Guest name ${n}]`,
  city: '[City]',
  tripType: '[Trip type]',
  stars: 5,
  quote: '[A short quote from a real guest goes here.]',
  placeholder: true,
}));

function Stars({ count }) {
  return (
    <span className="stars" role="img" aria-label={`${count} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon key={n} filled={n <= count} />
      ))}
    </span>
  );
}

export default function Reviews() {
  const reviews = REVIEWS.length ? REVIEWS : PLACEHOLDERS;
  return (
    <section id="reviews" className="section section--mist" aria-labelledby="reviews-title">
      <div className="container">
        <h2 id="reviews-title" className="section-title">What our travellers say</h2>
      </div>
      <div className="container container--bleed-mobile">
        <ul className="swipe-row review-row" aria-label="Reviews">
          {reviews.map((review, index) => (
            <li className="swipe-item review-item" key={`${review.name}-${index}`}>
              <figure className={`review-card${review.placeholder ? ' review-card--placeholder' : ''}`}>
                <Stars count={review.stars} />
                <blockquote>
                  <p>{review.quote}</p>
                </blockquote>
                <figcaption>
                  <span className="review-name">{review.name}</span>
                  <span className="review-meta">
                    {review.city} · {review.tripType}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
