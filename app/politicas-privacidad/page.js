"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getPrivacidad } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

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
function PoliticasPrivacidad() {
  const [privacidadContent, setPrivacidadContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPrivacidad();
        setPrivacidadContent(data);
      } catch (error) {
        console.error("Error fetching privacidad content:", error);
      }
    };
    fetchData();
  }, []);

  if (!privacidadContent) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-white min-h-screen flex flex-col justify-center items-center">
      {/* Contenedor de la imagen */}
      <div className="relative h-[40vh] w-full mb-8">
        {/* Fondo oscuro semi-transparente */}
        <div className="absolute inset-0 bg-black opacity-50 z-10" />

        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/images/_URV6897.webp"
            fill
            style={{ objectFit: "cover" }}
            alt="Mapa"
          />
        </div>

        {/* Título sobre la imagen */}
        <div className="absolute inset-0 flex flex-col justify-end mb-8 items-center z-20">
          <h3 className="text-white text-center w-[80%] h7">
            {privacidadContent.titlePrivacidad}
          </h3>
        </div>
      </div>

      {/* Contenido debajo de la imagen */}
      <div className="w-[80%] text-gray-700 py-5">
        {documentToReactComponents(privacidadContent.textPrivacidad.json)}
      </div>
      <Footer minHeight="min-h-[30vh]" />
    </section>
  );
}

export default PoliticasPrivacidad;
