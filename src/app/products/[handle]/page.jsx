import SingleProductPage from "@/components/pages/products/SingleProduct";
import { shopifyClient } from "@/lib/shopify";
import { SINGLE_PRODUCT_QUERY } from "@/lib/queries";

const ProductPage = async ({ params }) => {
  const handle = params.handle;

  const data = await shopifyClient.request(SINGLE_PRODUCT_QUERY, { handle });
  const prod = data?.productByHandle;

  if (!prod) {
    return <p>Product not found</p>;
  }

  const formattedProduct = {
    id: prod.id,
    name: prod.title,
    description: prod.description,
    image: prod.images.edges[0]?.node.src || "",
    altText: prod.images.edges[0]?.node.altText || "",
    price: prod.variants.edges[0]?.node.priceV2.amount || 0,
    currency: prod.variants.edges[0]?.node.priceV2.currencyCode || "USD",
    rating: 4, // static rating
  };

  return <SingleProductPage product={formattedProduct} />;
};

export default ProductPage;
