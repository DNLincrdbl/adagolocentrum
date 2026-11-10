import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/Footer";
import { Loader } from "@/components/site/Loader";
import { Navbar } from "@/components/site/Navbar";
import { company } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adagolocentrum.hu"),
  title: {
    default: "Móricz Bosch Diesel Center | Dieseladagoló javítás",
    template: "%s | Móricz Bosch Diesel Center",
  },
  description:
    "A Móricz Kft. hajdúböszörményi Bosch Diesel Centere dieseladagolók diagnosztikáját, javítását és felújítását végzi az ország egész területén. Bosch, Delphi, Denso, Stanadyne, Motorpal és Continental.",
  openGraph: {
    title: "Móricz Bosch Diesel Center",
    description:
      "Dieseladagoló javítás és felújítás Hajdúböszörményből, országos kiszolgálással.",
    locale: "hu_HU",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: company.brand,
  url: "https://www.adagolocentrum.hu",
  email: company.email,
  telephone: "+36-20-926-5890",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Polgári u. 107.",
    addressLocality: "Hajdúböszörmény",
    postalCode: "4220",
    addressCountry: "HU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.gps.lat,
    longitude: company.gps.lng,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hu" data-scroll-behavior="smooth" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper text-ink">
        <a
          href="#tartalom"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Ugrás a tartalomra
        </a>
        <Loader />
        <Navbar />
        <main id="tartalom">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
