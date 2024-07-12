// app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import SocialMedia from "@/components/SocialMedia";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { getSeoHome } from "@/lib/api";
const now = localFont({
  src: [
    {
      path: "../public/fonts/Now-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Now-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Now-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Now-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export async function generateMetadata() {
  const seoMetadata = await getSeoHome();
  return {
    title: seoMetadata?.title,
    description: seoMetadata?.description,
    keywords: seoMetadata?.keywords,
    metadataBase: new URL("https://www.heisshotel.com"),

    openGraph: {
      type: "website",
      url: "https://www.heisshotel.com",
      title: seoMetadata?.openGraphTitle,
      description: seoMetadata?.openGraphDescription,
      images: [
        {
          url: seoMetadata?.openGraphImages.url,
          width: 800,
          height: 600,
          alt: "Heiss Hotel",
        },
      ],
    },
    twitter: {
      card: seoMetadata?.twitterCard,
      title: seoMetadata?.twitterTitle,
      description: seoMetadata?.twitterDescription,
      images: [
        {
          url: seoMetadata?.twitterImage.url,
          width: 1200,
          height: 628,
          alt: "Heiss Hotel",
        },
      ],
    },
    canonical: "https://www.heisshotel.com",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5K9FJW5T');`,
          }}
        />
      </head>
      <body className={now.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5K9FJW5T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div className="relative">
          <Header />
          {children}
          <Toaster />
          <SocialMedia />
        </div>
        {/* TAG DE GOOGLE */}
        <GoogleTagManager id="GTM-5K9FJW5T" />
      </body>
    </html>
  );
}
