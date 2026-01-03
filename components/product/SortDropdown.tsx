"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const options = [
  { label: "None", value: "none" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

export default function SortDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]); // default NONE

  return (
    <div className="relative text-sm">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 font-medium hover:underline"
      >
        <span>Sort By:</span>
        <span className="font-semibold">{selected.label}</span>

        <FiChevronDown
          className={`ml-1 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 top-8 z-30 w-56 rounded border bg-white shadow">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className={`
                flex w-full items-center justify-between
                px-4 py-2 text-left
                hover:bg-gray-100
                ${selected.value === opt.value ? "font-semibold" : ""}
              `}
            >
              {opt.label}

              {selected.value === opt.value && (
                <span className="text-xs text-gray-500">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
