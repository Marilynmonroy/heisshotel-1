"use client";
import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false); // Cierra el menú al hacer scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuOptionClick = () => {
    setMenuOpen(false); // Cierra el menú al hacer clic en una opción
  };

  return (
    <div className="fixed flex items-center z-30 justify-around w-full ease-in duration-300 gap-7 py-9 md:gap-11 xl:gap-56">
      <div>
        <Sheet open={menuOpen} onClose={() => setMenuOpen(false)}>
          <SheetTrigger onClick={handleMenuToggle}>
            <IoMenu color="#fff" size={50} />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-black/45 border-none px-9 py-32 md:px-12 lg:px-20"
          >
            <ul className="flex flex-col gap-6 font-medium text-xl text-white md:text-2xl">
              <li onClick={handleMenuOptionClick}>
                <Link href={"/"}>HOME</Link>
              </li>
              <li onClick={handleMenuOptionClick}>
                <Link href={"/habitaciones"}>HABITACIONES</Link>
              </li>
              <li onClick={handleMenuOptionClick}>
                <Link href={"/espacios"}>ESPACIOS</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden sm:block pl-28">
        <a href="/">
          <Image
            src="/icons/heiss.svg"
            alt="Heiss logo"
            width={120}
            height={29.5}
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
