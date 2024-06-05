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
            <div className="relative w-full h-screen">
                <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
                <Image
                    src="/images/Piscina.webp"
                    alt="Piscina Image"
                    fill
                    style={{ objectFit: "cover" }}
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
            <div className="text-white h-screen justify-center items-center text-center flex-col flex md:flex-row  w-full">
                <div className="  w-[45%]   h-full   flex flex-col gap-3 justify-center text-left md:gap-5 md:px-14 ">
                    <span className="p-regular-18 ">HEISS MEDELLÍN</span>
                    <h2 className="h2 ">ROOFTOP</h2>
                    <p className="p-light-16  md:pr-14 ">
                        El espacio que buscabas, con las comodidades que necesitas para vivir una
                        gran experiencia.
                    </p>
                </div>
                <Swiper slidesPerView={1} className="md:w-[55%] w-full h-screen">
                    <SwiperSlide className="md:w-[55%] w-full md:h-screen h-full">
                        <div className="relative w-full h-full">
                            <span className="absolute inset-0 bg-black opacity-25 z-10"></span>
                            <Image
                                src="/images/Terraza.webp"
                                alt="Terraza Image"
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Lobby */}
            <div className="text-white h-screen justify-center items-center text-center flex-col flex md:flex-row w-full">
                <Swiper slidesPerView={1} className="md:w-[55%] w-full h-screen">
                    <SwiperSlide className="md:w-[55%] w-full md:h-screen h-full">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
                            <Image
                                src="/images/Lobby.webp"
                                alt="Lobby Image"
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="w-[45%] h-full flex flex-col gap-3 justify-center text-left md:gap-5 md:px-14">
                    <span className="p-regular-18">HEISS MEDELLÍN</span>
                    <h2 className="h2">LOBBY</h2>
                    <p className="p-light-16 md:pr-14">
                        El espacio que buscabas, con las comodidades que necesitas para vivir una
                        gran experiencia.
                    </p>
                </div>
            </div>

            {/* Piscina con jacuzzi */}
            <div className="text-white h-screen text-center flex items-center w-full">
                <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-end text-left flex flex-col gap-3 md:gap-5 mb-[18.375rem]">
                    <span className="p-regular-18 pl-20">HEISS MEDELLÍN</span>
                    <h2 className="h2 pl-20">PISCINA CON JACUZZI</h2>
                    <p className="p-light-16 pr-14 pl-20">
                        El espacio que buscabas, con las comodidades que necesitas para vivir una
                        gran experiencia.
                    </p>
                </div>

                <Swiper slidesPerView={1} className="w-[55%] h-screen">
                    <SwiperSlide>
                        <div className="relative w-full h-screen">
                            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
                            <Image
                                src="/images/Piscina.webp"
                                alt="Piscina Image"
                                fill
                                style={{ objectFit: "cover" }}
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
                                alt="Gimnasio Image"
                                fill
                                style={{ objectFit: "cover" }}
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-start text-right flex flex-col gap-3 md:gap-5 mt-[18.375rem]">
                    <span className="p-regular-18 ">HEISS MEDELLÍN</span>
                    <h2 className="h2">GIMNASIO</h2>
                    <p className="p-light-16 pl-20">
                        El espacio que buscabas, con las comodidades que necesitas para vivir una
                        gran experiencia.
                    </p>
                </div>
            </div>
            {/* Sala de masajes */}
            <div className="text-white flex h-screen text-center items-center w-full">
                <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-end text-left flex flex-col gap-3 md:gap-5 mb-[18.375rem]">
                    <span className="p-regular-18 pl-20">HEISS MEDELLÍN</span>
                    <h2 className="h2 pl-20">SALA DE MASAJES</h2>
                    <p className="p-light-16 pr-14 pl-20">
                        El espacio que buscabas, con las comodidades que necesitas para vivir uma
                        gran experiencia.
                    </p>
                </div>

                <Swiper slidesPerView={1} className="w-[55%] h-screen">
                    <SwiperSlide>
                        <div className="relative w-full h-screen">
                            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
                            <Image
                                src="/images/salademasajes.webp"
                                alt="Sala de Masajes Image"
                                fill
                                style={{ objectFit: "cover" }}
                                loading="lazy"
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
                                alt="Zona Comercial Image"
                                fill
                                style={{ objectFit: "cover" }}
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="p-8 md:p-16 lg:pb-36 xl:pb-36 w-[45%] h-full items-right justify-start text-right flex flex-col gap-3 md:gap-5 mt-[18.375rem]">
                    <span className="p-regular-18 ">HEISS MEDELLÍN</span>
                    <h2 className="h2">ZONA COMERCIAL</h2>
                    <p className="p-light-16 pl-20">
                        El espacio que buscabas, con las comodidades que necesitas para vivir uma
                        gran experiencia.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SliderComponent;
