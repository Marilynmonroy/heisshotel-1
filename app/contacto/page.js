"use client";

import React from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import IconMessage from "@/components/IconMessage";
import Footer from "@/components/Footer";

const Contacto = () => {
  return (
    <section className="overflow-y-auto">
      {/* Cambia de Ambiente */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <Image
          src="/images/contacto.webp"
          alt="Contacto image"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
        <section className="flex items-center justify-center gap-28 text-white z-20 absolute inset-0 px-36">
          <div className="w-3/5 text-left flex flex-col">
            <h2 className="h2">CONTÁCTANOS</h2>
            <span className="p-light-16 pt-5 flex flex-col gap-3">
              <IconMessage
                imageSrc={"/icons/ubication.svg"}
                altText={"Ubicación icono"}
                width={5}
                height={5}
                className={"w-5"}
                text={
                  "Dirección: Cra. 43F # 14-60, El Poblado, Medellín - Manila"
                }
              />
              <IconMessage
                imageSrc={"/icons/mail.svg"}
                altText={"frontdesk@heiss.com.co"}
                width={5}
                height={5}
                className={"w-5"}
                text={"frontdesk@heiss.com.co"}
              />
              <IconMessage
                imageSrc={"/icons/phone.svg"}
                altText={"3135250564"}
                width={5}
                height={5}
                className={"w-5"}
                text={"313 738 30 98 | Front desk"}
              />
              <IconMessage
                imageSrc={"/icons/phone.svg"}
                altText={"313 525 05 64"}
                width={5}
                height={5}
                className={"w-5"}
                text={"313 525 05 64 | Comercial mercadeo"}
              />
              <IconMessage
                imageSrc={"/icons/mail.svg"}
                altText={"argemiroquintero@heiss.com.co"}
                width={5}
                height={5}
                className={"w-5"}
                text={"argemiroquintero@heiss.com.co"}
              />
            </span>
          </div>
          <div className="w-2/5">
            <ContactForm />
          </div>
        </section>
      </div>
      <Footer>
        <div className="h-[30vh] w-full relative">
          <Image
            src={"/images/map-provisional.jpg"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Footer>
    </section>
  );
};

export default Contacto;
