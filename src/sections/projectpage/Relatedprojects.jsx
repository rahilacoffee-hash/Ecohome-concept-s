import { motion } from "framer-motion";

import ProjectCard from "../Projects/ProjectCard";

export default function RelatedProjects({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="bg-white py-20">

      <div className="px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#73B72B]">
            Related Work
          </span>

          <h2 className="mt-3 text-3xl font-black text-[#102A72] md:text-4xl">
            More Projects Like This
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}