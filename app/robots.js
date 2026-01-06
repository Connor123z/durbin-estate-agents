export default function robots(){
  const baseUrl = "https://durbinestateagents.co.uk";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
