"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "/app/css/pagination.css";
import "/app/css/navegation.css";
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
    const [isMobile, setIsMobile] = useState(false);
    const [swiperKey, setSwiperKey] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        // Esse codigo é para forçar o swiper a re-renderizar quando o isMobile muda
        setSwiperKey((prevKey) => prevKey + 1);
    }, [isMobile]);

    // Configura os módulos do swiper
    const swiperModules = isMobile
        ? [Keyboard, Pagination]
        : [Keyboard, Mousewheel, Pagination, EffectFade];

    // Configura as propriedades do swiper
    const swiperProps = isMobile
        ? { effect: "slide", fadeEffect: { crossFade: true }, mousewheel: true } // Efeito de slide para mobile
        : { effect: "fade", fadeEffect: { crossFade: true }, mousewheel: true }; // Efeito de fade para desktop

    return (
        <Swiper
            key={swiperKey}
            direction={"vertical"}
            spaceBetween={30}
            speed={600}
            keyboard={true}
            pagination={{
                clickable: true,
                bulletActiveClass: "swiper-pagination-bullet-active",
                bulletClass: "swiper-pagination-bullet",
                modifierClass: "swiper-pagination",
            }}
            modules={swiperModules}
            {...swiperProps}
            className="w-full h-screen"
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
            }}
        >
            {/* Home */}
            <SwiperSlide className="text-white h-screen flex justify-center items-center text-center">
                <div className="relative w-full h-full ">
                    <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                    <Image
                        src="/images/Fachada_Heiss_R3.webp"
                        alt="Fachada Heiss"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                    <div className="absolute inset-0 flex flex-col justify-center mb-28 items-center z-20">
                        <CalendarWidget />
                    </div>
                </div>
            </SwiperSlide>
            {/* Habitaciones */}
            <SwiperSlide className="text-white h-screen text-center flex justify-center items-center">
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                    <Image
                        src="/images/Habitacion_Small_Front.webp"
                        alt="Habitación Small"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                    <div className="absolute inset-0 flex z-20 flex-col justify-center px-5">
                        <div className="flex flex-col gap-3 items-center">
                            <span className="p-regular-16">HEISS MEDELLÍN</span>
                            <h2 className="h2">CONOCE NUESTRAS HABITACIONES</h2>
                            <p className="p-light-24 md:2/5 lg:w-3/5 xl:w-2/6">
                                El espacio que buscabas, con las comodidades que necesitas para
                                vivir una gran experiencia.
                            </p>
                        </div>
                        <div className="py-6">
                            <Button asChild>
                                <Link href="/habitaciones">HABITACIONES</Link>
                            </Button>
                        </div>
                        <div className="flex justify-center gap-4">
                            <Button variant="destructive" size="sm" asChild>
                                <Link href="/habitaciones/habitacionSmall">E</Link>
                            </Button>
                            <Button variant="destructive" size="sm" asChild>
                                <Link href="/habitaciones/habitacionMedium">S</Link>
                            </Button>
                            <Button variant="destructive" size="sm" asChild>
                                <Link href="/habitaciones/habitacionLarge">J</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/* AQUI IA OS ESPACIOS NA LATERAL */}
            {/* Experiencias */}
            <SwiperSlide className="text-white h-screen text-center flex justify-center items-center">
                <div
                    className="flex flex-col justify-center"
                    style={{
                        position: "relative",
                        width: "100vw",
                        height: "100vh",
                        overflow: "hidden",
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

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
                    <div className="text-center flex flex-col content-center z-20 lg:text-left lg:pl-44 px-5 ">
                        <div className="mb-5 md:my-8">
                            <Button asChild>
                                <Link href="https://wa.me/573178946768" target="_blank">
                                    EXPLORAR
                                </Link>
                            </Button>
                        </div>
                        <div className="items-center lg:text-right flex flex-col gap-3 md:gap-5 lg:items-start ">
                            <span className="p-regular-16">EXPLORA MEDELLÍN</span>
                            <h2 className="h2">SUMÉRGETE EN SU AUTENTICIDAD</h2>
                            <p className="p-light-24  md:w-2/5 lg:w-3/5 xl:w-2/6 lg:text-left lg:float-left">
                                En Heiss Hotel, no solo te ofrecemos una estancia de lujo y
                                comodidad, sino también la oportunidad de vivir experiencias
                                turísticas únicas en la vibrante ciudad de Medellín. Nuestra
                                ubicación privilegiada y nuestra dedicación a la excelencia en el
                                servicio nos permiten ofrecerte lo mejor de esta fascinante ciudad.
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
export default SliderHome;
{
    /* Especios 
        <SwiperSlide className="text-white h-screen text-center flex justify-center items-center bg-black">
          {/* Para móviles 
          <div className="md:hidden bg-cover bg-center w-full h-full flex flex-col justify-center items-center p-8">
            <Image
              src="/images/Zona_Comercial.webp"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Terraza"
            />
            <div className="text-center flex flex-col gap-5">
              <span className="parrafo-regular-18">HEISS MEDELLÍN</span>
              <h2 className="h5">CAMBIA DE AMBIENTE</h2>
              <p className="parrafo-light-24">
                El espacio que buscabas, con las comodidades que necesitas para
                vivir una gran experiencia.
              </p>
              <div className="my-5">
                <Button asChild>
                  <Link href="/espacios">CONOCE MÁS</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Para dispositivos grandes 
          <div className="hidden md:absolute md:grid md:grid-cols-4 gap-6 p-5 overscroll-contain">
            <div className="md:flex hidden">
              <Swiper
                direction={"vertical"}
                freeMode={true}
                navigation={true}
                slidesPerView={"auto"}
                spaceBetween={150}
                modules={[FreeMode, Navigation]}
                injectStyles={[]}
                className="w-full h-screen"
              >
                <div className="flex flex-col">
                  <SwiperSlide style={{ height: "25rem" }}>
                    <div className="relative bg-black rounded-3xl w-full h-[25rem] overflow-hidden transition duration-200 ease-in-out group">
                      <Image
                        src="/images/Terraza.webp"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt="Terraza"
                      />
                      <div className="relative inset-0 flex flex-col h-[25rem] justify-center items-center p-8 opacity-0 bg-black/65 transition-opacity duration-300 ease-in-out hover:opacity-100 pointer-events-auto">
                        <h2 className="h6">ROOFTOP</h2>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "25rem" }}>
                    <div className="relative bg-black rounded-3xl w-full h-[25rem] overflow-hidden transition duration-200 ease-in-out group">
                      <Image
                        src="/images/Piscina.webp"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt="Terraza"
                      />
                      <div className="relative inset-0 flex flex-col h-[25rem] justify-center items-center p-8 opacity-0 bg-black/65 transition-opacity duration-200 ease-in-out hover:opacity-100 pointer-events-auto">
                        <h2 className="h6">PISCINA</h2>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "25rem" }}>
                    <div className="relative bg-black rounded-3xl w-full h-[25rem] overflow-hidden transition duration-200 ease-in-out group">
                      <Image
                        src="/images/Fachada_Contrapicada.webp"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt="Terraza"
                      />
                      <div className="relative inset-0 flex flex-col h-[25rem] justify-center items-center p-8 opacity-0 bg-black/65 transition-opacity duration-00 ease-in-out hover:opacity-100 pointer-events-auto">
                        <h2 className="h6">EDIFICIO HEISS</h2>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>

            {/* Imagen estatica 
            <div
              className="relative md:col-span-3 rounded-3xl flex flex-col justify-center items-center p-8 inset-0 bg-black opacity-20 z-10"
              style={{ width: "100%", height: "95%" }}
            >
              <Image
                src="/images/Zona_Comercial.webp"
                alt="Zona Comercial"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl absolute inset-0 z-0"
              />
              <div className="text-center p-8 md:p-16 flex flex-col lg:text-left lg:pl-32 md:mt-36 z-20">
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
        </SwiperSlide>*/
}
