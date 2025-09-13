"use client";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
      <img
        src={item.image}
        alt={item.name}
        width={100}
        height={100}
        className="w-24 h-24 object-cover rounded-md"
      />

      <div className="flex-1 px-4">
        <h2 className="font-semibold">{item.name}</h2>
        <p className="text-gray-600">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(item.price)}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="px-3 text-[16px] cursor-pointer py-1 border rounded border-[#F3F4F6] bg-[#F3F4F6]"
        >
          -
        </button>
        <span className="px-2 py-1">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="px-3 text-[16px] cursor-pointer py-1 border rounded border-[#F3F4F6] bg-[#F3F4F6]"
        >
          +
        </button>
      </div>

      <p className="w-30 text-center font-semibold ps-2">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(item.price * item.quantity)}
      </p>

      <button
        onClick={() => removeItem(item.id)}
        className="ml-4 p-2 rounded-[5px] text-red-500 hover:text-red-700 bg-[#c100061b] cursor-pointer"
      >
        <FaTrash />
      </button>
    </div>
  );
}
