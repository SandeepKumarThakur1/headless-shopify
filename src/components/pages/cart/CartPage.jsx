"use client";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import ProductCard from "../products/ProductCard";
import { useProducts } from "@/hooks/useProducts"; // your hook
import Loader from "@/components/shared/Loader";
import ErrorMessage from "@/components/shared/ErrorMessage";
import Link from "next/link";

export default function CartPage() {
  const { cart } = useCart();
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Fetch products dynamically
  const { products: recommendedProducts, loading, error } = useProducts(8); // fetch 8 products for recommendations

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">🛒 Your Shopping Cart</h1>
        <p className="text-gray-600">
          Review your items and proceed to checkout.
        </p>
      </section>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <div className="relative bg-gradient-to-r from-black via-gray-900 to-green-700 rounded-2xl p-10 text-white mb-12 shadow-xl text-center py-20">
          <p className="text-white text-lg mb-6">Your cart is empty.</p>
          <Link
            href="/products"
            className="px-7 py-4 bg-white text-black rounded-xl shadow hover:bg-gray-200 transition font-bold"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="lg:flex lg:gap-12">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <aside className="lg:w-96 mt-8 lg:mt-0 sticky top-24 self-start">
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <OrderSummary subtotal={subtotal} />
            </div>
          </aside>
        </div>
      )}

      {/* Recommended Section */}
      {cart.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>

          {loading && <Loader text="Loading recommended products..." />}
          {error && <ErrorMessage message={error} />}
          {!loading && !error && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {recommendedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
