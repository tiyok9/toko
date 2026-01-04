import Link from "next/link";
import Image from "next/image";
import { getSuggestedProducts } from "../lib/products";

export default async function SuggestedProducts() {
  const products = await getSuggestedProducts();

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-lg font-semibold">You Might Also Like</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {products.map((p) => (
          <Link key={p.id} href={`/products/${p.slug}`}>
            <div>
              <div className="relative aspect-square bg-gray-100">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mt-2 text-sm font-medium">{p.name}</h3>
              <p className="text-xs text-gray-600">{p.category}</p>
              <p className="text-sm font-medium">
                Rp {p.price.toLocaleString("id-ID")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
