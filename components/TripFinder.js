'use client';

import { useState } from 'react';
import { MONTHS } from '@/data/content';
import { FINDER_TO_SLUG, TRIPS } from '@/data/trips';
import { prefillEnquiry } from '@/lib/prefill';
import { ChevronDownIcon } from './Icons';

const WHO = ['Anyone', 'Students', 'Family', 'Couple'];

export default function TripFinder() {
  const [who, setWho] = useState('Anyone');
  const [when, setWhen] = useState('Any month');

  function onSubmit(event) {
    event.preventDefault();
    const slug = FINDER_TO_SLUG[who];
    const trip = TRIPS.find((t) => t.slug === slug);
    prefillEnquiry({
      tripType: trip ? trip.tripType : undefined,
      travelMonth: when === 'Any month' ? undefined : when,
    });

    const target = document.getElementById(slug ? `trip-${slug}` : 'trips');
    if (!target) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    if (slug) {
      target.classList.remove('is-highlighted');
      // Restart the highlight animation on repeat searches.
      void target.offsetWidth;
      target.classList.add('is-highlighted');
    }
  }

  return (
    <form className="trip-finder" onSubmit={onSubmit} aria-label="Find your Kashmir trip">
      <div className="finder-fields">
        <label className="finder-field">
          <span className="finder-label">Who&apos;s travelling</span>
          <span className="finder-select">
            <select value={who} onChange={(e) => setWho(e.target.value)}>
              {WHO.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <ChevronDownIcon className="finder-chevron" />
          </span>
        </label>
        <label className="finder-field">
          <span className="finder-label">When</span>
          <span className="finder-select">
            <select value={when} onChange={(e) => setWhen(e.target.value)}>
              <option>Any month</option>
              {MONTHS.map((month) => (
                <option key={month}>{month}</option>
              ))}
            </select>
            <ChevronDownIcon className="finder-chevron" />
          </span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary finder-submit">
        Find My Trip
      </button>
    </form>
  );
}
