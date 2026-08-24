import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import testimonialsData from "./testimonials";
import TestimonialSlider from "./Testimonialslider";
import { fetchTestimonials } from "../../services/testimonials";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    fetchTestimonials()
      .then((data) => active && setTestimonials(data))
      .catch((requestError) => active && setError(requestError.message))
      .finally(() => active && setIsLoading(false));

    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F8FAFC] pb-44 pt-24 lg:pb-56 lg:pt-32"
    >
      {/* ================= Background Decorations ================= */}

      <div className="pointer-events-none absolute -left-16 -top-10 h-[260px] w-[260px] rounded-full bg-[#73B72B]/30 blur-[90px]" />

      <div className="pointer-events-none absolute -right-10 top-0 h-[220px] w-[220px] rounded-full bg-[#73B72B]/20 blur-[90px]" />

      {/* Blueprint Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(#102A72_1px,transparent_1px),linear-gradient(90deg,#102A72_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />

      {/* Dot Patterns */}

      <div className="pointer-events-none absolute left-10 top-44 grid grid-cols-6 gap-2 opacity-20">
        {Array.from({ length: 36 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-slate-400" />
        ))}
      </div>

      <div className="pointer-events-none absolute right-10 top-10 grid grid-cols-8 gap-2 opacity-20">
        {Array.from({ length: 56 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#73B72B]" />
        ))}
      </div>

      {/* ================= Navy Base Panel ================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-[260px]
          bg-gradient-to-b
          from-[#0B1A4D]
          to-[#060f2e]
        "
      />

      <div className="relative px-6">

        {/* ================= Section Header ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-[2px] w-14 bg-[#73B72B]" />

            <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#73B72B]">
              {testimonialsData.badge}
            </span>

            <span className="h-[2px] w-14 bg-[#73B72B]" />
          </div>

          <h2 className="text-4xl font-black leading-tight text-[#102A72] md:text-5xl">
            {testimonialsData.title}
            <br />
            <span className="text-[#73B72B]">{testimonialsData.highlight}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-500">
            {testimonialsData.description}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: testimonialsData.rating }).map((_, index) => (
                <FaStar key={index} size={18} className="text-[#73B72B]" />
              ))}
            </div>

            <span className="font-bold text-[#102A72]">
              {testimonialsData.clientsCount}
            </span>
          </div>
        </motion.div>

        {/* ================= Slider ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-16"
        >
          {isLoading && <div className="py-20 text-center font-semibold text-[#102A72]">Loading testimonials…</div>}
          {error && <div className="py-20 text-center"><p className="font-semibold text-red-600">{error}</p><button onClick={() => window.location.reload()} className="mt-4 font-bold text-[#73B72B]">Try again</button></div>}
          {!isLoading && !error && testimonials.length === 0 && <div className="py-20 text-center text-slate-500">Testimonials will appear here once they are published.</div>}
          {!isLoading && !error && testimonials.length > 0 && <TestimonialSlider testimonials={testimonials} />}
        </motion.div>
      </div>
    </section>
  );
}
