import Link from "next/link";
import CTA from "../../components/CTA";
import { getApex27Properties } from "../../lib/apex27";

export const metadata = {
  title: "Houses for Sale Aberdare",
  description: "Browse houses for sale in Aberdare. View local properties and speak to trusted estate agents in Aberdare for viewings and buying advice.",
  alternates: { canonical: "/houses-for-sale-aberdare" }
};

export default async function Page(){
  const properties = await getApex27Properties();

  return (
    <div className="container">
      <section className="section">
        <h1>Houses for Sale in Aberdare</h1>
        <p className="lead">Explore <strong>houses for sale Aberdare</strong> and get local guidance on viewings, offers and the buying process.</p>

        {properties.length ? (
          <div className="cards">
            {properties.slice(0,12).map((p) => (
              <div className="card" key={p.id}>
                {p.images?.[0] ? <img src={p.images[0]} alt={`Property for sale in ${p.town}`} loading="lazy" style={{width:"100%",borderRadius:12}} /> : null}
                <h2>{p.price}</h2>
                <p>{p.address}, {p.town}</p>
                <p className="fineprint">{p.bedrooms} beds • {p.type}</p>
                <Link href={`/property/${p.slug}`}>View property</Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="card">
            <h2>Latest listings</h2>
            <p className="fineprint">Property feed will appear here once Apex27 provides the feed URL. Until then, this page is live and SEO-ready.</p>
          </div>
        )}

        <CTA />
      </section>
    </div>
  );
}
