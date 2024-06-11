// "use client";
// import React, { useEffect } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// function GoogleMaps() {
//   const mapRef = React.useRef(null);

//   useEffect(() => {
//     const initializeMap = async () => {
//       try {
//         const loader = new Loader({
//           apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
//           version: "quarterly",
//         });

//         await loader.load();

//         const google = window.google;
//         const locationInMap = {
//           lat: 6.215493412982199,
//           lng: -75.57260562822927,
//         };

//         const options = {
//           center: locationInMap,
//           zoom: 15,
//         };

//         const map = new google.maps.Map(mapRef.current, options);

//         const customIcon = {
//           url: "https://example.com/your-custom-icon.png", // Reemplaza con la URL de tu icono
//           scaledSize: new google.maps.Size(32, 32), // Ajusta el tamaño según tus necesidades
//         };

//         new google.maps.Marker({
//           position: locationInMap,
//           map: map,
//           icon: customIcon,
//         });
//       } catch (error) {
//         console.error("Error initializing map:", error);
//       }
//     };

//     initializeMap();
//   }, []);

//   return (
//     <div className="h-full z-50" ref={mapRef}>
//       Google maps
//     </div>
//   );
// }

// export default GoogleMaps;

// CON LOGO PERSONALIZADO

// import React from "react";

// function GoogleMaps() {
//   return (
//     <div className="h-full w-full -z-10">
//       <iframe
//         src="https://www.google.com/maps/d/embed?mid=1KeJ-UORi-oQ-Hy_NGec4Mp0qGCpdEjE&hl=es-419&ehbc=2E312F"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         loading="lazy"
//       ></iframe>
//     </div>
//   );
// }

// export default GoogleMaps;

import React from "react";

function GoogleMaps() {
  return (
    <div className="h-full w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3653842515896!2d-75.57517242433772!3d6.21545102666507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44293176eacd53%3A0xd445e48905455d9a!2sHeiss%20Hotel!5e0!3m2!1ses!2sco!4v1718048212671!5m2!1ses!2sco"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMaps;
