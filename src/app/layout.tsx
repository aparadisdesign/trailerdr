import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";
import "../App.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thetrailerdr.com"),
  title: {
    default: "Trailer Dr. | Electrical & Air Brake Trailer Diagnostic Tool",
    template: "%s | Trailer Dr.",
  },
  description:
    "Trailer Dr. is a portable electrical and air brake trailer diagnostic tool. Verify trailer lighting, air supply, and brake activation from the rear of the trailer — no truck or second person needed. Used by fleets, repair shops, and mobile service operators across the USA.",
  openGraph: {
    siteName: "Trailer Dr.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/trailerdr-product-image.webp",
        width: 1200,
        height: 630,
        alt: "Trailer Dr. Electrical & Air Brake Trailer Diagnostic Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/trailerdr-product-image.webp"],
  },
  alternates: {
    canonical: "https://www.thetrailerdr.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="app">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <Script
          src="https://www.paypalobjects.com/ncp/cart/cart.js"
          data-merchant-id="QLG2K7AZTP2J8"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.bugherd.com/sidebarv2.js?apikey=st7ah8om4wrq2athukbf4w"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
