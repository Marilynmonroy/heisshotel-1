// api.js
const FOOTER_GRAPHQL_FIELDS = `
  sys {
    id
  }
  disclaimer
  directionFooterTitle
  directionFooterDescription
  contactFooterTitle
  contactFooterDescription {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

const HOME_CONTENT_FIELDS = `
sys {
id}
  principalTitle
  subtitleHome
  titleHome
  descriptionHome
`;

const HABITACIONES_CONTENT_FIELDS = `
  sys {
    id
  }
  subtitleHab
  titleHab
  descriptionHab
  modalTitle
  modalDescription
`;
const ESPACIOS_CONTENT_FIELDS = `
  sys {
    id
  }
  subtitleSpaces
  titleSpaces
  descriptionSpaces
  imageEspacio {
  url
  }
`;
const CONTACTO_CONTENT_FIELDS = `
  sys {
    id
  }
  titleContact
  iconContact {
  url
  }
  textContact 
`;
const HABITACION_CONTENT_FIELDS = `
  sys {
    id
  }
  subtitleHabitacion
  titleHabitacion
  descriptionHabitacion
`;
const EXPERIENCIAS_CONTENT_FIELDS = `
  sys {
    id
  }
  titleExperienceCard
descriptionExperienceCard
imageExperienceCard{url}
`;

async function fetchGraphQL(query, preview = false) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  );
  const result = await response.json();
  console.log("Result:", result);
  return result;
}

export async function getFooter() {
  const footerContents = await fetchGraphQL(
    `query {
      footerCollection {
        items {
          ${FOOTER_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return footerContents?.data?.footerCollection?.items || [];
}

export async function getAllHomePageContent() {
  const homeContents = await fetchGraphQL(
    `query {
      homeCollection {
        items {
          ${HOME_CONTENT_FIELDS}
        }
      }
    }`
  );
  return homeContents?.data?.homeCollection?.items || [];
}

export async function getAllHabitacionesPageContent() {
  const habContents = await fetchGraphQL(
    `query {
      habitacionesCollection {
        items {
          ${HABITACIONES_CONTENT_FIELDS}
        }
      }
    }`
  );
  return habContents?.data?.habitacionesCollection?.items || [];
}

export async function getAllEspaciosPageContent() {
  const espaciosContents = await fetchGraphQL(
    `query {
      espaciosCollection {
        items {
          ${ESPACIOS_CONTENT_FIELDS}
        }
      }
    }`
  );
  return espaciosContents?.data?.espaciosCollection?.items || [];
}

export async function getContactPageContent() {
  const contactoContents = await fetchGraphQL(
    `query {
      contactoCollection {
        items {
          ${CONTACTO_CONTENT_FIELDS}
        }
      }
    }`
  );
  return contactoContents?.data?.contactoCollection?.items || [];
}

export async function getHabContent() {
  const habitacionesPagesContents = await fetchGraphQL(
    `query {
      habitacionesPagesCollection {
        items {
          ${HABITACION_CONTENT_FIELDS}
        }
      }
    }`
  );
  return (
    habitacionesPagesContents?.data?.habitacionesPagesCollection?.items || []
  );
}

export async function getExperienceContent() {
  const experienciasCardContents = await fetchGraphQL(
    `query {
      experienciasCardCollection {
        items {
          ${EXPERIENCIAS_CONTENT_FIELDS}
        }
      }
    }`
  );
  return (
    experienciasCardContents?.data?.experienciasCardCollection?.items || []
  );
}
