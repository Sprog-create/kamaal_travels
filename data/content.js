// Homepage copy that is not part of a trip. All text is original.
import { SITE } from '@/lib/site';

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const PROMO = {
  eyebrow: 'Winter 2026–27',
  title: 'Snow season in Kashmir',
  text: 'Snow in Gulmarg, crisp mornings on Dal Lake and warm houseboat evenings, December to February.',
  cta: 'See Winter Trips',
  href: '/#trips',
};

// [EDIT THE TEXT TO YOUR REAL REASONS]
export const WHY_ITEMS = [
  {
    title: 'We Only Do Kashmir',
    body: 'Kashmir is the only place we sell. Every route, hotel and driver is one we know personally, not a line in a catalogue.',
    imageKey: 'why1',
    alt: 'A KamaalTravels group in the Kashmir valley',
  },
  {
    title: 'A Local Team on the Ground',
    body: 'Our team lives in the valley. If the weather or roads change your plans, someone nearby sorts it out the same day.',
    imageKey: 'why2',
    alt: 'A member of the KamaalTravels local team in Kashmir',
  },
  {
    title: 'Honest, All-Inclusive Prices',
    body: 'The price we quote covers the stays, transport and activities we list. Anything not included is written down before you pay.',
    imageKey: 'why3',
    alt: 'Travellers enjoying an included activity in Kashmir',
  },
  {
    title: 'Trips Built Around You',
    body: 'Change a day, add a night or slow the pace. We shape each plan around your group, whether that is students, a family or a couple.',
    imageKey: 'why4',
    alt: 'A relaxed day out on a tailor-made Kashmir trip',
  },
];

export const PLACES = [
  {
    name: 'Srinagar',
    text: 'Dal Lake, houseboats, Mughal Gardens and old-city markets.',
    imageKey: 'placeSrinagar',
    alt: 'Srinagar and Dal Lake',
  },
  {
    name: 'Pahalgam',
    text: 'Pine forests, the Lidder river and the Betaab and Aru valleys.',
    imageKey: 'placePahalgam',
    alt: 'The valley at Pahalgam',
  },
  {
    name: 'Gulmarg',
    text: 'Meadows in summer, deep snow in winter and the famous gondola.',
    imageKey: 'placeGulmarg',
    alt: 'Gulmarg meadows and mountains',
  },
  {
    name: 'Sonamarg',
    text: 'The meadow of gold, with glaciers and the Sindh river.',
    imageKey: 'placeSonamarg',
    alt: 'Sonamarg meadows and glaciers',
  },
];

export const EXPERIENCES = [
  { title: 'Houseboat stay', text: 'Sleep on the water in a carved wooden houseboat.', imageKey: 'expHouseboat', alt: 'A traditional houseboat on a Srinagar lake' },
  { title: 'Mughal Gardens', text: 'Terraced lawns, fountains and old chinar trees.', imageKey: 'expGardens', alt: 'Terraced Mughal Gardens in Srinagar' },
  { title: 'Mountain walks', text: 'Easy walks through pine forest and meadow.', imageKey: 'expHikes', alt: 'Walkers on a mountain trail in Kashmir' },
  { title: 'Shikara ride', text: 'Glide across Dal Lake in a painted wooden boat.', imageKey: 'expShikara', alt: 'A shikara on Dal Lake' },
  { title: 'Gulmarg Gondola', text: 'Ride the cable car high above Gulmarg.', imageKey: 'expGondola', alt: 'The Gulmarg Gondola cable car' },
  { title: 'Pony ride in Pahalgam', text: 'Ride up to quiet meadows above the town.', imageKey: 'expPony', alt: 'A pony ride in Pahalgam' },
  { title: 'Snow days', text: 'Sledging, snowball fights and a first go at skiing.', imageKey: 'expSnow', alt: 'Fresh snow in Kashmir in winter' },
];

// [USE ONLY REAL REVIEWS]
// Add real guest reviews here. Until this list has entries, the Reviews
// section shows clearly marked placeholder cards.
// Example entry:
// { name: 'Full name', city: 'Pune', tripType: 'Family Trip', stars: 5, quote: 'What they said, in their words.' },
export const REVIEWS = [];

export const FAQS = [
  {
    title: 'When is the best time to visit Kashmir?',
    body: (
      <>
        <p>It depends on what you want to see. April to June brings spring flowers and mild days. July and August are green and lively. September to November is clear and calm, with autumn colours. December to February is snow season, best for Gulmarg and snow days.</p>
        <p>Some high roads can close after heavy snow, so we plan winter trips around the weather.</p>
      </>
    ),
  },
  {
    title: 'Is Kashmir safe for tourists?',
    body: (
      <p>The tourist areas we cover are busy with visitors through the year. Our local team follows official advisories every day, stays in touch with you throughout the trip and changes plans if needed. If we ever have a concern about your dates, we will tell you honestly before you book.</p>
    ),
  },
  {
    title: 'What should I pack?',
    body: (
      <p>Pack layers, because mornings and evenings are cool even in summer. Bring comfortable walking shoes, sunglasses and sunscreen (the sun is strong at altitude), any medicines you need and photo ID. In winter, add thermals, waterproof boots, gloves and a warm cap.</p>
    ),
  },
  {
    title: 'Will my mobile phone work in Kashmir?',
    body: (
      <p>Prepaid SIM cards from outside Jammu and Kashmir do not work in the region. Postpaid connections from the main networks usually work. Most hotels and houseboats have Wi-Fi, though it can be slow. Tell us in advance and we will help you stay connected.</p>
    ),
  },
  {
    title: 'How do I pay?',
    body: (
      <p>An advance of {SITE.advancePercent}% confirms your trip, and the balance is due [before arrival]. You can pay by {SITE.paymentMethods.join(', ')}. We send a written confirmation for every payment.</p>
    ),
  },
  {
    title: 'What happens if I need to cancel?',
    body: (
      <p>Cancellation charges depend on how close to your travel date you cancel. You will find the full details in our <a className="inline-link" href="/cancellation-policy">Cancellation Policy</a>.</p>
    ),
  },
];
