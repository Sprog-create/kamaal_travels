import { PROMO } from '@/data/content';
import Photo from './Photo';

export default function PromoCard({ image }) {
  return (
    <article className="promo-card">
      <Photo
        image={image}
        alt="Snow-covered mountains in Kashmir in winter"
        sizes="(min-width: 1024px) 480px, (min-width: 600px) 560px, calc(100vw - 32px)"
        overlay="bottom"
        showLabel={false}
      >
        <div className="photo-caption promo-content">
          <p className="eyebrow">{PROMO.eyebrow}</p>
          <h2 className="display promo-title">{PROMO.title}</h2>
          <p className="promo-text">{PROMO.text}</p>
          <a href={PROMO.href} className="btn btn-secondary">
            {PROMO.cta}
          </a>
        </div>
      </Photo>
    </article>
  );
}
