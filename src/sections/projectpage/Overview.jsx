import { motion } from "framer-motion";
import {
  FaUserTie,
  FaCalendarAlt,
  FaClock,
  FaRulerCombined,
} from "react-icons/fa";

export default function Overview({ project }) {
  let specs = [
    { id: 1, icon: FaUserTie, label: "Client", value: project.client },
    { id: 2, icon: FaCalendarAlt, label: "Year", value: project.year },
    { id: 3, icon: FaClock, label: "Duration", value: project.duration },
    { id: 4, icon: FaRulerCombined, label: "Area", value: project.area },
  ].filter((spec) => spec.value);

  return (
    <section className="bg-white py-20">

      <div className="grid gap-14 px-6 lg:grid-cols-[1.6fr_1fr] lg:gap-16 lg:px-16">

        {/* ================= Description ================= */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#73B72B]">
            Project Overview
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight text-[#102A72] md:text-4xl">
            About This Project
          </h2>

          <p className="mt-6 leading-8 text-slate-500">{project.description}</p>

          {project.services?.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="
                    rounded-full
                    border
                    border-[#73B72B]/30
                    bg-[#73B72B]/5
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-[#73B72B]
                  "
                >
                  {service}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* ================= Specs Sidebar ================= */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-fit rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8"
        >
          <h3 className="text-lg font-bold text-[#102A72]">Project Details</h3>

          <div className="mt-6 space-y-6">
            {specs.map((spec) => {
              let Icon = spec.icon;

              return (
                <div key={spec.id} className="flex items-start gap-4">
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#73B72B]/10
                      text-[#73B72B]
                    "
                  >
                    <Icon size={16} />
                  </span>

                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {spec.label}
                    </span>

                    <span className="block font-bold text-[#102A72]">
                      {spec.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
