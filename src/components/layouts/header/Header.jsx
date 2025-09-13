"use client";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cart } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          Kwifa Demo
        </Link>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/about" className="hover:text-black">About</Link>
          <Link href="/products" className="hover:text-black">Products</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 text-sm"
            />
          </div>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <FaShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </Link>

          {/* User */}
          <Link href="/account">
            <FaUser size={20} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-50 px-6 py-4 space-y-3">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/products" className="block">Products</Link>
          <Link href="/contact" className="block">Contact</Link>
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg mt-3">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 text-sm w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}