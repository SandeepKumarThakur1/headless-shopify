"use client";

import { useCart } from "@/context/CartContext";
import { createCheckout } from "@/helpers/checkout";

export default function OrderSummary() {
  const { cart, subtotal } = useCart();

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      const checkoutUrl = await createCheckout(cart);
      if (checkoutUrl) {
        window.location.href = checkoutUrl; // redirect to Shopify hosted checkout
      } else {
        alert("Failed to create checkout. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow h-fit">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>Free</span>
      </div>

      <div className="flex justify-between font-bold text-lg border-t pt-2">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <button
        onClick={handleCheckout}
        className="cursor-pointer mt-6 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
      >
        Checkout
      </button>
    </div>
  );
}
