import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Slider() {
  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <Carousel orientation="vertical" className="w-full">
        <CarouselContent className="w-full snap-mandatory snap-y">
          <CarouselItem className="h-screen w-screen snap-start flex justify-center items-center">
            <div className="">
              <Image
                src="/images/Fachada_Heiss_R3.jpg"
                alt="Fachada Heiss"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="h-screen w-full snap-start	">
            <div className="">
              <Image
                src="/images/Habitacion_Small_Front.jpg"
                alt="Habitación Small"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="h-screen w-full snap-start flex items-center justify-center">
            <Carousel orientation="vertical" className="h-full w-1/3">
              <CarouselContent className="snap-proximity gap-4">
                <CarouselItem className="w-60 snap-start">
                  <div className="">
                    <Card className="w-60 h-60">
                      <CardContent className="flex items-center justify-center">
                        <Image
                          src="/images/Terraza.jpg"
                          alt="Terraza Heiss"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="w-60 snap-start ">
                  <div className="">
                    <Card className="w-60 h-60">
                      <CardContent className="flex items-center justify-center">
                        <Image
                          src="/images/Piscina.jpg"
                          alt="Piscina Heiss"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="w-60 snap-start ">
                  <div className="">
                    <Card className="w-40 h-full">
                      <CardContent className="flex items-center justify-center">
                        <Image
                          src="/images/Fachada_Contrapicada.jpg"
                          alt="Fachada Contrapicada Heiss"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            <div className="w-2/3 md:w-auto">
              <Image
                src="/images/Zona_Comercial.jpg"
                alt="Zona Comercial Heiss"
                width={898}
                height={989}
                className="object-cover border border-none rounded-3xl"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="h-screen w-full snap-start	">
            <div className="">
              <Image
                src="/images/imagen_respaldo.jpg"
                alt="respaldo"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
