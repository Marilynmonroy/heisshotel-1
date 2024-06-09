import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ children }) {
  return (
    <div className="bg-black text-white w-full">
      <div className="bottom-0 w-full">
        <div className="h-full">
          <div className="">{children}</div>
          <section className=" pt-6 px-6 flex flex-col items-center pb-20 md:pb-9">
            <div className="text-center md:hidden pb-5 mx-auto">
              <Link href="/">
                <Image
                  src="/icons/heiss.svg"
                  alt="Heiss logo"
                  width={120}
                  height={30}
                  priority
                  className="w-24"
                />
              </Link>
            </div>
            <div className="w-full pb-4 md:pb-4 gap-2 flex flex-col md:px-20 md:flex-row md:justify-around justify-center items-center">
              <Link href="https://wa.me/573178946768" target="_blank">
                <h6 className="h6">CONTÁCTENOS</h6>
              </Link>
              <Link href="/" target="_blank">
                <h6 className="h6">PÓLITICAS DE USO</h6>
              </Link>
              <Link href="/" target="_blank">
                <h6 className="h6">PÓLITICAS DE PRIVACIDAD</h6>
              </Link>
            </div>

            <div className="border-t-2 border-white w-full" />
            <div className="flex flex-col gap-5">
              <div className="w-full flex md:justify-between p-light-14 pt-3 mx-auto items-center">
                <ul className="md:list-disc list-inside w-full gap-2 flex flex-col text-center md:text-left md:grid md:grid-cols-1 md:px-10 lg:px-16 xl:px-36">
                  <div className="md:flex md:flex-col md:gap-3">
                    <li className="">
                      <span className="font-bold">Dirección: </span>
                      <br />
                      Cra. 43F # 14-60, El Poblado, Medellín - Manila
                    </li>
                    <li className="">frontdesk@heiss.com.co</li>
                  </div>
                  <div className="md:col-end-7 md:col-span-2 md:text-right">
                    <li>
                      <span className="font-bold">Comercial y Mercadeo:</span>
                      <br className="md:hidden" />
                      +57 313 525 0564
                    </li>
                    argemiroquintero@heiss.com.co
                    <li className="pt-2">
                      <span className="font-bold">Front desk: </span>
                      <br className="md:hidden" />
                      +57 313 738 3098
                    </li>
                  </div>
                </ul>
              </div>
              <div className="border-t-2 border-white w-full" />
              <section className="w-[90%] md:w-[70%] text-center p-light-12 mx-auto">
                <p>
                  En Heiss Hotel rechazamos rotundamente cualquier tipo de abuso
                  o explotación sexual de Niños, Niñas y Adolescentes.
                </p>
                <p className="py-1 lg:py-2">
                  Prohibimos el ingreso a nuestras instalaciones de:
                </p>
                <p className="py-1 lg:py-2">
                  1) Cualquier persona que pretenda ofrecer servicios o planes
                  relacionados con la Explotación Sexual Comercial de Niños,
                  Niñas y Adolescentes. <br />
                  2) de Niños, Niñas y Adolescentes que no estén acompañados por
                  sus padres o tutores o que no estén debidamente autorizados
                  por estos.
                </p>
                <p className="py-1 lg:py-2">
                  Advertimos a todos nuestros huéspedes y clientes que en
                  desarrollo de lo dispuesto en el artículo 17 de la Ley 679 de
                  2001, La Ley 1098 de 2006, La Ley 1336 de 2009, la Resolución
                  3840 de 2009 y Código Ético Mundial Para el Turismo, la
                  explotación y el abuso sexual de menores de edad (Niños, Niñas
                  y Adolescentes) en el país, son sancionados con Penas de hasta
                  20 años de cárcel y multas de hasta 1500 Salarios Mínimos
                  Legales Mensuales Vigentes.
                </p>
              </section>
            </div>
            <div className="text-center hidden sm:block mx-auto pt-5">
              <Link href="/">
                <Image
                  src="/icons/heiss.svg"
                  alt="Heiss logo"
                  width={120}
                  height={30}
                  priority
                  className="w-24"
                />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
