import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { categoryColors } from "./Projects";



export default function ProjectListingCard({ project, index = 0 }) {
  let colors = categoryColors[project.category] ?? {
    bg: "bg-[#102A72]",
    text: "text-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -6 }}
      className="
        group
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-[0_10px_35px_rgba(15,23,42,.06)]
        transition-shadow
        duration-300
        hover:shadow-[0_25px_55px_rgba(15,23,42,.14)]
      "
    >
      {/* ================= Image ================= */}

      <div className="relative aspect-[4/3] overflow-hidden">
        {project.image ? <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        /> : <div className="flex h-full items-center justify-center bg-[#102A72] p-8 text-center text-lg font-bold text-white">{project.title}</div>}

        <span
          className={`
            absolute
            bottom-4
            left-4
            rounded-md
            px-3
            py-1.5
            text-xs
            font-bold
            uppercase
            tracking-wider
            ${colors.bg}
            ${colors.text}
          `}
        >
          {project.category}
        </span>
      </div>

      {/* ================= Content ================= */}

      <div className="p-6">
        <h3 className="text-lg font-black leading-snug text-[#102A72]">
          {project.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <FaMapMarkerAlt size={13} className="text-[#73B72B]" />
          {project.location || "Location available on request"}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="
            group/link
            mt-5
            inline-flex
            items-center
            gap-2
            text-sm
            font-bold
            text-[#73B72B]
          "
        >
          View Project
          <FaArrowRight
            size={12}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  );
}
