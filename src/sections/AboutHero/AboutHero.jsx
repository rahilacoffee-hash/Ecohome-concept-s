import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import aboutHero, { breadcrumbs } from "./aboutHero";

import Breadcrumb from "./Breadcrumb";
import ExperienceBadge from "./ExperienceBadge";
import heroImage from "../../assets/images/projects/about.png";

export default function AboutHero() {
  const EyebrowIcon = aboutHero.eyebrowIcon;

  return (
    <section
      id="about-hero"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-[#060f2e]
      "
    >
      {/* ========================================= */}
      {/* Background Image */}
      {/* ========================================= */}

      <motion.div
        initial={{
          scale: 1.08,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Ecohome Concepts"
          className="h-full w-full object-cover"
        />

        {/* Main Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#060f2e]/95
            via-[#060f2e]/82
            to-[#060f2e]/35
          "
        />

        {/* Top Fade */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#060f2e]/35
            via-transparent
            to-[#060f2e]/70
          "
        />

        {/* Extra Dark Layer */}

        <div className="absolute inset-0 bg-black/15" />
      </motion.div>

      {/* ========================================= */}
      {/* Blueprint Grid */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.05]
          bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
          [background-size:55px_55px]
        "
      />

      {/* ========================================= */}
      {/* Decorative Glows */}
      {/* ========================================= */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-40
          -top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#73B72B]/20
          blur-[140px]
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
          -right-36
          bottom-0
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#73B72B]/15
          blur-[130px]
        "
      />

      {/* ========================================= */}
      {/* Decorative Circles */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-20
          top-24
          h-[260px]
          w-[260px]
          rounded-full
          border
          border-[#73B72B]/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-10
          bottom-16
          h-[200px]
          w-[200px]
          rounded-full
          border
          border-white/10
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
          grid-cols-5
          gap-2
          opacity-30
        "
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-white"
          />
        ))}
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-12
          left-12
          grid
          grid-cols-5
          gap-2
          opacity-30
        "
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[#73B72B]"
          />
        ))}
      </div>

      {/* ========================================= */}
      {/* Content Wrapper */}
      {/* ========================================= */}

      <div className="container relative z-10 mx-auto px-6 lg:px-10">
        <div className="grid items-center gap-20 lg:grid-cols-[1.15fr_.85fr]">          {/* ========================================= */}
          {/* Left Content */}
          {/* ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}

            <Breadcrumb items={breadcrumbs} />

            {/* Eyebrow */}

            <div className="mb-7 flex items-center gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#73B72B]/20
                  backdrop-blur-md
                  border
                  border-[#73B72B]/30
                "
              >
                <EyebrowIcon
                  size={24}
                  className="text-[#73B72B]"
                />
              </div>

              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#73B72B]">
                {aboutHero.eyebrow}
              </span>

              <span className="hidden h-[2px] w-20 bg-[#73B72B] lg:block" />
            </div>

            {/* Heading */}

            <motion.h1
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
                delay: 0.15,
                duration: 0.8,
              }}
              className="
                text-5xl
                font-black
                leading-[1.02]
                text-white
                md:text-6xl
                xl:text-7xl
              "
            >
              {aboutHero.title}

              <span className="mt-3 block text-[#73B72B]">
                {aboutHero.highlight}
              </span>
            </motion.h1>

            {/* Animated Divider */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 90,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.45,
                duration: 0.8,
              }}
              className="
                mt-8
                h-1
                rounded-full
                bg-[#73B72B]
              "
            />

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
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
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-9
                text-slate-300
              "
            >
              {aboutHero.description}
            </motion.p>

            {/* CTA Buttons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
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
                duration: 0.7,
              }}
              className="mt-12 flex flex-wrap gap-5"
            >
              {/* Primary */}

              <Link
                to="/projects"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#73B72B]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-[0_15px_40px_rgba(115,183,43,.35)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(115,183,43,.55)]
                "
              >
                Explore Our Projects

                <ArrowRight
                  size={20}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                />
              </Link>

              {/* Secondary */}

              <Link
                to="/contact"
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-white/5
                  px-8
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur-lg
                  transition-all
                  duration-300
                  hover:border-[#73B72B]
                  hover:bg-white/10
                "
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>          {/* ========================================= */}
          {/* Right Content */}
          {/* ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
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
              delay: 0.25,
            }}
            className="
              relative
              hidden
              min-h-[720px]
              lg:flex
              items-center
              justify-center
            "
          >
            {/* ================= Floating Experience Badge ================= */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-10
                right-0
                z-30
              "
            >
              <ExperienceBadge
                years={aboutHero.experience}
                title={aboutHero.experienceText}
                subtitle="Delivering landmark government, commercial and residential developments."
              />
            </motion.div>

            {/* ================= Decorative Glass Card ================= */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-0
                bottom-32
                z-20
                w-[280px]
                rounded-[30px]
                border
                border-white/10
                bg-white/10
                p-7
                backdrop-blur-xl
                shadow-[0_25px_80px_rgba(0,0,0,.30)]
              "
            >
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#73B72B]">
                Trusted Nationwide
              </span>

              <h3 className="mt-4 text-3xl font-black text-white">
                150+
              </h3>

              <p className="mt-2 leading-7 text-slate-300">
                Successful projects delivered across government,
                commercial and residential sectors.
              </p>

              <div className="mt-6 flex gap-2">
                <span className="h-2 w-2 rounded-full bg-[#73B72B]" />
                <span className="h-2 w-2 rounded-full bg-[#73B72B]/70" />
                <span className="h-2 w-2 rounded-full bg-[#73B72B]/40" />
              </div>
            </motion.div>

            {/* ================= Decorative Ring ================= */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                top-28
                left-24
                h-56
                w-56
                rounded-full
                border
                border-dashed
                border-[#73B72B]/20
              "
            />

            {/* ================= Secondary Ring ================= */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                bottom-16
                right-12
                h-36
                w-36
                rounded-full
                border
                border-dashed
                border-white/10
              "
            />

            {/* ================= Vertical Accent ================= */}

            <div
              className="
                absolute
                right-40
                top-24
                h-[480px]
                w-[2px]
                bg-gradient-to-b
                from-transparent
                via-[#73B72B]/60
                to-transparent
              "
            />

            {/* ================= Floating Green Orb ================= */}

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
                bottom-10
                left-20
                h-24
                w-24
                rounded-full
                bg-[#73B72B]/20
                blur-2xl
              "
            />

            {/* ================= Floating White Orb ================= */}

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                x: [0, 12, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
              }}
              className="
                absolute
                top-20
                right-32
                h-14
                w-14
                rounded-full
                bg-white/10
                blur-xl
              "
            />
          </motion.div>        </div>

       
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
          h-44
          bg-gradient-to-b
          from-transparent
          via-[#060f2e]/40
          to-white
        "
      />

      {/* ========================================= */}
      {/* Floating Accent Line */}
      {/* ========================================= */}

      <motion.div
        animate={{
          opacity: [0.2, 1, 0.2],
          scaleY: [0.9, 1.05, 0.9],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          left-12
          top-1/2
          hidden
          h-40
          w-[2px]
          -translate-y-1/2
          bg-gradient-to-b
          from-transparent
          via-[#73B72B]
          to-transparent
          xl:block
        "
      />

      {/* ========================================= */}
      {/* Bottom Right Blueprint Ring */}
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
          -bottom-32
          -right-32
          hidden
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-dashed
          border-[#73B72B]/10
          lg:block
        "
      />
    </section>
  );
}
