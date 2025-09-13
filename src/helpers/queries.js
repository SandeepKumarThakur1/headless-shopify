// Fetch multiple products
export const PRODUCTS_QUERY = `
  query getProducts($first: Int = 12, $sortKey: ProductSortKeys = CREATED_AT, $reverse: Boolean = true) {
    products(first: $first, sortKey: $sortKey, reverse: $reverse) {
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
          variants(first: 1) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Fetch single product by handle
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

