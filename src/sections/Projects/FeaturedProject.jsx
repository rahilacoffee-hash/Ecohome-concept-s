import {
  MapPin,
  CalendarDays,
  Building2,
  Ruler,
  ClipboardCheck,
  ArrowRight,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FeaturedProject({ project }) {
  const Icon = project.icon;

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]"
    >
      <div className="grid lg:grid-cols-5">
        {/* LEFT IMAGE */}
        <div className="relative overflow-hidden lg:col-span-3">
          <img
            src={project.image}
            alt={project.title}
            className="h-full min-h-[280px] sm:min-h-[380px] lg:min-h-[520px] w-full object-cover transition duration-700 hover:scale-105"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* Featured Badge */}
          <div className="absolute left-4 top-4 sm:left-8 sm:top-8 flex items-center gap-2 rounded-full bg-[#102A72] px-3.5 py-2 sm:px-5 sm:py-3 text-white shadow-xl">
            <Star size={14} className="sm:hidden" fill="currentColor" />
            <Star size={16} className="hidden sm:block" fill="currentColor" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              FEATURED PROJECT
            </span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 lg:col-span-2">
          {/* Category */}
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest sm:tracking-[0.25em] text-[#73B72B]">
            {project.category} Project
          </span>

          {/* Title */}
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-[#102A72]">
            {project.title}
          </h2>

          {/* Location */}
          <div className="mt-4 sm:mt-6 flex items-center gap-2 text-sm sm:text-base text-gray-600">
            <MapPin size={16} className="sm:hidden text-[#73B72B] shrink-0" />
            <MapPin size={18} className="hidden sm:block text-[#73B72B] shrink-0" />

            <span>{project.location}</span>
          </div>

          {/* Divider */}
          <div className="my-6 sm:my-8 h-px bg-slate-200" />

          {/* Project Details */}
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3 sm:gap-4">
              <CalendarDays className="text-[#73B72B] shrink-0" size={18} />
              <span className="text-sm sm:text-base font-medium text-gray-700">
                <strong>Completed:</strong> {project.completed}
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <Building2 className="text-[#73B72B] shrink-0" size={18} />
              <span className="text-sm sm:text-base font-medium text-gray-700">
                <strong>Type:</strong> {project.projectType}
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <Ruler className="text-[#73B72B] shrink-0" size={18} />
              <span className="text-sm sm:text-base font-medium text-gray-700">
                <strong>Size:</strong> {project.size}
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <ClipboardCheck className="text-[#73B72B] shrink-0" size={18} />
              <span className="text-sm sm:text-base font-medium text-gray-700">
                <strong>Scope:</strong> {project.scope}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 sm:mt-8 text-sm sm:text-base leading-7 sm:leading-8 text-gray-600">
            {project.description}
          </p>

          {/* Button */}
          <Link
            to={`/projects/${project.slug}`}
            className="group mt-8 sm:mt-10 flex w-fit items-center gap-3 text-sm sm:text-base font-bold text-[#73B72B] transition-all duration-300 hover:gap-5"
          >
            View Case Study

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
