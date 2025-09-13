import ProductCard from "./ProductCard";
import product1 from "../../../../public/Images/product1.jpg";
import product2 from "../../../../public/Images/product2.jpg";
import product3 from "../../../../public/Images/product3.jpg";
import product4 from "../../../../public/Images/product4.jpg";
// import product5 from "../../../../public/Images/product5.png";
import product6 from "../../../../public/Images/product6.jpg";
import product7 from "../../../../public/Images/product7.png";
// import product8 from "../../../../public/Images/product8.png";


const products = [
  {
    title: "Classic Watch",
    description: "A sleek, timeless watch for any occasion.",
    price: 99.99,
    image: product1,
    handle: "classic-watch",
    rating: 4,
  },
  {
    title: "Leather Wallet",
    description: "Premium leather wallet for your essentials.",
    price: 49.99,
    image: product2,
    handle: "leather-wallet",
    rating: 5,
  },
  {
    title: "Running Shoes",
    description: "Comfortable running shoes with modern design.",
    price: 79.99,
    image: product3,
    handle: "running-shoes",
    rating: 4,
  },
  {
    title: "Sunglasses",
    description: "Stylish sunglasses with UV protection.",
    price: 29.99,
    image: product4,
    handle: "sunglasses",
    rating: 3,
  },
  {
    title: "Backpack",
    description: "Durable backpack for everyday use.",
    price: 59.99,
    image: product1,
    handle: "backpack",
    rating: 4,
  },
  {
    title: "Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 129.99,
    image: product6,
    handle: "headphones",
    rating: 5,
  },
  {
    title: "Smartphone Stand",
    description: "Adjustable smartphone stand for desk use.",
    price: 19.99,
    image: product7,
    handle: "smartphone-stand",
    rating: 4,
  },
  {
    title: "Fitness Tracker",
    description: "Track your activity and health with style.",
    price: 89.99,
    image: product2,
    handle: "fitness-tracker",
    rating: 5,
  },
];



const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
