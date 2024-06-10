import React from "react";
import Image from "next/image";

function IconMessage({ imageSrc, altText, width, height, text, className }) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={imageSrc}
        alt={altText}
        width={width}
        height={height}
        className={className}
      />
      <p>{text}</p>
    </div>
  );
}

export default IconMessage;
