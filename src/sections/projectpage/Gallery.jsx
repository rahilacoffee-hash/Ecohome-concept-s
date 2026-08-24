import { motion } from "framer-motion";

export default function Gallery({ project }) {
  if (!project.gallery || project.gallery.length === 0) return null;

  return (
    <section className="bg-[#F8FAFC] py-20">

      <div className="px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#73B72B]">
            Gallery
          </span>

          <h2 className="mt-3 text-3xl font-black text-[#102A72] md:text-4xl">
            Project Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {project.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={`${project.title} — image ${index + 1}`}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}