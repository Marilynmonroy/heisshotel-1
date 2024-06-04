"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "/app/css/pagination.css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css";
import Image from "next/image";

import { register } from "swiper/element/bundle";
register();
import {
  Navigation,
  Mousewheel,
  Pagination,
  EffectFade,
  Keyboard,
  FreeMode,
  Scrollbar,
} from "swiper/modules";
import { Button } from "./ui/button";
import { CalendarWidget } from "./CalendarWidget";

const SliderHome = () => {
  return (
    <div>
      <Swiper
        direction={"vertical"}
        spaceBetween={30}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={600}
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
        {/* Home */}
        <SwiperSlide className="text-white h-screen flex justify-center items-center text-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/Fachada_Heiss_R3.jpg"
              alt="Fachada Heiss"
              layout="fill"
              objectFit="cover"
              priority
            />{" "}
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <CalendarWidget />
            </div>
          </div>
        </SwiperSlide>
        {/* Habitaciones */}
        <SwiperSlide className="text-white h-screen text-center flex justify-center items-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/Habitacion_Small_Front.jpg"
              alt="Habitación Small"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 lg:pr-44 lg:text-right">
              <div className="flex flex-col gap-3 md:gap-5 items-center lg:items-end md:mt-36">
                <span className="parrafo-regular-18">HEISS MEDELLÍN</span>
                <h2 className="h5">CONOCE NUESTRAS HABITACIONES</h2>
                <p className="parrafo-light-24 md:2/5 lg:w-3/5 xl:w-2/6 lg:float-right">
                  El espacio que buscabas, con las comodidades que necesitas
                  para vivir una gran experiencia.
                </p>
              </div>
              <div className="py-5 md:py-8 xl:py-10">
                <Button asChild>
                  <Link href="/habitaciones">HABITACIONES</Link>
                </Button>
              </div>
              <div className="flex justify-center md:justify-center gap-4">
                <Button variant="destructive" size="sm" asChild>
                  <Link href="/habitaciones/habitacionSmall">S</Link>
                </Button>
                <Button variant="destructive" size="sm" asChild>
                  <Link href="/habitaciones/habitacionMedium">M</Link>
                </Button>
                <Button variant="destructive" size="sm" asChild>
                  <Link href="/habitaciones/habitacionLarge">L</Link>
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Especios */}
        {/* <SwiperSlide className="text-white h-screen text-center flex justify-center items-center">
          {/* Para dispositivos grandes 
          <div className="hidden md:grid md:grid-cols-4 gap-6 p-5 overscroll-contain relative w-full h-full">
            <div className="md:col-span-1">
              <Swiper
                direction={"vertical"}
                navigation={true}
                freeMode={true}
                spaceBetween={35}
                slidesPerView={3}
                modules={[Navigation, FreeMode, Scrollbar]}
                className="w-full h-full"
              >
                <SwiperSlide style={{ height: "25rem" }}>
                  <div className="relative bg-black rounded-3xl w-full h-[25rem] overflow-hidden transition duration-200 ease-in-out group">
                    <Image
                      src="/images/Terraza.jpg"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt="Terraza"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-8 bg-black/65 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                      <h2 className="absolute inset-x-0 bottom-0 flex justify-center items-center h6 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                        ESPACIO
                      </h2>
                      <p className="md:px-5 text-justify items-center pt-10 p-regular-16">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Imagen estática
            <div
              className="relative md:col-span-3 rounded-3xl flex flex-col justify-center items-center p-8"
              style={{ width: "100%", height: "100%" }}
            >
              <Image
                src="/images/Zona_Comercial.jpg"
                alt="Zona Comercial"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl absolute inset-0 z-0"
              />
              <div className="relative z-10 bg-opacity-50 p-8 md:p-16 rounded-3xl flex flex-col items-start">
                <div className="text-center lg:text-left flex flex-col gap-3 md:gap-5 lg:items-start">
                  <span className="parrafo-regular-18">HEISS MEDELLÍN</span>
                  <h2 className="h5">CAMBIA DE AMBIENTE</h2>
                  <p className="parrafo-light-24 md:w-2/5 lg:w-1/2 xl:w-1/2">
                    El espacio que buscabas, con las comodidades que necesitas
                    para vivir una gran experiencia.
                  </p>
                  <Button asChild>
                    <Link href="/">CONOCE MÁS</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}

        {/* Experiencias */}
        <SwiperSlide className="text-white h-screen text-center flex justify-center items-center">
          <div
            className="flex flex-col"
            style={{
              position: "relative",
              width: "100vw",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1,
              }}
            >
              <source src="/images/Experiencias_Heiss.mp4" type="video/mp4" />
            </video>
            <div className="text-center p-8 md:p-16 flex flex-col lg:text-left lg:pl-44 lg:mt-56">
              <div className="mt-28 mb-5 md:my-8">
                <Button asChild>
                  <Link href="https://wa.me/573178946768" target="_blank">
                    EXPLORAR
                  </Link>
                </Button>
              </div>
              <div className="items-center lg:text-right flex flex-col gap-3 md:gap-5 lg:items-start">
                <span className="parrafo-regular-18">EXPLORA MEDELLÍN</span>
                <h2 className="h5">SUMÉRGETE EN SU AUTENTICIDAD</h2>
                <p className="parrafo-light-24 md:2/5 lg:w-3/5 xl:w-2/6 lg:text-left lg:float-left">
                  El espacio que buscabas, con las comodidades que necesitas
                  para vivir una gran experiencia.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SliderHome;
