import { FaStar } from "react-icons/fa";

// Mock Products (replace with Shopify API later)
const products = [
  {
    id: 1,
    name: "Product One",
    price: 29.99,
    image: "/p1.jpg", // put in public folder
    rating: 4,
  },
  {
    id: 2,
    name: "Product Two",
    price: 49.99,
    image: "/p2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Product Three",
    price: 19.99,
    image: "/p3.jpg",
    rating: 3,
  },
  {
    id: 4,
    name: "Product Four",
    price: 59.99,
    image: "/p4.jpg",
    rating: 4,
  },
];
const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />

            {/* Product Info */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>

              {/* Rating */}
              <div className="flex items-center mt-2 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < product.rating ? "fill-yellow-500" : "fill-gray-300"
                    }
                  />
                ))}
              </div>

              {/* Button */}
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
