"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "/app/css/pagination.css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";
import { register } from "swiper/element/bundle";
import Footer from "@/components/Footer";
register();
import {
  Mousewheel,
  Pagination,
  EffectFade,
  Keyboard,
  FreeMode,
  Navigation,
} from "swiper/modules";
const Contacto = () => {
  return (
    <section className="overflow-y-auto">
      {/* Cambia de Ambiente */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
        <Image
          src="/images/contacto.webp"
          alt="Contacto image"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
        <section>
          <div className="items-center justify-center text-center flex flex-col gap-3 text-white z-20 absolute inset-0">
            <h2 className="h2">Contáctanos</h2>
            <span className="p-light-16 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center px-5">
              El espacio que buscas, con las comodidades que necesitas para una
              gran experiencia.
            </span>
          </div>
          <div></div>
        </section>
      </div>
      <Footer>
        <div className="h-[30vh] w-full relative">
          <Image
            src={"/images/map-provisional.jpg"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Footer>
    </section>
  );
};

export default Contacto;
