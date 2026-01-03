"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollState(threshold = 10, topOffset = 80) {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [atTop, setAtTop] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const diff = y - lastY.current;

      if (y > 0 && !hasScrolled) {
        setHasScrolled(true);
      }

      setAtTop(y <= topOffset);

      if (Math.abs(diff) > threshold) {
        setDirection(diff > 0 ? "down" : "up");
        lastY.current = y;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, topOffset, hasScrolled]);

  return { direction, atTop, hasScrolled };
}
