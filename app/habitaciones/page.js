import React from "react";
import SliderHabitaciones from "@/components/SliderHabitaciones";
import { getSeoHabitaciones } from "@/lib/api";

export async function generateMetadata() {
  const seoMetadataHab = await getSeoHabitaciones();
  return {
    title: `${seoMetadataHab.title} - Heiss Hotel`,
    description: seoMetadataHab.description,
    keywords: seoMetadataHab.keywords,

    openGraph: {
      type: "website",
      url: "https://www.heisshotel.com/habitaciones",
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
    canonical: "https://www.heisshotel.com/habitaciones",
  };
}

export default function Habitaciones() {
  return (
    <main>
      <SliderHabitaciones />
    </main>
  );
}
