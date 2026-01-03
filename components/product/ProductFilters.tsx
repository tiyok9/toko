"use client";

import FilterSection from "./FilterSection";
import { FILTERS } from "./filterConfig";
import { useMultiFilter } from "./useMultiFilter";

export default function ProductFilters() {
  const { getValues, toggleValue } = useMultiFilter();

  return (
    <aside className="sticky top-24 h-[calc(100vh-120px)] overflow-y-auto pr-2 text-sm">
      {FILTERS.map((section) => {
        const selected = getValues(section.key);

        return (
          <FilterSection key={section.key} title={section.title}>
            {section.options.map((opt) => (
              <label key={opt.value} className="block">
                <input
                  type="checkbox"
                  checked={selected.includes(opt.value)}
                  onChange={() => toggleValue(section.key, opt.value)}
                />{" "}
                {opt.label}
              </label>
            ))}
          </FilterSection>
        );
      })}
    </aside>
  );
}
