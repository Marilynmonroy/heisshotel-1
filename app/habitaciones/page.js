import React from "react";
import SliderHabitaciones from "@/components/SliderHabitaciones";

export const metadata = {
  title: "Habitaciones",
  description:
    "Un hotel novedoso, vanguardista e imponente · Ubicado en Manila, uno de los barrios de mayor interés turístico y mayor potencial de valorización.",
  openGraph: {
    type: "website",
    url: "https://www.heisshotel.com/habitaciones",
    title: "Heiss Hotel - Habitaciones",
    description:
      "Disfruta de una experiencia única en Heiss Hotel, donde el lujo y la comodidad se encuentran. Reserva ahora y vive la estancia de tus sueños.",
    images: [
      {
        url: "https://www.heisshotel.com/habitaciones/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Habitaciones Heiss Hotel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heiss Hotel - Hbi",
    description:
      "Disfruta de una experiencia única en Heiss Hotel, donde el lujo y la comodidad se encuentran. Reserva ahora y vive la estancia de tus sueños.",
    images: [
      {
        url: "https://www.heisshotel.com/twitter-image.jpg",
        width: 1200,
        height: 628,
        alt: "Heiss Hotel",
      },
    ],
  },
  canonical: "https://www.heisshotel.com/habitaciones",
};

export default function Habitaciones() {
  return (
    <main>
      <SliderHabitaciones />
    </main>
  );
}
