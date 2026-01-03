"use client";

import { AnimatePresence, motion } from "framer-motion";
import FilterSection from "./FilterSection";
import { FILTERS } from "./filterConfig";
import { useSearchParams, useRouter } from "next/navigation";
import { useMultiFilter } from "./useMultiFilter";

export default function FilterDrawer() {
  const params = useSearchParams();
  const router = useRouter();
  const { getValues, toggleValue } = useMultiFilter();

  const open = params.get("openFilter") === "true";

  function close() {
    const p = new URLSearchParams(params.toString());
    p.delete("openFilter");
    router.push(`/products?${p}`);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            className="fixed left-0 top-0 z-50 h-screen w-80 bg-white flex flex-col"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
          >
            <div className="border-b p-4 font-semibold">Filters</div>

            <div className="flex-1 overflow-y-auto p-4 text-sm">
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
            </div>

            <button
              onClick={close}
              className="border-t py-3 text-sm font-semibold"
            >
              Apply Filters
            </button>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
