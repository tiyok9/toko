"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchInput from "./SearchInput";
import PopularSearch from "./PopularSearch";

type Props = {
  open: boolean;
  onClose: () => void;
  onSearch: (q: string) => void;
};

export default function SearchOverlay({ open, onClose, onSearch }: Props) {
  // ESC to close
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-white grid sm:grid-cols-[20%_1fr_20%] grid-cols-[1fr_20%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="hidden sm:block text-center mt-4"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="font-black text-4xl capitalize">toko</h1>
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <div className="mx-auto flex items-center px-6 py-4">
              <SearchInput onSearch={onSearch} />
            </div>

            <div className="mx-auto px-6">
              <PopularSearch
                onSelect={(q) => {
                  onSearch(q);
                  onClose();
                }}
              />
            </div>
          </motion.div>

          <motion.div
            className="flex mt-4"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={onClose}
              className="text-sm font-medium text-gray-600 hover:text-black hover:cursor-pointer h-fit mt-4"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
