'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import banner from "../../../../public/Images/banner.webp";
import ProductCard from "../products/ProductCard";
import { shopifyClient } from "@/lib/shopify";
import { PRODUCTS_QUERY } from "@/lib/queries";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const data = await shopifyClient.request(PRODUCTS_QUERY);
  
          const formattedProducts = data.products.edges.map(({ node }) => ({
            id: node.id,
            title: node.title,
            description: node.description,
            handle: node.handle,
            image: node.images.edges[0]?.node.src || "",
            altText: node.images.edges[0]?.node.altText || "",
          }));
  
          setProducts(formattedProducts);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);
  
    if (loading) return <p>Loading products...</p>;
  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-start bg-black text-white">
        <Image
          src={banner}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
          width={1200}
          height={400}
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
          <a
            href="/shop"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

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
};

export default Home;