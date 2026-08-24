import { motion } from "framer-motion";

export default function Process({ process }) {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      <div className="relative px-6 lg:px-16">

        {/* ================= Header ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#73B72B]">
            {process.badge}
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#102A72] md:text-5xl">
            {process.title} <span className="text-[#73B72B]">{process.highlight}</span>
          </h2>

          <span className="mx-auto mt-6 block h-1 w-14 rounded-full bg-[#73B72B]" />
        </motion.div>

        {/* ================= Steps ================= */}

        <div className="relative mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          {/* Dashed connector line (desktop only) */}

          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-slate-200 lg:block" />

          {process.steps.map((step, index) => {
            let Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number badge */}

                <span
                  className="
                    absolute
                    -top-2
                    left-1/2
                    z-10
                    flex
                    h-8
                    w-8
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-[#102A72]
                    text-xs
                    font-bold
                    text-white
                  "
                >
                  {step.number}
                </span>

                {/* Icon circle */}

                <span
                  className="
                    relative
                    z-10
                    mt-6
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-[#F8FAFC]
                    text-[#102A72]
                  "
                >
                  <Icon size={26} />
                </span>

                <h3 className="mt-5 text-lg font-bold text-[#102A72]">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-[220px] text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}