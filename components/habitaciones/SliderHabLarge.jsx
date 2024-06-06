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
import { CalendarWidget } from "../CalendarWidget";
import { Button } from "../ui/button";

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
import Link from "next/link";

const SliderHabLarge = () => {
  return (
    <section className="overflow-y-auto">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
        <Image
          src="/images/habitacionLarge/largeprincipal.webp"
          alt="Piscina Image"
          layout="fill"
          objectFit="cover"
          priority
          placeholder="blur"
        />
        <div className="items-center justify-center mb-20 text-center flex flex-col gap-3 text-white z-20 absolute inset-0">
          <span className="p-light-16 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center">
            HOTEL HEISS MEDELLÍN
          </span>
          <h2 className="h3">JUNIOR SUITE</h2>
          <div className="mt-5">
            <CalendarWidget />
          </div>
        </div>
      </div>
      {/* carrousel 1 */}
      <div className="text-white h-3/4 text-center flex items-center w-full">
        <Swiper
          slidesPerView={1}
          className="w-full h-[70%]"
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
            modifierClass: "swiper-pagination",
          }}
          modules={[Pagination]}
          lazy={true} // Lazy loading
        >
          <SwiperSlide>
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
            <Image
              src="/images/habitacionLarge/largecarrousel1.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
              placeholder="blur"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
            <Image
              src="/images/habitacionLarge/largecarrousel2.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
              placeholder="blur"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
            <Image
              src="/images/habitacionLarge/largecarrousel3.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
              placeholder="blur"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* carrousel 2 */}
      <div className="text-white text-center flex items-center w-full">
        <Swiper
          slidesPerView={1}
          className="w-[55%] h-screen"
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
            modifierClass: "swiper-pagination",
          }}
          modules={[Pagination]}
          lazy={true} // Lazy loading
        >
          <SwiperSlide>
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
            <Image
              src="/images/habitacionLarge/largedetalles.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
              placeholder="blur"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
            <Image
              src="/images/habitacionLarge/largedetalles2.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
              placeholder="blur"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
            <Image
              src="/images/habitacionLarge/largedetalles3.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
              placeholder="blur"
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex flex-col w-[45%] gap-10 h-full p-8 md:p-16 items-end justify-end text-right">
          {/* ICONOS */}
          <div className="">
            <h2 className="h2 py-8">JUNIOR SUITE</h2>
            <p className="p-light-16 pl-12">
              Descubre la elegancia y el confort de nuestra <b>Junior Suite,</b>
              una espaciosa habitación de 20 mt2 con un balcón privado de 10
              mt2. Perfecta para aquellos que buscan un poco más de lujo durante
              su estancia. Esta Junior Suite combina espacios interiores y
              exteriores generosos con detalles elegantes
            </p>
          </div>

          <div className="flex gap-5 md:gap-9 lg:gap-10 xl:gap-10 justify-end">
            <Image
              src="/icons/camas.svg"
              alt="Camas Queen"
              width={40}
              height={29.1}
              className="md:w-[40px] lg:w-[50px]"
            />
            <Image
              src="/icons/wifi.svg"
              alt="Wifi"
              width={40}
              height={29.1}
              className="md:w-[40px] lg:w-[50px]"
            />

            <Image
              src="/icons/armario.svg"
              alt="Armario"
              width={40}
              height={29.1}
              className="md:w-[40px] lg:w-[50px]"
            />

            <Image
              src="/icons/ducha.svg"
              alt="Ducha"
              width={40}
              height={62.42}
              className="md:w-[40px] lg:w-[50px]"
            />
          </div>
          <Button as child>
            <Link
              href="https://hotels.cloudbeds.com/es/reservation/lLxxdq"
              target="_blank"
            >
              BOOK NOW
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SliderHabLarge;
