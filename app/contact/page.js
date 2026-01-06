import ValuationForm from "../../components/ValuationForm";

export const metadata = {
  title: "Contact",
  description: "Contact Durbin Estate Agents in Aberdare. Book a free valuation, arrange a viewing, or speak with a local property expert.",
  alternates: { canonical: "/contact" }
};

export default function Page(){
  return (
    <div className="container">
      <section className="section">
        <h1>Contact Durbin Estate Agents</h1>
        <p className="lead">Speak to local estate agents covering Aberdare, Mountain Ash and surrounding areas.</p>
        <div className="grid2">
          <div className="card">
            <h2>Get in touch</h2>
            <p><strong>Email:</strong> sales@durbinestateagents.co.uk</p>
            <p className="fineprint">Add phone number and address in app/layout.js when ready.</p>
          </div>
          <div className="card">
            <h2>Send an enquiry</h2>
            <ValuationForm />
            <p className="fineprint" style={{marginTop:10}}>This form emails your enquiry to sales@durbinestateagents.co.uk.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
