import "./globals.css";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SITE_URL = "https://durbinestateagents.co.uk";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Estate Agents in Aberdare & Mountain Ash | Durbin Estate Agents",
    template: "%s | Durbin Estate Agents"
  },
  description: "Local estate agents in Aberdare and Mountain Ash. Book a free property valuation in Aberdare, view houses for sale, or sell your house with confidence.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }){
  const GA4_ID = process.env.GA4_MEASUREMENT_ID;
  const jsonLd = {
    "@context":"https://schema.org",
    "@type":"RealEstateAgent",
    name:"Durbin Estate Agents",
    url:SITE_URL,
    telephone:"+44 YOUR_NUMBER",
    address:{
      "@type":"PostalAddress",
      streetAddress:"YOUR_STREET_ADDRESS",
      addressLocality:"Aberdare",
      addressRegion:"Wales",
      postalCode:"CF44",
      addressCountry:"GB"
    },
    areaServed:["Aberdare","Mountain Ash","Cynon Valley","CF44"],
    sameAs:["https://www.facebook.com/YOUR_PAGE"]
  };

  return (
    <html lang="en-GB">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        <Script id="jsonld" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />

        {GA4_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}');
            `}</Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
