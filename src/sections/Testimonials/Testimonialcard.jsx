import { FaBuilding, FaStar, FaQuoteRight } from "react-icons/fa";

export default function TestimonialCard({ testimonial, variant }) {
  let ProjectIcon = testimonial.icon || FaBuilding;

  if (variant === "peek") {
    return (
      <div
        className="
          relative
          h-[420px]
          w-full
          overflow-hidden
          rounded-[28px]
          border
          border-white/40
          bg-white/70
          p-8
          backdrop-blur-sm
        "
      >
        <FaQuoteRight size={40} className="mb-4 text-[#73B72B]/20" />

        <p className="line-clamp-4 text-slate-400">{testimonial.quote}</p>

        <div className="mt-6 flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <FaStar key={index} size={14} className="text-[#73B72B]/60" />
          ))}
        </div>

        <div className="mt-8">
          <span className="block font-bold text-[#102A72]/70">
            {testimonial.name}
          </span>

          <span className="block text-sm text-slate-400">
            {testimonial.role}
          </span>

          <span className="block text-sm text-slate-400">
            {testimonial.company}
          </span>

          {testimonial.project && <span className="mt-2 inline-block text-sm font-semibold text-[#73B72B]/60">{testimonial.project}</span>}
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white
        bg-white/90
        p-8
        shadow-[0_40px_80px_rgba(16,42,114,.18)]
        backdrop-blur-sm
        md:p-12
      "
    >
      {/* Faint background project image */}

      {testimonial.backgroundImage && (
        <img
          src={testimonial.backgroundImage}
          alt={testimonial.project}
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            h-[260px]
            w-[320px]
            object-cover
            opacity-15
            [mask-image:linear-gradient(to_left,black,transparent)]
          "
        />
      )}

      <FaQuoteRight size={56} className="mb-6 text-[#73B72B]/15" />

      <p className="relative max-w-xl text-lg leading-8 text-[#102A72] md:text-xl">
        {testimonial.quote}
      </p>

      <div className="relative mt-6 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <FaStar key={index} size={18} className="text-[#73B72B]" />
        ))}
      </div>

      <div className="relative mt-8 flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0">
          {testimonial.avatar ? (
            <img src={testimonial.avatar} alt={testimonial.name} className="h-16 w-16 rounded-full border-4 border-[#73B72B]/30 object-cover" />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#73B72B]/30 bg-[#102A72] text-xl font-bold text-white">
              {testimonial.name?.charAt(0) || "C"}
            </div>
          )}

          <span
            className="
              absolute
              -bottom-1
              -right-1
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-[#73B72B]
              ring-4
              ring-white
            "
          >
            <ProjectIcon size={12} className="text-white" />
          </span>
        </div>

        <div>
          <span className="block text-lg font-bold text-[#102A72]">
            {testimonial.name}
          </span>

          <span className="block text-sm text-slate-500">
            {testimonial.role}
          </span>

          <span className="block text-sm text-slate-500">
            {testimonial.company}
          </span>
        </div>
      </div>

      {testimonial.project && <span
        className="
          relative
          mt-6
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-[#73B72B]/30
          bg-[#73B72B]/5
          px-4
          py-2
          text-sm
          font-semibold
          text-[#73B72B]
        "
      >
        <ProjectIcon size={14} />
        {testimonial.project}
      </span>}
    </div>
  );
}
