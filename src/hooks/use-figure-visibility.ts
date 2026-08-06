"use client";

import { useEffect, useRef, useState } from "react";

export function useFigureVisibility<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const figure = ref.current;
    if (!figure) return;

    const updateFromRatio = (ratio: number) => {
      setIsActive((current) => {
        if (ratio >= 0.22) return true;
        if (ratio <= 0.08) return false;
        return current;
      });
    };

    let frame = 0;
    const measureVisibility = () => {
      frame = 0;
      const rect = figure.getBoundingClientRect();
      const visibleHeight = Math.max(
        0,
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0),
      );
      updateFromRatio(visibleHeight / rect.height);
    };
    const scheduleMeasurement = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measureVisibility);
    };

    const observer = new IntersectionObserver(
      ([entry]) => updateFromRatio(entry.intersectionRatio),
      { threshold: [0, 0.08, 0.22, 0.3] },
    );

    observer.observe(figure);
    window.addEventListener("scroll", scheduleMeasurement, { passive: true });
    window.addEventListener("resize", scheduleMeasurement);
    scheduleMeasurement();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleMeasurement);
      window.removeEventListener("resize", scheduleMeasurement);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return { ref, isActive };
}
