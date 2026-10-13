import { img } from '@/lib/images';
import { whatsappLink } from '@/lib/site';
import { WhatsAppIcon } from './Icons';
import Photo from './Photo';

export default function ClosingCta() {
  return (
    <section className="closing-cta" aria-labelledby="cta-title">
      <div className="container cta-grid">
        <Photo
          image={img('ctaBg', 'Ready for Kashmir?')}
          alt="A traveller looking out over the mountains of Kashmir"
          sizes="(min-width: 1024px) 480px, 100vw"
          className="cta-photo"
          overlay="lower-half"
          showLabel={false}
        />
        <div className="cta-content">
          <h2 id="cta-title" className="display cta-title">
            Ready for <span className="accent">Kashmir?</span>
          </h2>
          <div className="cta-buttons">
            <a href="/#enquiry" className="btn btn-primary">
              Plan My Trip
            </a>
            <a href={whatsappLink()} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
