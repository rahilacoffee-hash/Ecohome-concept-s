import { motion } from "framer-motion";

export default function TeamCard({ member }) {
  const Icon = member.icon;

  return (
    <motion.article
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
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl sm:rounded-[28px]
          border
          border-slate-200
          bg-white
          shadow-[0_15px_45px_rgba(15,23,42,.08)]
          transition-all
          duration-500
          group-hover:shadow-[0_25px_60px_rgba(15,23,42,.15)]
        "
      >
        {/* ========================================= */}
        {/* Blueprint Background */}
        {/* ========================================= */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            bg-[linear-gradient(#102A72_1px,transparent_1px),linear-gradient(90deg,#102A72_1px,transparent_1px)]
            [background-size:36px_36px]
          "
        />

        {/* Green Glow */}

        <div
          className="
            absolute
            -right-14
            -top-14
            h-40
            w-40
            rounded-full
            bg-[#73B72B]/10
            blur-[80px]
          "
        />

        {/* ========================================= */}
        {/* Team Image */}
        {/* ========================================= */}

          {/* ========================================= */}
        {/* Content */}
        {/* ========================================= */}

        <div className="relative p-5 sm:p-6">

          {/* Accent Line */}

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "55px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-1 rounded-full bg-[#73B72B]"
          />

          {/* Name */}

          <h3 className="mt-4 text-xl sm:mt-5 sm:text-2xl font-black text-[#102A72]">
            {member.name}
          </h3>

          {/* Position */}

          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-slate-500">
            {member.position}
          </p>

          {/* Divider */}

          <div className="my-6 h-px bg-slate-200" />

          {/* Social Links */}

          <div className="flex items-center justify-between">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Connect
            </span>

            <div className="flex items-center gap-2">

              {member.socials?.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    whileHover={{
                      scale: 1.1,
                      y: -4,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex
                      h-10
                      w-10
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
                    <SocialIcon size={16} />
                  </motion.a>
                );
              })}

            </div>

          </div>

        </div>

        {/* ========================================= */}
        {/* Hover Border */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl sm:rounded-[28px]
            border-2
            border-[#73B72B]
          "
        />

        {/* Corner Accent */}

        <div
          className="
            absolute
            right-0
            top-0
            h-24
            w-24
            rounded-bl-[60px]
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