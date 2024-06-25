const FOOTER_GRAPHQL_FIELDS = `
  sys {
    id
  }
  adressFooter
  adressDescriptionFooter
  contactTitleFooter
  contactDescriptionFooter
  disclaimer
`;
const HOME_CONTENT_FIELDS = `
  principalTitle
  subtitleHome
  titleHome
  descriptionHome
`;

function fetchGraphQL(query, preview = false) {
  return fetch(
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
      next: { tags: ["footer", "home"] },
    }
  ).then((response) => response.json());
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

getFooter().then((footerData) => {
  console.log(footerData);
});

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

getAllHomePageContent().then((homeData) => {
  console.log(homeData);
});
