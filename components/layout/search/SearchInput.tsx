"use client";

import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDebounce } from "../../lib/useDebounce";

type Props = {
  onSearch: (q: string) => void;
};

export default function SearchInput({ onSearch }: Props) {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 400);

  // debounce search (autocomplete / api nanti)
  useEffect(() => {
    if (debouncedValue.trim()) {
      onSearch(debouncedValue);
    }
  }, [debouncedValue, onSearch]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && value.trim()) {
      onSearch(value);
    }
  }

  return (
    <div className="flex items-center gap-3 border-b pb-3 w-full">
      <FiSearch className="h-5 w-5 text-gray-500" />

      <input
        autoFocus
        value={value}
        placeholder="Search"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full bg-transparent text-lg outline-none placeholder:text-gray-400"
      />
    </div>
  );
}
