"use client";

import React from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import IconMessage from "@/components/IconMessage";
import Footer from "@/components/Footer";
import GoogleMaps from "@/components/GoogleMaps";

const Contacto = () => {
  return (
    <section className="overflow-y-auto">
      <div className="relative w-full h-[120vh] md:h-screen">
        <div className="absolute inset-0 z-20"></div>
        <Image
          src="/images/contact.webp"
          alt="Contacto image"
          layout="fill"
          objectFit="cover"
        />
        <section className="flex flex-col gap-14 md:flex-row items-center justify-center md:gap-10 xl:gap-28 text-white z-20 absolute inset-0 md:px-12 lg:px-16 xl:px-36">
          <div className="px-16 pt-11 md:px-0 md:w-3/5 text-center md:text-left flex flex-col">
            <h2 className="h2">CONTÁCTANOS</h2>
            <span className="p-light-16 pt-5 flex flex-col justify-center gap-3">
              <IconMessage
                imageSrc={"/icons/ubication.svg"}
                altText={"Ubicación icono"}
                width={5}
                height={5}
                className={"w-5"}
                text={
                  <span>
                    Dirección: Cra. 43F # 14-60, El Poblado,{" "}
                    <b> Medellín - Manila </b>
                  </span>
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
                text={
                  <span>
                    313 738 30 98 | <b>Front desk</b>
                  </span>
                }
              />
              <IconMessage
                imageSrc={"/icons/phone.svg"}
                altText={"313 525 05 64"}
                width={5}
                height={5}
                className={"w-5"}
                text={
                  <span>
                    313 525 05 64 | <b>Comercial mercadeo</b>
                  </span>
                }
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
          <div className="md:w-4/5 lg:w-3/5 xl:w-2/5">
            <ContactForm />
          </div>
        </section>
      </div>
      <Footer>
        <div className="h-[50vh] w-full relative">
          <GoogleMaps />
        </div>
      </Footer>
    </section>
  );
};

export default Contacto;
