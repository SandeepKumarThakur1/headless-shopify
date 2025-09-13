'use client';

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS_QUERY } from "@/lib/queries";
import { shopifyClient } from "@/lib/shopify";

const Products = () => {
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
