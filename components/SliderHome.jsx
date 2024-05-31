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

import { register } from "swiper/element/bundle";
register();
import {
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
          <div
            className="bg-cover bg-right-top"
            style={{
              backgroundImage: `url(/images/Fachada_Heiss_R3.jpg)`,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {" "}
            <div>
              <CalendarWidget />
            </div>
          </div>
        </SwiperSlide>
        {/* Habitaciones */}
        <SwiperSlide className="text-white h-screen text-center flex justify-center items-center">
          <div
            className="bg-cover bg-center flex flex-col"
            style={{
              backgroundImage: `url(/images/Habitacion_Small_Front.jpg)`,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="text-center p-8 md:p-16 flex flex-col lg:text-right lg:pr-44">
              <div className="items-center lg:text-right flex flex-col gap-3 md:gap-5 lg:items-end md:mt-36">
                <span className=".parrafo-regular-18">HEISS MEDELLÍN</span>
                <h2 className="h5">CONOCE NUESTRAS HABITACIONES</h2>
                <p className="parrafo-light-24 md:2/5 lg:w-3/5 xl:w-2/6 lg:text-right lg:float-right">
                  El espacio que buscabas, con las comodidades que necesitas
                  para vivir una gran experiencia.
                </p>
              </div>
              <div className="py-5 md:py-8 xl:py-10">
                <Button asChild>
                  <Link href="/habitaciones">HABITACIONES</Link>
                </Button>
              </div>
              <div className="flex justify-center md:justify-center gap-4 ">
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
        <SwiperSlide className="text-white text-center flex justify-center items-center">
          <div className="absolute grid grid-cols-4 gap-6 p-5 overscroll-contain">
            <Swiper
              direction={"vertical"}
              mousewheel={true}
              freeMode={true}
              scrollbar={{
                hide: true,
              }}
              nested={true}
              spaceBetween={35}
              slidesPerView={"auto"}
              modules={[Mousewheel, FreeMode, Scrollbar]}
              className="w-full h-screen"
            >
              <div className="flex flex-col">
                <SwiperSlide style={{ height: "25rem" }}>
                  <div
                    className="bg-cover bg-center rounded-3xl w-full h-[25rem] overflow-hidden transition duration-200 ease-in-out"
                    style={{
                      backgroundImage: `url(/images/Terraza.jpg)`,
                    }}
                  >
                    <div className="relative inset-0 flex flex-col h-[25rem] justify-center items-center p-8 opacity-0 bg-black/65 transition-opacity duration-300 ease-in-out hover:opacity-100 pointer-events-auto">
                      <h2 className="h6">ESPACIO</h2>
                      <p className="md:px-5 text-justify items-center pt-10 p-regular-16">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide style={{ height: "25rem" }}>
                  <div
                    className="bg-cover bg-center flex flex-col rounded-3xl"
                    style={{
                      backgroundImage: `url(/images/Piscina.jpg)`,
                      width: "100%",
                      height: "25rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div className="relative inset-0 flex flex-col h-[25rem] justify-center items-center p-8 opacity-0 bg-black/65 transition-opacity duration-200 ease-in-out hover:opacity-100 pointer-events-auto">
                      <h2 className="h6">ESPACIO</h2>
                      <p className="md:px-5 text-justify items-center pt-8 p-regular-16">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ height: "25rem" }}>
                  <div
                    className="bg-cover flex flex-col rounded-3xl"
                    style={{
                      backgroundImage: `url(/images/Fachada_Contrapicada.jpg)`,
                      width: "100%",
                      height: "25rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div className="relative inset-0 flex flex-col h-[25rem] justify-center items-center p-8 opacity-0 bg-black/65 transition-opacity duration-00 ease-in-out hover:opacity-100 pointer-events-auto">
                      <h2 className="h6">ESPACIO</h2>
                      <p className="md:px-5 text-justify items-center pt-8 p-regular-16">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            {/* Imagen estatica */}
            <div
              className="bg-cover bg-center col-span-3 rounded-3xl"
              style={{
                backgroundImage: `url(/images/Zona_Comercial.jpg)`,
                width: "100%",
                height: "96%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div className="text-center p-8 md:p-16 flex flex-col lg:text-left lg:pl-32 md:mt-36">
                <div className="items-center lg:text-right flex flex-col gap-3 md:gap-5 lg:items-start">
                  <span className=".parrafo-regular-18">HEISS MEDELLÍN</span>
                  <h2 className="h5">CAMBIA DE AMBIENTE</h2>
                  <p className="parrafo-light-24 md:2/5 lg:w-1/2 xl:w-1/2 lg:text-left lg:float-left">
                    El espacio que buscabas, con las comodidades que necesitas
                    para vivir una gran experiencia.
                  </p>
                </div>
                <div className="my-5 md:my-8">
                  <Button asChild>
                    <Link href="/">CONOCE MÁS</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Experiencias */}
        <SwiperSlide className="text-white h-screen text-center flex justify-center items-center">
          <div
            className="bg-cover flex flex-col "
            style={{
              backgroundImage: `url(/images/Mujer_Heiss.jpeg)`,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="text-center p-8 md:p-16 flex flex-col lg:text-left lg:pl-44 lg:mt-56">
              <div className="my-5 md:my-8">
                <Button asChild>
                  <Link href="/experiencias">EXPLORAR</Link>
                </Button>
              </div>
              <div className="items-center lg:text-right flex flex-col gap-3 md:gap-5 lg:items-start">
                <span className=".parrafo-regular-18">EXPLORA MEDELLÍN</span>
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
