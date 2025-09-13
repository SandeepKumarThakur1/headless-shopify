import React from "react";
import Image from "next/image";
import banner from "../../../../public/Images/banner.webp";
import ProductCard from "../products/ProductCard";
import product1 from "../../../../public/Images/product1.jpg";
import product2 from "../../../../public/Images/product2.jpg";
import product3 from "../../../../public/Images/product3.jpg";
import product4 from "../../../../public/Images/product4.jpg";

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
];

const Home = () => {
  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-start bg-black text-white">
        {/* Background Image */}
        <Image
          src={banner}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
          width={1200}
          height={400}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-[80%]">
          <p className="uppercase text-sm tracking-widest mb-2">Introducing</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Newest Arrivals
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We make things that work better and last longer. Our products solve
            real problems with clean design and honest materials.
          </p>
          <a
            href="/shop"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <section className="bg-[#f4f7f1] py-24 px-6 md:px-12">
        <div className="w-[85%] mx-auto">
          {/* Top Text */}
          <p className="text-sm md:text-base text-gray-700 max-w-md mb-12">
            Made with care and unconditionally loved by our customers, this
            signature bestseller exceeds all expectations.
          </p>

          {/* Large Title */}
          <h1 className="text-[12vw] leading-none font-black text-black tracking-tight">
            kwifa-demo
          </h1>
        </div>
      </section>
    </>
  );
};

export default Home;
