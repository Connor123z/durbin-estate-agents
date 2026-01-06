import Link from "next/link";
export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>
          <strong>Durbin Estate Agents</strong>
          <p className="fineprint">Estate agents in Aberdare &amp; Mountain Ash • CF44</p>
        </div>
        <div className="footerLinks">
          <Link href="/estate-agents-aberdare">Estate Agents Aberdare</Link>
          <Link href="/estate-agents-mountain-ash">Estate Agents Mountain Ash</Link>
          <Link href="/sell-my-house-aberdare">Sell My House Aberdare</Link>
          <Link href="/free-property-valuation-aberdare">Free Property Valuation Aberdare</Link>
        </div>
      </div>
    </footer>
  );
}
