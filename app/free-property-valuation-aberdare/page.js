import ValuationForm from "../../components/ValuationForm";

export const metadata = {
  title: "Free Property Valuation Aberdare",
  description: "Get a free, no-obligation property valuation in Aberdare. Accurate pricing from trusted local estate agents. Book your valuation today.",
  alternates: { canonical: "/free-property-valuation-aberdare" }
};

export default function Page(){
  return (
    <div className="container">
      <section className="section">
        <h1>Free Property Valuation in Aberdare</h1>
        <p className="lead">Start with accurate pricing. Our <strong>free property valuation Aberdare</strong> service is no-obligation and tailored to local market conditions.</p>
        <div className="grid2">
          <div>
            <h2>What you get</h2>
            <ul className="bullets">
              <li>Realistic valuation based on current demand and comparable sales</li>
              <li>Advice on presentation to maximise interest</li>
              <li>A clear marketing plan to help you achieve the best price</li>
            </ul>
          </div>
          <div className="card">
            <h3>Book your valuation</h3>
            <ValuationForm />
            <p className="fineprint">By submitting, you agree we may contact you about your enquiry. We don’t sell your data.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
