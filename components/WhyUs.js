import { WHY_ITEMS } from '@/data/content';
import { img } from '@/lib/images';
import WhyUsAccordion from './WhyUsAccordion';

export default function WhyUs() {
  const items = WHY_ITEMS.map((item) => ({ ...item, image: img(item.imageKey, item.title) }));
  return (
    <section id="about" className="section section--white section--tight-top" aria-labelledby="why-title">
      <div className="container">
        <h2 id="why-title" className="section-title">Why KamaalTravels?</h2>
        <WhyUsAccordion items={items} />
      </div>
    </section>
  );
}
