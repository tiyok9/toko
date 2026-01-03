"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CategorySkeleton from "./CategorySkeleton";

type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: "T-shirt",
    slug: "t-shirt",
    image: "https://picsum.photos/seed/tshirt/100",
  },
  {
    id: 2,
    name: "Jacket",
    slug: "jacket",
    image: "https://picsum.photos/seed/jacket/100",
  },
  {
    id: 3,
    name: "Long Pants",
    slug: "long-pants",
    image: "https://picsum.photos/seed/longpants/100",
  },
  {
    id: 4,
    name: "Short Pants",
    slug: "short-pants",
    image: "https://picsum.photos/seed/shortpants/100",
  },
  {
    id: 5,
    name: "Shirt",
    slug: "shirt",
    image: "https://picsum.photos/seed/shirt/100",
  },
  {
    id: 6,
    name: "Hoodie",
    slug: "hoodie",
    image: "https://picsum.photos/seed/hoodie/100",
  },
  {
    id: 7,
    name: "Crewneck",
    slug: "crewneck",
    image: "https://picsum.photos/seed/crewneck/100",
  },
  {
    id: 8,
    name: "Bag",
    slug: "bag",
    image: "https://picsum.photos/seed/bag/100",
  },
];

export default function CategoryList() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // simulasi loading (nanti ganti API)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="py-8">
      <h2 className="mb-6 text-center text-xl font-semibold">Categories</h2>

      {loading ? (
        <CategorySkeleton count={8} />
      ) : (
        <div className="flex gap-6 overflow-x-auto px-4 sm:justify-center sm:overflow-visible">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => router.push(`/products?category=${cat.slug}`)}
              className="flex min-w-[72px] flex-col items-center gap-2 hover:opacity-80"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <span className="text-xs text-gray-700 text-center">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
