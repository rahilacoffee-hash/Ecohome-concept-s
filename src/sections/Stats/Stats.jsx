import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "../../components/layout/Container";
import MotionCounter from "./counter";
import { HiBuildingOffice2, HiStar, HiTrophy, HiUsers } from "react-icons/hi2";

const icons = { Building: HiBuildingOffice2, Users: HiUsers, Trophy: HiTrophy, Star: HiStar };

export default function Stats({ stats = [] }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative sm:-mt-5 xl:-mt-20 z-20 pb-16 sm:pb-20 lg:pb-24" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            grid
            grid-cols-2
            md:grid-cols-2
            lg:grid-cols-4
            gap-4
            sm:gap-6

            rounded-[20px]
            sm:rounded-[30px]

            border
            border-white/20

            bg-white/80
            backdrop-blur-xl
shadow-2xl
            shadow-[0_25px_60px_rgba(0,0,0,.12)]

            p-5
            sm:p-8
            lg:p-12
            ring-4 ring-[#73B72B]/10
          "
        >
          {stats.map((stat, index) => {
            const Icon = icons[stat.icon] || HiBuildingOffice2;

            return (
              <motion.div
                key={`${stat.label}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
                  group

                  rounded-2xl

                  p-3
                  sm:p-5

                  transition-all

                  duration-300

                  hover:bg-white
                  lg:border-r
                  border-black/10

                  hover:shadow-xl

                  cursor-pointer
                "
              >
                <div
                  className="
                    mb-3
                    sm:mb-5

                    flex

                    h-11
                    w-11
                    sm:h-14
                    sm:w-14
                    lg:h-16
                    lg:w-16

                    items-center

                    justify-center

                    rounded-xl
                    sm:rounded-2xl

                    bg-[#73B72B]

                    text-white

                    transition-all

                    duration-300
                    shadow-lg shadow-[#73B72B]/20

                    group-hover:rotate-6

                    group-hover:scale-110
                  "
                >
                  <Icon size={20} className="sm:hidden" />
                  <Icon size={24} className="hidden sm:block lg:hidden" />
                  <Icon size={30} className="hidden lg:block" />
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#102A72]">
                  <MotionCounter value={stat.value} />
                  {stat.suffix}
                </h2>

                <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
