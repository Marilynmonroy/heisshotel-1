import Footer from "@/components/Footer";
import Image from "next/image";

function politicasPrivacidad() {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center items-center">
      {/* Contenedor de la imagen */}
      <div className="relative h-[40vh] w-full mb-8">
        {/* Fondo oscuro semi-transparente */}
        <div className="absolute inset-0 bg-black opacity-50 z-10" />

        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/images/_URV6897.webp"
            fill
            style={{ objectFit: "cover" }}
            alt="Mapa"
          />
        </div>

        {/* Título sobre la imagen */}
        <div className="absolute inset-0 flex flex-col justify-end mb-8 items-center z-20">
          <h3 className="text-white text-center w-[80%] h7">
            MANUAL DE POLÍTICAS DE PRIVACIDAD Y TRATAMIENTO DATOS PERSONALES -
            HEISS HOTEL
          </h3>
        </div>
      </div>

      {/* Contenido debajo de la imagen */}
      <div className="w-[80%] text-gray-700 py-5">
        <section>
          Para <b className="font-bold">HEISS HOTEL</b> la conservación,
          protección, integridad y confidencialidad de los datos personales de
          sus clientes es muy importante. Para esto hemos diseñado una política
          de almacenamiento y tratamiento de la información que nuestros
          clientes suministran a través de los diversos canales de
          comercialización de nuestros productos y servicios (tales como sitios
          web, call centers), y estamos comprometidos con la protección y manejo
          adecuado de los mismos, conforme el régimen legal de protección de
          datos personales aplicable en cada territorio en donde operamos.
          <br />
          <p className="uppercase pt-5 pb-2 font-bold">
            CAPÍTULO I DISPOSICIONES GENERALES
          </p>
          <p>
            <b className="uppercase pt-10 font-bold">
              ARTÍCULO 1. DEFINICIONES.{" "}
            </b>
            Para efectos de la aplicación de las reglas contenidas en el
            presente manual y de acuerdo con lo establecido en el Artículo 3 de
            la Ley 1581 de 2012 se entiende por:
          </p>
          <ul className="list-inside p-5 flex flex-col gap-2">
            <li>
              a) Autorización: Consentimiento previo, expreso e informado del
              Titular para llevar a cabo el Tratamiento de datos personales.
            </li>
            <li>
              b) Aviso de privacidad: Comunicación verbal o escrita generada por
              el Responsable dirigida al Titular para el tratamiento de sus
              datos personales, mediante la cual se le informa acerca de las
              políticas de tratamiento de información que serán aplicables, la
              forma de acceder a las mismas y las finalidades del Tratamiento
              que se pretende dar a los datos personales.{" "}
            </li>
          </ul>
          <p className="uppercase pb-2 font-bold">
            CAPÍTULO II PRINCIPIOS RECTORES{" "}
          </p>
          <p>
            <b className="uppercase font-bold">ARTÍCULO 2. PRINCIPIOS. </b>
            En el desarrollo, interpretación y aplicación de la presente
            política, se aplicarán de manera armónica e integral los siguientes
            principios:
          </p>
          <ul className="list-inside list-decimal p-5 flex flex-col gap-2">
            <li>
              <b>Principio de legalidad: </b> El Tratamiento de datos personales
              es una actividad reglada que debe sujetarse a lo establecido en la
              ley y en las demás disposiciones que la desarrollen.
            </li>
            <li>
              <b> Principio de finalidad: </b>
              El Tratamiento debe obedecer a una finalidad legítima de acuerdo
              con la Constitución y la Ley, la cual debe ser informada al
              Titular.
            </li>
            <li>
              <b> Principio de libertad:</b>
              El Tratamiento solo puede ejercerse con el consentimiento, previo,
              expreso e informado del Titular. Los datos personales no podrán
              ser obtenidos o divulgados sin previa autorización, o en ausencia
              de mandato legal o judicial que releve el consentimiento.
            </li>
            <li>
              <b> Principio de veracidad o calidad:</b>
              La información sujeta a Tratamiento debe ser veraz, completa,
              exacta, actualizada, comprobable y comprensible. Se prohíbe el
              Tratamiento de datos parciales, incompletos, fraccionados o que
              induzcan a error.
            </li>
            <li>
              <b> Principio de transparencia: </b>
              En el Tratamiento debe garantizarse el derecho del Titular a
              obtener del Responsable del Tratamiento o del Encargado del
              Tratamiento, en cualquier momento y sin restricciones, información
              acerca de la existencia de datos que le conciernan.
            </li>
            <li>
              <b> Principio de acceso y circulación restringida: </b>
              El Tratamiento se sujeta a los límites que se derivan de la
              naturaleza de los datos personales, de las disposiciones de la ley
              y la Constitución. En este sentido, el Tratamiento solo podrá
              hacerse por personas autorizadas por el Titular y/o por las
              personas previstas en la Ley.
            </li>
          </ul>
          <p className="uppercase pb-2 font-bold">
            CAPÍTULO III DERECHOS Y DEBERES
          </p>
          <p>
            <b className="uppercase font-bold">
              {" "}
              ARTÍCULO 3. DERECHOS DE LOS TITULARES.{" "}
            </b>
            El Titular de los datos personales tendrá los siguientes derechos:
          </p>
          <ul className="list-inside list-decimal p-5 flex flex-col gap-2">
            <li>
              Conocer, actualizar y rectificar sus datos personales frente a los
              Responsables del Tratamiento o Encargados del Tratamiento. Este
              derecho se podrá ejercer, entre otros frente a datos parciales,
              inexactos, incompletos, fraccionados, que induzcan a error, o
              aquellos cuyo Tratamiento esté expresamente prohibido o no haya
              sido autorizado.
            </li>
            <li>
              Solicitar prueba de la autorización otorgada al Responsable del
              Tratamiento salvo cuando expresamente se exceptúe como requisito
              para el Tratamiento.
            </li>
            <li>
              Ser informado por el Responsable del Tratamiento o el Encargado
              del Tratamiento, previa solicitud, respecto del uso que le ha dado
              a sus datos personales.
            </li>
            <li>
              Presentar ante la Superintendencia de Industria y Comercio quejas
              por infracciones a lo dispuesto en la presente ley y las demás
              normas que la modifiquen, adicionen o complementen.
            </li>
          </ul>
          <p className="uppercase pb-2 font-bold">
            CAPÍTULO IV DISPOSICIONES FINALES{" "}
          </p>
          <p>
            <b className="uppercase font-bold">
              ARTÍCULO 4. INFORMACIÓN DE CONTACTO.{" "}
            </b>
            Para cualquier consulta, reclamo o solicitud relacionada con sus
            datos personales, los Titulares pueden contactar a
            <b className="font-bold">HEISS HOTEL</b> a través de los siguientes
            medios:{" "}
          </p>
          <ul>
            <li>Teléfono: 313 738 30 98 </li>
            <li>Dirección: Cra. 43F # 14-60, El Poblado, Medellín </li>
            <li>Sitio Web: https://heisshotel.com/</li>
            <li>Email: frontdesk@heiss.com.co</li>
          </ul>
          <p className="py-5">
            <b className="uppercase font-bold">ARTÍCULO 5. VIGENCIA.</b> La
            presente política de privacidad entra en vigencia a partir de la
            fecha de su publicación y estará vigente hasta que sea modificada o
            actualizada por una nueva versión.
          </p>
        </section>
      </div>
      <Footer minHeight="min-h-[30vh]" />
    </section>
  );
}

export default politicasPrivacidad;
