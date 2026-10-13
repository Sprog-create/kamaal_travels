// All Firebase code for the site lives here.
// The site only ever WRITES enquiries. It never reads them back.
import { initializeApp, getApp, getApps } from 'firebase/app';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const SAVE_TIMEOUT_MS = 15000;

function getDb() {
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    throw new Error('Firebase is not configured. Set the NEXT_PUBLIC_FIREBASE_* environment variables.');
  }
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return getFirestore(app);
}

/**
 * Saves one enquiry to the "enquiries" collection.
 * Rejects if the write fails or takes longer than 15 seconds
 * (for example when the visitor is offline), so the form can show its error state.
 */
export async function saveEnquiry(enquiry) {
  const db = getDb();
  const write = addDoc(collection(db, 'enquiries'), {
    name: enquiry.name,
    phone: enquiry.phone,
    email: enquiry.email,
    tripType: enquiry.tripType,
    travelMonth: enquiry.travelMonth,
    adults: enquiry.adults,
    children: enquiry.children,
    fromCity: enquiry.fromCity,
    message: enquiry.message,
    consent: enquiry.consent,
    sourcePage: enquiry.sourcePage,
    createdAt: serverTimestamp(),
  });
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Saving the enquiry timed out.')), SAVE_TIMEOUT_MS)
  );
  await Promise.race([write, timeout]);
}
