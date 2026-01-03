"use client";

import { useRouter } from "next/navigation";

export default function FilterBar() {
  const router = useRouter();

  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
      <button
        onClick={() => router.push("?openFilter=true")}
        className="shrink-0 rounded-full border px-4 py-1 text-sm"
      >
        All Filters
      </button>

      <button className="shrink-0 rounded-full border px-4 py-1 text-sm">
        Gender
      </button>
      <button className="shrink-0 rounded-full border px-4 py-1 text-sm">
        Price
      </button>
      <button className="shrink-0 rounded-full border px-4 py-1 text-sm">
        Colour
      </button>
      <button className="shrink-0 rounded-full border px-4 py-1 text-sm">
        Brand
      </button>
    </div>
  );
}
