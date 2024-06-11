"use client";
import React from "react";
import Image from "next/image";
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
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-85 z-10">
          <Image
            src="/images/experiencias.webp"
            alt="Experiencias image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <section className="flex flex-col gap-10 items-center justify-end text-white z-20 absolute inset-0 pb-12">
          <div className="text-center flex flex-col">
            <span className="p-regular-16">
              LAS MEJORES EXPERIENCIAS LAS ENCUENTRAS EN
            </span>
            <h4 className="h3">MEDELLÍN</h4>
            <span className="p-light-16 lg:text-center lg:float-center">
              Explora Medellín y sumérgete en su autenticidad, diversidad y
              aventura.
            </span>
          </div>
          <div className="w-full horizontal">
            <Swiper
              freeMode={true}
              mousewheel={true}
              navigation={true}
              spaceBetween={30}
              slidesPerView={"auto"}
              modules={[Navigation, FreeMode, Mousewheel]}
            >
              <SwiperSlide
                style={{ width: "20rem" }}
                className="lg:ml-20 xl:ml-32"
              >
                <DrawerExperiencias
                  imageUrl={"/images/Terraza.webp"}
                  altText={"Experiencias"}
                  title={"Experiencias"}
                  height="20rem"
                  text={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  }
                />
              </SwiperSlide>
              <SwiperSlide style={{ width: "20rem" }}>
                <DrawerExperiencias
                  imageUrl={"/images/Terraza.webp"}
                  altText={"Experiencias"}
                  title={"Experiencias"}
                  height="20rem"
                  text={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  }
                />
              </SwiperSlide>
              <SwiperSlide style={{ width: "20rem" }}>
                <DrawerExperiencias
                  imageUrl={"/images/Terraza.webp"}
                  altText={"Experiencias"}
                  title={"Experiencias"}
                  height="20rem"
                  text={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  }
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <Button variant="secondary" type="submit">
            BOOK NOW
          </Button>
        </section>
      </div>
      <Footer minHeight="min-h-[50vh]" />
    </section>
  );
}
