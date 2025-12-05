import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  const imageSrc = product?.image ? product.image : null;
  return (
    <div className="border p-4 rounded-lg shadow hover:scale-105 transition">
      {imageSrc ? (
        <div className="relative w-full h-52">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            className="rounded object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-52 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}

      <h2 className="font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-700">₹{product.price}</p>

      <Link
        href={`/product/${product.id}`}
        className="inline-block mt-3 bg-black text-sm text-white px-4 py-2 rounded">
        View Details
      </Link>
    </div>
  );
}
