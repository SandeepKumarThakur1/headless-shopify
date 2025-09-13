"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function SingleProductPage({ product }) {
  const { addToCart } = useCart();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Image */}
      <div>
        <img
          src={product.image}
          alt={product.altText || product.name}
          width={600}
          height={500}
          className="w-full h-[500px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Details */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={
                i < product.rating ? "fill-yellow-500" : "fill-gray-300"
              }
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">(120 reviews)</span>
        </div>

        {/* Price */}
        <p className="text-2xl font-semibold text-black mb-6">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: product.currency,
          }).format(product.price)}
        </p>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => addToCart(product)}
            className="cursor-pointer bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
          <button className="cursor-pointer border border-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition">
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
}
