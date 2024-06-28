"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getFooter } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

// Configuración de opciones para el renderizado de rich text
const options = {
  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
  renderNode: {
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
};

export default function Footer({ children, minHeight = "min-h-screen" }) {
  const [footerContent, setFooterContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFooter();
        setFooterContent(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching footer content:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!footerContent) {
    return <div>No footer content available</div>;
  }

  return (
    <div className={`flex flex-col ${minHeight} text-white w-full z-40`}>
      <div className="w-full relative flex-grow">{children}</div>
      <footer className="bg-black w-full py-7 md:pt-10 md:px-18 lg:px-24 xl:pt-10 xl:px-44">
        <div className="w-full">
          <section className="flex flex-col">
            <div className="flex h-full flex-col text-center items-center md:items-stretch md:flex-row md:pb-10 md:pl-5">
              <div className="w-full flex flex-col items-center md:items-start md:justify-between p-light-12 pl-5 pb-2 md:pb-0">
                <Link href="/" className="flex pb-3">
                  <Image
                    src="/icons/heiss.svg"
                    alt="Heiss logo"
                    width={120}
                    height={40}
                    priority
                    className="w-24 md:w-24 lg:w-28 xl:w-22"
                  />
                </Link>
                <div className="border-t-2 pt-2 border-white w-10/12 md:hidden" />
                <div className="md:items-start flex flex-col p-light-14">
                  <h5 className="uppercase text-[14px] md:text-lg font-medium py-1 md:py-4">
                    {footerContent.adressTitleFooter}
                  </h5>
                  <p>{footerContent.adressDescriptionFooter}</p>
                  <h5 className="uppercase text-[14px] md:text-lg font-medium py-1 md:py-4">
                    {footerContent.contactTitleFooter}
                  </h5>
                  <div className="text-start">
                    {documentToReactComponents(
                      footerContent.contactDescriptionForm.json,
                      options
                    )}
                  </div>
                </div>
              </div>
              <div className="border-t-2 py-2 border-white w-10/12 md:hidden" />
              <section className="md:text-left p-light-12 w-[80%] pb-3 md:pb-0">
                <div className="pb-1 lg:pb-2">
                  {documentToReactComponents(
                    footerContent.disclaimer.json,
                    options
                  )}
                </div>
              </section>
            </div>

            <div className="w-full flex flex-col pb-18 pt-5 md:pt-0 md:pl-10 md:pr-[12rem] md:pb-5 lg:pr-36 lg:pb-4 xl:pr-[11rem] xl:pb-4 md:flex-row md:justify-between justify-center items-center">
              <Link href="/contacto">
                <h6 className="h6">CONTÁCTENOS</h6>
              </Link>
              <Link href="/politicas-uso">
                <h6 className="h6">POLÍTICAS DE USO</h6>
              </Link>
              <Link href="/politicas-privacidad">
                <h6 className="h6">POLÍTICAS DE PRIVACIDAD</h6>
              </Link>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
