import { motion } from "framer-motion";

import timelineData, { timeline } from "./timeline";
import TimelineItem from "./TimelineItem";

export default function CompanyTimeline() {
  return (
    <section
      id="company-timeline"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-28
        lg:py-36
      "
    >
      {/* ========================================= */}
      {/* Blueprint Grid */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          bg-[linear-gradient(#102A72_1px,transparent_1px),linear-gradient(90deg,#102A72_1px,transparent_1px)]
          [background-size:52px_52px]
        "
      />

      {/* ========================================= */}
      {/* Decorative Glows */}
      {/* ========================================= */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#73B72B]/10
          blur-[150px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          -right-40
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#102A72]/10
          blur-[150px]
        "
      />

      {/* ========================================= */}
      {/* Decorative Rings */}
      {/* ========================================= */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -top-20
          right-20
          h-72
          w-72
          rounded-full
          border
          border-dashed
          border-[#73B72B]/20
        "
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -bottom-28
          left-10
          h-96
          w-96
          rounded-full
          border
          border-dashed
          border-[#102A72]/10
        "
      />

      {/* ========================================= */}
      {/* Dot Pattern */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-12
          top-16
          grid
          grid-cols-6
          gap-2
          opacity-20
        "
      >
        {Array.from({ length: 36 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[#73B72B]"
          />
        ))}
      </div>

      {/* ========================================= */}
      {/* Container */}
      {/* ========================================= */}

      <div className="container relative mx-auto px-6">
        {/* ========================================= */}
        {/* Section Header */}
        {/* ========================================= */}

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
          }}
          className="
            mx-auto
            mb-24
            max-w-3xl
            text-center
          "
        >
          <span
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.35em]
              text-[#73B72B]
            "
          >
            {timelineData.eyebrow}
          </span>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              leading-tight
              text-[#102A72]
              md:text-6xl
            "
          >
            {timelineData.title}

            <span className="block text-[#73B72B]">
              {timelineData.highlight}
            </span>
          </h2>

          <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-[#73B72B]" />

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-9
              text-slate-600
            "
          >
            {timelineData.description}
          </p>
        </motion.div>        {/* ========================================= */}
        {/* Timeline */}
        {/* ========================================= */}

        <div className="relative mx-auto max-w-7xl">

          {/* Animated Center Line */}

          <motion.div
            initial={{
              height: 0,
            }}
            whileInView={{
              height: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            className="
              absolute
              left-1/2
              top-0
              hidden
              w-[4px]
              -translate-x-1/2
              rounded-full
              bg-gradient-to-b
              from-[#73B72B]
              via-[#102A72]
              to-[#73B72B]
              lg:block
            "
          />

          {/* Timeline Glow */}

          <div
            className="
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-8
              -translate-x-1/2
              bg-[#73B72B]/10
              blur-3xl
              lg:block
            "
          />

          {/* Timeline Items */}

          <div className="relative z-10">
            {timeline.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>

        </div>

        {/* ========================================= */}
        {/* Timeline Summary */}
        {/* ========================================= */}

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
            delay: 0.3,
            duration: 0.8,
          }}
          className="mx-auto mt-28 max-w-4xl"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/20
              bg-white/80
              p-10
              shadow-[0_25px_70px_rgba(15,23,42,.12)]
              backdrop-blur-xl
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                -right-16
                -top-16
                h-60
                w-60
                rounded-full
                bg-[#73B72B]/10
                blur-[100px]
              "
            />

            <div className="relative z-10 text-center">

              <span
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  text-[#73B72B]
                "
              >
                OUR CONTINUOUS GROWTH
              </span>

              <h3
                className="
                  mt-6
                  text-4xl
                  font-black
                  text-[#102A72]
                  md:text-5xl
                "
              >
                Every Milestone Builds
                <span className="block text-[#73B72B]">
                  A Stronger Future
                </span>
              </h3>

              <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-[#73B72B]" />

              <p
                className="
                  mx-auto
                  mt-8
                  max-w-3xl
                  text-lg
                  leading-9
                  text-slate-600
                "
              >
                Our journey reflects years of dedication,
                continuous innovation and an unwavering
                commitment to delivering projects that
                positively impact communities across Nigeria.
              </p>

            </div>
          </div>
        </motion.div>        {/* ========================================= */}
        {/* Bottom Accent */}
        {/* ========================================= */}

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
            delay: 0.4,
            duration: 0.8,
          }}
          className="mt-24 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-24 bg-gradient-to-r from-transparent to-[#73B72B]" />

            <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#73B72B] bg-white">
              <div className="h-2.5 w-2.5 rounded-full bg-[#73B72B]" />
            </div>

            <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#73B72B]" />
          </div>
        </motion.div>

        {/* ========================================= */}
        {/* Closing Statement */}
        {/* ========================================= */}

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
            delay: 0.5,
            duration: 0.8,
          }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="text-lg leading-8 text-slate-500">
            Our story is still being written. Every project, every
            partnership, and every satisfied client adds another chapter
            to the legacy we're building for future generations.
          </p>
        </motion.div>
      </div>

      {/* ========================================= */}
      {/* Bottom Fade */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-40
          bg-gradient-to-b
          from-transparent
          via-white/60
          to-white
        "
      />

      {/* ========================================= */}
      {/* Bottom Right Decorative Ring */}
      {/* ========================================= */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -bottom-32
          -right-32
          hidden
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-dashed
          border-[#73B72B]/15
          lg:block
        "
      />

      {/* ========================================= */}
      {/* Vertical Accent Line */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-10
          top-0
          hidden
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-[#102A72]/10
          to-transparent
          xl:block
        "
      />
    </section>
  );
}