import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import TestimonialCard from "./Testimonialcard";

let AUTO_ADVANCE_MS = 5000;

let slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.94,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.94,
  }),
};

export default function TestimonialSlider({ testimonials }) {
  let [activeIndex, setActiveIndex] = useState(0);
  let [direction, setDirection] = useState(1);
  let [isPaused, setIsPaused] = useState(false);

  let total = testimonials.length;
  let prevIndex = (activeIndex - 1 + total) % total;
  let nextIndex = (activeIndex + 1) % total;

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, Math.max(total - 1, 0)));
  }, [total]);

  function goNext() {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % total);
  }

  function goPrev() {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + total) % total);
  }

  function goToIndex(index) {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  // ================= Auto-advance every 5s =================

  useEffect(() => {
    if (total === 0 || isPaused) return;

    let timer = setTimeout(goNext, AUTO_ADVANCE_MS);

    return () => clearTimeout(timer);
  }, [activeIndex, isPaused, total]);

  if (total === 0) return null;

  // ================= Swipe / Drag handling =================

  function handleDragEnd(event, info) {
    setIsPaused(false);

    let swipeThreshold = 60;

    if (info.offset.x < -swipeThreshold) {
      goNext();
    } else if (info.offset.x > swipeThreshold) {
      goPrev();
    }
  }

  return (
    <div
      className="relative mx-auto max-w-6xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Progress bar keyframes */}

      <style>{`
        @keyframes testimonial-progress-fill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      <div className="relative flex items-center justify-center">

        {/* ================= Left Peek ================= */}

        <div className="hidden w-[280px] shrink-0 -mr-16 translate-y-6 scale-95 opacity-70 lg:block">
          <TestimonialCard
            testimonial={testimonials[prevIndex]}
            variant="peek"
          />
        </div>

        {/* ================= Active Card ================= */}

        <div className="relative z-10 w-full max-w-2xl overflow-hidden">
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="popLayout"
          >
            <motion.div
              key={testimonials[activeIndex].id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 320, damping: 32 },
                opacity: { duration: 0.25 },
                scale: { duration: 0.25 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragStart={() => setIsPaused(true)}
              onDragEnd={handleDragEnd}
              className="cursor-grab touch-pan-y active:cursor-grabbing"
            >
              <TestimonialCard
                testimonial={testimonials[activeIndex]}
                variant="active"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= Right Peek ================= */}

        <div className="hidden w-[280px] shrink-0 -ml-16 translate-y-6 scale-95 opacity-70 lg:block">
          <TestimonialCard
            testimonial={testimonials[nextIndex]}
            variant="peek"
          />
        </div>

        {/* ================= Arrows ================= */}

        <button
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="
            absolute
            left-2
            top-1/2
            z-20
            flex
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#102A72]
            shadow-[0_10px_30px_rgba(15,23,42,.15)]
            transition-transform
            duration-300
            hover:scale-110
            lg:left-10
          "
        >
          <FaChevronLeft size={16} />
        </button>

        <button
          onClick={goNext}
          aria-label="Next testimonial"
          className="
            absolute
            right-2
            top-1/2
            z-20
            flex
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#102A72]
            shadow-[0_10px_30px_rgba(15,23,42,.15)]
            transition-transform
            duration-300
            hover:scale-110
            lg:right-10
          "
        >
          <FaChevronRight size={16} />
        </button>
      </div>

      {/* ================= Progress Bar ================= */}

      <div className="mx-auto mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/15">
        <div
          key={activeIndex}
          className="h-full rounded-full bg-[#73B72B]"
          style={{
            animationName: "testimonial-progress-fill",
            animationDuration: `${AUTO_ADVANCE_MS}ms`,
            animationTimingFunction: "linear",
            animationFillMode: "forwards",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        />
      </div>

      {/* ================= Dots ================= */}

      <div className="mt-6 flex items-center justify-center gap-3">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            onClick={() => goToIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`
              h-2.5
              rounded-full
              transition-all
              duration-300
              ${
                index === activeIndex
                  ? "w-7 bg-[#73B72B]"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
