import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Kwifa Demo</h2>
          <p className="text-sm leading-relaxed">
            We provide the best products at the best prices. 
            Quality and customer satisfaction are our top priorities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><Link href="/shipping" className="hover:text-white">Shipping Info</Link></li>
            <li><Link href="/returns" className="hover:text-white">Returns & Refunds</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md text-white outline-none border border-gray-700 bg-black"
            />
            <button
              type="submit"
              className="cursor-pointer bg-white text-black px-4 py-2 rounded-r-md font-semibold hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-white"><FaInstagram /></Link>
            <Link href="#" className="hover:text-white"><FaTwitter /></Link>
            <Link href="#" className="hover:text-white"><FaYoutube /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
