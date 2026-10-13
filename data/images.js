// Every photo on the site, with its real file size, shape and focus point.
// Files live in /public/images/ and are used exactly as uploaded.
//
// `missing: true` marks a photo that has not been supplied yet. Those cards
// show a pine-green placeholder. As soon as the file is added to
// /public/images/ with the same name, the next build shows the real photo
// automatically (see lib/images.js). If the new file is not the size listed
// here, update width and height to match it.

export const IMAGES = {
  heroBg: { src: '/images/hero-bg.webp', width: 960, height: 1280, ratio: '3 / 4', position: 'center bottom' },

  tripStudents: { src: '/images/trip-students.webp', width: 800, height: 1200, ratio: '2 / 3', position: 'center' },
  tripFamily: { src: '/images/trip-family.webp', width: 800, height: 1200, ratio: '2 / 3', position: 'center' },
  tripHoneymoon: { src: '/images/trip-honeymoon.webp', width: 800, height: 1200, ratio: '2 / 3', position: 'center bottom' },

  promoWinter: { src: '/images/promo-winter.webp', width: 960, height: 1200, ratio: '4 / 5', position: 'center' },

  why1: { src: '/images/why-1.webp', width: 1200, height: 900, ratio: '4 / 3', position: 'center' },
  why2: { src: '/images/why-2.webp', width: 960, height: 720, ratio: '4 / 3', position: 'center' },
  why3: { src: '/images/why-3.webp', width: 1200, height: 900, ratio: '4 / 3', position: 'center' },
  why4: { src: '/images/why-4.webp', width: 960, height: 720, ratio: '4 / 3', position: 'center' },

  placeSrinagar: { src: '/images/place-srinagar.webp', width: 854, height: 1067, ratio: '4 / 5', position: 'center' },
  placePahalgam: { src: '/images/place-pahalgam.webp', width: 960, height: 1200, ratio: '4 / 5', position: 'center' },
  placeGulmarg: { src: '/images/place-gulmarg.webp', width: 960, height: 1200, ratio: '4 / 5', position: 'center', missing: true },
  placeSonamarg: { src: '/images/place-sonamarg.webp', width: 960, height: 1200, ratio: '4 / 5', position: 'center', missing: true },

  expHouseboat: { src: '/images/exp-houseboat.webp', width: 800, height: 800, ratio: '1 / 1', position: 'center' },
  expGardens: { src: '/images/exp-gardens.webp', width: 800, height: 800, ratio: '1 / 1', position: 'center' },
  expHikes: { src: '/images/exp-hikes.webp', width: 800, height: 800, ratio: '1 / 1', position: 'center' },
  expShikara: { src: '/images/exp-shikara.webp', width: 800, height: 800, ratio: '1 / 1', position: 'center', missing: true },
  expGondola: { src: '/images/exp-gondola.webp', width: 800, height: 800, ratio: '1 / 1', position: 'center', missing: true },
  expPony: { src: '/images/exp-pony.webp', width: 800, height: 800, ratio: '1 / 1', position: 'center', missing: true },
  expSnow: { src: '/images/exp-snow.webp', width: 800, height: 800, ratio: '1 / 1', position: 'center', missing: true },

  ctaBg: { src: '/images/cta-bg.webp', width: 960, height: 1280, ratio: '3 / 4', position: 'center' },

  // Hotel photos for the "Where you'll stay" cards on itinerary pages.
  // Not supplied yet; add files with these names to replace the placeholders.
  stayHotelSrinagar: { src: '/images/stay-hotel-srinagar.webp', width: 800, height: 800, ratio: '1 / 1', position: 'center', missing: true },
  stayHotelPahalgam: { src: '/images/stay-hotel-pahalgam.webp', width: 800, height: 800, ratio: '1 / 1', position: 'center', missing: true },
};
