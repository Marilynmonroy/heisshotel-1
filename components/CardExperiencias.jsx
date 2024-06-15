import React from "react";
import Image from "next/image";

function CardExperiencias({ imageUrl, altText, title, height, linkUrl }) {
  return (
    <div className="relative">
      <a href={linkUrl}>
        <div style={{ height: height }} className="relative cursor-pointer">
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-3xl"
            alt={altText}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/15 rounded-3xl">
            <h2 className="h6 text-white">{title}</h2>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CardExperiencias;
