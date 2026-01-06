import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "../../../components/CTA";

const AREAS = {
  hirwaun:{name:"Hirwaun",nearby:["Aberdare","Mountain Ash","Cynon Valley"],focusKeyword:"estate agents Hirwaun",intro:"Looking for local estate agents in Hirwaun? We help homeowners sell with accurate pricing, premium presentation and straightforward advice."},
  aberaman:{name:"Aberaman",nearby:["Aberdare","Cwmbach","Cynon Valley"],focusKeyword:"estate agents Aberaman",intro:"If you’re selling or buying in Aberaman, local knowledge matters. We provide expert valuation and marketing to help you achieve the best result."},
  cwmbach:{name:"Cwmbach",nearby:["Aberdare","Aberaman","Cynon Valley"],focusKeyword:"estate agents Cwmbach",intro:"Durbin Estate Agents support sellers and buyers in Cwmbach with clear guidance, premium marketing and accurate valuations."},
  cwmaman:{name:"Cwmaman",nearby:["Aberdare","Aberaman","Hirwaun"],focusKeyword:"estate agents Cwmaman",intro:"Selling in Cwmaman? We combine local expertise with premium presentation to help you attract serious buyers and achieve the best price."},
};

export function generateMetadata({ params }){
  const d = AREAS[params.area];
  if(!d) return {};
  return {
    title: `Estate Agents ${d.name}`,
    description: `Trusted local estate agents in ${d.name}. Book a free property valuation and get expert local advice from Durbin Estate Agents.`,
    alternates: { canonical: `/areas/${params.area}` }
  };
}

export default function Page({ params }){
  const d = AREAS[params.area];
  if(!d) return notFound();

  return (
    <div className="container">
      <section className="section">
        <h1>Estate Agents in {d.name}</h1>
        <p className="lead">{d.intro} <strong>({d.focusKeyword})</strong></p>

        <div className="grid2">
          <div>
            <h2>How we help in {d.name}</h2>
            <ul className="bullets">
              <li>Accurate pricing based on current local demand</li>
              <li>Premium presentation (photography + listing optimisation)</li>
              <li>Support from valuation to completion</li>
            </ul>
            <p style={{marginTop:12}}>Start with a <Link href="/free-property-valuation-aberdare">free property valuation in Aberdare</Link> (we cover {d.name} and nearby areas).</p>
          </div>
          <div className="card">
            <h3>Nearby areas we cover</h3>
            <ul className="links">{d.nearby.map(n => (<li key={n}>{n}</li>))}</ul>
            <p className="fineprint" style={{marginTop:10}}>Want to sell? <Link href="/sell-my-house-aberdare">Sell my house Aberdare</Link></p>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
