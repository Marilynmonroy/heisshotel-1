"use client";
import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

const FullpageWrapper = () => {
  return (
    <Fullpage>
      <FullpageNavigation />

      <FullPageSections >
        <FullpageSection
          className="h-full w-full flex justify-center items-center bg-cover"
          style={{ backgroundImage: `url(/images/Fachada_Heiss_R3.jpg)` }}
        >
          {" "}
          <h1>Hola</h1>
        </FullpageSection>
        <FullpageSection
          className="h-full w-full flex justify-center items-center bg-cover"
          style={{ backgroundImage: `url(/images/Habitacion_Small_Front.jpg)` }}
        >
          <h1>Screen 2</h1>
        </FullpageSection>
        <FullpageSection className="h-full w-full flex justify-center items-center bg-cover">
          <h1>Screen 3</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullpageWrapper;
