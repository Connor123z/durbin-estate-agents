import Link from "next/link";
import CTA from "../../components/CTA";

export const metadata = {
  title: "Estate Agents Aberdare",
  description: "Looking for estate agents in Aberdare? Durbin Estate Agents offer expert local knowledge, accurate pricing and premium marketing. Book a free valuation.",
  alternates: { canonical: "/estate-agents-aberdare" }
};

export default function Page(){
  return (
    <div className="container">
      <section className="section">
        <><h1>Estate Agents in Aberdare</h1><p className='lead'>If you’re searching for <strong>estate agents Aberdare</strong>, you want accurate pricing, strong marketing and a team that knows the CF44 area inside out.</p><div className='grid2'><div><h2>Sell with confidence</h2><ul className='bullets'><li>Local expertise across Aberdare, CF44 and the Cynon Valley</li><li>Premium presentation with professional photography</li><li>Clear guidance from valuation to completion</li></ul><p style={{marginTop:12}}>Ready to start? Book a <Link href='/free-property-valuation-aberdare'>free property valuation in Aberdare</Link> today.</p></div><div className='card'><h3>Quick links</h3><ul className='links'><li><Link href='/sell-my-house-aberdare'>Sell my house Aberdare</Link></li><li><Link href='/houses-for-sale-aberdare'>Houses for sale Aberdare</Link></li><li><Link href='/estate-agents-mountain-ash'>Estate agents Mountain Ash</Link></li><li><Link href='/contact'>Contact</Link></li></ul></div></div></>
      </section>
      <CTA />
    </div>
  );
}
