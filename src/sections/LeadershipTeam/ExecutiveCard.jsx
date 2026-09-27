import { motion } from "framer-motion";

export default function ExecutiveCard({ leader }) {
  const Icon = leader.icon;

  return (
    <motion.article
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
      }}
      whileHover={{
        y: -10,
      }}
      className="group relative"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl sm:rounded-[32px]
          border
          border-slate-200
          bg-white
          shadow-[0_20px_60px_rgba(15,23,42,.08)]
          transition-all
          duration-500
          group-hover:shadow-[0_30px_80px_rgba(15,23,42,.16)]
        "
      >
        {/* ========================================= */}
        {/* Decorative Glow */}
        {/* ========================================= */}

        <div
          className="
            absolute
            -right-16
            -top-16
            h-48
            w-48
            rounded-full
            bg-[#73B72B]/10
            blur-[90px]
          "
        />

        {/* Blueprint Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            bg-[linear-gradient(#102A72_1px,transparent_1px),linear-gradient(90deg,#102A72_1px,transparent_1px)]
            [background-size:40px_40px]
          "
        />

        {/* ========================================= */}
        {/* Image */}
        {/* ========================================= */}

           {/* ========================================= */}
        {/* Content */}
        {/* ========================================= */}

        <div className="relative p-5 sm:p-8">

          {/* Accent Line */}

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "70px",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              h-1
              rounded-full
              bg-[#73B72B]
            "
          />

          {/* Name */}

          <h3
            className="
              mt-5
              text-2xl
              sm:mt-6
              sm:text-3xl
              font-black
              text-[#102A72]
            "
          >
            {leader.name}
          </h3>

          {/* Position */}

          <p
            className="
              mt-3
              text-lg
              font-semibold
              text-slate-600
            "
          >
            {leader.position}
          </p>

          {/* Divider */}

          <div className="my-8 h-px w-full bg-slate-200" />

          {/* Social Links */}

          {/* <div className="flex items-center justify-between">

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-slate-400
              "
            >
              Connect
            </span>

            <div className="flex gap-3">

              {leader.socials.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      text-[#102A72]
                      transition-all
                      duration-300
                      hover:border-[#73B72B]
                      hover:bg-[#73B72B]
                      hover:text-white
                    "
                  >
                    <SocialIcon size={18} />
                  </motion.a>
                );
              })}

            </div>

          </div> */}

        </div>

        {/* ========================================= */}
        {/* Hover Border */}
        {/* ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileHover={{
            opacity: 1,
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl sm:rounded-[32px]
            border-2
            border-[#73B72B]
          "
        />

        {/* Bottom Glow */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-1.5
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#73B72B]
            to-transparent
            opacity-70
          "
        />

      </div>
    </motion.article>
  );
}