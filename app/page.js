import ProductCard from "./components/ProductCard";
export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const products = await res.json();
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}