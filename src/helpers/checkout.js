
import { gql } from "graphql-request";
import { shopifyClient } from "./shopify";

const CREATE_CHECKOUT_MUTATION = gql`
  mutation checkoutCreate($lineItems: [CheckoutLineItemInput!]!) {
    checkoutCreate(input: { lineItems: $lineItems }) {
      checkout {
        id
        webUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export async function createCheckout(cart) {
  if (!cart || cart.length === 0) return null;

  const lineItems = cart.map(item => ({
    variantId: item.variantId, // ✅ must exist
    quantity: item.quantity,
  }));

  try {
    const data = await shopifyClient.request(CREATE_CHECKOUT_MUTATION, { lineItems });
    if (data.checkoutCreate.userErrors.length) {
      console.error("Shopify checkout errors:", data.checkoutCreate.userErrors);
      return null;
    }
    return data.checkoutCreate.checkout.webUrl;
  } catch (error) {
    console.error("Error creating checkout:", error);
    return null;
  }
}
