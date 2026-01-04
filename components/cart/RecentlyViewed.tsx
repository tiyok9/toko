import Image from "next/image";
import Link from "next/link";
import { getSuggestedProducts } from "../lib/products";

export default async function RecentlyViewed() {
  const products = await getSuggestedProducts();

  return (
    <section className="mt-20">
      <h2 className="mb-6 text-xl font-semibold">Recently Viewed</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {products.map((p) => (
          <Link key={p.id} href={`/products/${p.slug}`}>
            <div>
              <div className="aspect-square bg-gray-100 relative">
                <Image src={p.image} alt={p.name} fill />
              </div>
              <p className="mt-2 text-sm font-medium">{p.name}</p>
              <p className="text-sm">Rp {p.price.toLocaleString("id-ID")}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
