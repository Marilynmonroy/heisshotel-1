"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "/app/css/pagination.css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css";
import { CalendarWidget } from "./CalendarWidget";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { register } from "swiper/element/bundle";
import Footer from "./Footer";
register();
import GoogleMaps from "./GoogleMaps";
import { getAllEspaciosPageContent } from "@/lib/api";

const SliderComponent = () => {
  const [espaciosContent, setEspaciosContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllEspaciosPageContent();

        setEspaciosContent(data);
      } catch (error) {
        console.error("Error fetching espacios page content:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="overflow-y-auto">
      {/* Cambia de Ambiente */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
        <Image
          src="/images/Piscina.webp"
          alt="Piscina Image"
          fill
          className="responsive-image"
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="items-center justify-center text-center flex flex-col gap-3 text-white z-20 absolute inset-0">
          <Badge className="px-5">Próximamente espacios en construcción</Badge>
          <h2 className="h2">CAMBIA DE AMBIENTE</h2>
          <span className="p-light-16 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center px-5">
            El espacio que buscas, con las comodidades que necesitas para una
            gran experiencia.
          </span>
          <div className="p-5">
            <CalendarWidget />
          </div>
        </div>
      </div>

      {/* Espacios Dinámicos */}
      {espaciosContent.map((space, index) => (
        <div
          key={space.sys.id}
          className={`text-white h-screen justify-center items-center text-center flex-col ${
            index % 2 === 0
              ? "flex md:flex-row"
              : "flex flex-col-reverse md:flex-row"
          } w-full`}
        >
          {index % 2 === 0 && (
            <div className="espacios">
              <span className="p-regular-18">{space.subtitleSpaces}</span>
              <Badge className="w-[132px]">Próximamente</Badge>
              <h2 className="h2">{space.titleSpaces}</h2>
              <p className="p-light-16">{space.descriptionSpaces}</p>
            </div>
          )}
          <Swiper slidesPerView={1} className="md:w-[55%] w-full h-screen">
            <SwiperSlide className="md:w-[55%] w-full md:h-screen h-full">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
                <Image
                  src={space.imageEspacio.url}
                  alt={space.titleSpaces}
                  fill
                  className="responsive-image"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          {index % 2 !== 0 && (
            <div className="w-[75%] md:w-[50%] h-full flex flex-col gap-3 justify-center text-left md:items-end md:text-right md:gap-5 md:px-12 lg:px-[4rem] xl:px-[5rem]">
              <span className="p-regular-18">{space.subtitleSpaces}</span>
              <Badge className="w-[132px]">Próximamente</Badge>
              <h2 className="h2">{space.titleSpaces}</h2>
              <p className="p-light-16">{space.descriptionSpaces}</p>
            </div>
          )}
        </div>
      ))}

      {/* Footer */}
      <Footer>
        <div className="h-[50vh] w-full relative">
          <GoogleMaps />
        </div>
      </Footer>
    </section>
  );
};

export default SliderComponent;
