import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Breadcrumb({ items = [] }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Breadcrumb"
      className="mb-8"
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <li
              key={item.label}
              className="flex items-center gap-2"
            >
              {last ? (
                <span className="font-semibold text-white">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="
                    text-slate-300
                    transition-all
                    duration-300
                    hover:text-[#73B72B]
                  "
                >
                  {item.label}
                </Link>
              )}

              {!last && (
                <ChevronRight
                  size={15}
                  className="text-slate-500"
                />
              )}
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
}