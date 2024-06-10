import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

function CardsHabitaciones() {
  return (
    <div className="relative flex w-full h-[15vh] md:h-[50vh] mx-auto z-0">
      <div className="w-1/3 h-full relative">
        <Link href="/habitaciones/habitacionEstandar">
          <div className="absolute inset-0 bg-black opacity-80 z-10">
            <Image
              src="/images/habitacionSmall/smallcarrousel.webp"
              layout="fill"
              objectFit="cover"
              alt="Habitación Estándar"
              className="absolute"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Button variant="destructive" size="lg">
              ESTÁNDAR
            </Button>
          </div>
        </Link>
      </div>
      <div className="w-1/3 h-full relative">
        <Link href="/habitaciones/habitacionSuite">
          <div className="absolute inset-0 bg-black opacity-80 z-20">
            <Image
              src="/images/habitacionLargeCard.webp"
              layout="fill"
              objectFit="cover"
              alt="Habitación Suite"
              className="absolute shadow-[0px_0px_20px_5px_#000000] md:shadow-[0px_0px_30px_15px_#000000] "
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Button variant="destructive" size="lg">
              SUITE
            </Button>
          </div>
        </Link>
      </div>
      <div className="w-1/3 h-full relative">
        <Link href="/habitaciones/habitacionSuperior">
          <div className="absolute inset-0 bg-black opacity-80 z-10">
            <Image
              src="/images/habitacionMedium/mediumcarrousel2.webp"
              layout="fill"
              objectFit="cover"
              alt="Habitación Superior"
              className="absolute"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Button variant="destructive" size="lg">
              SUPERIOR
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardsHabitaciones;
