import EnquiryForm from './EnquiryForm';

export default function EnquirySection({ defaultTripType, title = 'Plan your Kashmir trip' }) {
  return (
    <section id="enquiry" className="section section--mist" aria-labelledby="enquiry-title">
      <div className="container container--form">
        <div className="section-intro">
          <h2 id="enquiry-title" className="section-title">{title}</h2>
          <p>Tell us a little about your trip. A real person from our team will get back to you with a plan and a price.</p>
        </div>
        <EnquiryForm defaultTripType={defaultTripType} />
      </div>
    </section>
  );
}
