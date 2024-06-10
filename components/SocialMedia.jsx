import React from "react";
import Image from "next/image";

export default function SocialMedia() {
  return (
    <div className="fixed bottom-0 flex items-center justify-end gap-3 w-full px-9 md:px-12 lg:px-16 xl:px-36 pb-9 z-50">
      <div className="rounded-full bg-white/30 p-3 w-10 h-10">
        <a href="https://www.instagram.com/heisshotel/?hl=es" target="_blank">
          <Image
            src="/icons/instagram.svg"
            alt="Instagram Heiss"
            width={35}
            height={35}
          />
        </a>
      </div>
      <div className="rounded-full bg-white/30 p-3 w-10 h-10 flex items-center justify-center">
        <a href="https://www.facebook.com/hesissmedhotel/" target="_blank">
          <Image
            src="/icons/facebook.svg"
            alt="Facebook Heiss"
            width={12}
            height={20}
          />
        </a>
      </div>
      <div className="rounded-full bg-[#07FF02]/30 p-3 w-12 h-12">
        <a href="https://wa.me/573178946768" target="_blank">
          <Image
            src="/icons/whatsapp.svg"
            alt="Whatsapp Heiss"
            width={26}
            height={25}
          />
        </a>
      </div>
    </div>
  );
}
