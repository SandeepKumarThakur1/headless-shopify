"use client";
import { useEffect, useState } from "react";
import { shopifyClient } from "@/helpers/shopify";
import { PRODUCTS_QUERY } from "@/helpers/queries";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await shopifyClient.request(PRODUCTS_QUERY);
        const formatted = data.products.edges.map(({ node }) => ({
          id: node.id,
          title: node.title,
          description: node.description,
          handle: node.handle,
          image: node.images.edges[0]?.node.src || "",
          altText: node.images.edges[0]?.node.altText || "",
          price: node.variants.edges[0]?.node.price.amount || "0.00",
          currency: node.variants.edges[0]?.node.price.currencyCode || "USD",
        }));
        setProducts(formatted);
      } catch (err) {
        setError(err.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return { products, loading, error };
}