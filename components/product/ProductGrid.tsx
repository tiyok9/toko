"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

export default function ProductGrid({
  initialProducts,
  initialPage,
  filters,
}: {
  initialProducts: any[];
  initialPage: number;
  filters: {
    sort?: string;
    gender?: string;
    price?: string;
  };
}) {
  const [products, setProducts] = useState(initialProducts);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  async function loadMore() {
    if (loading || !hasMore) return;
    setLoading(true);

    const params = new URLSearchParams({
      page: String(page + 1),
      sort: filters.sort ?? "",
      gender: filters.gender ?? "",
      price: filters.price ?? "",
    });

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });

    const res = await fetch(`/api/products?${params}`);
    const next = await res.json();

    if (next.length === 0) {
      setHasMore(false);
    } else {
      setProducts((p) => [...p, ...next]);
      setPage((p) => p + 1);
    }

    setLoading(false);
  }

  useEffect(() => {
    function onScroll() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        loadMore();
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {loading && <ProductSkeleton count={6} />}
      </div>

      <noscript>
        <a href={`/products?page=${page + 1}`}>Next page</a>
      </noscript>
    </>
  );
}
