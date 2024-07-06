"use client";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import SocialMedia from "@/components/SocialMedia";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { useEffect, useState } from "react";
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

// export const metadata = {
//   title: "Heiss Hotel",
//   description:
//     "Un hotel novedoso, vanguardista e imponente · Ubicado en Manila, uno de los barrios de mayor interés turístico y mayor potencial de valorización.",
//   keywords:
//     "hotel, lujo, Heiss Hotel, alojamiento, reservas, vacaciones, comodidad",
//   author: "Heiss Hotel",
//   openGraph: {
//     type: "website",
//     url: "https://www.heisshotel.com",
//     title: "Heiss Hotel - Tu Refugio de Lujo",
//     description:
//       "Disfruta de una experiencia única en Heiss Hotel, donde el lujo y la comodidad se encuentran. Reserva ahora y vive la estancia de tus sueños.",
//     images: [
//       {
//         url: "https://www.heisshotel.com/og-image.jpg",
//         width: 800,
//         height: 600,
//         alt: "Heiss Hotel",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Heiss Hotel - Tu Refugio de Lujo",
//     description:
//       "Disfruta de una experiencia única en Heiss Hotel, donde el lujo y la comodidad se encuentran. Reserva ahora y vive la estancia de tus sueños.",
//     images: [
//       {
//         url: "https://www.heisshotel.com/twitter-image.jpg",
//         width: 1200,
//         height: 628,
//         alt: "Heiss Hotel",
//       },
//     ],
//   },
//   canonical: "https://www.heisshotel.com",
// };

export default function RootLayout({ children }) {
  const [seoHomeData, setSeoHomeData] = useState([]);
  useEffect(() => {
    async function fetchSeoHomeData() {
      const data = await getSeoHome();
      setSeoHomeData(data);
      console.log("seo Home:", data);
    }
    fetchSeoHomeData();
  }, []);
  const seoHomeContentData = seoHomeData.length > 0 ? seoHomeData[0] : {};

  return (
    <html lang="es">
      <Head>
        {/* AQUI VA EL SEO */}
        <title>{seoHomeContentData?.title || "Heis Hotel"}</title>
        <meta name="description" content={seoHomeContentData?.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://heisshotel.com/" />
        <meta
          property="og:title"
          content={seoHomeContentData?.openGraphTitle}
        />
        <meta
          property="og:description"
          content={seoHomeContentData?.openGraphDescription}
        />
        <meta
          property="og:image"
          content={seoHomeContentData?.openGraphImages?.url}
        />
        <meta property="og:image:width" content={800} />
        <meta property="og:image:height" content={600} />
        <meta property="og:image:alt" content={seoHomeContentData?.title} />
        <meta name="twitter:card" content={seoHomeContentData.twitterCard} />
        <meta name="twitter:title" content={seoHomeContentData.twitterTitle} />
        <meta
          name="twitter:description"
          content={seoHomeContentData.twitterDescription}
        />
        <meta
          name="twitter:image"
          content={seoHomeContentData.twitterImage?.url}
        />{" "}
        <link rel="canonical" href="https://www.heisshotel.com" />
        {/* AQUÍ TERMINA EL SEO */}
        {/* AQUÍ VAN LOS SCRIPTS */}
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
      </Head>
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
