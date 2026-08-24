import { motion } from "framer-motion";

import Breadcrumb from "./Breadcrumb";
import legislative from "../../assets/images/backgrounds/legislative.png"

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden pb-32 pt-30 lg:pb-40 lg:pt-48">

      {/* ================= Background Image ================= */}

      <div className="absolute inset-0">
        <img
          src={legislative}
          alt="Ecohome Concepts project"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#060f2e]/90 via-[#060f2e]/70 to-[#060f2e]/40" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#060f2e]/60 via-transparent to-transparent" />
      </div>

      <div className="relative px-6 lg:px-16">
       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
              <div className="mt-4 mb-9 ">
            <Breadcrumb />
          </div>
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#73B72B]">
            Our Projects
          </span>

          <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
            Building Excellence
            <br />
            Across Every Project
          </h1>

          <p className="mt-6 max-w-lg leading-7 text-slate-300">
            Explore our diverse portfolio of successfully completed projects
            that reflect our commitment to quality, innovation and client
            satisfaction.
          </p>

         
        </motion.div>
      </div>
    </section>
  );
}