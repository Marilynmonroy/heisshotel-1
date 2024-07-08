import React from "react";
import SliderHabMadium from "@/components/habitaciones/SliderHabMadium";
import { getSeoSuperior } from "@/lib/api";


export async function generateMetadata() {
  const seoMetadataHab = await getSeoSuperior();
  return {
    title: `${seoMetadataHab.title} - Heiss Hotel`,
    description: seoMetadataHab.description,
    keywords: seoMetadataHab.keywords,

    openGraph: {
      type: "website",
      url: "https://www.heisshotel.com/habitaciones/habitacionSuperior",
      title: seoMetadataHab.openGraphTitle,
      description: seoMetadataHab.openGraphDescription,
      images: [
        {
          url: seoMetadataHab.openGraphImages?.url,
          width: 800,
          height: 600,
          alt: "Heiss Hotel",
        },
      ],
    },
    twitter: {
      card: seoMetadataHab.twitterCard,
      title: seoMetadataHab.twitterTitle,
      description: seoMetadataHab.twitterDescription,
      images: [
        {
          url: seoMetadataHab.twitterImage?.url,
          width: 1200,
          height: 628,
          alt: "Heiss Hotel",
        },
      ],
    },
    canonical: "https://www.heisshotel.com/habitaciones/habitacionSuperior",
  };
}
function habitacionM() {
  return (
    <main>
      <SliderHabMadium />
    </main>
  );
}

export default habitacionM;
