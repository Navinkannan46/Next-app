"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCart } from "../../context/CartContext";

export default function ProductPage() {
  const params = useParams();
  const id = params?.id;
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  console.log(product);

  // Loading state
  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-10">
      {product?.image ? (
        <div className="relative w-80 h-80">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="rounded object-cover"
          />
        </div>
      ) : (
        <div className="w-80 h-80 bg-gray-200 animate-pulse rounded" />
      )}

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl mt-2">₹{product.price}</p>
        <p className="text-gray-700 mt-4">{product.description}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 bg-black text-white px-6 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
