'use client';

import Image from 'next/image';
import { useState } from 'react';
import Accordion from './Accordion';

// Photo on the left (on top on mobile) and an accordion beside it.
// Opening an item crossfades to that item's photo.
export default function WhyUsAccordion({ items }) {
  const [active, setActive] = useState(0);

  return (
    <div className="why-layout">
      <div className="why-photo photo photo--card" style={{ aspectRatio: '4 / 3' }}>
        {items.map((item, index) => (
          <Image
            key={item.imageKey}
            src={item.image.src}
            alt={item.alt}
            width={item.image.width}
            height={item.image.height}
            sizes="(min-width: 1024px) 600px, (min-width: 768px) 640px, calc(100vw - 32px)"
            loading="lazy"
            className={`photo-img why-img${index === active ? ' is-active' : ''}`}
            style={{ objectPosition: item.image.position }}
            aria-hidden={index === active ? undefined : true}
          />
        ))}
      </div>
      <Accordion
        className="why-accordion"
        items={items}
        defaultOpen={0}
        onChange={(openIndex) => {
          if (openIndex !== -1) setActive(openIndex);
        }}
      />
    </div>
  );
}
