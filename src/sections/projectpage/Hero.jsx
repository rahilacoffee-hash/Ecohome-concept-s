import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

import Breadcrumb from "./Breadcrumb";

export default function Hero({ project }) {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pb-14 pt-8">

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(#102A72_1px,transparent_1px),linear-gradient(90deg,#102A72_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />

      <div className="relative px-6 lg:px-16">
        <Breadcrumb project={project} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#73B72B]">
              {project.category}
            </span>

            <h1 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-[#102A72] md:text-5xl">
              {project.title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-slate-500">
              <FaMapMarkerAlt size={15} className="text-[#73B72B]" />
              {project.location}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mt-10 h-[340px] overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(15,23,42,.15)] sm:h-[420px] lg:h-[520px]"
        >
          {project.image ? <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          /> : <div className="flex h-full items-center justify-center bg-[#102A72] p-8 text-center text-3xl font-black text-white">{project.title}</div>}
        </motion.div>
      </div>
    </section>
  );
}
