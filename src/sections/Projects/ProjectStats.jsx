import { Building2, MapPinned, CalendarDays, Smile } from "lucide-react";
import { motion } from "framer-motion";
import MotionCounter from "../Stats/counter";
import { HiUsers } from "react-icons/hi2";

const stats = [
  {
    icon: Building2,
    value: 150,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: CalendarDays,
    value: 25,
    suffix: "+",
    label: "Years Experience",
  },
  {
      icon: HiUsers,
      value: 50,
      suffix: "+",
      title: "Professional Team",
    },
  {
    icon: Smile,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function ProjectStats() {
  return (
    <section className="mt-12 sm:mt-16 lg:mt-24">
      <div className="rounded-[20px] sm:rounded-[26px] lg:rounded-[32px] bg-white p-5 sm:p-6 lg:p-8 shadow-[0_15px_60px_rgba(15,23,42,.08)]">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label || item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                className="group rounded-xl sm:rounded-2xl lg:rounded-3xl border border-slate-100 bg-slate-50 p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:border-[#73B72B]/30 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-3 sm:mb-5 lg:mb-6 flex h-10 w-10 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-[#73B72B]/10 text-[#73B72B] transition-all duration-300 group-hover:bg-[#73B72B] group-hover:text-white">
                  <Icon size={18} className="sm:hidden" />
                  <Icon size={24} className="hidden sm:block lg:hidden" />
                  <Icon size={30} className="hidden lg:block" />
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#102A72]">
                  <MotionCounter
                    value={item.value}
                    duration={2}
                  />
                  {item.suffix}
                </h3>

                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm lg:text-base text-gray-500">
                  {item.label || item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}