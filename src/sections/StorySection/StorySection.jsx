import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import storyData, {
  values,
  achievements,
} from "./story";

import storyImage from "../../assets/images/backgrounds/why-choose-us.png";

export default function StorySection() {
  return (
    <section
      id="story"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-24
        lg:py-36
      "
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
          opacity-[0.03]
          bg-[linear-gradient(#102A72_1px,transparent_1px),linear-gradient(90deg,#102A72_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Green Glow */}

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
          -left-32
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#73B72B]/10
          blur-[140px]
        "
      />

      {/* Blue Glow */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="
          absolute
          -right-24
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#102A72]/10
          blur-[150px]
        "
      />

      {/* Decorative Circle */}

      <div
        className="
          absolute
          top-24
          right-24
          h-64
          w-64
          rounded-full
          border
          border-[#73B72B]/20
        "
      />

      {/* Decorative Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-10
          bottom-10
          h-72
          w-72
          rounded-full
          border
          border-dashed
          border-[#102A72]/10
        "
      />

      {/* Dot Pattern */}

      <div
        className="
          absolute
          right-10
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

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">

          {/* ========================================= */}
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
          >
            {/* Eyebrow */}

            <div className="mb-6 flex items-center gap-3 sm:gap-4">
              <span className="h-[2px] w-14 bg-[#73B72B]" />

              <span
                className="
                  font-bold
                  uppercase
                  text-xs
                  tracking-[0.22em]
                  sm:text-base
                  sm:tracking-[0.35em]
                  text-[#73B72B]
                "
              >
                {storyData.eyebrow}
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                text-3xl
                font-black
                leading-tight
                text-[#102A72]
                sm:text-5xl
                md:text-6xl
              "
            >
              {storyData.title}

              <span className="block text-[#73B72B]">
                {storyData.highlight}
              </span>
            </h2>

            {/* Divider */}

            <div className="mt-8 h-1 w-16 rounded-full bg-[#73B72B]" />

            {/* Description */}

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-9
                text-slate-600
              "
            >
              {storyData.description}
            </p>            {/* ========================================= */}
            {/* Story Paragraph */}
            {/* ========================================= */}

            <motion.p
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
                delay: 0.2,
                duration: 0.8,
              }}
              className="
                mt-8
                border-l-4
                border-[#73B72B]
                pl-6
                text-lg
                leading-9
                text-slate-600
              "
            >
              {storyData.story}
            </motion.p>

            {/* ========================================= */}
            {/* Achievements */}
            {/* ========================================= */}

            <div className="mt-9 space-y-4 sm:mt-12 sm:space-y-5">
              {achievements.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.15 * index,
                      duration: 0.6,
                    }}
                    className="
                      group
                      flex
                      items-start
                      gap-3
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-4
                      sm:gap-5
                      sm:p-5
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#73B72B]/30
                      hover:shadow-xl
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        sm:h-14
                        sm:w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#73B72B]/10
                        text-[#73B72B]
                        transition-all
                        duration-300
                        group-hover:bg-[#73B72B]
                        group-hover:text-white
                      "
                    >
                      <Icon size={20} className="sm:hidden" />
                      <Icon size={24} className="hidden sm:block" />
                    </div>

                    <div>
                      <h4
                        className="
                          text-lg
                          font-bold
                          text-[#102A72]
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          mt-2
                          leading-7
                          text-slate-500
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

          {/* ========================================= */}
          {/* Right Content Starts */}
          {/* ========================================= */}

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
            className="relative"
          >            {/* ========================================= */}
            {/* Main Image */}
            {/* ========================================= */}

            <div className="relative z-10 overflow-hidden rounded-[36px] shadow-[0_30px_80px_rgba(15,23,42,.18)]">
              <img
                src={storyImage}
                alt="Ecohome Concepts"
                className="
                  h-[380px]
                  sm:h-[520px]
                  lg:h-[650px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#060f2e]/55 via-transparent to-transparent" />

              {/* Bottom Caption */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-8
                "
              >
                <span
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#73B72B]
                  "
                >
                  Building Excellence
                </span>

                <h3
                  className="
                    mt-3
                    text-3xl
                    font-black
                    text-white
                  "
                >
                  Engineering the Future with Precision
                </h3>
              </div>
            </div>

            {/* ========================================= */}
            {/* Floating Years Card */}
            {/* ========================================= */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute
                -left-10
                hidden
                top-12
                z-20
                rounded-[28px]
                border
                border-white/20
                bg-white/80
                p-7
                shadow-[0_25px_60px_rgba(15,23,42,.18)]
                backdrop-blur-xl
                lg:block
              "
            >
              <h2 className="text-5xl font-black text-[#102A72]">
                15+
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#73B72B]
                "
              >
                Years Experience
              </p>
            </motion.div>

            {/* ========================================= */}
            {/* Floating Projects Card */}
            {/* ========================================= */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
              }}
              className="
                absolute
                -right-10
                hidden
                bottom-24
                z-20
                rounded-[28px]
                bg-[#102A72]
                p-8
                text-white
                shadow-[0_25px_70px_rgba(16,42,114,.35)]
                lg:block
              "
            >
              <h2 className="text-5xl font-black">
                150+
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#73B72B]
                "
              >
                Completed Projects
              </p>
            </motion.div>

            {/* ========================================= */}
            {/* Blueprint Card */}
            {/* ========================================= */}

            <motion.div
              animate={{
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
              className="
                absolute
                left-10
                bottom-10
                hidden
                z-10
                w-64
                rounded-[28px]
                border
                border-white/10
                bg-white/95
                p-6
                shadow-[0_20px_60px_rgba(15,23,42,.15)]
                lg:block
              "
            >
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#73B72B]
                "
              >
                Our Philosophy
              </span>

              <p
                className="
                  mt-4
                  leading-7
                  text-slate-600
                "
              >
                Every structure we build combines
                innovation, sustainability,
                functionality and long-term value.
              </p>
            </motion.div>

            {/* Decorative Ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                -top-8
                right-16
                h-40
                w-40
                rounded-full
                border
                border-dashed
                border-[#73B72B]/25
              "
            />

            {/* Green Glow */}

            <div
              className="
                absolute
                -bottom-12
                right-0
                h-48
                w-48
                rounded-full
                bg-[#73B72B]/20
                blur-[80px]
              "
            />          </motion.div>

        </div>

        {/* ========================================= */}
        {/* Mission • Vision • Values */}
        {/* ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
          className="mt-32"
        >
          {/* Section Heading */}

          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.35em]
                text-[#73B72B]
              "
            >
              OUR FOUNDATION
            </span>

            <h3
              className="
                mt-5
                text-4xl
                font-black
                text-[#102A72]
                md:text-5xl
              "
            >
              Built on Strong Principles
            </h3>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#73B72B]" />

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
              Everything we design and construct is guided by
              innovation, integrity and an unwavering commitment
              to delivering exceptional value.
            </p>
          </div>

          {/* Cards */}

          <div className="grid gap-8 lg:grid-cols-3">

            {/* Mission */}

            <motion.div
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-10
                shadow-lg
              "
            >
              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  h-36
                  w-36
                  rounded-full
                  bg-[#73B72B]/10
                  blur-[70px]
                "
              />

              <span
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#73B72B]
                "
              >
                Mission
              </span>

              <h4
                className="
                  mt-5
                  text-3xl
                  font-black
                  text-[#102A72]
                "
              >
                Building Lasting Value
              </h4>

              <p
                className="
                  mt-6
                  leading-8
                  text-slate-600
                "
              >
                To deliver innovative construction and engineering
                solutions that exceed expectations while creating
                sustainable communities and lasting relationships.
              </p>
            </motion.div>

            {/* Vision */}

            <motion.div
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                bg-[#102A72]
                p-10
                text-white
                shadow-[0_20px_60px_rgba(16,42,114,.25)]
              "
            >
              <div
                className="
                  absolute
                  -left-10
                  bottom-0
                  h-40
                  w-40
                  rounded-full
                  bg-[#73B72B]/20
                  blur-[80px]
                "
              />

              <span
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#73B72B]
                "
              >
                Vision
              </span>

              <h4
                className="
                  mt-5
                  text-3xl
                  font-black
                "
              >
                Shaping Tomorrow
              </h4>

              <p
                className="
                  mt-6
                  leading-8
                  text-slate-300
                "
              >
                To become Africa's most respected construction and
                engineering company through innovation, quality,
                safety and transformational infrastructure.
              </p>
            </motion.div>

            {/* Values */}

            <motion.div
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-10
                shadow-lg
              "
            >
              <span
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#73B72B]
                "
              >
                Core Values
              </span>

              <div className="mt-8 space-y-5">
                {values.map((value) => {
                  const Icon = value.icon;

                  return (
                    <div
                      key={value.id}
                      className="
                        flex
                        items-start
                        gap-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#73B72B]/10
                          text-[#73B72B]
                        "
                      >
                        <Icon size={20} />
                      </div>

                      <div>
                        <h5
                          className="
                            text-lg
                            font-bold
                            text-[#102A72]
                          "
                        >
                          {value.title}
                        </h5>

                        <p
                          className="
                            mt-1
                            text-slate-600
                            leading-7
                          "
                        >
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

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

            <div className="h-3 w-3 rounded-full bg-[#73B72B]" />

            <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#73B72B]" />
          </div>
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
          h-32
          bg-gradient-to-b
          from-transparent
          to-slate-50
        "
      />

      {/* ========================================= */}
      {/* Decorative Floating Shape */}
      {/* ========================================= */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -bottom-24
          -right-24
          hidden
          h-80
          w-80
          rounded-full
          border
          border-dashed
          border-[#73B72B]/15
          lg:block
        "
      />

      {/* ========================================= */}
      {/* Blueprint Accent Line */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-16
          hidden
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-[#73B72B]/15
          to-transparent
          xl:block
        "
      />
    </section>
  );
}