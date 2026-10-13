// The three trips. Used by the homepage cards and the itinerary pages
// (/trips/students, /trips/family, /trips/honeymoon).
//
// [CONFIRM OR REPLACE] Day plans, inclusions and quick facts below are a
// first draft based on the brief. Check every line before launch.
import { FAMILY_HOTEL_CLASS, HONEYMOON, PRICES } from '@/lib/site';

export const TRIP_TYPES = ['Students', 'Family', 'Honeymoon'];

export const TRIPS = [
  {
    slug: 'students',
    tripType: 'Students',
    title: 'Student Trips',
    shortTitle: 'Students',
    eyebrow: 'Budget',
    imageKey: 'tripStudents',
    imageAlt: 'Students on a group trip in Kashmir',
    duration: '4–5 days',
    pageDuration: '5 days / 4 nights',
    price: PRICES.students,
    priceUnit: 'per person',
    intro: 'Five busy, budget-friendly days for student groups, covering the four big names of Kashmir with shared transport and simple stays.',
    highlights: [
      'Shikara ride on Dal Lake',
      'Gulmarg Gondola day',
      'Budget stays and shared transport',
    ],
    quickFacts: {
      duration: '5 days / 4 nights',
      season: 'April to October',
      who: 'Student groups and college trips',
      stay: 'Budget hotels, shared rooms',
      start: 'Srinagar airport',
    },
    days: [
      {
        title: 'Day 1: Arrive in Srinagar, Dal Lake shikara',
        body: 'We meet you at Srinagar airport and take you to your hotel. In the late afternoon, the group heads out on a shikara ride across Dal Lake.',
      },
      {
        title: 'Day 2: Gulmarg and the gondola',
        body: 'A day trip to Gulmarg. Ride the Gulmarg Gondola and spend the afternoon in the meadows in summer or the snow in winter. Back to Srinagar for the night.',
      },
      {
        title: 'Day 3: Pahalgam, Betaab Valley and Aru Valley',
        body: 'Drive to Pahalgam along the Lidder river and visit Betaab Valley and Aru Valley with a local cab.',
      },
      {
        title: 'Day 4: Sonamarg',
        body: 'A day in Sonamarg, the meadow of gold, with time for a walk towards the glacier when the season allows.',
      },
      {
        title: 'Day 5: Mughal Gardens and departure',
        body: 'Morning at the Mughal Gardens in Srinagar, then a drop at the airport for your flight home.',
      },
    ],
    included: [
      '4 nights in budget hotels on a shared-room basis',
      'Breakfast and dinner every day',
      'Shared transport for all sightseeing in the plan',
      'Shikara ride on Dal Lake',
      'Airport pick-up and drop in Srinagar',
      'A KamaalTravels trip coordinator on call',
    ],
    notIncluded: [
      'Flights or trains to and from Srinagar',
      'Gondola tickets',
      'Local union taxis at Pahalgam and Sonamarg',
      'Pony rides and other optional activities',
      'Lunch and personal expenses',
      'Travel insurance',
    ],
    stays: [
      { title: 'Budget hotel in Srinagar', text: 'Clean, simple rooms close to Dal Lake.', imageKey: 'stayHotelSrinagar' },
      { title: 'Budget hotel in Pahalgam', text: 'A riverside base for the Pahalgam day.', imageKey: 'stayHotelPahalgam' },
    ],
  },
  {
    slug: 'family',
    tripType: 'Family',
    title: 'Family Trips',
    shortTitle: 'Families',
    eyebrow: 'Most popular',
    imageKey: 'tripFamily',
    imageAlt: 'A family on holiday in Kashmir',
    duration: '6–7 days',
    pageDuration: '7 days / 6 nights',
    price: PRICES.family,
    priceUnit: 'per person',
    intro: 'A relaxed week at a gentle pace, with a houseboat night, two days in Pahalgam and a private cab for the whole family.',
    highlights: [
      'A night on a Srinagar houseboat',
      'Two relaxed days in Pahalgam',
      'Private cab with a local driver',
    ],
    quickFacts: {
      duration: '7 days / 6 nights',
      season: 'April to October',
      who: 'Families with children and grandparents',
      stay: `${FAMILY_HOTEL_CLASS} hotels and a houseboat`,
      start: 'Srinagar airport',
    },
    days: [
      {
        title: 'Day 1: Arrive in Srinagar, houseboat night',
        body: 'Airport pick-up and a short drive to your houseboat. Settle in, take tea on the deck and spend your first night on the water.',
      },
      {
        title: 'Day 2: Srinagar sightseeing',
        body: 'A day around Srinagar: the Mughal Gardens, the old city and a shikara ride on Dal Lake, with plenty of breaks for the children.',
      },
      {
        title: 'Day 3: Gulmarg',
        body: 'Drive to Gulmarg for the gondola, the meadows and, in winter, the snow. Back to Srinagar or on to your next hotel.',
      },
      {
        title: 'Days 4–5: Pahalgam',
        body: 'Two nights in Pahalgam. Visit Betaab Valley and Aru Valley, walk by the Lidder river and take an optional pony ride.',
      },
      {
        title: 'Day 6: Sonamarg',
        body: 'A day trip to Sonamarg for the meadows and mountain views, then back to Srinagar for your last night.',
      },
      {
        title: 'Day 7: Departure',
        body: 'Breakfast, some time for last-minute shopping, and a drop at Srinagar airport.',
      },
    ],
    included: [
      `5 nights in ${FAMILY_HOTEL_CLASS} hotels and 1 night on a houseboat`,
      'Breakfast and dinner every day',
      'Private cab with driver for the whole trip',
      'Shikara ride on Dal Lake',
      'Airport pick-up and drop in Srinagar',
      'Driver allowance, tolls and parking',
    ],
    notIncluded: [
      'Flights or trains to and from Srinagar',
      'Gondola tickets',
      'Local union taxis at Pahalgam and Sonamarg',
      'Pony rides and other optional activities',
      'Lunch and personal expenses',
      'Travel insurance',
    ],
    stays: [
      { title: 'Houseboat in Srinagar', text: 'Your first night on the water, with a carved wooden interior.', imageKey: 'expHouseboat' },
      { title: `${FAMILY_HOTEL_CLASS} hotel in Srinagar`, text: 'Family rooms close to the lake and the gardens.', imageKey: 'stayHotelSrinagar' },
      { title: `${FAMILY_HOTEL_CLASS} hotel in Pahalgam`, text: 'Two nights by the river with mountain views.', imageKey: 'stayHotelPahalgam' },
    ],
  },
  {
    slug: 'honeymoon',
    tripType: 'Honeymoon',
    title: 'Honeymoon Trips',
    shortTitle: 'Honeymoon',
    eyebrow: 'For couples',
    imageKey: 'tripHoneymoon',
    imageAlt: 'A couple on their honeymoon in Kashmir',
    duration: `${HONEYMOON.days} days`,
    pageDuration: `${HONEYMOON.itineraryDays} days`,
    price: PRICES.honeymoon,
    priceUnit: 'per couple',
    intro: 'A private trip for two, starting with a sunset shikara and a houseboat night, with time to slow down in Pahalgam.',
    highlights: [
      'Private sunset shikara',
      'Houseboat stay in Srinagar',
      HONEYMOON.extras.join(' and '),
    ],
    quickFacts: {
      duration: `${HONEYMOON.itineraryDays} days`,
      season: 'All year',
      who: 'Couples and honeymooners',
      stay: 'Houseboat and hand-picked hotels',
      start: 'Srinagar airport',
    },
    days: [
      {
        title: 'Day 1: Srinagar, private sunset shikara, houseboat',
        body: 'Airport pick-up and check-in on your houseboat. At sunset, a private shikara ride for the two of you on Dal Lake.',
      },
      {
        title: 'Day 2: Gulmarg',
        body: 'A day in Gulmarg with the gondola and the meadows or snow, at your own pace in a private cab.',
      },
      {
        title: 'Days 3–4: Pahalgam',
        body: 'Two quiet days in Pahalgam: Betaab Valley, Aru Valley, riverside walks and time to simply rest.',
      },
      {
        title: 'Day 5: Sonamarg',
        body: 'A day trip to Sonamarg for the meadows and mountain views.',
      },
      {
        title: 'Day 6: Departure',
        body: 'A slow breakfast, then a drop at Srinagar airport.',
      },
    ],
    extras: HONEYMOON.extras,
    included: [
      'Houseboat and hotel stays for the whole trip',
      'Breakfast and dinner every day',
      'Private cab with driver for the whole trip',
      'Private sunset shikara ride',
      ...HONEYMOON.extras,
      'Airport pick-up and drop in Srinagar',
    ],
    notIncluded: [
      'Flights or trains to and from Srinagar',
      'Gondola tickets',
      'Local union taxis at Pahalgam and Sonamarg',
      'Pony rides and other optional activities',
      'Lunch and personal expenses',
      'Travel insurance',
    ],
    stays: [
      { title: 'Houseboat in Srinagar', text: 'Start your trip on the water, with the lake outside your window.', imageKey: 'expHouseboat' },
      { title: 'Hotel in Pahalgam', text: 'A quiet room with a view for two nights.', imageKey: 'stayHotelPahalgam' },
    ],
  },
];

export function getTrip(slug) {
  return TRIPS.find((trip) => trip.slug === slug);
}

// Maps the trip finder's "Who's travelling" choice to a trip.
export const FINDER_TO_SLUG = {
  Students: 'students',
  Family: 'family',
  Couple: 'honeymoon',
};
