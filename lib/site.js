// ---------------------------------------------------------------------------
// SITE SETTINGS
// Every value written in [SQUARE BRACKETS] is a placeholder. Replace each one
// with the real value before launch. This is the only file you need to edit
// for phone numbers, prices, registration details and similar facts.
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'KamaalTravels',
  // Full site URL, used for SEO and social previews. Set NEXT_PUBLIC_SITE_URL
  // in your environment, or replace the fallback.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kamaaltravels.com', // [CONFIRM DOMAIN]

  sinceYear: '[YEAR]',

  // Phone shown on the site, and the number used for tap-to-call.
  phoneDisplay: '[PHONE]', // e.g. +91 98765 43210
  phoneTel: '[PHONE]', // digits with country code, no spaces, e.g. +919876543210

  // WhatsApp number in international format, digits only, e.g. 919876543210
  whatsappNumber: '[NUMBER]',
  whatsappText: 'Hi KamaalTravels, I want to plan a Kashmir trip',

  // Used in the form success message: "We'll call or WhatsApp you within ..."
  responseTime: '[24 hours]',

  // Footer "Book Today" column
  advancePercent: '[X]',
  paymentMethods: ['UPI', 'Visa', 'Mastercard', 'RuPay'], // [CONFIRM]

  registration: '[J&K Tourism registration no.]',

  // Path or URL of the brochure PDF. Set to null to hide the brochure item.
  brochureUrl: '/kashmir-brochure.pdf', // [PDF, or set to null]

  social: {
    instagram: '[INSTAGRAM URL]',
    facebook: '[FACEBOOK URL]',
    youtube: '[YOUTUBE URL]',
  },

  email: '[EMAIL]',
  address: '[BUSINESS ADDRESS]',
};

// Trip prices and the honeymoon length/extras. Shown as "From ₹[PRICE]".
export const PRICES = {
  students: '[PRICE]',
  family: '[PRICE]',
  honeymoon: '[PRICE]',
};

export const HONEYMOON = {
  days: '[5–6]', // shown on the homepage card
  itineraryDays: '[6]', // shown on the itinerary page
  extras: ['[Room decoration]', '[Candle-light dinner]'],
};

export const FAMILY_HOTEL_CLASS = '[3-star]';

export function telLink() {
  return `tel:${SITE.phoneTel}`;
}

export function whatsappLink(text = SITE.whatsappText) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
