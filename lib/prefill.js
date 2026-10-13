// Tiny browser event used to preselect values in the enquiry form
// from the trip finder and the "Enquire" buttons.
export const PREFILL_EVENT = 'kt:prefill-enquiry';

export function prefillEnquiry(values) {
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: values }));
}
