import React from "react";
import Image from "next/image";

const CardExperiencia = ({ imagen, titulo, descripcion }) => {
  return (
    <div className="relative w-full h-full">
      <Image src={imagen} alt={titulo} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center p-8 opacity-0 bg-black/65 transition-opacity duration-300 ease-in-out hover:opacity-100 pointer-events-auto">
        <h2 className="h6">{titulo}</h2>
        <p className="md:px-5 text-justify items-center pt-10 p-regular-16">
          {descripcion}
        </p>
      </div>
    </div>
  );
};

export default CardExperiencia;
