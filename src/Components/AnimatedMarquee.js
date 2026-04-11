import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/cor1.webp",
  "/cor2.webp",
  "/cor4.webp",
  "/cor1.webp",
  "/cor3.webp",
];

export default function CurvedAutoSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;
  const intervalRef = useRef(null);
  const delay = 3500; // ms between slides

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  // Auto-play logic
  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(nextSlide, delay);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div
      className="relative w-full bg-[#f9f9fa] py-10 overflow-hidden flex items-center justify-center min-h-[600px]"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {/* Navigation arrows */}
      <button
        onClick={() => {
          prevSlide();
          startAutoplay();
        }}
        className="absolute left-6 z-20 bg-white/70 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-md"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={() => {
          nextSlide();
          startAutoplay();
        }}
        className="absolute right-6 z-20 bg-white/70 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-md"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Slides */}
      <div
        className="relative flex items-center justify-center w-full h-full"
        style={{ perspective: "1600px" }}
      >
        {images.map((src, i) => {
          const offset = (i - activeIndex + total) % total;
          const centerOffset = offset > total / 2 ? offset - total : offset;

          // Positioning & animation
          const x = centerOffset * 360;
          const z = -Math.abs(centerOffset) * 160;
          const rotateY = centerOffset * -12;
          const scale = 1 - Math.abs(centerOffset) * 0.1;
          const opacity = 1 - Math.abs(centerOffset) * 0.3;

          // Higher zIndex for center (active) image
          const zIndex = 100 - Math.abs(centerOffset) * 10;

          return (
            <motion.div
              key={i}
              animate={{
                transform: `
                  translateX(${x}px)
                  translateZ(${z}px)
                  rotateY(${rotateY}deg)
                  scale(${scale})
                `,
                opacity,
                zIndex,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="absolute rounded-2xl overflow-hidden shadow-2xl border border-white bg-zinc-200"
              style={{
                width: "clamp(340px, 28vw, 460px)",
                height: "clamp(300px, 24vw, 400px)",
              }}
            >
              <img
                src={src}
                alt={`slide-${i}`}
                className="object-cover w-full h-full select-none pointer-events-none"
                draggable={false}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              startAutoplay();
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === activeIndex ? "bg-gray-800 w-5" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
