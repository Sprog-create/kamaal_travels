'use client';

import { prefillEnquiry } from '@/lib/prefill';

// Scrolls to the enquiry form and preselects the trip type.
// It is a plain link to #enquiry, so it still works before JavaScript loads.
export default function EnquireButton({ tripType, className = 'btn btn-primary', children = 'Enquire' }) {
  return (
    <a href="#enquiry" className={className} onClick={() => prefillEnquiry({ tripType })}>
      {children}
    </a>
  );
}
