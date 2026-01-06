import Link from "next/link";
import CTA from "../../components/CTA";

export const metadata = {
  title: "Estate Agents Mountain Ash",
  description: "Searching for estate agents in Mountain Ash? Durbin Estate Agents deliver expert pricing, premium marketing and friendly local service. Enquire today.",
  alternates: { canonical: "/estate-agents-mountain-ash" }
};

export default function Page(){
  return (
    <div className="container">
      <section className="section">
        <><h1>Estate Agents in Mountain Ash</h1><p className='lead'>For homeowners choosing <strong>estate agents Mountain Ash</strong>, local knowledge matters. We help you price correctly, present beautifully and market effectively.</p><p style={{marginTop:12}}>Selling in Aberdare too? See our <Link href='/estate-agents-aberdare'>estate agents Aberdare</Link> page.</p></>
      </section>
      <CTA />
    </div>
  );
}
