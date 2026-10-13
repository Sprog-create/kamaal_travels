import LegalPage from '@/components/LegalPage';
import { SITE } from '@/lib/site';

// [DRAFT] Replace every [BRACKETED] value with your real policy before launch.
export const metadata = {
  title: 'Cancellation Policy',
  description: 'Cancellation charges and refunds for KamaalTravels Kashmir trips.',
  alternates: { canonical: '/cancellation-policy' },
};

export default function CancellationPolicyPage() {
  return (
    <LegalPage title="Cancellation Policy" updated="[DATE]">
      <p>
        We know plans change. If you need to cancel your trip, tell us in writing by WhatsApp or email. The charges below
        are counted from the date we receive your message.
      </p>

      <h2>Cancellation charges</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">When you cancel</th>
              <th scope="col">Charge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>[30] days or more before arrival</td>
              <td>[Amount or %]</td>
            </tr>
            <tr>
              <td>[15–29] days before arrival</td>
              <td>[Amount or %]</td>
            </tr>
            <tr>
              <td>[7–14] days before arrival</td>
              <td>[Amount or %]</td>
            </tr>
            <tr>
              <td>Less than [7] days before arrival, or no-show</td>
              <td>[Amount or %]</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Refunds</h2>
      <p>Refunds are paid to the original payment method within [X] working days of your cancellation.</p>

      <h2>If we have to cancel</h2>
      <p>
        If we cancel your trip for reasons such as official advisories or unsafe conditions, we will offer you new dates
        or [a full refund / a credit note].
      </p>

      <h2>Unused services</h2>
      <p>No refund is given for parts of a trip that are not used once the trip has started, such as a shortened stay.</p>

      <h2>Questions</h2>
      <p>
        Call {SITE.phoneDisplay} or write to {SITE.email}.
      </p>
    </LegalPage>
  );
}
