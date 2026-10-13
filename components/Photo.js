import Image from 'next/image';
import { MountainIcon } from './Icons';

/**
 * A photo inside a fixed-aspect-ratio container.
 * - The container owns the aspect ratio and the rounded corners (overflow: hidden).
 * - The image fills it with object-fit: cover, so it is never stretched.
 * - Missing photos render a pine placeholder at the same ratio.
 *
 * `image` comes from img() in lib/images.js.
 * `overlay` adds a dark gradient: "bottom", "top" or "lower-half".
 * `showLabel` puts the card title on the placeholder (turn off when the card
 * already shows its title on top of the photo).
 */
export default function Photo({
  image,
  alt,
  sizes,
  className = '',
  radius = 'card',
  overlay,
  showLabel = true,
  children,
}) {
  const { src, width, height, ratio, position = 'center', missing, title } = image;
  return (
    <div className={`photo photo--${radius} ${className}`} style={{ aspectRatio: ratio }}>
      {missing ? (
        <div className="photo-placeholder" role="img" aria-label={`${alt} (photo coming soon)`}>
          <MountainIcon className="photo-placeholder-icon" />
          {showLabel && title ? <span className="photo-placeholder-title">{title}</span> : null}
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading="lazy"
          className="photo-img"
          style={{ objectPosition: position }}
        />
      )}
      {overlay ? <div className={`photo-overlay photo-overlay--${overlay}`} aria-hidden="true" /> : null}
      {children}
    </div>
  );
}
