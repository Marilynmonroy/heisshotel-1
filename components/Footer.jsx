import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ children, minHeight = "min-h-screen" }) {
  return (
    <div className={`flex flex-col ${minHeight} text-white w-full`}>
      <div className="w-full relative flex-grow">{children}</div>
      <footer className="bg-black w-full py-7 md:pt-10 md:px-18 lg:px-24 xl:pt-10 xl:px-44">
        <div className="w-full">
          <section className="flex flex-col">
            <div className="flex h-full flex-col text-center items-center md:items-stretch md:flex-row md:pb-10 md:pl-5">
              <div className="w-full flex flex-col items-center md:items-start md:justify-between p-light-12 pl-5 pb-2 md:pb-0">
                <Link href="/" className="flex pb-3">
                  <Image
                    src="/icons/heiss.svg"
                    alt="Heiss logo"
                    width={120}
                    height={40}
                    priority
                    className="w-24 md:w-24 lg:w-28 xl:w-36 "
                  />
                </Link>
                <div className="border-t-2 pt-2 border-white w-10/12 md:hidden" />
                <div className="md:items-start flex flex-col p-light-14">
                  <h5 className="uppercase text-[14px] md:text-lg font-medium py-1 md:py-4">
                    Dirección
                  </h5>
                  <p> Cra. 43F # 14-60, El Poblado, Medellín - Manila</p>
                  <h5 className="uppercase text-[14px] md:text-lg font-medium py-1 md:py-4">
                    CONTACTO
                  </h5>
                  <p>
                    <b className="font-medium">Comercial y Mercadeo:</b> +57 313
                    525 0564
                  </p>
                  <p>argemiroquintero@heiss.com.co</p>
                  <p>
                    <b className="font-medium">Front desk:</b> +57 313 738 3098
                  </p>
                  <p>frontdesk@heiss.com.co</p>
                </div>
              </div>
              <div className="border-t-2 py-2 border-white w-10/12 md:hidden" />
              <section className="md:text-left p-light-12 w-[80%] pb-3 md:pb-0">
                <p className="pb-1 lg:pb-2">
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
                  2) De Niños, Niñas y Adolescentes que no estén acompañados por
                  sus padres o tutores o que no estén debidamente autorizados
                  por estos.
                </p>
                <p className="pt-1 lg:pt-2">
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

            <div className="w-full flex flex-col pb-18 pt-5 md:pt-0 md:pl-10 md:pr-[12rem] md:pb-5 lg:pr-36 lg:pb-4 xl:pr-[10rem] xl:pb-4 md:flex-row md:justify-between justify-center items-center">
              <Link href="/contacto">
                <h6 className="h6">CONTÁCTENOS</h6>
              </Link>
              <Link href="/">
                <h6 className="h6">PÓLITICAS DE USO</h6>
              </Link>
              <Link href="/">
                <h6 className="h6">PÓLITICAS DE PRIVACIDAD</h6>
              </Link>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
