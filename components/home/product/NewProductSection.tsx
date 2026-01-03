"use client";

import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import NewProductSkeleton from "./NewProductSkeleton";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  images: string[];
  stockStatus?: "In Stock" | "Limited";
  promo?: string;
};

const products: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Nike Training ${i + 1}`,
  slug: `nike-training-${i + 1}`,
  category: "Workout Shoes",
  price: 1200000 + i * 50000,
  images: [
    `https://picsum.photos/seed/product-${i + 1}-1/500/500`,
    `https://picsum.photos/seed/product-${i + 1}-2/500/500`,
    `https://picsum.photos/seed/product-${i + 1}-3/500/500`,
    `https://picsum.photos/seed/product-${i + 1}-4/500/500`,
  ],
  stockStatus: i % 3 === 0 ? "Limited" : undefined,
  promo: i % 4 === 0 ? "NEW" : undefined,
}));

export default function NewProductSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [loading, setLoading] = useState(true);
  const moved = useRef(false);

  /* ---------------- LOADING SIMULATION ---------------- */
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  /* ---------------- ARROW SCROLL ---------------- */
  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  }

  return (
    <section className="py-10">
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">New Year, New You</h2>

        <div className="flex items-center gap-3">
          <button className="text-sm font-medium">Shop</button>
          <button
            onClick={() => scroll("left")}
            className="rounded-full bg-gray-100 p-2 hover:bg-gray-200"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="rounded-full bg-gray-100 p-2 hover:bg-gray-200"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      {loading ? (
        <NewProductSkeleton count={6} />
      ) : (
        <div
          ref={scrollRef}
          className="
            flex gap-3 overflow-x-auto scrollbar-hide
            px-1 cursor-grab
          "
          onMouseDown={(e) => {
            isDragging.current = true;
            moved.current = false;
            startX.current = e.pageX;
            scrollLeft.current = scrollRef.current!.scrollLeft;
          }}
          onMouseMove={(e) => {
            if (!isDragging.current) return;
            const x = e.pageX;
            const walk = x - startX.current;

            if (Math.abs(walk) > 6) {
              moved.current = true;
            }

            scrollRef.current!.scrollLeft = scrollLeft.current - walk;
          }}
          onMouseUp={() => {
            isDragging.current = false;
          }}
          onMouseLeave={() => {
            isDragging.current = false;
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="
      group shrink-0
      min-w-[48%] sm:min-w-[200px]
      max-w-[48%] sm:max-w-[200px]
    "
            >
              <Link
                href={`/products/${p.slug}`}
                className="block"
                draggable={false}
                onClick={(e) => {
                  if (moved.current) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              >
                {/* IMAGE */}
                <div className="relative h-[180px] sm:h-[200px] w-full overflow-hidden bg-gray-100">
                  {/* IMAGE 1 */}
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    draggable={false}
                    className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />

                  {/* IMAGE 2 */}
                  <Image
                    src={p.images[1]}
                    alt={`${p.name} hover`}
                    fill
                    draggable={false}
                    className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  {/* STOCK BADGE */}
                  {p.stockStatus && (
                    <span className="absolute left-2 top-2 z-10 rounded bg-black px-2 py-0.5 text-[10px] text-white">
                      {p.stockStatus}
                    </span>
                  )}

                  {/* PROMO BADGE */}
                  {p.promo && (
                    <span className="absolute right-2 top-2 z-10 rounded bg-red-600 px-2 py-0.5 text-[10px] text-white">
                      {p.promo}
                    </span>
                  )}
                </div>

                {/* INFO */}
                <div className="mt-2 space-y-0.5">
                  <h3 className="text-xs font-semibold leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-[11px] text-gray-600">{p.category}</p>
                  <p className="text-xs font-medium">
                    Rp {p.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
