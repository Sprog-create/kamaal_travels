import Link from 'next/link';
import Photo from './Photo';

// 2:3 photo card with the trip title on a bottom gradient. Links to the itinerary.
export default function TripCard({ trip, image, sizes, className = '' }) {
  return (
    <Link href={`/trips/${trip.slug}`} className={`trip-card ${className}`}>
      <Photo image={image} alt={trip.imageAlt} sizes={sizes} overlay="bottom" showLabel={false}>
        <span className="photo-caption trip-card-title">{trip.title}</span>
      </Photo>
    </Link>
  );
}
