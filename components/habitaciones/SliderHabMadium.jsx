"use client";
import { IoMdSearch } from "react-icons/io";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/zoom";
import Modal from "../Modal";
import Image from "next/image";
import { CalendarWidget } from "../CalendarWidget";
import { Button } from "../ui/button";
import { register } from "swiper/element/bundle";
register();
import { Pagination, Navigation, Zoom } from "swiper/modules";
import Link from "next/link";
import "/app/css/paginationhorizontal.css";
import "/app/css/navigationhorizontal.css";

const SliderHabMedium = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };
  return (
    <section className="overflow-y-auto">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
        <Image
          src="/images/habitacionMedium/mediumPrincipal.webp"
          alt="Piscina Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="items-center justify-center mb-20 text-center flex flex-col gap-3 text-white z-20 absolute inset-0">
          <span className="p-light-16 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center">
            HOTEL HEISS MEDELLÍN
          </span>
          <h2 className="h3">SUPERIOR</h2>
          <div className="mt-5">
            <CalendarWidget />
          </div>
        </div>
      </div>
      {/* carrousel 1 */}
      <div className="text-white h-3/4 text-center md:flex items-center w-full hidden md:visible">
        <Swiper
          className="w-full"
          navigation={true}
          cssMode={true}
          loop={true}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide style={{ height: "35rem" }}>
            <Image
              src="/images/habitacionMedium/mediumcarrousel2.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </SwiperSlide>
          <SwiperSlide style={{ height: "35rem" }}>
            <Image
              src="/images/habitacionMedium/mediumcarrousel.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </SwiperSlide>
          <SwiperSlide style={{ height: "35rem" }}>
            <Image
              src="/images/habitacionMedium/mediumcarrousel3.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* carrousel 2 */}
      <div className="text-white text-center flex items-center flex-col-reverse md:flex-row w-full">
        <Swiper
          className="md:w-[55%] w-full h-[50vh] md:h-screen"
          navigation={true}
          zoom={true}
          loop={true}
          modules={[Navigation, Zoom]}
        >
          <IoMdSearch className="absolute bottom-44 hidden sm:block  md:bottom-10 md:left-[12rem] lg:left-[16rem] xl:left-[25rem] z-50 text-[40px] opacity-9" />
          <SwiperSlide>
            <Image
              src="/images/habitacionMedium/mediumdetalles1.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
              onClick={() =>
                openModal("/images/habitacionMedium/mediumdetalles1.webp")
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/habitacionMedium/mediumdetalles2.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
              onClick={() =>
                openModal("/images/habitacionMedium/mediumdetalles2.webp")
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/habitacionMedium/mediumdetalles3.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
              onClick={() =>
                openModal("/images/habitacionMedium/mediumdetalles3.webp")
              }
            />
          </SwiperSlide>
        </Swiper>
        {modalOpen && (
          <Modal onClose={closeModal}>
            <Swiper
              className="w-full h-full flex flex-col md:flex-row"
              navigation={true}
              zoom={true}
              loop={true}
              pagination={{
                type: "fraction",
              }}
              style={{
                "--swiper-navigation-size": "20px",
                "--swiper-navigation-weight": "500px",
              }}
              modules={[Navigation, Zoom, Pagination]}
            >
              {" "}
              <SwiperSlide>
                <Image
                  src="/images/habitacionMedium/mediumdetalles1.webp"
                  alt="Piscina Image"
                  layout="fill"
                  objectFit="cover"
                  priority
                  onClick={() =>
                    openModal("/images/habitacionMedium/mediumdetalles1.webp")
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/habitacionMedium/mediumdetalles2.webp"
                  alt="Piscina Image"
                  layout="fill"
                  objectFit="cover"
                  priority
                  onClick={() =>
                    openModal("/images/habitacionMedium/mediumdetalles2.webp")
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/habitacionMedium/mediumdetalles3.webp"
                  alt="Piscina Image"
                  layout="fill"
                  objectFit="cover"
                  priority
                  onClick={() =>
                    openModal("/images/habitacionMedium/mediumdetalles3.webp")
                  }
                />
              </SwiperSlide>
            </Swiper>
          </Modal>
        )}
        <div className="flex flex-col w-3/4 md:w-[45%] gap-10 h-full py-10 lg:pr-20 items-start justify-start md:p-10 md:items-end md:justify-end md:text-right text-left">
          <div className="">
            <h2 className="h5 py-8">SUPERIOR</h2>
            <p className="p-light-16 md:pl-12">
              Descubre nuestra cómoda <b>Habitación Superior</b> de 20 mt2 con
              un balcón adicional de 4.5 mt2, diseñada para ofrecer una estancia
              relajante y funcional. Esta habitación combina comodidad interior
              con un espacio exterior privado. ¡Reserva ahora y disfruta de una
              experiencia completa en nuestra Habitación Superior con Balcón!
            </p>
          </div>
          {/* ICONOS */}

          <div className="flex gap-5 md:gap-6 lg:gap-8 xl:gap-10 justify-end">
            <Image
              src="/icons/camas.svg"
              alt="Camas Queen"
              width={40}
              height={29.1}
              className="w-[30px] lg:w-[50px]"
            />
            <Image
              src="/icons/wifi.svg"
              alt="Wifi"
              width={40}
              height={29.1}
              className="w-[30px] lg:w-[50px]"
            />

            <Image
              src="/icons/armario.svg"
              alt="Armario"
              width={40}
              height={29.1}
              className="w-[30px] lg:w-[50px]"
            />

            <Image
              src="/icons/ducha.svg"
              alt="Ducha"
              width={40}
              height={25}
              className="w-[27px] lg:w-[40px]"
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

export default SliderHabMedium;
