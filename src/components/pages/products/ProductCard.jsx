"use client";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { id, title, description, price, currency, image, altText, handle, rating } = product;
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
      {/* Product Image */}
      {image && (
        <Link href={`/products/${handle}`}>
          <img
            src={image}
            alt={altText || title}
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
        </Link>
      )}

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-bold line-clamp-1">{title}</h2>

        {/* Small Description */}
        {description && (
          <p className="text-gray-600 mt-1 text-sm line-clamp-2 flex-1">
            {description}
          </p>
        )}

        {/* Price */}
        {price && (
          <p className="text-black font-semibold mt-2">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: currency || "USD",
            }).format(price)}
          </p>
        )}

        {/* Rating */}
        {rating && (
          <div className="flex items-center mt-2 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={i < rating ? "fill-yellow-500" : "fill-gray-300"}
              />
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-4 flex gap-2">
          <Link href={`/products/${handle}`} className="flex-1">
            <button className="text-[14px] cursor-pointer w-full px-2 py-2 bg-black text-white rounded hover:bg-gray-900 transition">
              View Product
            </button>
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="text-[14px] cursor-pointer flex-1 px-2 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
