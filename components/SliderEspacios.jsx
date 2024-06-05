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
import { CalendarWidget } from "./CalendarWidget";
import Image from "next/image";
import { register } from "swiper/element/bundle";
register();
import {
  Mousewheel,
  Pagination,
  EffectFade,
  Keyboard,
  FreeMode,
  Navigation,
} from "swiper/modules";

const SliderComponent = () => {
  return (
    <section className="overflow-y-auto">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
        <Image
          src="/images/Piscina.webp"
          alt="Piscina Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="items-center justify-center text-center flex flex-col gap-3 text-white z-20 absolute inset-0">
          <h2 className="h2">CAMBIA DE AMBIENTE</h2>
          <span className="p-light-16 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center">
            El espacio que buscas, con las comodidades que necesitas para una
            gran experiencia.
          </span>
          <div className="p-5">
            <CalendarWidget />
          </div>
        </div>
      </div>
      {/* Rooftop */}
      <div className="text-white h-screen text-center flex items-center w-full">
        <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] pl-10 h-full items-right justify-end text-left flex flex-col gap-3 md:gap-5 mb-[18.375rem]">
          <span className="p-regular-18 pl-20">HEISS MEDELLÍN</span>
          <h2 className="h2 pl-20">ROOFTOP</h2>
          <p className="p-light-16 pr-14 pl-20">
            El espacio que buscabas, con las comodidades que necesitas para
            vivir una gran experiencia.
          </p>
        </div>
        <Swiper slidesPerView={1} className="w-[55%] h-screen">
          <SwiperSlide className="w-[55%] h-screen">
            <div className="relative w-full h-screen">
              <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
              <Image
                src="/images/Terraza.webp"
                alt="Piscina Image"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Lobby */}
      <div className="text-white h-screen text-center flex items-center w-full">
        <Swiper slidesPerView={1} className="w-[55%] h-screen">
          <SwiperSlide>
            <div className="relative w-full h-screen">
              <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
              <Image
                src="/images/Lobby.webp"
                alt="Piscina Image"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-start text-right flex flex-col gap-3 md:gap-5 mt-[18.375rem]">
          <span className="p-regular-18 ">HEISS MEDELLÍN</span>
          <h2 className="h2">LOBBY</h2>
          <p className="p-light-16 pl-20">
            El espacio que buscabas, con las comodidades que necesitas para
            vivir una gran experiencia.
          </p>
        </div>
      </div>

      {/* Piscina con jacuzzi */}
      <div className="text-white h-screen text-center flex items-center w-full">
        <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-end text-left flex flex-col gap-3 md:gap-5 mb-[18.375rem]">
          <span className="p-regular-18 pl-20">HEISS MEDELLÍN</span>
          <h2 className="h2 pl-20">PISCINA CON JACUZZI</h2>
          <p className="p-light-16 pr-14 pl-20">
            El espacio que buscabas, con las comodidades que necesitas para
            vivir una gran experiencia.
          </p>
        </div>

        <Swiper slidesPerView={1} className="w-[55%] h-screen">
          <SwiperSlide>
            <div className="relative w-full h-screen">
              <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
              <Image
                src="/images/Piscina.webp"
                alt="Piscina Image"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Gimnasio */}
      <div className="text-white h-screen text-center flex items-center w-full">
        <Swiper slidesPerView={1} className="w-[55%] h-screen">
          <SwiperSlide>
            <div className="relative w-full h-screen">
              <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
              <Image
                src="/images/gimnasio.webp"
                alt="Piscina Image"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-start text-right flex flex-col gap-3 md:gap-5 mt-[18.375rem]">
          <span className="p-regular-18 ">HEISS MEDELLÍN</span>
          <h2 className="h2">GIMNASIO</h2>
          <p className="p-light-16 pl-20">
            El espacio que buscabas, con las comodidades que necesitas para
            vivir una gran experiencia.
          </p>
        </div>
      </div>
      {/* Sala de masajes */}
      <div className="text-white flex h-screen text-center items-center w-full">
        <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-end text-left flex flex-col gap-3 md:gap-5 mb-[18.375rem]">
          <span className="p-regular-18 pl-20">HEISS MEDELLÍN</span>
          <h2 className="h2 pl-20">SALA DE MASAJES</h2>
          <p className="p-light-16 pr-14 pl-20">
            El espacio que buscabas, con las comodidades que necesitas para
            vivir una gran experiencia.
          </p>
        </div>

        <Swiper slidesPerView={1} className="w-[55%] h-screen">
          <SwiperSlide>
            <div className="relative w-full h-screen">
              <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
              <Image
                src="/images/salademasajes.webp"
                alt="Piscina Image"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Zona comercial */}
      <div className="flex text-white h-screen text-center items-center w-full">
        <Swiper slidesPerView={1} className="w-[55%] h-screen">
          <SwiperSlide>
            <div className="relative w-full h-screen">
              <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
              <Image
                src="/images/Zona_Comercial.webp"
                alt="Piscina Image"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-start text-right flex flex-col gap-3 md:gap-5 mt-[18.375rem]">
          <span className="p-regular-18 ">HEISS MEDELLÍN</span>
          <h2 className="h2">ZONA COMERCIAL</h2>
          <p className="p-light-16 pl-20">
            El espacio que buscabas, con las comodidades que necesitas para
            vivir una gran experiencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
