import { FAQS } from '@/data/content';
import Accordion from './Accordion';

export default function Faq() {
  return (
    <section id="faq" className="section section--white" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <h2 id="faq-title" className="section-title">Frequently asked questions</h2>
        <Accordion items={FAQS} />
      </div>
    </section>
  );
}
