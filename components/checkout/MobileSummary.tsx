"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

export default function MobileSummary({ order }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6 rounded border lg:hidden">
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-4"
      >
        <span className="font-medium">Order Summary</span>
        <span className="flex items-center gap-2">
          Rp {order.total.toLocaleString("id-ID")}
          <FiChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
        </span>
      </button>

      {/* CONTENT */}
      {open && (
        <div className="border-t p-4 space-y-4">
          <div className="flex gap-4">
            <Image
              src={order.product.image}
              alt=""
              width={64}
              height={64}
              className="bg-gray-100"
            />
            <div className="text-sm">
              <p className="font-medium">{order.product.name}</p>
              <p>{order.product.category}</p>
              <p>Size {order.product.size}</p>
              <p>Qty {order.product.qty}</p>
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <Row label="Subtotal" value={order.subtotal} />
            <Row label="Duties & Taxes" value={order.duties} />
            <Row label="Shipping" value="Free" />
          </div>
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: any) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span>
        {typeof value === "number"
          ? `Rp ${value.toLocaleString("id-ID")}`
          : value}
      </span>
    </div>
  );
}
