"use client";

import { useState } from "react";

export default function FilterDropdown({ label }: { label: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full border px-4 py-1 text-sm"
      >
        {label}
      </button>

      {open && (
        <div className="absolute left-0 top-10 z-20 w-48 rounded border bg-white p-3 shadow">
          <label className="block text-sm">
            <input type="checkbox" /> Option 1
          </label>
          <label className="block text-sm">
            <input type="checkbox" /> Option 2
          </label>
        </div>
      )}
    </div>
  );
}
