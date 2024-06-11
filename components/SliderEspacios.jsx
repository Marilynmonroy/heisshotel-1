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
import { Badge } from "./ui/badge";
import Image from "next/image";
import { register } from "swiper/element/bundle";
import Footer from "./Footer";
register();
import {
  Mousewheel,
  Pagination,
  EffectFade,
  Keyboard,
  FreeMode,
  Navigation,
} from "swiper/modules";
import GoogleMaps from "./GoogleMaps";
const SliderComponent = () => {
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
          objectFit="cover"
          priority
        />
        <div className="items-center justify-center text-center flex flex-col gap-3 text-white z-20 absolute inset-0">
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

      {/* Rooftop */}
      <div
        id="rooftop-section"
        className="text-white h-screen justify-center items-center text-center flex-col flex md:flex-row w-full"
      >
        <div className="espacios">
          <span className="p-regular-18">HEISS MEDELLÍN</span>
          <Badge className="w-28">Próximamente</Badge>
          <h2 className="h2">ROOFTOP</h2>
          <p className="p-light-16 w-full">
            Descubre el encanto del Rooftop del Heiss Hotel, un espacio
            exclusivo donde la elegancia y la vista panorámica de Medellín se
            fusionan para ofrecerte momentos inolvidables. Ideal para relajarse
            al atardecer o celebrar eventos especiales, nuestro rooftop es el
            lugar perfecto para disfrutar de la magia de Medellín desde las
            alturas. ¡Te esperamos!
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          className="md:w-[55%] w-full h-screen"
          style={{ height: "100%" }}
        >
          <SwiperSlide className="md:w-[55%] w-full h-full">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
              <Image
                src="/images/Terraza.webp"
                alt="Terraza Image"
                fill
                className="responsive-image"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Lobby */}
      <div
        id="lobby-section"
        className="text-white h-screen justify-center items-center text-center flex-col-reverse flex md:flex-row w-full"
      >
        <Swiper slidesPerView={1} className="md:w-[55%] w-full h-screen">
          <SwiperSlide className="md:w-[55%] w-full md:h-screen h-full">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
              <Image
                src="/images/Lobby.webp"
                alt="Lobby Image"
                fill
                className="responsive-image"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="w-[75%] md:w-[50%] h-full flex flex-col gap-3 justify-center text-left md:items-end md:text-right md:gap-5 md:px-12 lg:px-[4rem] xl:px-[5rem]">
          <span className="p-regular-18">HEISS MEDELLÍN</span>
          <Badge className="w-28">Próximamente</Badge>
          <h2 className="h2">LOBBY</h2>
          <p className="p-light-16">
            Bienvenido al elegante lobby del Heiss Hotel, donde cada detalle
            está diseñado para ofrecer una primera impresión inolvidable. Con un
            ambiente moderno y acogedor, nuestro lobby cuenta con cómodas áreas
            de descanso, una recepción amigable y eficiente, y una decoración
            sofisticada que refleja el espíritu vibrante de Medellín. Es el
            punto de partida perfecto para tu experiencia de lujo en nuestro
            hotel.
          </p>
        </div>
      </div>

      {/* Piscina con jacuzzi */}
      <div
        id="piscina-section"
        className="text-white h-screen justify-center items-center text-center flex-col flex md:flex-row w-full"
      >
        <div className="espacios">
          <span className="p-regular-18">HEISS MEDELLÍN</span>
          <Badge className="w-28">Próximamente</Badge>
          <h2 className="h2">PISCINA CON JACUZZI</h2>
          <p className="p-light-16 ">
            Disfruta de nuestra espectacular piscina al aire libre con jacuzzi,
            un oasis de relajación y lujo. Sumérgete en sus aguas cristalinas
            mientras disfrutas de vistas panorámicas de Medellín{" "}
          </p>
        </div>
        <Swiper slidesPerView={1} className="md:w-[55%] w-full h-screen">
          <SwiperSlide className="md:w-[55%] w-full md:h-screen h-full">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
              <Image
                src="/images/Piscina.webp"
                alt="Piscina Image"
                fill
                className="responsive-image"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Gimnasio */}
      <div
        id="gimnasio-section"
        className="text-white h-screen justify-center items-center text-center flex-col-reverse flex md:flex-row w-full"
      >
        <Swiper slidesPerView={1} className="md:w-[55%] w-full h-screen">
          <SwiperSlide className="md:w-[55%] w-full md:h-screen h-full">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
              <Image
                src="/images/gimnasio.webp"
                alt="Gimnasio Image"
                fill
                className="responsive-image"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="w-[75%] md:w-[50%] h-full flex flex-col gap-3 justify-center text-left md:items-end md:text-right md:gap-5 md:px-12 lg:px-[4rem] xl:px-[5rem]">
          <span className="p-regular-18">HEISS MEDELLÍN</span>
          <Badge className="w-28">Próximamente</Badge>

          <h2 className="h2">GIMNASIO</h2>
          <p className="p-light-16 ">
            Mantén tu rutina de ejercicios en nuestro moderno gimnasio, equipado
            con tecnología de última generación. Disfruta de una amplia variedad
            de máquinas cardiovasculares, pesas libres y equipos de
            entrenamiento funcional en un ambiente espacioso y luminoso. Ya sea
            que prefieras una sesión intensa o un entrenamiento ligero, nuestro
            gimnasio ofrece todo lo necesario para mantenerse en forma durante
            tu estancia.
          </p>
        </div>
      </div>

      {/* Sala de masajes */}
      <div
        id="salamasajes-section"
        className="text-white h-screen justify-center items-center text-center flex-col flex md:flex-row w-full"
      >
        <div className="espacios">
          <span className="p-regular-18">HEISS MEDELLÍN</span>
          <Badge className="w-28">Próximamente</Badge>

          <h2 className="h2">SALA DE MASAJES</h2>
          <p className="p-light-16 ">
            Sumérgete en un mundo de relajación y bienestar en nuestra exclusiva
            sala de masajes. Diseñada para ofrecer una experiencia
            rejuvenecedora, nuestra sala cuenta con un ambiente tranquilo y
            acogedor, perfecto para desconectar del estrés diario. Disfruta de
            un oasis de paz en el Heiss Hotel y renueva tu energía con nuestras
            terapias de masaje.
          </p>
        </div>
        <Swiper slidesPerView={1} className="md:w-[55%] w-full h-screen">
          <SwiperSlide className="md:w-[55%] w-full md:h-screen h-full">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
              <Image
                src="/images/salademasajes.webp"
                alt="Sala de Masajes Image"
                fill
                className="responsive-image"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Zona comercial */}
      <div
        id="comercial-section"
        className="text-white h-screen justify-center items-center text-center flex-col-reverse flex md:flex-row w-full"
      >
        <Swiper slidesPerView={1} className="md:w-[55%] w-full h-screen">
          <SwiperSlide className="md:w-[55%] w-full md:h-screen h-full">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
              <Image
                src="/images/Zona_Comercial.webp"
                alt="Zona Comercial Image"
                fill
                className="responsive-image"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="w-[75%] md:w-[50%] h-full flex flex-col gap-3 justify-center text-left md:items-end md:text-right md:gap-5 md:px-12 lg:px-[4rem] xl:px-[5rem]">
          <span className="p-regular-18">HEISS MEDELLÍN</span>
          <Badge className="w-28">Próximamente</Badge>

          <h2 className="h2">ZONA COMERCIAL</h2>
          <p className="p-light-16 ">
            Explora nuestra exclusiva zona comercial, donde encontrarás
            boutiques de moda, tiendas de souvenirs y productos locales.
            Disfruta de una experiencia de compras única sin salir del hotel.
            Perfecto para aquellos que buscan llevarse un recuerdo especial de
            Medellín.
          </p>
        </div>
      </div>

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
