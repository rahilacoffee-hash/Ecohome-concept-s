import { motion } from "framer-motion";

export default function ExperienceCard({ experience }) {
  let Icon = experience.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
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
        delay: 0.4,
      }}
      className="
        absolute
        right-3
        top-4
        z-20
        flex
        w-[78%]
        max-w-[260px]
        items-center
        gap-3
        rounded-xl
        bg-[#0B1A4D]
        p-3.5
        shadow-[0_15px_35px_rgba(11,26,77,.4)]
        sm:right-6
        sm:top-10
        sm:w-[330px]
        sm:max-w-none
        sm:gap-4
        sm:rounded-2xl
        sm:p-5
        sm:shadow-[0_25px_50px_rgba(11,26,77,.4)]
        md:right-10
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#73B72B]
          sm:h-16
          sm:w-16
          sm:rounded-2xl
        "
      >
        <Icon size={20} className="text-white sm:hidden" />
        <Icon size={28} className="hidden text-white sm:block" />
      </div>

      <div className="min-w-0">
        <span className="block text-xl sm:text-3xl font-black leading-none text-[#73B72B]">
          {experience.years}+
        </span>

        <span className="mt-1 sm:mt-2 block text-sm sm:text-base font-bold text-white">
          {experience.title}
        </span>

        <span className="mt-0.5 sm:mt-1 hidden sm:block text-sm leading-5 text-slate-300">
          {experience.description}
        </span>
      </div>
    </motion.div>
  );
}