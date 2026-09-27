import { motion } from "framer-motion";

import leadershipData, {
  featuredLeader,
  executiveLeaders,
  leadershipTeam,
} from "./leadership";

import FeaturedLeader from "./FeaturedLeader";
import ExecutiveCard from "./ExecutiveCard";
import TeamCard from "./TeamCard";

export default function LeadershipTeam() {
  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32"
    >
      {/* ========================================= */}
      {/* Background Decorations */}
      {/* ========================================= */}

      {/* Blueprint Grid */}

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

      {/* Left Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#73B72B]/10
          blur-[130px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-24
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#102A72]/10
          blur-[140px]
        "
      />

      {/* Circle Outline */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          top-20
          h-72
          w-72
          rounded-full
          border
          border-[#73B72B]/20
        "
      />

      {/* Dot Pattern */}

      <div
        className="
          pointer-events-none
          absolute
          left-12
          top-16
          grid
          grid-cols-5
          gap-2
          opacity-25
        "
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[#102A72]"
          />
        ))}
      </div>

      {/* ========================================= */}
      {/* Content */}
      {/* ========================================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ========================================= */}
        {/* Section Heading */}
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
            duration: 0.7,
          }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-20"
        >
          {/* Eyebrow */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#73B72B]/30
              bg-[#73B72B]/10
              px-5
              py-2
              text-sm
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#73B72B]
            "
          >
            {leadershipData.eyebrow}
          </span>

          {/* Title */}

          <h2
            className="
              mt-8
              text-3xl
              font-black
              leading-tight
              text-[#102A72]
              sm:text-5xl
              md:text-6xl
            "
          >
            {leadershipData.title}
            <br />

            <span className="text-[#73B72B]">
              {leadershipData.highlight}
            </span>
          </h2>

          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#73B72B]" />

          {/* Description */}

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            {leadershipData.description}
          </p>
        </motion.div>        {/* ========================================= */}
        {/* Featured Leader */}
        {/* ========================================= */}

        <div className="mb-28">
          <FeaturedLeader leader={featuredLeader} />
        </div>

        {/* ========================================= */}
        {/* Executive Leadership */}
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
            duration: 0.6,
          }}
          className="mb-10 text-center sm:mb-14"
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              bg-[#102A72]/5
              px-5
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#102A72]
            "
          >
            Executive Leadership
          </span>

          <h3
            className="
              mt-5
              text-2xl
              sm:text-4xl
              font-black
              text-[#102A72]
            "
          >
            Leading Strategy & Innovation
          </h3>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            Our executive leadership team combines strategic vision,
            operational excellence and technical innovation to deliver
            world-class construction and engineering solutions.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#73B72B]" />
        </motion.div>

        {/* ========================================= */}
        {/* Executive Cards */}
        {/* ========================================= */}

        <div className="mb-16 grid gap-6 sm:mb-28 sm:gap-10 lg:grid-cols-2">

          {executiveLeaders.map((leader, index) => (
            <motion.div
              key={leader.id}
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
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <ExecutiveCard leader={leader} />
            </motion.div>
          ))}

        </div>        {/* ========================================= */}
        {/* Senior Leadership */}
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
            duration: 0.6,
          }}
          className="mb-10 text-center sm:mb-14"
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              bg-[#73B72B]/10
              px-5
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#73B72B]
            "
          >
            Senior Leadership
          </span>

          <h3
            className="
              mt-5
              text-2xl
              sm:text-4xl
              font-black
              text-[#102A72]
            "
          >
            Experts Delivering Every Project
          </h3>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            Behind every successful Ecohome project is a multidisciplinary
            leadership team bringing together expertise in engineering,
            architecture, project management, finance, operations and human
            resources.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#73B72B]" />
        </motion.div>

        {/* ========================================= */}
        {/* Team Grid */}
        {/* ========================================= */}

        <div
          className="
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={member.id}
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
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>

        {/* ========================================= */}
        {/* Leadership Quote */}
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
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-16
            sm:mt-24
            max-w-5xl
            rounded-[36px]
            border
            border-[#73B72B]/20
            bg-gradient-to-br
            from-[#102A72]
            via-[#0b1f56]
            to-[#060f2e]
            p-6
            text-center
            sm:p-10
            shadow-[0_25px_80px_rgba(16,42,114,.18)]
          "
        >
          <h3 className="text-3xl font-black text-white">
            Great Projects Begin With Great Leadership
          </h3>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            Our leadership team shares one vision—to deliver sustainable,
            innovative and high-quality construction solutions while creating
            lasting value for our clients, partners and communities.
          </p>

          <div
            className="
              mx-auto
              mt-8
              h-1
              w-20
              rounded-full
              bg-[#73B72B]
            "
          />
        </motion.div>        {/* ========================================= */}
        {/* Bottom Decorations */}
        {/* ========================================= */}

        {/* Left Dots */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-20
            left-10
            grid
            grid-cols-5
            gap-2
            opacity-20
          "
        >
          {Array.from({ length: 25 }).map((_, index) => (
            <span
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-[#73B72B]"
            />
          ))}
        </div>

        {/* Right Dots */}

        <div
          className="
            pointer-events-none
            absolute
            right-10
            top-1/2
            grid
            grid-cols-5
            gap-2
            opacity-20
          "
        >
          {Array.from({ length: 25 }).map((_, index) => (
            <span
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-[#102A72]"
            />
          ))}
        </div>

        {/* Bottom Glow Line */}

        <div
          className="
            mt-24
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#73B72B]
            to-transparent
            opacity-60
          "
        />

      </div>
    </section>
  );
}