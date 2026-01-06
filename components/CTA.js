import Link from "next/link";
export default function CTA(){
  return (
    <section className="cta">
      <div className="container ctaInner">
        <div>
          <h2>Ready to get started?</h2>
          <p>Book a free property valuation in Aberdare or speak with a local expert today.</p>
        </div>
        <div className="buttonRow">
          <Link className="btnPrimary" href="/free-property-valuation-aberdare">Book Free Valuation</Link>
          <Link className="btnSecondary" href="/contact">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
