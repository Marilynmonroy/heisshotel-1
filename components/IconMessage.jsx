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
      <p className="text-left ml-1">{text}</p>
    </div>
  );
}

export default IconMessage;
