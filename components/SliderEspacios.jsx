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
import { Mousewheel, Pagination, EffectFade, Keyboard, FreeMode, Navigation } from "swiper/modules";
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
                    <span className="p-light-16 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center">
                        El espacio que buscas, con las comodidades que necesitas para una gran
                        experiencia.
                    </span>
                    <div className="p-5">
                        <CalendarWidget />
                    </div>
                </div>
            </div>

            {/* Rooftop */}
            <div className="text-white h-screen justify-center items-center text-center flex-col flex md:flex-row w-full">
                <div className="w-[75%] md:w-[45%] h-full flex flex-col gap-3 justify-center text-left md:gap-5 md:px-44">
                    <span className="p-regular-18">HEISS MEDELLÍN</span>
                    <h2 className="h2">ROOFTOP</h2>
                    <p className="p-light-16">
                        El espacio que buscabas, con las comodidades que necesitas para vivir una
                        gran experiencia.
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
            <div className="text-white h-screen justify-center items-center text-center flex-col-reverse flex md:flex-row w-full">
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
                <div className="w-[75%] md:w-[45%] h-full flex flex-col gap-3 justify-center text-left md:text-right md:gap-5 md:px-44">
                    <span className="p-regular-18">HEISS MEDELLÍN</span>
                    <h2 className="h2">LOBBY</h2>
                    <p className="p-light-16">
                        El espacio que buscabas, con las comodidades que necesitas para vivir una
                        gran experiencia.
                    </p>
                </div>
            </div>

            {/* Piscina con jacuzzi */}
            <div className="text-white h-screen justify-center items-center text-center flex-col flex md:flex-row w-full">
                <div className="w-[75%] md:w-[45%] h-full flex flex-col gap-3 justify-center text-left md:gap-5 md:px-44">
                    <span className="p-regular-18">HEISS MEDELLÍN</span>
                    <h2 className="h2">PISCINA CON JACUZZI</h2>
                    <p className="p-light-16 ">
                        El espacio que buscabas, con las comodidades que necesitas para vivir una
                        gran experiencia.
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
            <div className="text-white h-screen justify-center items-center text-center flex-col-reverse flex md:flex-row w-full">
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
                <div className="w-[75%] md:w-[45%] h-full flex flex-col gap-3 justify-center text-left md:text-right md:gap-5 md:px-44">
                    <span className="p-regular-18">HEISS MEDELLÍN</span>
                    <h2 className="h2">GIMNASIO</h2>
                    <p className="p-light-16 ">
                        El espacio que buscabas, con las comodidades que necesitas para vivir una
                        gran experiencia.
                    </p>
                </div>
            </div>

            {/* Sala de masajes */}
            <div className="text-white h-screen justify-center items-center text-center flex-col flex md:flex-row w-full">
                <div className="w-[75%] md:w-[45%] h-full flex flex-col gap-3 justify-center text-left md:gap-5 md:px-44">
                    <span className="p-regular-18">HEISS MEDELLÍN</span>
                    <h2 className="h2">SALA DE MASAJES</h2>
                    <p className="p-light-16 ">
                        El espacio que buscabas, con las comodidades que necesitas para vivir uma
                        gran experiencia.
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
            <div className="text-white h-screen justify-center items-center text-center flex-col-reverse flex md:flex-row w-full">
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
                <div className="w-[75%] md:w-[45%] h-full flex flex-col gap-3 justify-center text-left md:text-right md:gap-5  md:px-44">
                    <span className="p-regular-18">HEISS MEDELLÍN</span>
                    <h2 className="h2">ZONA COMERCIAL</h2>
                    <p className="p-light-16 ">
                        El espacio que buscabas, con las comodidades que necesitas para vivir uma
                        gran experiencia.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SliderComponent;
