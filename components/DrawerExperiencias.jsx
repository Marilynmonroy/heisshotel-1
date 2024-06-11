import React from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";

function DrawerExperiencias({ imageUrl, altText, title, height, width, text }) {
  return (
    <Drawer>
      <DrawerTrigger asChild className="md:my-5 relative">
        <div
          style={{ height: height, width: width }}
          className=" flex cursor-pointer"
        >
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-3xl "
            alt={altText}
          />
          <div className="relative rounded-3xl inset-0 flex flex-col h-[20rem] px-10 justify-center items-center p-8 opacity-0 bg-black/65 transition-opacity duration-200 ease-in-out hover:opacity-100 pointer-events-auto">
            <h2 className="h6 px-28 uppercase">{title}</h2>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <section className="md:flex md:grid-col-3 bg-black text-white gap-4 py-5 md:px-12 md:py-10 lg:px-16 xl:px-32 justify-center lg:justify-between items-end relative">
          <DrawerClose className="absolute top-4 right-5 md:top-8 md:right-8 md:text-2xl">
            <IoMdClose />
          </DrawerClose>
          <div className="flex flex-col md:flex-row items-center text-center md:text-left md:items-start gap-5 md:gap-10">
            <div className="w-[80%] md:w-1/2 flex flex-col gap-3">
              <h3 className="uppercase h6">{title}</h3>
              <p className="p-light-14">{text}</p>
            </div>
            <div className="w-[80%] md:w-1/2 flex flex-col h-[40vh] gap-7 items-center">
              <div className="flex w-full h-full relative">
                <Image
                  src={imageUrl}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded-3xl flex"
                  alt={altText}
                />
              </div>
              <Button variant="secondary" type="submit" className="w-24">
                BOOK NOW
              </Button>
            </div>
          </div>
        </section>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerExperiencias;
