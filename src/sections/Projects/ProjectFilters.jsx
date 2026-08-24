import { motion } from "framer-motion";

export default function ProjectFilters({
  activeFilter,
  setActiveFilter,
  projects,
}) {
  const filters = ["All", ...new Set(projects.map((project) => project.category))];
  // Count projects for each category
  const getCount = (filter) => {
    if (filter === "All") return projects.length;

    return projects.filter(
      (project) => project.category === filter
    ).length;
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
      {filters.map((filter) => {
        const active = activeFilter === filter;

        return (
          <motion.button
            key={filter}
            whileTap={{ scale: 0.96 }}
            whileHover={{ y: -2 }}
            onClick={() => setActiveFilter(filter)}
            className={`
              group
              relative
              overflow-hidden
              rounded-full
              border
              px-4
              py-2
              sm:px-6
              sm:py-3
              text-sm
              sm:text-base
              font-semibold
              transition-all
              duration-300

              ${
                active
                  ? "border-[#73B72B] bg-[#73B72B] text-white shadow-lg"
                  : "border-slate-200 bg-white text-slate-700 hover:border-[#73B72B]/50 hover:text-[#73B72B]"
              }
            `}
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              {filter}

              <motion.span
                key={getCount(filter)}
                initial={{
                  scale: 0.7,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                }}
                className={`
                  flex
                  h-6
                  min-w-[24px]
                  sm:h-7
                  sm:min-w-[28px]
                  items-center
                  justify-center
                  rounded-full
                  px-1.5
                  sm:px-2
                  text-[11px]
                  sm:text-xs
                  font-bold

                  ${
                    active
                      ? "bg-white/20 text-white"
                      : "bg-[#73B72B]/10 text-[#73B72B]"
                  }
                `}
              >
                {getCount(filter)}
              </motion.span>
            </span>

            {active && (
              <motion.div
                layoutId="activeProjectFilter"
                className="absolute inset-0 rounded-full bg-[#73B72B]"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
                style={{
                  zIndex: 0,
                }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
