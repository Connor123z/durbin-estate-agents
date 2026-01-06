import Link from "next/link";
import CTA from "../../components/CTA";
import { getGoogleReviews } from "../../lib/googleReviews";

export const metadata = {
  title: "Estate Agent Reviews",
  description: "Read verified Google reviews for Durbin Estate Agents. Trusted local estate agents in Aberdare and Mountain Ash.",
  alternates: { canonical: "/reviews" }
};

export default async function Page(){
  const data = await getGoogleReviews();

  return (
    <div className="container">
      <section className="section">
        <h1>Customer Reviews</h1>
        <p className="lead">We’re proud to be trusted local <strong>estate agents in Aberdare</strong> and <strong>estate agents in Mountain Ash</strong>.</p>

        {!data ? (
          <div className="card">
            <h2>Google Reviews</h2>
            <p className="fineprint">Add <code>GOOGLE_PLACES_API_KEY</code> in Vercel to show live reviews.</p>
          </div>
        ) : (
          <div className="card">
            <h2>Google Rating: ⭐ {data.rating} / 5</h2>
            <div className="cards" style={{marginTop:12}}>
              {(data.reviews ?? []).slice(0,6).map((r, i) => (
                <div key={i} className="card">
                  <strong>{r.author_name}</strong>
                  <p className="fineprint">⭐ {r.rating} • {new Date(r.time * 1000).toLocaleDateString()}</p>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>
            <p className="fineprint" style={{marginTop:12}}>Want to sell? <Link href="/free-property-valuation-aberdare">Book a free valuation</Link>.</p>
          </div>
        )}

        <CTA />
      </section>
    </div>
  );
}
