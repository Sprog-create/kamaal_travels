import LegalPage from '@/components/LegalPage';
import { SITE } from '@/lib/site';

// [DRAFT] Have these terms checked by a lawyer before launch.
export const metadata = {
  title: 'Terms and Conditions',
  description: 'The terms that apply when you book a Kashmir trip with KamaalTravels.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions" updated="[DATE]">
      <p>
        These terms apply to every trip booked with {SITE.name}. By paying an advance, you confirm that you have read and
        accept them.
      </p>

      <h2>Bookings and payment</h2>
      <p>
        Your trip is confirmed once we receive an advance of {SITE.advancePercent}% of the trip price and send you a
        written confirmation. The balance is due [WHEN]. We accept {SITE.paymentMethods.join(', ')}.
      </p>

      <h2>Prices</h2>
      <p>
        Prices are quoted per person or per couple as stated, and include only the items listed as included in your
        itinerary. Anything listed as not included is paid separately.
      </p>

      <h2>Changes to your trip</h2>
      <p>
        Weather, road conditions and local advisories in Kashmir can change plans at short notice. If a day cannot go
        ahead as planned, we will offer the closest alternative. Some changes may affect the price, and we will always
        tell you before making them.
      </p>

      <h2>Your responsibilities</h2>
      <p>
        Please carry valid photo ID for every traveller, follow local rules and the guidance of our team, and tell us in
        advance about any medical conditions that may affect your trip. We strongly recommend travel insurance.
      </p>

      <h2>Cancellations</h2>
      <p>
        If you need to cancel, the charges in our <a className="inline-link" href="/cancellation-policy">Cancellation Policy</a>{' '}
        apply.
      </p>

      <h2>Liability</h2>
      <p>
        We work with trusted hotels, houseboats and transport providers, but we are not responsible for delays, losses or
        costs caused by events outside our control, such as weather, road closures, strikes or flight changes.
      </p>

      <h2>Contact</h2>
      <p>
        {SITE.name}, {SITE.address}. Phone {SITE.phoneDisplay}. {SITE.registration}.
      </p>
    </LegalPage>
  );
}
