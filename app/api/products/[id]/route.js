import { NextResponse } from "next/server";
import { products } from "../../../data/products";
export async function GET(_request, { params }) {
  const { id } = await params;

  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
