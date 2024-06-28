"use client";
import React, { useState, useEffect } from "react";
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
import { getExperienceContent } from "@/lib/api";
import { IoMdClose } from "react-icons/io";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";
export default function Experiencias() {
  const [experienciasContent, setExperienciasContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getExperienceContent();

        setExperienciasContent(data);
      } catch (error) {
        console.error("Error fetching espacios page content:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="overflow-y-auto">
      <div className="relative w-full h-screen pb-52">
        <div className="absolute inset-0 bg-black opacity-85 z-10">
          <Image
            src="/images/experiencias.webp"
            alt="Experiencias image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <section className="flex flex-col gap-5 items-center justify-end text-white z-20 absolute inset-0 mb-24 md:pb-12">
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
              spaceBetween={35}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              className="w-[90%] md:w-[85%]"
              modules={[Navigation, FreeMode, Mousewheel]}
              mousewheel={true}
            >
              {experienciasContent.map((experience) => (
                <SwiperSlide
                  className="flex md:w-[25%]"
                  key={experience.sys.id}
                >
                  <Drawer>
                    <DrawerTrigger asChild className="md:my-5 relative">
                      <div className="relative flex cursor-pointer h-[15rem]">
                        <Image
                          src={experience.imageExperienceCard.url}
                          fill
                          style={{
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                          className="rounded-3xl"
                          alt={experience.titleExperienceCard}
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 opacity-0 bg-black/65 transition-opacity duration-200 ease-in-out hover:opacity-100 pointer-events-auto rounded-3xl">
                          <h2 className="h6 px-28 uppercase">
                            {experience.titleExperienceCard}
                          </h2>
                        </div>
                      </div>
                    </DrawerTrigger>
                    <DrawerContent>
                      <section className="md:flex md:grid-col-3 bg-black text-white gap-4 py-5 md:px-12 md:py-10 lg:px-16 xl:px-32 justify-center lg:justify-between items-end relative">
                        <DrawerClose className="absolute top-4 right-5 md:top-8 md:right-8 md:text-2xl">
                          <IoMdClose />
                        </DrawerClose>
                        <div className="flex flex-col md:flex-row items-center text-center md:text-left md:items-start gap-5 md:gap-10">
                          <div className="w-[80%] md:w-1/2 flex flex-col gap-3">
                            <h3 className="uppercase h6">
                              {experience.titleExperienceCard}
                            </h3>
                            <p className="p-light-14">
                              {experience.descriptionExperienceCard}
                            </p>
                          </div>
                          <div className="w-[80%] md:w-1/2 flex flex-col h-[50vh] gap-7 items-center">
                            <div className="flex w-full h-full relative">
                              <Image
                                src={experience.imageExperienceCard.url}
                                fill
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                                className="rounded-3xl flex"
                                alt={experience.titleExperienceCard}
                              />
                            </div>
                            <Button asChild variant="secondary">
                              <Link
                                href="https://wa.me/573135250564"
                                target="_blank"
                              >
                                RESERVE YA
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </section>
                    </DrawerContent>
                  </Drawer>
                </SwiperSlide>
              ))}
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
