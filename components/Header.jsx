import React from "react";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  return (
    <div className="fixed flex items-center z-10 justify-around w-full ease-in duration-300 gap-7 py-9 md:gap-11 xl:gap-56">
      <div>
        <Sheet>
          <SheetTrigger>
            <IoMenu color="#fff" size={60} />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-black/45 border-none px-9 py-32 md:px-12 lg:px-20"
          >
            <ul className="flex flex-col gap-6 font-medium text-2xl text-white md:text-3xl">
              <li>
                <Link href={"/"}>HOME</Link>
              </li>
              <li>
                <Link href={"/habitaciones"}>HABITACIONES</Link>
              </li>
              <li>
                <Link href={"/espacios"}>ESPACIOS</Link>
              </li>
              <li>
                <Link href={"/experiencias"}>EXPERIENCIAS</Link>
              </li>
              {/* <li>
                <Link href={"/contacto"}>CONTACTO</Link>
              </li> */}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden sm:block px-10">
        <a href="/">
          <Image
            src="/icons/heiss.svg"
            alt="Heiss logo"
            width={170}
            height={69.5}
          />
        </a>
      </div>
      <Button variant="outline" asChild className="text-white">
        <Link
          href="https://hotels.cloudbeds.com/es/reservation/lLxxdq"
          target="_blank"
        >
          BOOK NOW
        </Link>
      </Button>
    </div>
  );
}

export default Header;
