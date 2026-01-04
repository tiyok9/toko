"use client";

import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import SearchOverlay from "./search/SearchOverlay";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // contoh jumlah cart
  const cartCount = 3;

  const router = useRouter();

  function handleSearch(q: string) {
    router.push(`/products?q=${encodeURIComponent(q)}`);
  }

  // shadow saat scroll
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-40 w-full bg-white transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="text-xl font-bold">
            Toko Online
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
              <button
                onClick={() => setOpenSearch(true)}
                className="hidden sm:flex max-w-xl items-center gap-3 rounded-full bg-gray-100 px-5 py-2.5 text-sm text-gray-500 hover:bg-gray-200"
              >
                <FiSearch />
                Search
              </button>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/products" className="hover:text-blue-600">
                Produk
              </Link>
              <Link href="/cart" className="relative cursor-pointer">
                <MdOutlineShoppingBag size={32} />
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            <div className="flex items-center gap-3 sm:hidden">
              <button onClick={() => setOpenSearch(true)}>
                <FiSearch size={22} />
              </button>

              <div className="relative">
                <MdOutlineShoppingBag size={28} />
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
                    {cartCount}
                  </span>
                )}
              </div>

              <button onClick={() => setOpenMenu(true)}>
                <FiMenu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-16" />

      <SearchOverlay
        open={openSearch}
        onClose={() => setOpenSearch(false)}
        onSearch={handleSearch}
      />

      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenMenu(false)}
            />

            <motion.div
              className="fixed right-0 top-0 z-50 h-full w-64 bg-white p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 100 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x > 80) setOpenMenu(false);
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold">Menu</h2>
                <button onClick={() => setOpenMenu(false)}>
                  <FiX size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-4 text-sm font-medium">
                <Link
                  href="/"
                  onClick={() => setOpenMenu(false)}
                  className="hover:text-blue-600"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  onClick={() => setOpenMenu(false)}
                  className="hover:text-blue-600"
                >
                  Produk
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
