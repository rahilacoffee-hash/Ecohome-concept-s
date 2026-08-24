import { motion } from "framer-motion";

import Container from "../../components/layout/Container";

import ctaData, { buttons, trustPills } from "./cta";
import CTAButtons from "./Ctabuttons";
import TrustPills from "./Trustpills";

import backgroundImage from "../../assets/images/backgrounds/government.png";

export default function CTA({ content = {} }) {
  const contentData = { ...ctaData, ...content };
  const EyebrowIcon = contentData.eyebrowIcon;

  return (
    <section
      id="cta"
      className="
        relative
        flex
        min-h-[560px]
        items-center
        overflow-hidden
        bg-[#060f2e]
        py-20
        sm:min-h-[680px]
        sm:py-24
        lg:min-h-[820px]
        lg:py-0
      "
    >
      {/* ================= Background ================= */}

      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <img
          src={backgroundImage}
          alt="Construction Project"
          className="h-full w-full object-cover"
        />

        {/* Main Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#060f2e]/95 via-[#060f2e]/80 to-[#060f2e]/30" />

        {/* Extra Dark Layer */}

        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* ================= Blueprint Grid ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.06]
          bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          [background-size:52px_52px]
        "
      />

      {/* ================= Decorative Glows ================= */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-14
          -top-14
          h-[180px]
          w-[180px]
          rounded-full
          border
          border-[#73B72B]/25
          sm:-left-20
          sm:-top-20
          sm:h-[260px]
          sm:w-[260px]
          lg:-left-28
          lg:-top-28
          lg:h-[340px]
          lg:w-[340px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-20
          -top-20
          h-[180px]
          w-[180px]
          rounded-full
          bg-[#73B72B]/20
          blur-[70px]
          sm:-left-28
          sm:-top-28
          sm:h-[260px]
          sm:w-[260px]
          sm:blur-[100px]
          lg:-left-36
          lg:-top-36
          lg:h-[340px]
          lg:w-[340px]
          lg:blur-[120px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          -bottom-20
          -right-14
          h-[200px]
          w-[200px]
          rounded-full
          bg-[#73B72B]/20
          blur-[80px]
          sm:-bottom-28
          sm:-right-20
          sm:h-[300px]
          sm:w-[300px]
          sm:blur-[110px]
          lg:-bottom-36
          lg:-right-24
          lg:h-[380px]
          lg:w-[380px]
          lg:blur-[130px]
        "
      />

      {/* ================= Floating Dot Pattern ================= */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          hidden
          sm:grid
          absolute
          right-10
          top-16
          grid-cols-4
          gap-2
          opacity-30
        "
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-white"
          />
        ))}
      </motion.div>

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          hidden
          sm:grid
          absolute
          bottom-10
          left-8
          grid-cols-5
          gap-2
          opacity-40
        "
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[#73B72B]"
          />
        ))}
      </motion.div>

      {/* ================= Content ================= */}

      <Container className="relative z-10">
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
          className="max-w-3xl"
        >
          {/* Eyebrow */}

          <div className="mb-5 flex items-center gap-3 sm:mb-8 sm:gap-4">
            <EyebrowIcon
              size={22}
              className="text-[#73B72B] sm:hidden"
            />
            <EyebrowIcon
              size={30}
              className="hidden text-[#73B72B] sm:block"
            />

            <span className="text-xs font-bold uppercase tracking-widest text-[#73B72B] sm:text-sm sm:tracking-[0.35em]">
              {contentData.eyebrow}
            </span>

            <span className="hidden h-[2px] w-16 bg-[#73B72B] md:block" />
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black leading-[1.1] text-white sm:text-5xl sm:leading-[1.02] md:text-7xl">
            {contentData.title}
          
            {contentData.titleLine2}
            <br />

            <span className="text-[#73B72B]">
              {contentData.highlight}
            </span>
          </h2>

          {/* Animated Line */}

          <motion.span
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 70,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="
              mt-5
              block
              h-1
              rounded-full
              bg-[#73B72B]
              sm:mt-8
            "
          />

          {/* Description */}

          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300 sm:mt-8 sm:text-lg sm:leading-9">
            {contentData.description}
          </p>

          {/* Buttons */}

          <div className="mt-8 sm:mt-12">
            <CTAButtons buttons={buttons} />
          </div>

          {/* Trust Pills */}

          <div className="mt-8 sm:mt-12">
            <TrustPills trustPills={trustPills} />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
