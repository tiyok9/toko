import { NextResponse } from "next/server";
import { getProducts } from "../../components/lib/products";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page") ?? 1);
  const sort = searchParams.get("sort") ?? "none";
  const price = searchParams.get("price") ?? undefined;

  const products = await getProducts({ page, sort, price });

  return NextResponse.json(products);
}
