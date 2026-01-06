import { XMLParser } from "fast-xml-parser";
function slugify(s){ return s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"); }

export async function getApex27Properties(){
  const url = process.env.APEX27_FEED_URL;
  if(!url) return [];
  const res = await fetch(url, { next: { revalidate: 1800 } });
  if(!res.ok) return [];
  const xml = await res.text();
  const parser = new XMLParser({ ignoreAttributes:false });
  const json = parser.parse(xml);
  const items = json?.properties?.property || json?.propertyFeed?.property || json?.property || [];
  const list = Array.isArray(items) ? items : [items];
  return list.filter(Boolean).map((p)=>{
    const bedrooms = Number(p.bedrooms ?? p.beds ?? 0) || 0;
    const type = String(p.type ?? p.propertyType ?? "property");
    const town = String(p.town ?? p.city ?? "aberdare");
    const postcode = String(p.postcode ?? "");
    const address = String(p.address ?? p.displayAddress ?? "");
    const id = String(p.id ?? p.propertyID ?? p.reference ?? address);
    const imagesRaw = p.images?.image || p.photos?.photo || p.media?.image || [];
    const images = Array.isArray(imagesRaw) ? imagesRaw.map(String) : imagesRaw ? [String(imagesRaw)] : [];
    const slug = slugify(`${bedrooms}-bed-${type}-${town}-${postcode || id}`);
    return { id, slug, price:String(p.price ?? p.priceText ?? "Price on request"), address, town, postcode, bedrooms, type, description:String(p.description ?? p.details ?? ""), images };
  });
}
