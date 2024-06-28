"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import IconMessage from "@/components/IconMessage";
import Footer from "@/components/Footer";
import GoogleMaps from "@/components/GoogleMaps";
import { getContactPageContent } from "@/lib/api";

const Contacto = () => {
  const [contactContent, setContactContent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContactPageContent();
        setContactContent(data);
      } catch (error) {
        console.error("Error fetching contact page content:", error);
      }
    };
    fetchData();
  }, []);

  const contactContentData = contactContent.length > 0 ? contactContent[0] : {};

  return (
    <section className="overflow-y-auto">
      <div className="relative w-full h-[120vh] md:h-screen">
        <div className="absolute inset-0 z-20"></div>
        <Image
          src="/images/contact.webp"
          alt="Contacto image"
          fill
          style={{ objectFit: "cover" }}
        />
        <section className="flex flex-col gap-14 md:flex-row items-center justify-center md:gap-10 xl:gap-28 text-white z-20 absolute inset-0 md:px-12 lg:px-16 xl:px-36">
          <div className="px-16 pt-11 md:px-0 md:w-3/5 text-center md:text-left flex flex-col">
            <h2 className="h2">{contactContentData.titleContact}</h2>
            {contactContent.map((contactItem) => (
              <span
                key={contactItem.sys.id}
                className="p-light-16 pt-5 flex flex-col justify-center gap-3"
              >
                <div className="flex md:items-center gap-4">
                  <Image
                    src={contactItem.iconContact.url}
                    alt={contactItem.textContact}
                    width={25}
                    height={25}
                    className="w-5"
                  />
                  <p className="text-left ml-1">{contactItem.textContact}</p>
                </div>
              </span>
            ))}
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
