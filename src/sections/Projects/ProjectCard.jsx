import { MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

let MotionLink = motion(Link);

export default function ProjectCard({ project, className = "" }) {
  return (
    <MotionLink
      to={`/projects/${project.slug}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35 }}
      className={`
        group
        relative
        block
        aspect-[4/5]
        overflow-hidden
        rounded-2xl
        sm:rounded-3xl
        shadow-[0_15px_50px_rgba(15,23,42,.08)]
        transition-shadow
        duration-500
        hover:shadow-[0_30px_80px_rgba(15,23,42,.25)]
        ${className}
      `}
    >
      {project.image ? <img
        src={project.image}
        alt={project.title}
        className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          ease-out
          group-hover:scale-110
          group-hover:brightness-75
        "
      /> : <div className="flex h-full items-center justify-center bg-[#102A72] p-8 text-center text-xl font-black text-white">{project.title}</div>}

      {/* Always-on subtle bottom gradient for legibility */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

      {/* Hover Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-black/60
          opacity-100
          lg:opacity-0
          lg:group-hover:opacity-100
          transition-all
          duration-500
        "
      />

      {/* Category Badge — always visible */}

      <span
        className="
          absolute
          left-3
          top-3
          sm:left-5
          sm:top-5
          rounded-full
          border
          border-white/20
          bg-white/10
          px-3
          py-1
          sm:px-4
          sm:py-1.5
          text-[10px]
          sm:text-xs
          font-bold
          uppercase
          tracking-[0.15em]
          sm:tracking-[0.2em]
          text-white
          backdrop-blur-md
          transition-all
          duration-500
          lg:group-hover:-translate-y-1
          lg:group-hover:bg-[#73B72B]
          lg:group-hover:border-[#73B72B]
        "
      >
        {project.category}
      </span>

      {/* Corner "View" Icon — desktop hover only */}

      <span
        className="
          absolute
          right-5
          top-5
          hidden
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-white
          text-[#102A72]
          opacity-0
          scale-75
          transition-all
          duration-500
          lg:flex
          lg:group-hover:opacity-100
          lg:group-hover:scale-100
        "
      >
        <ArrowUpRight size={20} />
      </span>

      {/* Hover Content */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-4
          sm:p-6
          md:p-8
          text-white
          translate-y-0
          lg:translate-y-full
          lg:group-hover:translate-y-0
          transition-all
          duration-500
        "
      >
        <h3
          className="
            text-lg
            sm:text-2xl
            font-black
            leading-tight
            opacity-100
            translate-y-0
            lg:opacity-0
            lg:translate-y-3
            transition-all
            duration-500
            lg:group-hover:translate-y-0
            lg:group-hover:opacity-100
          "
          style={{ transitionDelay: "80ms" }}
        >
          {project.title}
        </h3>

        <div
          className="
            mt-2
            sm:mt-3
            flex
            items-center
            gap-2
            text-xs
            sm:text-sm
            text-gray-200
            opacity-100
            translate-y-0
            lg:opacity-0
            lg:translate-y-3
            transition-all
            duration-500
            lg:group-hover:translate-y-0
            lg:group-hover:opacity-100
          "
          style={{ transitionDelay: "140ms" }}
        >
          <MapPin size={14} className="sm:hidden shrink-0" />
          <MapPin size={16} className="hidden sm:block shrink-0" />
          {project.location || "Location available on request"}
        </div>

        <span
          className="
            group/btn
            mt-4
            sm:mt-6
            flex
            w-fit
            items-center
            gap-2
            text-sm
            sm:text-base
            font-semibold
            opacity-100
            translate-y-0
            lg:opacity-0
            lg:translate-y-3
            transition-all
            duration-500
            lg:group-hover:translate-y-0
            lg:group-hover:opacity-100
          "
          style={{ transitionDelay: "200ms" }}
        >
          View Project

          <motion.span
            className="flex"
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </motion.span>
        </span>
      </div>
    </MotionLink>
  );
}
