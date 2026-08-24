import { motion } from "framer-motion";

export default function FeatureCard({ feature, index }) {
  let Icon = feature.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="
        rounded-2xl
        bg-white
        p-6
        shadow-[0_4px_20px_rgba(15,23,42,.05)]
        transition-shadow
        duration-300
        hover:shadow-[0_10px_30px_rgba(15,23,42,.1)]
      "
    >
      <div
        className="
          mb-5
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#73B72B]/15
        "
      >
        <Icon size={24} className="text-[#73B72B]" />
      </div>

      <h3 className="mb-2 text-lg font-bold text-[#102A72]">
        {feature.title}
      </h3>

      <p className="text-sm leading-6 text-slate-500">
        {feature.description}
      </p>
    </motion.div>
  );
}