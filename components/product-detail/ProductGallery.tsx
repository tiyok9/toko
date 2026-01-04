"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ProductGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="hidden sm:flex flex-col gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`relative h-16 w-16 border ${
              i === index ? "border-black" : "border-transparent"
            }`}
          >
            <Image src={img} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1 bg-gray-100 aspect-square">
        <Image src={images[index]} alt="" fill className="object-cover" />

        <button
          onClick={prev}
          className="absolute bottom-4 left-4 rounded-full bg-white p-2"
        >
          <FiChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute bottom-4 right-4 rounded-full bg-white p-2"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
