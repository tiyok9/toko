"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Slide = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Promo Akhir Tahun",
    description: "Diskon hingga 50%",
    image: "https://picsum.photos/1200/600?random=1",
  },
  {
    id: 2,
    title: "Produk Terbaru",
    description: "Koleksi terbaru telah tersedia",
    image: "https://picsum.photos/1200/600?random=2",
  },
  {
    id: 3,
    title: "Gratis Ongkir",
    description: "Belanja tanpa biaya kirim",
    image: "https://picsum.photos/1200/600?random=3",
  },
];

export default function ContentSlider() {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((prev) => (prev + 1) % slides.length);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          className="relative h-[220px] sm:h-[380px]"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.4 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) next();
            if (info.offset.x > 80) prev();
          }}
        >
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 1200px"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-full flex-col justify-center px-6 text-white sm:px-12">
            <h2 className="text-2xl font-bold sm:text-4xl">
              {slides[index].title}
            </h2>
            <p className="mt-2 max-w-md text-sm sm:text-lg">
              {slides[index].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-4 right-6 z-30 flex gap-2">
        <button
          onClick={prev}
          className="rounded-full bg-white/80 p-2 backdrop-blur hover:bg-white"
        >
          <FiChevronLeft />
        </button>

        <button
          onClick={next}
          className="rounded-full bg-white/80 p-2 backdrop-blur hover:bg-white"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
