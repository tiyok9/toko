"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FeaturedSkeleton from "./FeaturedSkeleton";

type FeatureItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
};

const features: FeatureItem[] = [
  {
    id: 1,
    title: "Discount",
    subtitle: "Up to 50% Off",
    image: "https://picsum.photos/seed/discount/1200/800",
    link: "/products?filter=discount",
  },
  {
    id: 2,
    title: "New Arrival",
    subtitle: "Latest Collection",
    image: "https://picsum.photos/seed/newarrival/1200/800",
    link: "/products?filter=new",
  },
  {
    id: 3,
    title: "Best Seller",
    subtitle: "Most Loved Items",
    image: "https://picsum.photos/seed/bestseller/1200/800",
    link: "/products?filter=best-seller",
  },
  {
    id: 4,
    title: "Look of Casual",
    subtitle: "Everyday Style",
    image: "https://picsum.photos/seed/casual/1200/800",
    link: "/products?filter=casual",
  },
];

export default function FeaturedSection() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // simulasi loading (nanti ganti API)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="py-10">
      <h2 className="mb-6 text-xl font-semibold">Featured</h2>

      {loading ? (
        <FeaturedSkeleton />
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {features.map((item) => (
            <div
              key={item.id}
              className="group relative h-[260px] sm:h-[360px] overflow-hidden rounded-xl"
            >
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/35" />

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 z-10 text-white">
                <p className="text-sm opacity-90">{item.subtitle}</p>
                <h3 className="mt-1 text-2xl font-bold">{item.title}</h3>

                <button
                  onClick={() => router.push(item.link)}
                  className="mt-4 rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-gray-100"
                >
                  Shop
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
