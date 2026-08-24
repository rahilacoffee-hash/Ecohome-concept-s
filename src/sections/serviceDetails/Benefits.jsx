import { motion } from "framer-motion";

export default function Benefits({ benefits }) {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24">

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
            {benefits.badge}
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#102A72] md:text-5xl">
            {benefits.title} <span className="text-[#73B72B]">{benefits.highlight}</span>
          </h2>
        </motion.div>

        {/* ================= Grid ================= */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item, index) => {
            let Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#73B72B]/40
                  hover:shadow-[0_20px_45px_rgba(15,23,42,.08)]
                "
              >
                <span
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#102A72]/5
                    text-[#102A72]
                  "
                >
                  <Icon size={26} />
                </span>

                <h3 className="mt-5 text-lg font-bold text-[#102A72]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}