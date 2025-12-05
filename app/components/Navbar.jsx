"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
export default function Navbar() {
  const { count } = useCart();
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <Link href="/" className="text-xl font-bold">Voxen Store</Link>
      <div className="flex items-center space-x-6">
        <Link href="/">Home</Link>
        <div className="relative">
          <span className="text-xl">🛒</span>
          {count > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">{count}</span>}
        </div>
      </div>
    </nav>
  );
}