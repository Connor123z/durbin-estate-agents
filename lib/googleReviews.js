export async function getGoogleReviews(){
  const placeId = "ChIJT3s0lFE8bkgRMMvGS45zJ3o";
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if(!key) return null;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,reviews&key=${key}`;
  const res = await fetch(url, { next: { revalidate: 86400 } });
  if(!res.ok) return null;
  const data = await res.json();
  return data?.result ?? null;
}
