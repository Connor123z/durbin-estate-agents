export default function sitemap(){
  const baseUrl = "https://durbinestateagents.co.uk";
  const routes = [
    "",
    "/estate-agents-aberdare",
    "/estate-agents-mountain-ash",
    "/free-property-valuation-aberdare",
    "/sell-my-house-aberdare",
    "/houses-for-sale-aberdare",
    "/contact",
    "/reviews",
    "/areas",
    "/areas/hirwaun",
    "/areas/aberaman",
    "/areas/cwmbach",
    "/areas/cwmaman"
  ];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}
