import { EXPERIENCES } from '@/data/content';
import { img } from '@/lib/images';
import Photo from './Photo';

export default function Experiences() {
  return (
    <section id="experiences" className="section section--white" aria-labelledby="experiences-title">
      <div className="container">
        <div className="section-intro">
          <h2 id="experiences-title" className="section-title">Ways to experience Kashmir</h2>
          <p>
            Every trip mixes the big sights with slower moments. These are the experiences our guests ask for most, and
            we can add any of them to your plan.
          </p>
        </div>
      </div>
      <div className="container container--bleed-mobile">
        <ul className="swipe-row exp-row" aria-label="Experiences">
          {EXPERIENCES.map((exp) => (
            <li className="swipe-item exp-item" key={exp.title}>
              <article className="exp-card">
                <Photo
                  image={img(exp.imageKey, exp.title)}
                  alt={exp.alt}
                  sizes="(min-width: 1024px) 280px, (min-width: 768px) 300px, 72vw"
                />
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-text">{exp.text}</p>
              </article>
            </li>
          ))}
        </ul>
        <p className="small-note">Some activities are seasonal and depend on the weather.</p>
      </div>
    </section>
  );
}
