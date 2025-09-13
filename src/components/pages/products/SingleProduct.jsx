import { FaStar } from "react-icons/fa";

// Mock product data (replace with Shopify API later)
const product = {
  id: 1,
  name: "Product One",
  price: 29.99,
  image: "/p1.jpg", // put in public folder
  description:
    "This is a high-quality product made with premium materials. Perfect for your daily lifestyle.",
  rating: 4,
};

export default function SingleProductPage({ params }) {
  // You can use params.id to fetch product from API
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Product Image */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < product.rating ? "fill-yellow-500" : "fill-gray-300"}
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">(120 reviews)</span>
        </div>

        <p className="text-2xl font-semibold text-black mb-6">
          ${product.price}
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Add to Cart
          </button>
          <button className="border border-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition">
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
}
