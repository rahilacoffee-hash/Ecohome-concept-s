import { motion } from "framer-motion";

export default function Overview({ overview }) {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      <div className="pointer-events-none absolute left-4 top-16 grid grid-cols-6 gap-2 opacity-20">
        {Array.from({ length: 24 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-slate-400" />
        ))}
      </div>

      <div className="relative grid items-center gap-16 px-6 lg:grid-cols-2 lg:px-16">

        {/* ================= LEFT: Image ================= */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative z-10 overflow-hidden rounded-3xl shadow-[0_30px_70px_rgba(15,23,42,.15)]">
            {overview.image ? (
              <img
                src={overview.image}
                alt={overview.highlight || overview.title}
                className="h-[380px] w-full object-cover md:h-[440px]"
              />
            ) : (
              <div className="flex h-[380px] items-center justify-center bg-[#102A72] p-8 text-center text-3xl font-black text-white md:h-[440px]">
                {overview.title}
              </div>
            )}
          </div>

          <span className="pointer-events-none absolute -bottom-6 -right-6 -z-0 h-full w-full rounded-3xl border-2 border-[#73B72B]" />
        </motion.div>

        {/* ================= RIGHT: Content ================= */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#73B72B]">
            {overview.badge}
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#102A72] md:text-5xl">
            {overview.title}
            <br />
            <span className="text-[#73B72B]">{overview.highlight}</span>
          </h2>

          <div className="mt-6 space-y-4">
            {overview.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-7 text-slate-500">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {overview.features.map((feature) => {
              let Icon = feature.icon;

              return (
                <div key={feature.id} className="flex flex-col items-center text-center">
                  <span
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#73B72B]/30
                      bg-[#73B72B]/5
                      text-[#73B72B]
                    "
                  >
                    <Icon size={22} />
                  </span>

                  <span className="mt-3 text-sm font-semibold text-[#102A72]">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
