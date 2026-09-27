import { motion } from "framer-motion";

export default function TimelineItem({
  item,
  index,
}) {
  const Icon = item.icon;

  const isLeft = index % 2 === 0;

  const accent =
    item.color === "green"
      ? "bg-[#73B72B]"
      : "bg-[#102A72]";

  const borderAccent =
    item.color === "green"
      ? "border-[#73B72B]"
      : "border-[#102A72]";

  const textAccent =
    item.color === "green"
      ? "text-[#73B72B]"
      : "text-[#102A72]";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      className="
        relative
        grid
        grid-cols-1
        lg:grid-cols-[1fr_90px_1fr]
        items-center
        mb-24
      "
    >
      {/* ================= LEFT CARD ================= */}

      <div
        className={`
          ${isLeft ? "block" : "hidden lg:block lg:invisible"}
        `}
      >
        <motion.div
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            group
            relative
            rounded-2xl
            border
            sm:rounded-[30px]
            border-slate-200
            bg-white
            p-5
            sm:p-8
            shadow-lg
            overflow-hidden
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              -right-16
              -top-16
              h-44
              w-44
              rounded-full
              bg-[#73B72B]/10
              blur-[70px]
            "
          />

          <span
            className={`
              inline-flex
              rounded-full
              px-4
              py-2
              text-sm
              font-bold
              tracking-[0.25em]
              uppercase
              text-white
              ${accent}
            `}
          >
            {item.year}
          </span>

          <h3 className="mt-5 text-2xl sm:mt-6 sm:text-3xl font-black text-[#102A72]">
            {item.title}
          </h3>

          <p className="mt-4 text-sm leading-6 sm:mt-5 sm:text-base sm:leading-8 text-slate-600">
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* ================= CENTER ================= */}

      <div className="relative hidden justify-center lg:flex">

        {/* Vertical Line */}

        <div
          className="
            absolute
            top-0
            bottom-0
            w-[3px]
            bg-gradient-to-b
            from-[#73B72B]
            via-[#102A72]
            to-[#73B72B]
          "
        />

        {/* Circle */}

        <motion.div
          whileHover={{
            scale: 1.15,
          }}
          className={`
            relative
            z-20
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            border-8
            border-white
            shadow-xl
            ${accent}
          `}
        >
          <Icon
            size={30}
            className="text-white"
          />
        </motion.div>
      </div>

      {/* ================= RIGHT CARD ================= */}

      <div
        className={`
          ${!isLeft ? "block" : "hidden lg:block lg:invisible"}
        `}
      >
        <motion.div
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            sm:rounded-[30px]
            border-slate-200
            bg-white
            p-5
            sm:p-8
            shadow-lg
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              -left-16
              -bottom-16
              h-44
              w-44
              rounded-full
              bg-[#102A72]/10
              blur-[70px]
            "
          />

          <span
            className={`
              inline-flex
              rounded-full
              px-4
              py-2
              text-sm
              font-bold
              uppercase
              tracking-[0.25em]
              text-white
              ${accent}
            `}
          >
            {item.year}
          </span>

          <h3 className="mt-5 text-2xl sm:mt-6 sm:text-3xl font-black text-[#102A72]">
            {item.title}
          </h3>

          <p className="mt-4 text-sm leading-6 sm:mt-5 sm:text-base sm:leading-8 text-slate-600">
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* Floating Year */}

      <div
        className={`
          hidden
          xl:flex
          absolute
          top-1/2
          ${
            isLeft
              ? "right-[44%]"
              : "left-[44%]"
          }
          -translate-y-1/2
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border-2
          ${borderAccent}
          bg-white
          font-black
          ${textAccent}
          shadow-lg
        `}
      >
        {item.year.slice(-2)}
      </div>
    </motion.div>
  );
}