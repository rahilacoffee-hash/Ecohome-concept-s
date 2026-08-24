import { motion } from "framer-motion";

import whyChooseData, {
  features,
  experience,
  statistics,
} from "./whyChooseUs";

import FeatureCard from "./FeatureCard";
import ExperienceCard from "./ExperienceCard";
import StatsCard from "./StatsCard";

export default function WhyChooseUs({ content = {} }) {
  const section = { ...whyChooseData, ...content };
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#FAFBFC] py-14 sm:py-20 lg:py-28"
    >
      {/* ================= Background Decorations ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-10
          top-24
          h-[260px]
          w-[260px]
          sm:h-[420px]
          sm:w-[420px]
          rounded-full
          bg-[#73B72B]/5
          blur-[100px]
          sm:blur-[150px]
        "
      />

      {/* Blueprint Grid */}

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

      {/* Dot Pattern */}

      <div className="hidden sm:grid absolute bottom-10 left-12 grid-cols-6 gap-2 opacity-20">
        {Array.from({ length: 36 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-slate-400"
          />
        ))}
      </div>

      <div className="relative grid items-center gap-y-12 sm:gap-y-16 lg:grid-cols-2 lg:gap-x-12">

        {/* ================= LEFT ================= */}

        <div className="relative z-10 px-4 sm:px-6 lg:pl-16 xl:pl-24">

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
          >
            <div className="mb-4 sm:mb-5 flex items-center gap-3 sm:gap-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest sm:tracking-[0.3em] text-[#73B72B]">
                {section.badge}
              </span>

              <span className="h-[2px] w-10 sm:w-12 bg-[#73B72B]" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-[#102A72] md:text-5xl">
              {section.title}
              <br />
              <span className="text-[#73B72B]">{section.highlight}</span>
            </h2>

            <p className="mt-5 sm:mt-6 max-w-md text-sm sm:text-base leading-6 sm:leading-7 text-slate-500">
              {section.description}
            </p>

            <span className="mt-5 sm:mt-6 block h-1 w-10 rounded-full bg-[#73B72B]" />
          </motion.div>

          {/* ================= Feature Grid ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              delay: 0.2,
            }}
            className="mt-8 sm:mt-12 grid gap-4 sm:gap-5 grid-cols-1 xl:grid-cols-2"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative h-[360px] pb-8 sm:h-[520px] sm:pb-16 lg:h-[760px] lg:pb-24"
        >
          {/* Diagonal-cut image */}

          <div
            className="
              relative
              h-full
              w-full
              overflow-hidden
              [clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%)]
              lg:[clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)]
            "
          >
            <img
              src={section.image}
              alt="Why Choose Echohome"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          {/* Diagonal accent line */}

          <span
            className="
              pointer-events-none
              absolute
              left-[8%]
              top-0
              h-full
              w-[2px]
              origin-top
              -rotate-[5deg]
              bg-[#73B72B]/60
              lg:left-[13%]
            "
          />

          {/* Floating Cards */}

          <ExperienceCard experience={experience} />

          <StatsCard statistics={statistics} />
        </motion.div>
      </div>
    </section>
  );
}
