import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { title, description, price, image, handle, rating } = product;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
      {/* Product Image */}
      {image && (
        <img
          src={image}
          alt={title}
          // width={300}
          // height={300}
          className="w-full h-64 object-cover"
        />
      )}

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-bold">{title}</h2>

        {/* Small Description */}
        {description && (
          <p className="text-gray-600 mt-1 text-sm line-clamp-2 flex-1">
            {description}
          </p>
        )}

        {/* Price */}
        {price && <p className="text-black font-semibold mt-2">${price}</p>}

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
          <Link href={`/products/${handle}`}>
            <button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition">
              View Product
            </button>
          </Link>
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
