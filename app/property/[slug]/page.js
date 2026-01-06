import Link from "next/link";
import { notFound } from "next/navigation";
import { getApex27Properties } from "../../../lib/apex27";

export default async function PropertyPage({ params }){
  const properties = await getApex27Properties();
  const property = properties.find(p => p.slug === params.slug);
  if(!property) return notFound();

  return (
    <div className="container">
      <section className="section">
        <h1>{property.bedrooms}-bed {property.type} for sale in {property.town}</h1>
        <p className="lead">{property.address}{property.postcode ? `, ${property.postcode}` : ""}</p>
        <h2>{property.price}</h2>

        {property.images?.length ? (
          <div className="cards" style={{marginTop:12}}>
            {property.images.slice(0,9).map((img, i) => (
              <img key={i} src={img} alt={`Property image ${i+1}`} loading="lazy" style={{width:"100%",borderRadius:12}} />
            ))}
          </div>
        ) : null}

        <div className="buttonRow" style={{marginTop:18}}>
          <Link className="btnPrimary" href="/contact">Enquire about this property</Link>
          <Link className="btnSecondary" href="/houses-for-sale-aberdare">Back to listings</Link>
        </div>
      </section>
    </div>
  );
}
