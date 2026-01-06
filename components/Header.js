import Link from "next/link";
export default function Header(){
  return (
    <header className="header">
      <div className="container headerInner">
        <Link className="brand" href="/">Durbin Estate Agents</Link>
        <nav className="nav">
          <Link href="/estate-agents-aberdare">Aberdare</Link>
          <Link href="/estate-agents-mountain-ash">Mountain Ash</Link>
          <Link href="/free-property-valuation-aberdare">Free Valuation</Link>
          <Link href="/houses-for-sale-aberdare">Properties</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/areas">Areas</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
