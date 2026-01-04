"use client";

import { useState } from "react";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector";

export default function ProductInfo({ product }: any) {
  const [size, setSize] = useState<string | null>(null);

  return (
    <div>
      {/* Badge */}
      <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs">
        ⭐ {product.rating}
      </span>

      <h1 className="mt-4 text-2xl font-semibold">{product.name}</h1>
      <p className="text-sm text-gray-600">{product.category}</p>

      <p className="mt-2 text-lg font-medium">
        Rp {product.price.toLocaleString("id-ID")}
      </p>

      <ColorSelector colors={product.colors} />

      <SizeSelector sizes={product.sizes} selected={size} onSelect={setSize} />

      <button
        disabled={!size}
        className="mt-6 w-full rounded-full bg-black py-4 text-white disabled:bg-gray-300"
      >
        Add to Bag
      </button>

      <button className="mt-3 w-full rounded-full border py-3">
        Favourite ♡
      </button>
    </div>
  );
}
