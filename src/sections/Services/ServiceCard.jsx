import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  const Icon = service.icon || Building2;

  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="
        group
        relative
        h-auto
        sm:h-[440px]
        lg:h-[480px]
        overflow-hidden
        rounded-[24px]
        sm:rounded-[30px]
        bg-white
        shadow-[0_30px_80px_rgba(16,42,114,.10)]
        hover:shadow-[0_40px_100px_rgba(16,42,114,.16)]
        transition-all
        duration-500
      "
    >
      <div className="grid h-full grid-cols-1 sm:grid-cols-[55%_45%]">
        {/* LEFT CONTENT */}
        <div className="order-2 sm:order-1 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <div
              className="
                mb-5
                sm:mb-8
                flex
                h-12
                w-12
                sm:h-16
                sm:w-16
                lg:h-18
                lg:w-18
                items-center
                justify-center
                rounded-2xl
                bg-[#73B72B]/10
                text-[#73B72B]
                transition-all
                duration-500
                group-hover:bg-[#73B72B]
                group-hover:text-white
                group-hover:rotate-6
              "
            >
              <Icon size={22} className="sm:hidden" />
              <Icon size={28} className="hidden sm:block lg:hidden" />
              <Icon size={34} className="hidden lg:block" />
            </div>

            <h3
              className="
                text-xl
                sm:text-2xl
                leading-tight
                font-black
                text-[#102A72]
              "
            >
              {service.title}
            </h3>

            <div className="mt-4 mb-5 sm:mt-5 sm:mb-6 h-1 w-12 sm:w-14 rounded-full bg-[#73B72B]" />

            <p className="leading-7 sm:leading-8 text-[15px] sm:text-[17px] text-slate-600">
              {service.description}
            </p>
          </div>

          <Link
            to={service.link}
            className="
              mt-6
              sm:mt-8
              inline-flex
              w-fit
              items-center
              gap-3
              font-semibold
              text-[#73B72B]
              transition-all
              duration-300
              group-hover:gap-5
            "
          >
            Learn More

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            order-1
            sm:order-2
            relative
            h-48
            sm:h-full
            overflow-hidden
            sm:[clip-path:polygon(30%_0%,100%_0%,100%_100%,5%_100%)]
          "
        >
          {service.image ? <motion.img
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6 }}
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover"
          /> : <div className="flex h-full items-center justify-center bg-[#102A72] p-8 text-center text-xl font-black text-white">{service.title}</div>}

          {/* Dark Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-l
              from-transparent
              via-transparent
              to-black/5
            "
          />

          {/* Green Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="
              absolute
              inset-0
              bg-[#73B72B]/15
            "
          />
        </div>
      </div>
    </motion.article>
  );
}
