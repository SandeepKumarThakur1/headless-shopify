"use client";
import { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-wide">
          MyShop
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="/shop" className="hover:text-black">Shop</a>
          <a href="/about" className="hover:text-black">About</a>
          <a href="/contact" className="hover:text-black">Contact</a>
        </nav>

        {/* Search + Icons */}
        <div className="flex items-center gap-4">
          {/* Search (desktop only) */}
          <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 text-sm"
            />
          </div>

          {/* Cart */}
          <a href="/cart" className="relative">
            <FaShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
              2
            </span>
          </a>

          {/* User */}
          <a href="/account">
            <FaUser size={20} />
          </a>

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
          <a href="/shop" className="block">Shop</a>
          <a href="/about" className="block">About</a>
          <a href="/contact" className="block">Contact</a>
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
