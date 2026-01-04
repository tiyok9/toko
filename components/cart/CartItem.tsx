"use client";

import Image from "next/image";
import { FiTrash2, FiHeart } from "react-icons/fi";

export default function CartItem({ item }: any) {
  return (
    <div className="flex gap-4 border-b pb-6">
      {/* IMAGE */}
      <Image
        src={item.image}
        alt={item.name}
        width={120}
        height={120}
        className="bg-gray-100"
      />

      {/* CONTENT */}
      <div className="flex-1">
        {/* 💰 PRICE (MOBILE ONLY) */}
        <p className="mb-1 text-sm font-semibold lg:hidden">
          Rp {item.price.toLocaleString("id-ID")}
        </p>

        {/* TITLE */}
        <h3 className="font-medium leading-tight">{item.name}</h3>

        <p className="text-sm text-gray-600">{item.category}</p>
        <p className="text-sm text-gray-600">{item.color}</p>
        <p className="text-sm text-gray-600">Size {item.size}</p>

        {/* ACTIONS */}
        <div className="mt-2 flex items-center gap-3">
          <button className="border px-3 py-1">−</button>
          <span>{item.quantity}</span>
          <button className="border px-3 py-1">+</button>

          <button className="ml-4 text-gray-600">
            <FiTrash2 />
          </button>
          <button className="text-gray-600">
            <FiHeart />
          </button>
        </div>

        {/* STOCK WARNING */}
        {item.stockWarning && (
          <p className="mt-2 text-sm text-orange-600">{item.stockWarning}</p>
        )}
      </div>

      {/* 💰 PRICE (DESKTOP ONLY) */}
      <p className="hidden font-medium lg:block">
        Rp {item.price.toLocaleString("id-ID")}
      </p>
    </div>
  );
}
