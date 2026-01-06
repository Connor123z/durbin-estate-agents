import Link from "next/link";

export const metadata = {
  title: "Areas We Cover",
  description: "Durbin Estate Agents cover Aberdare, Mountain Ash and surrounding areas including Hirwaun, Aberaman, Cwmbach and Cwmaman.",
  alternates: { canonical: "/areas" }
};

const links = [
  { slug: "hirwaun", name: "Hirwaun" },
  { slug: "aberaman", name: "Aberaman" },
  { slug: "cwmbach", name: "Cwmbach" },
  { slug: "cwmaman", name: "Cwmaman" },
];

export default function Page(){
  return (
    <div className="container">
      <section className="section">
        <h1>Areas We Cover</h1>
        <p className="lead">We’re trusted local <strong>estate agents in Aberdare</strong> and <strong>estate agents in Mountain Ash</strong>, also covering surrounding areas.</p>
        <div className="cards">
          {links.map(a => (
            <div className="card" key={a.slug}>
              <h2>{a.name}</h2>
              <p className="fineprint">Local property support in {a.name}. Valuations, sales and advice.</p>
              <Link className="btnSecondary" href={`/areas/${a.slug}`}>Estate Agents {a.name}</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
