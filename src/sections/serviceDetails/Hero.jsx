import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import Breadcrumb from "./Breadcrumb";

export default function Hero({ hero, breadcrumb }) {
  const BadgeIcon = hero.badgeIcon;

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pb-16 pt-8">
      {/* ================= DOT PATTERN ================= */}

      <div className="pointer-events-none absolute left-6 top-6 grid grid-cols-6 gap-2 opacity-20">
        {Array.from({ length: 24 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-slate-400"
          />
        ))}
      </div>

      {/* ================= BLUEPRINT GRID ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(#102A72_1px,transparent_1px),linear-gradient(90deg,#102A72_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />

      <div className="relative px-6 lg:px-16">
        {/* ================= BREADCRUMB ================= */}

        <Breadcrumb breadcrumb={breadcrumb} />

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#73B72B]">
              {BadgeIcon && <BadgeIcon size={14} />}
              <span>{hero.badge}</span>
            </div>

            {/* Title */}

            <h1 className="text-5xl font-black leading-tight text-[#102A72] md:text-6xl">
              {hero.title}
              <br />

              <span className="text-[#73B72B]">
                {hero.highlight}
              </span>
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-md leading-7 text-slate-500">
              {hero.description}
            </p>

            {/* ================= BUTTONS ================= */}

            <div className="mt-8 flex flex-wrap gap-4">
              {/* Primary Button */}

              <Link
                to={hero.primaryButton.href}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#73B72B]
                  px-7
                  py-4
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#65a324]
                  hover:shadow-[0_15px_35px_rgba(115,183,43,.35)]
                "
              >
                {hero.primaryButton.label}

                <FaArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* Secondary Button */}

              <Link
                to={hero.secondaryButton.href}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[#102A72]/20
                  px-7
                  py-4
                  font-bold
                  text-[#102A72]
                  transition-all
                  duration-300
                  hover:border-[#102A72]/40
                  hover:bg-[#102A72]/5
                "
              >
                {hero.secondaryButton.label}
              </Link>
            </div>

            {/* ================= STATS ================= */}

            <div className="mt-10 flex flex-wrap gap-8">
              {hero.stats?.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.id}
                    className="flex items-center gap-3"
                  >
                    {Icon && (
                      <Icon
                        size={20}
                        className="text-[#73B72B]"
                      />
                    )}

                    <div>
                      <span className="block text-lg font-black text-[#102A72]">
                        {stat.value}
                      </span>

                      <span className="block text-xs text-slate-500">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative h-[340px] sm:h-[420px] lg:h-[500px]"
          >
            <div
              className="
                h-full
                w-full
                overflow-hidden
                rounded-tr-[120px]
                shadow-[0_40px_100px_rgba(15,23,42,.15)]
              "
            >
              {hero.image ? (
                <img
                  src={hero.image}
                  alt={hero.highlight || hero.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[#102A72] p-8 text-center text-3xl font-black text-white">
                  {hero.title}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
