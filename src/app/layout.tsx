import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MaterialSymbolsLoader from "../components/MaterialSymbolsLoader";
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <MaterialSymbolsLoader />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WS22492P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="app">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WS22492P');`,
          }}
        />
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
