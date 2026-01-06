import Link from "next/link";

export const metadata = {
  title: "Thank You",
  description: "Thanks for contacting Durbin Estate Agents. We’ll be in touch shortly to discuss your property.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true }
};

export default function Page(){
  return (
    <div className="container">
      <section className="section">
        <h1>Thanks — we’ve got your enquiry ✅</h1>
        <p className="lead">A member of our team will contact you shortly.</p>
        <div className="buttonRow" style={{marginTop:18}}>
          <Link className="btnPrimary" href="/">Back to Home</Link>
          <Link className="btnSecondary" href="/reviews">View Reviews</Link>
        </div>
      </section>
    </div>
  );
}
