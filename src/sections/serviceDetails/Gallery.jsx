import { motion } from "framer-motion";

export default function Gallery({ gallery }) {
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
            {gallery.badge}
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#102A72] md:text-5xl">
            {gallery.title} <span className="text-[#73B72B]">{gallery.highlight}</span>
          </h2>
        </motion.div>

        {/* ================= Image Grid ================= */}

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {gallery.images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#102A72]/60
                  via-transparent
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}