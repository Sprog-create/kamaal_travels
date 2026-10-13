// Shared layout for Privacy Policy, Terms and Cancellation Policy.
export default function LegalPage({ title, updated, children }) {
  return (
    <article className="section section--white legal">
      <div className="container container--narrow">
        <p className="eyebrow eyebrow--muted">Last updated {updated}</p>
        <h1 className="legal-title">{title}</h1>
        <div className="legal-body">{children}</div>
      </div>
    </article>
  );
}
