export const PRODUCTS_QUERY = `
  {
    products(first: 10) {
      edges {
        node {
          id
          title
          handle
          description
          images(first: 1) {
            edges {
              node {
                src
                altText
              }
            }
          }
        }
      }
    }
  }
`;


export const SINGLE_PRODUCT_QUERY = `
  query getProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      images(first: 1) {
        edges {
          node {
            src
            altText
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            priceV2 {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

