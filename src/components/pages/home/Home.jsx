"use client";
import Image from "next/image";
import Link from "next/link";
import banner from "../../../../public/Images/banner.webp";
import { useProducts } from "@/hooks/useProducts";
import Loader from "@/components/shared/Loader";
import ErrorMessage from "@/components/shared/ErrorMessage";
import ProductGrid from "../products/ProductGrid";
export default function Home() {
  const { products, loading, error } = useProducts(12);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-start bg-black text-white">
        <Image
          src={banner}
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto w-[80%]">
          <p className="uppercase text-sm tracking-widest mb-2">Introducing</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Newest Arrivals
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We make things that work better and last longer.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>
        {loading && <Loader text="Loading products..." />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && <ProductGrid products={products} />}
      </section>

      {/* Branding Section */}
      <section className="bg-[#f4f7f1] py-24 px-6 md:px-12">
        <div className="w-[85%] mx-auto">
          <p className="text-sm md:text-base text-gray-700 max-w-md mb-12">
            Made with care and unconditionally loved by our customers, this
            signature bestseller exceeds all expectations.
          </p>
          <h1 className="text-[12vw] leading-none font-black text-black tracking-tight">
            kwifa-demo
          </h1>
        </div>
      </section>
    </>
  );
}
