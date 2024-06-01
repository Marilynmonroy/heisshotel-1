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
      <section
        className="bg-center bg-cover w-full h-screen flex flex-col justify-center"
        style={{
          backgroundImage: `url(/images/Piscina.jpg)`,
        }}
      >
        <div className="items-center text-center flex flex-col gap-3 text-white">
          <h2 className="h2">CAMBIA DE AMBIENTE</h2>
          <span className="parrafo-light-24 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center">
            El espacio que buscas, con las comodidades que necesitas para vivir
            una gran experiencia.
          </span>
        </div>
        <div className="mt-5">
          <CalendarWidget />
        </div>
      </section>
      {/* Rooftop */}
      <div className="text-white h-screen text-center flex items-center w-full">
        <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] pl-10 h-full items-right justify-end text-left flex flex-col gap-3 md:gap-5 mb-[18.375rem]">
          <span className="parrafo-regular-18 pl-20">HEISS MEDELLÍN</span>
          <h2 className="h5 pl-20">ROOFTOP</h2>
          <p className="parrafo-light-24 pr-14 pl-20">
            El espacio que buscabas, con las comodidades que necesitas para
            vivir una gran experiencia.
          </p>
        </div>
        <Swiper slidesPerView={1} className="w-[55%] h-screen">
          <SwiperSlide>
            <div
              className="bg-cover bg-right"
              style={{
                backgroundImage: `url(/images/Terraza.jpg)`,
                width: "100%",
                height: "100%",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Lobby */}
      <div className="text-white h-screen text-center flex items-center w-full">
        <Swiper slidesPerView={1} className="w-[55%] h-screen">
          <SwiperSlide>
            <div
              className="bg-cover bg-right"
              style={{
                backgroundImage: `url(/images/Lobby.jpg)`,
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
        <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-start text-right flex flex-col gap-3 md:gap-5 mt-[18.375rem]">
          <span className="parrafo-regular-18">HEISS MEDELLÍN</span>
          <h2 className="h5">LOBBY</h2>
          <p className="parrafo-light-24 pl-20">
            El espacio que buscabas, con las comodidades que necesitas para
            vivir una gran experiencia.
          </p>
        </div>
      </div>

      {/* Piscina con jacuzzi */}
      <div className="text-white h-screen text-center flex items-center w-full">
        <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-end text-left flex flex-col gap-3 md:gap-5 mb-[18.375rem]">
          <span className="parrafo-regular-18 pl-20">HEISS MEDELLÍN</span>
          <h2 className="h5 pl-20">PISCINA CON JACUZZI</h2>
          <p className="parrafo-light-24 pr-14 pl-20">
            El espacio que buscabas, con las comodidades que necesitas para
            vivir una gran experiencia.
          </p>
        </div>

        <Swiper slidesPerView={1} className="w-[55%] h-screen">
          <SwiperSlide>
            <div
              className="bg-cover bg-center"
              style={{
                backgroundImage: `url(/images/Piscina.jpg)`,
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Gimnasio */}
      <div className="text-white h-screen text-center flex items-center w-full">
        <Swiper slidesPerView={1} className="w-[55%] h-screen">
          <SwiperSlide>
            <div
              className="bg-cover bg-left"
              style={{
                backgroundImage: `url(/images/gimnasio.jpg)`,
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
        <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-start text-right flex flex-col gap-3 md:gap-5 mt-[18.375rem]">
          <span className="parrafo-regular-18">HEISS MEDELLÍN</span>
          <h2 className="h5">GIMNASIO</h2>
          <p className="parrafo-light-24 pl-20">
            El espacio que buscabas, con las comodidades que necesitas para
            vivir una gran experiencia.
          </p>
        </div>
      </div>
      {/* Sala de masajes */}
      <div className="text-white flex h-screen text-center items-center w-full">
        <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-end text-left flex flex-col gap-3 md:gap-5 mb-[18.375rem]">
          <span className="parrafo-regular-18 pl-20">HEISS MEDELLÍN</span>
          <h2 className="h5 pl-20">SALA DE MASAJES</h2>
          <p className="parrafo-light-24 pr-14 pl-20">
            El espacio que buscabas, con las comodidades que necesitas para
            vivir una gran experiencia.
          </p>
        </div>

        <Swiper slidesPerView={1} className="w-[55%] h-screen">
          <SwiperSlide>
            <div
              className="bg-cover bg-center"
              style={{
                backgroundImage: `url(/images/salademasajes.jpg)`,
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Zona comercial */}
      <div className="flex text-white h-screen text-center items-center w-full">
        <Swiper slidesPerView={1} className="w-[55%] h-screen">
          <SwiperSlide>
            <div
              className="bg-cover bg-right"
              style={{
                backgroundImage: `url(/images/Zona_Comercial.jpg)`,
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
        <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-start text-right flex flex-col gap-3 md:gap-5 mt-[18.375rem]">
          <span className="parrafo-regular-18">HEISS MEDELLÍN</span>
          <h2 className="h5">ZONA COMERCIAL</h2>
          <p className="parrafo-light-24 pl-20">
            El espacio que buscabas, con las comodidades que necesitas para
            vivir una gran experiencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
