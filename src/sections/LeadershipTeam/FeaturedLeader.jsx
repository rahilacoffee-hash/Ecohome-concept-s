import { motion } from "framer-motion";
import { Quote, Award, Star, Building2 } from "lucide-react";

export default function FeaturedLeader({ leader }) {
  const Icon = leader.icon;

  return (
    <motion.section
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
      }}
      className="relative"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px] sm:rounded-[40px]
          border
          border-slate-200
          bg-white
          shadow-[0_30px_80px_rgba(15,23,42,.10)]
        "
      >
        {/* ========================================= */}
        {/* Background Decorations */}
        {/* ========================================= */}

        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#73B72B]/10 blur-[120px]" />

        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#102A72]/10 blur-[120px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            bg-[linear-gradient(#102A72_1px,transparent_1px),linear-gradient(90deg,#102A72_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        <div className="grid gap-0 lg:grid-cols-[480px_1fr]">

          {/* ========================================= */}
          {/* Image Side */}
          {/* ========================================= */}

         
          =========================================
          {/* Content Side */}
          {/* ========================================= */}

          <div className="relative flex flex-col justify-center p-6 sm:p-10 lg:p-16">

            {/* Quote */}

            <div
              className="
                absolute
                right-10
                top-10
                text-[#73B72B]/10
              "
            >
              <Quote size={120} strokeWidth={1.2} />
            </div>

            {/* Role */}

            <span
              className="
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-[#73B72B]/10
                px-4
                py-2
                text-xs
                sm:px-5
                sm:text-sm
                font-bold
                uppercase
                tracking-[0.16em]
                sm:tracking-[0.25em]
                text-[#73B72B]
              "
            >
              <Award size={18} />

              Executive Leadership
            </span>

            {/* Name */}

            <h2
              className="
                mt-8
                text-3xl
                sm:text-5xl
                font-black
                leading-tight
                text-[#102A72]
              "
            >
              {leader.name}
            </h2>

            {/* Position */}

            <p
              className="
                mt-4
                text-lg
                sm:text-2xl
                font-semibold
                text-slate-600
              "
            >
              {leader.position}
            </p>

            <div className="mt-8 h-1 w-20 rounded-full bg-[#73B72B]" />

            {/* Bio */}

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-9
                text-slate-600
              "
            >
              {leader.bio}
            </p>

            {/* Achievement Cards */}

            <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-3">

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-5
                "
              >
                <Award
                  size={28}
                  className="text-[#73B72B]"
                />

                <h4 className="mt-4 text-3xl font-black text-[#102A72]">
                  20+
                </h4>

                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">
                  Years Experience
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-6
                "
              >
                <Building2
                  size={28}
                  className="text-[#73B72B]"
                />

                <h4 className="mt-4 text-3xl font-black text-[#102A72]">
                  250+
                </h4>

                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">
                  Projects Led
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-6
                "
              >
                <Star
                  size={28}
                  className="text-[#73B72B]"
                />

                <h4 className="mt-4 text-3xl font-black text-[#102A72]">
                  98%
                </h4>

                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">
                  Client Satisfaction
                </p>
              </motion.div>

            </div>            {/* ========================================= */}
            {/* Social Links */}
            {/* ========================================= */}

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-12 sm:gap-4">
              {leader.socials.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex
                      h-11
                      w-11
                      sm:h-14
                      sm:w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      text-[#102A72]
                      shadow-md
                      transition-all
                      duration-300
                      hover:border-[#73B72B]
                      hover:bg-[#73B72B]
                      hover:text-white
                    "
                  >
                    <SocialIcon size={20} />
                  </motion.a>
                );
              })}
            </div>

            {/* Divider */}

            <div className="my-10 h-px w-full bg-gradient-to-r from-[#73B72B] via-slate-200 to-transparent" />

            {/* Signature */}

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div>
                <h4 className="text-2xl font-black text-[#102A72]">
                  {leader.name}
                </h4>

                <p className="mt-2 text-slate-500">
                  {leader.position}
                </p>
              </div>

              <div className="text-left md:text-right">

                <motion.h5
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="
                    text-4xl
                    italic
                    font-light
                    text-[#73B72B]
                  "
                  style={{
                    fontFamily: "cursive",
                  }}
                >
                  {leader.name}
                </motion.h5>

                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                  Signature
                </p>

              </div>

            </div>

          </div>
        </div>

        {/* ========================================= */}
        {/* Decorative Corner Accent */}
        {/* ========================================= */}

        <div
          className="
            absolute
            right-0
            top-0
            h-40
            w-40
            rounded-bl-[100px]
            bg-gradient-to-bl
            from-[#73B72B]/10
            to-transparent
          "
        />

        {/* Bottom Glow */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-2
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#73B72B]
            to-transparent
            opacity-70
          "
        />
      </div>
    </motion.section>
  );
}