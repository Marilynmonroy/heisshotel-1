import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function CardExperiencias({
  imageUrl,
  altText,
  title,
  height,
  link = "/espacios",
}) {
  return (
    <SwiperSlide style={{ height: height }}>
      <div className="full-width image-height flex-container relative">
        <Link href={link} legacyBehavior>
          <a>
            <Image
              src={imageUrl}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-3xl"
              alt={altText}
            />
            <div className="relative inset-0 flex flex-col h-[25rem] px-10 justify-center items-center p-8 opacity-0 bg-black/65 transition-opacity duration-200 ease-in-out hover:opacity-100 pointer-events-auto">
              <h2 className="h6 px-28">{title}</h2>
            </div>
          </a>
        </Link>
      </div>
    </SwiperSlide>
  );
}

export default CardExperiencias;
