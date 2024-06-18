"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Navigation, Mousewheel, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/bundle";
import "/app/css/navigationhorizontal.css";
import { register } from "swiper/element/bundle";
register();
import { Button } from "@/components/ui/button";
import DrawerExperiencias from "@/components/DrawerExperiencias";

export default function Experiencias() {
  return (
    <section className="overflow-y-auto">
      <div className="relative w-full h-screen pb-52">
        <div className="absolute inset-0 bg-black opacity-85 z-10">
          <Image
            src="/images/experiencias.webp"
            alt="Experiencias image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <section className="flex flex-col gap-5 items-center justify-end text-white z-20 absolute inset-0 pb-36 md:pb-12">
          <div className="text-center flex flex-col">
            <span className="p-regular-16">
              LAS MEJORES EXPERIENCIAS LAS ENCUENTRAS EN
            </span>
            <h4 className="h3">MEDELLÍN</h4>
            <span className="p-light-16 px-5 md:px-0lg:text-center lg:float-center">
              Explora Medellín y sumérgete en su autenticidad, diversidad y
              aventura.
            </span>
          </div>
          <div className="w-full experiencias">
            <Swiper
              navigation={true}
              cssMode={true}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              className="w-[90%] md:w-[88%] "
              modules={[Navigation, FreeMode, Mousewheel]}
              mousewheel={true}
            >
              <SwiperSlide className="flex md:ml-12 md:w-[50%]">
                <DrawerExperiencias
                  imageUrl={"/images/experiencias/experiencias1.webp"}
                  altText={"Experiencias"}
                  title={"Experiencias"}
                  height="15rem"
                  text={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  }
                />
              </SwiperSlide>
              <SwiperSlide className="flex md:w-[50%]">
                <DrawerExperiencias
                  imageUrl={"/images/experiencias/experiencias2.webp"}
                  altText={"Experiencias"}
                  title={"Experiencias"}
                  height="15rem"
                  text={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  }
                />
              </SwiperSlide>
              <SwiperSlide className="flex md:w-[50%]">
                <DrawerExperiencias
                  imageUrl={"/images/experiencias/experiencias3.webp"}
                  altText={"Experiencias"}
                  title={"Experiencias"}
                  height="15rem"
                  text={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  }
                />
              </SwiperSlide>
              <SwiperSlide className="flex md:w-[50%]">
                <DrawerExperiencias
                  imageUrl={"/images/experiencias/experiencias4.webp"}
                  altText={"Experiencias"}
                  title={"Experiencias"}
                  height="15rem"
                  text={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  }
                />
              </SwiperSlide>
              <SwiperSlide className="flex md:w-[50%]">
                <DrawerExperiencias
                  imageUrl={"/images/Terraza.webp"}
                  altText={"Experiencias"}
                  title={"Experiencias"}
                  height="15rem"
                  text={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  }
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <Button asChild variant="secondary">
            <Link href="https://wa.me/573135250564" target="_blank">
              RESERVE YA
            </Link>
          </Button>
        </section>
      </div>
      <Footer minHeight="min-h-[50vh]" />
    </section>
  );
}
