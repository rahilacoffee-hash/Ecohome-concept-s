import { motion } from "framer-motion";

export default function ClientLogo({ client }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.04,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="
        group
        relative
        flex
        h-32
        w-52
        shrink-0
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-[20px]
        border
        border-white/40
        bg-white/70
        p-5
        shadow-[0_10px_30px_rgba(15,23,42,.08)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-[#73B72B]/40
        hover:shadow-[0_20px_50px_rgba(115,183,43,.16)]
        sm:h-40
        sm:w-64
        sm:rounded-[24px]
        sm:p-6
        sm:shadow-[0_15px_50px_rgba(15,23,42,.08)]
        sm:hover:shadow-[0_25px_70px_rgba(115,183,43,.18)]
        lg:h-44
        lg:w-72
        lg:rounded-[28px]
        lg:p-8
      "
    >
      {/* Green Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-24
            w-24
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#73B72B]/20
            blur-2xl
            sm:h-32
            sm:w-32
            sm:blur-3xl
            lg:h-36
            lg:w-36
          "
        />
      </div>

      {/* Logo */}

      <img
        src={client.logo}
        alt={client.name}
        className="
          relative
          z-10
          h-11
          w-auto
          object-contain
          grayscale
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:grayscale-0
          sm:h-16
          lg:h-20
        "
      />

      {/* Name */}

      <h3
        className="
          relative
          z-10
          mt-3
          text-center
          text-xs
          font-bold
          text-[#102A72]
          transition-colors
          duration-300
          group-hover:text-[#73B72B]
          sm:mt-4
          sm:text-base
          lg:mt-6
          lg:text-lg
        "
      >
        {client.name}
      </h3>

      {/* Category */}

      <span
        className="
          relative
          z-10
          mt-2
          rounded-full
          bg-[#73B72B]/10
          px-3
          py-1
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.14em]
          text-[#73B72B]
          transition-all
          duration-300
          group-hover:bg-[#73B72B]
          group-hover:text-white
          sm:mt-3
          sm:px-4
          sm:text-xs
          sm:tracking-[0.25em]
        "
      >
        {client.category}
      </span>

      {/* Decorative Corner */}

      <div
        className="
          absolute
          -right-6
          -top-6
          h-16
          w-16
          rounded-full
          bg-[#73B72B]/5
          transition-all
          duration-500
          group-hover:scale-125
          group-hover:bg-[#73B72B]/10
          sm:-right-8
          sm:-top-8
          sm:h-24
          sm:w-24
          lg:-right-10
          lg:-top-10
          lg:h-28
          lg:w-28
        "
      />

      {/* Bottom Accent */}

      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.35 }}
        className="
          absolute
          bottom-0
          left-0
          h-1
          bg-[#73B72B]
        "
      />
    </motion.div>
  );
}