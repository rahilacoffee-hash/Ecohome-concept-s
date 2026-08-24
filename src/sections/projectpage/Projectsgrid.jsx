import { AnimatePresence, motion } from "framer-motion";
import ProjectListingCard from "./Projectlistingcard";


export default function ProjectsGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="py-20 text-center text-slate-400">
        No projects found in this category yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2   lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectListingCard project={project} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}