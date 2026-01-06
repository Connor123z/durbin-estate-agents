import Link from "next/link";
import CTA from "../components/CTA";
import Features from "../components/Features";

export const metadata = {
  title: "Estate Agents in Aberdare & Mountain Ash",
  description: "Local estate agents in Aberdare and Mountain Ash. Book a free property valuation in Aberdare, view houses for sale, or sell your house with confidence.",
  alternates: { canonical: "/" }
};

export default function HomePage(){
  return (
    <div className="container">
      <section className="hero">
        <p className="kicker">Local property experts • CF44 & surrounding areas</p>
        <h1>Trusted Estate Agents in Aberdare &amp; Mountain Ash</h1>
        <p className="lead">Selling or buying? We combine expert pricing, premium presentation and local marketing to help you achieve the best result.</p>

        <div className="buttonRow">
          <Link className="btnPrimary" href="/free-property-valuation-aberdare">Book a Free Property Valuation (Aberdare)</Link>
          <Link className="btnSecondary" href="/houses-for-sale-aberdare">View Houses for Sale in Aberdare</Link>
        </div>

        <div className="internalLinks">
          <Link href="/estate-agents-aberdare">Estate Agents Aberdare</Link><span>•</span>
          <Link href="/estate-agents-mountain-ash">Estate Agents Mountain Ash</Link><span>•</span>
          <Link href="/sell-my-house-aberdare">Sell My House Aberdare</Link><span>•</span>
          <Link href="/reviews">Reviews</Link><span>•</span>
          <Link href="/areas">Areas</Link>
        </div>
      </section>

      <Features />

      <section className="section">
        <h2>Our simple selling process</h2>
        <ol className="steps">
          <li><strong>Step 1: Expert Valuation</strong><p>Accurate pricing backed by local knowledge — start with a <Link href="/free-property-valuation-aberdare">free property valuation in Aberdare</Link>.</p></li>
          <li><strong>Step 2: Premium Presentation</strong><p>Professional photography and listing optimisation to help your home stand out.</p></li>
          <li><strong>Step 3: Successful Completion</strong><p>Support from offer to completion, with clear communication throughout.</p></li>
        </ol>
      </section>

      <CTA />
    </div>
  );
}
