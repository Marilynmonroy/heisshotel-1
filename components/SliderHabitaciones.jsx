// HabitacionesSwiper.js
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "/app/css/pagination.css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css";

import { register } from "swiper/element/bundle";
register();
import { Mousewheel, Pagination, EffectFade, Keyboard } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";

const SliderHabitaciones = () => {
  return (
    <Swiper
      direction={"vertical"}
      spaceBetween={30}
      effect="fade"
      speed={600}
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
            backgroundImage: `url(/images/Habitacion_L_Balcón.jpg)`,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {" "}
          <section className="mt-56">
            <div className="items-center text-center flex flex-col gap-3">
              <span className="p-regular-20">HEISS MEDELLÍN</span>
              <h2 className="h2">ROOMS</h2>
            </div>
            <div className="p-10">
              {/* <CalendarWidget /> */}
            </div>
          </section>
        </div>
      </SwiperSlide>
      <SwiperSlide className="text-white h-screen text-center flex items-center">
        <div
          className="bg-cover bg-center flex flex-col justify-center md:justify-end "
          style={{
            backgroundImage: `url(/images/habitacionSection.jpg)`,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="text-center p-8 md:p-16 flex flex-col lg:text-center md:pb-36 lg:pb-36 xl:pb-36">
            <div className="items-center text-center flex flex-col gap-3 md:gap-5">
              <span className="p-medium-24">DESCUBRE</span>
              <p className="parrafo-light-24 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center">
                Ofrecemos diferentes categorías de habitaciones escoge la que
                mejor se acomode a tu estadia
              </p>
            </div>
            <div className="py-5 md:py-8">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button>DESCRIPCIÓN</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <section className="md:flex md:grid-col-3 bg-black text-white gap-4 py-8 md:px-16 md:py-12 lg:py-20 lg:px-24 xl:py-24 xl:px-32 justify-center lg:justify-between items-end">
                    <div className="flex px-8 md:px-5 col-span-2 gap-5 md:gap-9 lg:gap-10 xl:gap-36 justify-center">
                      <div className="flex flex-col grid-col-2 h-40 md:gap-7 md:w-40 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-64 xl:gap-10 justify-between">
                        <div className="flex gap-5 lg:gap-10 items-center text-left">
                          <Image
                            src="/icons/camas.svg"
                            alt="Camas Queen"
                            width={25}
                            height={29.1}
                            className="md:w-[40px] lg:w-[50px]"
                          />
                          <p className="p-light-16">Camas Queen</p>
                        </div>
                        <div className="flex gap-5 lg:gap-10 items-center text-left">
                          <Image
                            src="/icons/wifi.svg"
                            alt="Wifi"
                            width={25}
                            height={29.1}
                            className="md:w-[40px] lg:w-[50px]"
                          />
                          <p className="p-light-16">
                            Conexión de alta velocidad
                          </p>
                        </div>
                        <div className="flex gap-5 lg:gap-10 items-center text-left">
                          <Image
                            src="/icons/armario.svg"
                            alt="Armario"
                            width={25}
                            height={29.1}
                            className="md:w-[40px] lg:w-[50px]"
                          />
                          <p className="p-light-16">Armario</p>
                        </div>
                      </div>
                      <div className="flex flex-col grid-cols-2 h-40 md:w-40 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-64 xl:gap-10 justify-between">
                        <div className="flex gap-5 lg:gap-10 items-center text-left">
                          <Image
                            src="/icons/bar.svg"
                            alt="Bar"
                            width={25}
                            height={29.1}
                            className="md:w-[40px] lg:w-[50px]"
                          />
                          <p className="p-light-16">Mini bar</p>
                        </div>
                        <div className="flex gap-5 lg:gap-10 items-center text-left">
                          <Image
                            src="/icons/ducha.svg"
                            alt="Ducha"
                            width={25}
                            height={29.1}
                            className="md:w-[40px] lg:w-[50px]"
                          />
                          <p className="p-light-16">Cuarto de baño con ducha</p>
                        </div>
                        <div className="flex gap-5 lg:gap-10 items-center text-left">
                          <Image
                            src="/icons/cafetera.svg"
                            alt="Cafetera"
                            width={25}
                            height={29.1}
                            className="md:w-[40px] lg:w-[50px]"
                          />
                          <p className="p-light-16">Set de cafetera</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center text-center md:text-right md:w-96 xl:w-5/6 pt-10 px-7">
                      <h3 className="h6">PODRAS ENCONTRAR</h3>
                      <p className="p-light-16 pt-3 md:pt-7">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </section>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="flex justify-center md:justify-center gap-4 mt-24 md:mt-12 lg:mt-16 xl:mt-28">
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
    </Swiper>
  );
};

export default SliderHabitaciones;
