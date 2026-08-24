import { FaHome, FaChevronRight } from "react-icons/fa";

export default function Breadcrumb({ breadcrumb }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-md text-slate-500"
    >
      <a
        href="/"
        className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#73B72B]"
      >
        <FaHome size={13} />
        Home
      </a>

      <span className="flex items-center gap-2">
        <FaChevronRight size={9} className="text-slate-300" />

        <span className="font-medium text-[#102A72]">
          {breadcrumb.current}
        </span>
      </span>
    </nav>
  );
}