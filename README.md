# KamaalTravels website

Mobile-first Next.js (App Router) site for KamaalTravels, Kashmir tour specialists.

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in the Firebase values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

Node 20 or newer is required. The scripts use the webpack bundler (`--webpack`), which builds the Google
Fonts reliably; you can try Turbopack by removing that flag.

## Before launch: fill in the placeholders

Every `[BRACKETED]` value is a placeholder. Almost all of them are in **`lib/site.js`**:

| Placeholder | Where it shows |
| --- | --- |
| `[YEAR]` | Header and footer tagline "Kashmir Specialists Since [YEAR]" |
| `[PHONE]` | Call buttons, pre-footer, policy pages |
| `[NUMBER]` | WhatsApp links (digits with country code, e.g. 919876543210) |
| `[PRICE]` | "From ₹[PRICE]" on the trip cards and itinerary pages |
| `[5–6]`, `[6]`, extras | Honeymoon length and extras |
| `[3-star]` | Family trip hotel class |
| `[24 hours]` | Form success message |
| `[X]` | Advance percentage in the footer and FAQ |
| UPI / Visa / Mastercard / RuPay | Footer payment list |
| `[J&K Tourism registration no.]` | Footer |
| Brochure PDF | Put the file at `public/kashmir-brochure.pdf`, or set `brochureUrl: null` to hide it |
| Social links, email, address | Footer and policy pages |

Also check:

- **`data/trips.js`**: day-by-day plans, inclusions, quick facts and stays (marked `[CONFIRM OR REPLACE]`).
- **`data/content.js`**: "Why KamaalTravels?" reasons (`[EDIT THE TEXT TO YOUR REAL REASONS]`), places,
  experiences, FAQ answers (the payment answer has a `[before arrival]` placeholder).
- **Reviews**: add only real reviews to `REVIEWS` in `data/content.js`. Until then the section shows three
  dashed placeholder cards.
- **Policy pages** (`app/privacy-policy`, `app/terms`, `app/cancellation-policy`) are drafts with
  placeholders. Have them checked before launch.

## Photos

Put the photos in `public/images/` with exactly these names. Do not rename, crop or recompress them.

| File | Size | Used for |
| --- | --- | --- |
| hero-bg.webp | 960×1280 | Mobile hero only (desktop never downloads it) |
| trip-students.webp, trip-family.webp, trip-honeymoon.webp | 800×1200 | Trip cards and itinerary heroes |
| promo-winter.webp | 960×1200 | Winter promo card, Open Graph image |
| why-1.webp, why-3.webp | 1200×900 | Why us |
| why-2.webp, why-4.webp | 960×720 | Why us |
| place-srinagar.webp | 854×1067 | Places |
| place-pahalgam.webp | 960×1200 | Places |
| exp-houseboat.webp, exp-gardens.webp, exp-hikes.webp | 800×800 | Experiences (houseboat also on "Where you'll stay") |
| cta-bg.webp | 960×1280 | Closing call to action |

**Not supplied yet** (shown as pine-green placeholders with a mountain icon):
`place-gulmarg.webp`, `place-sonamarg.webp`, `exp-shikara.webp`, `exp-gondola.webp`, `exp-pony.webp`,
`exp-snow.webp`, and hotel photos `stay-hotel-srinagar.webp`, `stay-hotel-pahalgam.webp`.

To replace a placeholder, drop the file into `public/images/` with that name and rebuild. Nothing else
needs to change. If the file is not 960×1200 (4:5) or 800×800 (1:1), update its `width` and `height` in
`data/images.js`.

All sizes, aspect ratios and focus points live in `data/images.js`.

## Firebase (enquiry form)

1. Create a Firebase project and add a **Web app**. Copy its config into `.env.local`
   (`NEXT_PUBLIC_FIREBASE_API_KEY`, `..._AUTH_DOMAIN`, `..._PROJECT_ID`, `..._APP_ID`).
2. Create a **Cloud Firestore** database.
3. Publish the rules in `firestore.rules` (Firestore > Rules). They allow the site to **create** enquiries
   only, with field checks, and block all reads, so nobody can read enquiries from the browser.
4. Read enquiries in the Firebase console under the `enquiries` collection.

Each enquiry stores: `name, phone, email, tripType, travelMonth, adults, children, fromCity, message,
consent, sourcePage, createdAt` (server timestamp). The phone is saved as a 10-digit number.

All Firebase code is in `lib/firebase.js`, and it is only loaded when someone submits the form.
If saving fails (or Firebase is not configured), the form shows an error with a WhatsApp button.
A hidden honeypot field silently drops bot submissions.

## Project layout

```
app/                    pages (home, /trips/[slug], policy pages, sitemap, robots)
components/             UI components
data/images.js          every photo: path, real size, aspect ratio, focus point
data/trips.js           the three trips and their itineraries
data/content.js         homepage copy, FAQ, reviews
lib/site.js             phone, WhatsApp, prices and other placeholders
lib/firebase.js         Firestore write
firestore.rules         Firestore security rules
```

## Notes on behaviour

- Breakpoints: designed at 390px, adapts at 768px and 1024px; content is capped at 1200px.
- The full desktop navigation appears from 1100px. Between 1024px and 1099px the header shows the phone
  button, "Plan My Trip" and the menu button, because the six links don't fit beside the logo.
- On itinerary pages the mobile contact bar becomes Call (icon), WhatsApp (icon) and "Enquire for this trip".
- "Find My Trip" scrolls to the matching trip card and preselects the trip type and month in the form.
- "See trips" on place cards goes to the trip overview, since every trip covers all four places.
- "See Winter Trips" also goes to the trip overview until a winter page exists.
