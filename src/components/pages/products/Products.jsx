"use client";

import ErrorMessage from "@/components/shared/ErrorMessage";
import Loader from "@/components/shared/Loader";
import { useProducts } from "@/hooks/useProducts";
import ProductGrid from "./ProductGrid";
import Link from "next/link";

export default function ShopPage() {
  const { products, loading, error } = useProducts(20);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-green-700 rounded-2xl p-10 text-white mb-12 shadow-xl">
        <h1 className="text-4xl font-bold mb-4">🛍️ Discover Our Collection</h1>
        <p className="text-lg max-w-2xl mb-6">
          Explore the best hand-picked products crafted with quality and care.
          Shop confidently and find something unique just for you!
        </p>
        <Link href="/products">
          <button className="cursor-pointer px-6 py-3 bg-white text-black font-semibold rounded-xl shadow hover:bg-gray-100 transition">
            Start Shopping
          </button>
        </Link>
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* Filter Section */}
      <section className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <h2 className="text-2xl font-semibold">All Products</h2>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-black">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-black"
          />
        </div>
      </section>

      {/* Product Grid */}
      {loading && <Loader text="Fetching products..." />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <ProductGrid products={products} />}
    </div>
  );
}
