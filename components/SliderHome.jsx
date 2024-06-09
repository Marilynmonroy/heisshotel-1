"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
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
import CardExperiencias from "./CardExperiencias";
import "/app/css/pagination.css";
import "/app/css/navegation.css";
import Footer from "./Footer";

const SliderHome = () => {
  // Estado para verificar se o dispositivo é móvel
  const [isMobile, setIsMobile] = useState(false);

  // Efeito para atualizar o estado `isMobile` com base na largura da janela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize(); // Verifica inicialmente
    window.addEventListener("resize", handleResize); // Adiciona evento de redimensionamento
    return () => {
      window.removeEventListener("resize", handleResize); // Limpa o evento no desmontar
    };
  }, []);

  // Módulos do Swiper baseados no estado `isMobile`
  const swiperModules = isMobile
    ? [] // Sem módulos para mobile
    : [Keyboard, Mousewheel, Pagination, EffectFade]; // Módulos para desktop

  // Propriedades do Swiper baseadas no estado `isMobile`
  const swiperProps = isMobile
    ? {} // Sem efeitos para mobile
    : { effect: "fade", fadeEffect: { crossFade: true }, mousewheel: true }; // Efeito de fade para desktop

  // Função para renderizar slides de forma estática (para mobile)
  const renderSlides = () => (
    <>
      {/* Inicio */}
      <div className="text-white h-screen flex justify-center items-center text-center">
        <div className="relative w-full h-full ">
          <div className="absolute inset-0 p-1 bg-black opacity-20 z-10"></div>
          <Image
            src="/images/Fachada_Heiss_R3.webp"
            alt="Fachada Heiss"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center mb-28 items-center z-20">
            <h1 className="h1">Heiss Hotel</h1>
            <CalendarWidget />
          </div>
        </div>
      </div>
      {/* Habitaciones */}
      <div className="text-white h-screen text-center flex justify-center items-center">
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
              <p className="p-light-24 w-3/4 md:w-2/5 lg:w-2/5 xl:w-2/5">
                El espacio que buscabas, con las comodidades que necesitas para
                vivir una gran experiencia.
              </p>
            </div>
            <div className="py-6">
              <Button asChild variant="secondary">
                <Link href="/habitaciones">HABITACIONES</Link>
              </Button>
            </div>
            <div className="flex flex-col pt-6 md:flex-row justify-center gap-4 max-w-max mx-auto">
              <Button variant="destructive" size="lg" asChild>
                <Link href="/habitaciones/habitacionSmall">ESTÁNDAR</Link>
              </Button>
              <Button variant="destructive" size="lg" asChild>
                <Link href="/habitaciones/habitacionLarge">SUITE</Link>
              </Button>
              <Button variant="destructive" size="lg" asChild>
                <Link href="/habitaciones/habitacionMedium">SUPERIOR</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Espacios */}
      <div className="text-white h-screen text-center flex justify-center items-center">
        {/* Para móviles  */}
        <div className="md:hidden bg-cover bg-center w-full h-full flex flex-col justify-center items-center">
          <div className="relative w-full h-full ">
            <div className="absolute inset-0 p-1 bg-black opacity-25 z-10"></div>
            <Image
              src="/images/Zona_Comercial.webp"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              alt="Zona Comercial"
            />
            <div className="absolute inset-0 flex flex-col justify-center mb-28 items-center z-20">
              <div className="items-center lg:text-right flex flex-col gap-3 md:gap-5 lg:items-start">
                <span className="p-regular-16">HEISS MEDELLÍN</span>
                <h2 className="h2">CAMBIA DE AMBIENTE</h2>
                <p className="text-white p-light-24 w-3/4 md:w-2/5 lg:w-1/2 xl:w-1/2 lg:text-left lg:float-left">
                  En Heiss Hotel, nos enorgullecemos de ofrecer una variedad de
                  espacios excepcionales diseñados para brindar una experiencia
                  inigualable a nuestros huéspedes. Desde nuestras elegantes
                  habitaciones hasta nuestras instalaciones de primer nivel,
                  cada rincón de nuestro hotel está pensado para su confort y
                  satisfacción.
                </p>
              </div>
              <div className="my-5 md:my-8">
                <Button asChild>
                  <Link href="/espacios">CONOCE MÁS</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Para dispositivos grandes */}
        <div className="hidden md:relative md:grid md:grid-cols-4 gap-6 p-8 overscroll-contain w-full h-full">
          <div className="md:flex hidden">
            <Swiper
              direction={"vertical"}
              freeMode={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={30}
              slidesPerView={"auto"}
              modules={[Navigation, FreeMode]}
              className="w-full h-screen"
              style={{
                "--swiper-navigation-size": "10px",
                "--swiper-navigation-weight": "10px",
              }}
            >
              <div className="flex flex-col h-full">
                <SwiperSlide style={{ height: "25rem" }}>
                  <CardExperiencias
                    imageUrl="/images/Terraza.webp"
                    altText="Rooftop heiss"
                    title="ROOFTOP"
                    height="25rem"
                  />
                </SwiperSlide>
                <SwiperSlide style={{ height: "25rem" }}>
                  <CardExperiencias
                    imageUrl="/images/Piscina.webp"
                    altText="Piscina heiss"
                    title="PISCINA CON JACUZZI"
                    height="25rem"
                  />
                </SwiperSlide>
                <SwiperSlide style={{ height: "25rem" }}>
                  <CardExperiencias
                    imageUrl="/images/Lobby.webp"
                    altText="Lobby heiss"
                    title="LOBBY"
                    height="25rem"
                  />
                </SwiperSlide>
                <SwiperSlide style={{ height: "25rem" }}>
                  <CardExperiencias
                    imageUrl="/images/gimnasio.webp"
                    altText="Gimnasio heiss"
                    title="GIMNASIO"
                    height="25rem"
                  />
                </SwiperSlide>
                <SwiperSlide style={{ height: "29rem" }}>
                  <CardExperiencias
                    imageUrl="/images/salademasajes.webp"
                    altText="Sala de masajes heiss"
                    title="SALA DE MASAJES"
                    height="25rem"
                  />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          {/* Imagen estática con flechas de navegación */}
          <div className="relative bg-cover w-[100%] h-[93%] bg-center md:col-span-3 rounded-3xl z-10 inset-0 relative-image">
            <Image
              src="/images/Zona_Comercial.webp"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-3xl bg-black opacity-60"
              alt="Zona comercial"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center p-8 md:p-16 lg:text-left lg:pl-32 md:mt-36 z-20">
              <div className="items-center lg:text-right flex flex-col gap-3 md:gap-5 lg:items-start">
                <span className="text-white text-parrafo-regular-18">
                  HEISS MEDELLÍN
                </span>
                <h2 className="text-white h2">CAMBIA DE AMBIENTE</h2>
                <p className="text-white p-light-24 w-3/4 md:w-4/5 lg:w-4/5 xl:w-3/4 lg:text-left lg:float-left">
                  En Heiss Hotel, nos enorgullecemos de ofrecer una variedad de
                  espacios excepcionales diseñados para brindar una experiencia
                  inigualable a nuestros huéspedes. Desde nuestras elegantes
                  habitaciones hasta nuestras instalaciones de primer nivel,
                  cada rincón de nuestro hotel está pensado para su confort y
                  satisfacción.
                </p>
                <Button asChild>
                  <Link href="/espacios">CONOCE MÁS</Link>
                </Button>
              </div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
      {/* Experiencias */}
      <div className="text-white h-screen text-center flex justify-center items-center">
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
              <p className="p-light-24 w-3/4 md:w-4/5 lg:w-4/5 xl:w-3/4 lg:text-left lg:float-left">
                En Heiss Hotel, no solo te ofrecemos una estancia de lujo y
                comodidad, sino también la oportunidad de vivir experiencias
                turísticas únicas en la vibrante ciudad de Medellín. Nuestra
                ubicación privilegiada y nuestra dedicación a la excelencia en
                el servicio nos permiten ofrecerte lo mejor de esta fascinante
                ciudad.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div>
        <Footer>
          <div className="h-[42vh] w-full relative">
            <Image
              src={"/images/map-provisional.jpg"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Footer>
      </div>
    </>
  );

  return (
    <>
      {isMobile ? (
        // Renderização estática para mobile
        <div className="w-full h-screen overflow-auto">{renderSlides()}</div>
      ) : (
        // Usando Swiper para desktop
        <Swiper
          direction={"vertical"}
          spaceBetween={0}
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
          <SwiperSlide>{renderSlides().props.children[0]}</SwiperSlide>
          <SwiperSlide>{renderSlides().props.children[1]}</SwiperSlide>
          <SwiperSlide>{renderSlides().props.children[2]}</SwiperSlide>
          <SwiperSlide>{renderSlides().props.children[3]}</SwiperSlide>
          <SwiperSlide>{renderSlides().props.children[4]}</SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export default SliderHome;
