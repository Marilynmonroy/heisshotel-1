"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "/app/css/pagination.css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css";

import { register } from "swiper/element/bundle";
register();
import {
  Mousewheel,
  Pagination,
  EffectFade,
  Keyboard,
  FreeMode,
} from "swiper/modules";
import Calendar from "@/components/Calendar";
export default function Habitaciones() {
  return (
    <div>
      <Swiper
        direction={"vertical"}
        spaceBetween={30}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
          modifierClass: "swiper-pagination",
        }}
        modules={[Keyboard, Mousewheel, Pagination, EffectFade]}
        className=" w-full h-screen"
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide className="text-white h-screen flex justify-center items-center text-center">
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/Piscina.jpg)`,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {" "}
            <div className="mt-56">
              <div className="items-center text-center flex flex-col gap-3">
                <h2 className="h2">CAMBIA DE AMBIENTE</h2>
                <span className="parrafo-light-24 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center">
                  El espacio que buscas, con las comodidades que necesitas para
                  vivir una gran experiencia.
                </span>
              </div>
              <div>
                <Calendar />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Rooftop */}
        <SwiperSlide
          className="text-white h-screen text-center items-center w-full "
          style={{ display: "flex" }}
        >
          <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] pl-10 h-full items-right justify-end text-left flex flex-col gap-3 md:gap-5 mb-[18.375rem] ">
            <span className="parrafo-regular-18 pl-20">HEISS MEDELLÍN</span>
            <h2 className="h5 pl-20">ROOFTOP</h2>
            <p className="parrafo-light-24 pr-14 pl-20">
              El espacio que buscabas, con las comodidades que necesitas para
              vivir una gran experiencia.
            </p>
          </div>

          <Swiper
            mousewheel={true}
            freeMode={true}
            Navegation={true}
            nested={true}
            slidesPerView={1}
            modules={[Mousewheel, FreeMode]}
            className="w-[55%] h-screen"
          >
            <SwiperSlide>
              <div
                className="bg-cover bg-right"
                style={{
                  backgroundImage: `url(/images/Terraza.jpg)`,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-cover bg-right"
                style={{
                  backgroundImage: `url(/images/Terraza.jpg)`,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-cover bg-right"
                style={{
                  backgroundImage: `url(/images/Terraza.jpg)`,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
              ></div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        {/* Lobby */}
        <SwiperSlide
          className="text-white h-screen text-center items-center w-full"
          style={{ display: "flex" }}
        >
          <Swiper
            mousewheel={true}
            freeMode={true}
            nested={true}
            slidesPerView={1}
            modules={[Mousewheel, FreeMode]}
            className="w-[55%] h-screen"
          >
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
          <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-start text-right flex flex-col gap-3 md:gap-5 mt-[18.375rem] ">
            <span className="parrafo-regular-18">HEISS MEDELLÍN</span>
            <h2 className="h5">ROOFTOP</h2>
            <p className="parrafo-light-24 pl-20">
              El espacio que buscabas, con las comodidades que necesitas para
              vivir una gran experiencia.
            </p>
          </div>
        </SwiperSlide>
        {/* Piscina con jacuzzi */}
        <SwiperSlide
          className="text-white h-screen text-center items-center w-full"
          style={{ display: "flex" }}
        >
          <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-end text-left flex flex-col gap-3 md:gap-5 mb-[18.375rem] ">
            <span className="parrafo-regular-18 pl-20">HEISS MEDELLÍN</span>
            <h2 className="h5 pl-20">PISCINA CON JACUZZI</h2>
            <p className="parrafo-light-24 pr-14 pl-20">
              El espacio que buscabas, con las comodidades que necesitas para
              vivir una gran experiencia.
            </p>
          </div>

          <Swiper
            mousewheel={true}
            freeMode={true}
            Navegation={true}
            nested={true}
            slidesPerView={1}
            modules={[Mousewheel, FreeMode]}
            className="w-[55%] h-screen"
          >
            <SwiperSlide>
              <div
                className="bg-cover bg-right"
                style={{
                  backgroundImage: `url(/images/Piscina.jpg)`,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-cover bg-right"
                style={{
                  backgroundImage: `url(/images/Piscina.jpg)`,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-cover bg-right"
                style={{
                  backgroundImage: `url(/images/Piscina.jpg)`,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
              ></div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        {/* Gimnacion */}
        <SwiperSlide
          className="text-white h-screen text-center items-center w-full"
          style={{ display: "flex" }}
        >
          <Swiper
            mousewheel={true}
            freeMode={true}
            nested={true}
            slidesPerView={1}
            modules={[Mousewheel, FreeMode]}
            className="w-[55%] h-screen"
          >
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
          <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-start text-right flex flex-col gap-3 md:gap-5 mt-[18.375rem] ">
            <span className="parrafo-regular-18">HEISS MEDELLÍN</span>
            <h2 className="h5">GIMNACIO</h2>
            <p className="parrafo-light-24 pl-20">
              El espacio que buscabas, con las comodidades que necesitas para
              vivir una gran experiencia.
            </p>
          </div>
        </SwiperSlide>
        {/* Sala masajes */}
        <SwiperSlide
          className="text-white h-screen text-center items-center w-full"
          style={{ display: "flex" }}
        >
          <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-end text-left flex flex-col gap-3 md:gap-5 mb-[18.375rem] ">
            <span className="parrafo-regular-18 pl-20">HEISS MEDELLÍN</span>
            <h2 className="h5 pl-20">SALA DE MASAJES</h2>
            <p className="parrafo-light-24 pr-14 pl-20">
              El espacio que buscabas, con las comodidades que necesitas para
              vivir una gran experiencia.
            </p>
          </div>

          <Swiper
            mousewheel={true}
            freeMode={true}
            Navegation={true}
            nested={true}
            slidesPerView={1}
            modules={[Mousewheel, FreeMode]}
            className="w-[55%] h-screen"
          >
            <SwiperSlide>
              <div
                className="bg-cover bg-right"
                style={{
                  backgroundImage: `url(/images/Terraza.jpg)`,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-cover bg-right"
                style={{
                  backgroundImage: `url(/images/Terraza.jpg)`,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-cover bg-right"
                style={{
                  backgroundImage: `url(/images/Terraza.jpg)`,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
              ></div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        {/* Zona comercial */}
        <SwiperSlide
          className="text-white h-screen text-center items-center w-full"
          style={{ display: "flex" }}
        >
          <Swiper
            mousewheel={true}
            freeMode={true}
            nested={true}
            slidesPerView={1}
            modules={[Mousewheel, FreeMode]}
            className="w-[55%] h-screen"
          >
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
          <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-start text-right flex flex-col gap-3 md:gap-5 mt-[18.375rem] ">
            <span className="parrafo-regular-18">HEISS MEDELLÍN</span>
            <h2 className="h5">ZONA COMERCIAL</h2>
            <p className="parrafo-light-24 pl-20">
              El espacio que buscabas, con las comodidades que necesitas para
              vivir una gran experiencia.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
