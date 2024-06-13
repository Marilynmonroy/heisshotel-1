// app/components/Header.js
"use client";
import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleMenuOptionClick = () => setMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full z-30 py-9 bg-transparent">
      <div className="flex items-center w-full max-w-[92%] xl:max-w-[89%]">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <button onClick={handleMenuToggle}>
              <IoMenu color="#fff" size={50} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-black/45 border-none px-9 py-32 md:px-12 lg:px-20"
          >
            <div className="absolute top-8 right-8">
              <SheetClose className="text-white text-xl font-medium">
                <IoMdClose />
              </SheetClose>
            </div>
            <ul className="flex flex-col gap-6 font-medium text-xl text-white md:text-2xl">
              <li onClick={handleMenuOptionClick}>
                <Link href="/">INICIO</Link>
              </li>
              <li onClick={handleMenuOptionClick}>
                <Link href="/habitaciones">HABITACIONES</Link>
              </li>
              <li onClick={handleMenuOptionClick}>
                <Link href="/espacios">ESPACIOS</Link>
              </li>
              <li onClick={handleMenuOptionClick}>
                <Link href="/contacto">CONTACTO</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>

        <div className="hidden sm:flex justify-center flex-grow pl-[101px]">
          <Link href="/">
            <Image
              src="/icons/heiss.svg"
              alt="Heiss logo"
              width={120}
              height={30}
              priority
            />
          </Link>
        </div>

        <Button variant="outline" asChild className="text-white">
          <Link
            href="https://hotels.cloudbeds.com/es/reservation/lLxxdq"
            target="_blank"
          >
            RESERVE YA
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Header;
