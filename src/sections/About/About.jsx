import { motion } from "framer-motion";

import aboutImg from "../../assets/images/projects/about.png";

import MotionCounter from "../Stats/counter";
import {
  HiArrowRight,
} from "react-icons/hi2";
import { useState } from "react";
import { Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    icon: Building2,
    value: 25,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Building2,
    value: 150,
    suffix: "+",
    label: "Projects Completed",
  },
];

const floatingCards = [
  {
    title: "Professional",
    subtitle: "Engineering Team",
    top: "top-6 lg:top-10",
    left: "left-0 lg:-left-16",
  },
  {
    title: "Quality",
    subtitle: "Construction Standards",
    top: "top-28 lg:top-36",
    right: "right-0 lg:-right-16",
  },
  {
    title: "Timely",
    subtitle: "Project Delivery",
    bottom: "bottom-28 lg:bottom-40",
    left: "left-0 lg:-left-14",
  },
  {
    title: "Customer",
    subtitle: "Satisfaction Guaranteed",
    bottom: "bottom-6 lg:bottom-10",
    right: "right-0 lg:-right-20",
  },
];

export default function About({ content = {} }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: (e.clientX - rect.left - rect.width / 2) / 25,
      y: (e.clientY - rect.top - rect.height / 2) / 25,
    });
  };
  const floatingAnimations = [
    {
      y: [0, -12, 0],
      rotate: [0, -2, 0],
    },
    {
      y: [0, 10, 0],
      rotate: [0, 2, 0],
    },
    {
      x: [0, 8, 0],
      y: [0, -8, 0],
    },
    {
      x: [0, -10, 0],
      y: [0, 10, 0],
    },
  ];
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-white via-[#f8fbf5] to-white overflow-hidden"
    >
      {/* Decorative Dots */}

      <div className="hidden sm:grid absolute top-16 right-24 grid-cols-8 gap-2 opacity-30">
        {[...Array(40)].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#73B72B]" />
        ))}
      </div>

      <div className="hidden sm:grid absolute bottom-16 left-1/2 grid-cols-8 gap-2 opacity-30">
        {[...Array(40)].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#73B72B]" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 sm:gap-16 lg:gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <span className="w-8 sm:w-10 h-[2px] bg-[#73B72B]" />
              <p className="uppercase font-semibold tracking-wide text-[#73B72B] text-sm sm:text-base">
                {content.eyebrow || "About Ecohome Concepts"}
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight text-[#102A72]">
              {content.title || "Building the Future"}
              <br />
              <span className="text-[#73B72B]">{content.highlight || "with Innovation, Quality & Integrity."}</span>
            </h2>

            <p className="mt-6 sm:mt-8 text-gray-600 leading-7 sm:leading-9 text-base sm:text-lg">
              {content.description || "Ecohome Concepts delivers exceptional construction, engineering and project management services tailored to residential, commercial and institutional developments."}
            </p>

            {/* Stats */}

            <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-10">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-3 sm:gap-4">
                    <div className="text-[#73B72B]">
                      <Icon size={26} className="sm:hidden" />
                      <Icon size={34} className="hidden sm:block" />
                    </div>

                    <div>
                      <h3 className="font-black text-2xl sm:text-3xl text-[#102A72]">
                        <MotionCounter value={item.value} duration={2} />
                        {item.suffix}
                      </h3>

                      <p className="text-gray-500 text-sm sm:text-base">{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 sm:mt-12">
              <Link to="about" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto justify-center bg-[#73B72B] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-xl hover:scale-105 transition text-sm sm:text-base">
                Learn More
                <HiArrowRight size={18} />
              </button>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto">
              <span className="w-full sm:w-auto justify-center border-2 border-[#102A72] text-[#102A72] px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold flex items-center gap-3 hover:bg-[#102A72] hover:text-white transition text-sm sm:text-base">
                Get a Quote
                <HiArrowRight size={18} />
              </span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center mt-4 lg:mt-0"
            whileHover={{
              scale: 1.02,
              rotate: -1,
            }}
          >
            {/* Glow */}

            <div className="absolute inset-4 sm:inset-6 rounded-[50px] bg-[#73B72B]/15 blur-[60px] sm:blur-[80px]" />

            {/* Green Frame */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="
absolute
inset-0
bg-[#73B72B]/20
blur-[80px]
sm:blur-[120px]
rounded-full
"
            />

            {/* Image */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setMouse({ x: 0, y: 0 })}
              className="relative w-full max-w-[380px] sm:max-w-[460px] lg:max-w-none lg:w-[560px]"
            >
              <motion.img
                animate={{
                  x: mouse.x,
                  y: mouse.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                }}
                src={content.image || aboutImg}
                alt=""
                className="relative z-10 rounded-[24px] sm:rounded-[35px] w-full aspect-[4/5] lg:w-[560px] lg:h-[700px] object-cover shadow-[0_40px_90px_rgba(0,0,0,.25)] border-4 sm:border-8 border-white"
              />
            </div>

            {/* Floating Cards */}

            {floatingCards.map((card, index) => (
              <motion.div
                key={card.title}
                animate={floatingAnimations[index]}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                }}
                className={`
                hidden
                md:block
                absolute
                ${card.top || ""}
                ${card.bottom || ""}
                ${card.left || ""}
                ${card.right || ""}
                bg-white/80
                 backdrop-blur-xl
                 border border-white/40
                rounded-2xl
                lg:rounded-3xl
                shadow-2xl
                p-4
                lg:p-5
                w-52
                lg:w-60
                z-20
              `}
              >
                <div className="flex gap-3 lg:gap-4 items-center">
                  <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-[#73B72B] flex items-center justify-center text-white text-xl lg:text-2xl">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-bold text-[#102A72] text-sm lg:text-base">{card.title}</h4>

                    <p className="text-gray-600 text-xs lg:text-sm">{card.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
