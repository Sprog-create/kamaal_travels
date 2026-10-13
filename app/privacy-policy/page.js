import LegalPage from '@/components/LegalPage';
import { SITE } from '@/lib/site';

// [DRAFT] Have this policy checked by a lawyer before launch.
export const metadata = {
  title: 'Privacy Policy',
  description: 'How KamaalTravels collects, uses and protects the details you share with us.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="[DATE]">
      <p>
        This policy explains what personal information {SITE.name} collects through this website, why we collect it and
        how we look after it.
      </p>

      <h2>What we collect</h2>
      <p>When you send an enquiry, we collect the details you type into the form:</p>
      <ul>
        <li>your name, phone or WhatsApp number and, if you give it, your email address;</li>
        <li>your trip details: trip type, travel month, number of adults and children, departure city and message;</li>
        <li>your consent to be contacted, the page you sent the enquiry from and the time it was sent.</li>
      </ul>

      <h2>How we use it</h2>
      <p>
        We use these details only to reply to your enquiry, plan and quote your trip, and contact you by phone, WhatsApp
        or email about it. We do not sell your information or share it for marketing.
      </p>

      <h2>Who we share it with</h2>
      <p>
        If you book, we share only the details needed with the hotels, houseboats and transport providers on your trip.
        Enquiries are stored securely with Google Firebase, which we use to run this website.
      </p>

      <h2>How long we keep it</h2>
      <p>We keep enquiry details for [PERIOD], then delete them, unless you book a trip with us.</p>

      <h2>Your choices</h2>
      <p>
        You can ask us at any time to see, correct or delete the details we hold about you, or to stop contacting you.
        Write to {SITE.email} or call {SITE.phoneDisplay}.
      </p>

      <h2>Contact</h2>
      <p>
        {SITE.name}, {SITE.address}. {SITE.registration}.
      </p>
    </LegalPage>
  );
}
