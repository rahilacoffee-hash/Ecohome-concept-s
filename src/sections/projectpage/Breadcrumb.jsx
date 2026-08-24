import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Breadcrumb({ project }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-md text-slate-500"
    >
      <Link
        to="/"
        className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#73B72B]"
      >
        <FaHome size={13} />
        <span>Home</span>
      </Link>

      <span className="flex items-center gap-2">
        <FaChevronRight size={9} className="text-slate-300" />

        <Link
          to="/projects"
          className="transition-colors duration-200 hover:text-[#73B72B]"
        >
          Projects
        </Link>
      </span>

      {project?.title && (
        <span className="flex items-center gap-2">
          <FaChevronRight size={9} className="text-slate-300" />

          <span className="font-medium text-[#102A72]">{project.title}</span>
        </span>
      )}
    </nav>
  );
}
