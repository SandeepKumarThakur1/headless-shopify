import SingleProductPage from "@/components/pages/products/SingleProduct";
import { shopifyClient } from "@/helpers/shopify";
import { SINGLE_PRODUCT_QUERY } from "@/helpers/queries";

export default async function ProductPage({ params }) {
  const handle = params.handle;

  try {
    const data = await shopifyClient.request(SINGLE_PRODUCT_QUERY, { handle });
    const prod = data?.productByHandle;

    if (!prod) {
      return (
        <p className="text-center py-12 text-gray-600">
          ❌ Product not found
        </p>
      );
    }

    const formattedProduct = {
      id: prod.id,
      name: prod.title,
      description: prod.description,
      image: prod.images.edges[0]?.node.src || "",
      altText: prod.images.edges[0]?.node.altText || prod.title,
      price: prod.variants.edges[0]?.node.priceV2.amount || 0,
      currency: prod.variants.edges[0]?.node.priceV2.currencyCode || "USD",
      rating: 4, // temporary placeholder until reviews API is added
    };

    return <SingleProductPage product={formattedProduct} />;
  } catch (error) {
    console.error("❌ Error fetching product:", error);
    return (
      <p className="text-center py-12 text-red-500">
        ⚠️ Failed to load product. Please try again later.
      </p>
    );
  }
}
