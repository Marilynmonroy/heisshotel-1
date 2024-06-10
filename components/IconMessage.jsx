import React from "react";
import Image from "next/image";

function IconMessage({ imageSrc, altText, width, height, text, className }) {
  return (
    <div className="flex md:items-center gap-4">
      <Image
        src={imageSrc}
        alt={altText}
        width={width}
        height={height}
        className={className}
      />
      <p className="text-left">{text}</p>
    </div>
  );
}

export default IconMessage;
