import Link from "next/link";
import CTA from "../../components/CTA";

export const metadata = {
  title: "Sell My House Aberdare",
  description: "Want to sell your house in Aberdare? Durbin Estate Agents provide expert valuation, premium presentation and local marketing to achieve the best price.",
  alternates: { canonical: "/sell-my-house-aberdare" }
};

export default function Page(){
  return (
    <div className="container">
      <section className="section">
        <><h1>Sell My House in Aberdare</h1><p className='lead'>If you’ve been searching “<strong>sell my house Aberdare</strong>”, the best first step is correct pricing and premium presentation.</p><h2>How we help you sell</h2><ul className='bullets'><li>Expert valuation to attract serious buyers</li><li>Professional photography and listing optimisation</li><li>Local marketing across Aberdare and surrounding areas</li></ul><p style={{marginTop:12}}>Ready to start? Book a <Link href='/free-property-valuation-aberdare'>free property valuation in Aberdare</Link>.</p></>
      </section>
      <CTA />
    </div>
  );
}
