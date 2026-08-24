import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";

export default function ExperienceBadge({
  years = "15+",
  title = "Years of Excellence",
  subtitle = "Building Trust Across Nigeria",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
        delay: 0.4,
      }}
      animate={{
        y: [0, -8, 0],
      }}
      className="
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/10
        p-7
        shadow-[0_25px_80px_rgba(0,0,0,.35)]
        backdrop-blur-xl
        w-[290px]
      "
    >
      {/* Green Glow */}

      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#73B72B]/20 blur-[80px]" />

      {/* Blueprint Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      {/* Decorative Icon */}

      <div className="relative z-10 flex items-center justify-between">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-[#73B72B]
            text-white
            shadow-lg
          "
        >
          <Award size={28} />
        </div>

        <Sparkles
          size={20}
          className="text-[#73B72B]"
        />
      </div>

      {/* Number */}

      <div className="relative z-10 mt-6">
        <h3 className="text-5xl font-black text-white">
          {years}
        </h3>

        <div className="mt-2 h-1 w-12 rounded-full bg-[#73B72B]" />
      </div>

      {/* Text */}

      <div className="relative z-10 mt-5">
        <h4 className="text-xl font-bold text-white">
          {title}
        </h4>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          {subtitle}
        </p>
      </div>

      {/* Bottom Accent */}

      <div className="relative z-10 mt-6 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#73B72B]" />

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#73B72B]">
          Trusted Since 2009
        </span>
      </div>
    </motion.div>
  );
}
