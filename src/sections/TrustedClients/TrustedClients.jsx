import { motion } from "framer-motion";
import {
  Building2,
  Users,
  BriefcaseBusiness,
  Award,
} from "lucide-react";

import clients from "./clients";
import LogoMarquee from "./LogoMarquee";

const stats = [
  {
    id: 1,
    icon: Users,
    value: "150+",
    label: "Happy Clients",
  },
  {
    id: 2,
    icon: BriefcaseBusiness,
    value: "500+",
    label: "Projects Delivered",
  },
  {
    id: 3,
    icon: Building2,
    value: "20+",
    label: "Government Projects",
  },
  {
    id: 4,
    icon: Award,
    value: "15+",
    label: "Years Experience",
  },
];

export default function TrustedClients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-24 lg:py-32"
    >
      {/* ================= Background ================= */}

      <div className="absolute inset-0">

        {/* Blueprint Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(#102A72_1px,transparent_1px),linear-gradient(90deg,#102A72_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        {/* Green Glow */}

        <div
          className="
            absolute
            left-[-100px]
            top-16
            h-[240px]
            w-[240px]
            rounded-full
            bg-[#73B72B]/15
            blur-[80px]
            sm:left-[-140px]
            sm:top-20
            sm:h-[340px]
            sm:w-[340px]
            sm:blur-[110px]
            lg:left-[-180px]
            lg:top-24
            lg:h-[420px]
            lg:w-[420px]
            lg:blur-[140px]
          "
        />

        {/* Blue Glow */}

        <div
          className="
            absolute
            right-[-100px]
            bottom-6
            h-[240px]
            w-[240px]
            rounded-full
            bg-[#102A72]/10
            blur-[80px]
            sm:right-[-140px]
            sm:bottom-8
            sm:h-[340px]
            sm:w-[340px]
            sm:blur-[110px]
            lg:right-[-180px]
            lg:bottom-10
            lg:h-[420px]
            lg:w-[420px]
            lg:blur-[140px]
          "
        />

        {/* Floating Shapes */}

        <div className="hidden sm:block absolute left-20 top-24 h-3 w-3 rounded-full bg-[#73B72B]/30" />
        <div className="hidden sm:block absolute right-36 top-40 h-5 w-5 rounded-full bg-[#102A72]/20" />
        <div className="hidden sm:block absolute left-1/3 bottom-28 h-4 w-4 rounded-full bg-[#73B72B]/20" />
      </div>

      {/* ================= Content ================= */}

      <div className="container relative mx-auto px-4 sm:px-6">

        {/* ================= Heading ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2 sm:mb-5 sm:gap-4">

            <span className="h-[2px] w-8 bg-[#73B72B] sm:w-14" />

            <span className="text-[11px] font-bold uppercase tracking-widest text-[#73B72B] sm:text-sm sm:tracking-[0.35em]">
              TRUSTED BY
            </span>

            <span className="h-[2px] w-8 bg-[#73B72B] sm:w-14" />

          </div>

          <h2 className="text-3xl font-black leading-tight text-[#102A72] sm:text-4xl md:text-6xl">
            Trusted By
            <span className="block text-[#73B72B]">
              Industry Leaders
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">
            We are proud to collaborate with government
            institutions, private organizations, and
            commercial developers to deliver exceptional
            construction and engineering solutions.
          </p>
        </motion.div>

        {/* ================= Stats ================= */}

        

        {/* ================= Logos ================= */}

        <div className="mt-12 sm:mt-16 lg:mt-24">

          <LogoMarquee
            clients={clients}
            speed={28}
          />

          <div className="mt-3 sm:mt-6 lg:mt-8" />

          <LogoMarquee
            clients={clients}
            reverse
            speed={35}
          />

        </div>

        {/* ================= Bottom Text ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mx-auto mt-12 max-w-4xl text-center sm:mt-16 lg:mt-24"
        >
          <h3 className="text-xl font-black text-[#102A72] sm:text-2xl lg:text-3xl">
            Building Lasting Partnerships
          </h3>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-9">
            Every successful project begins with trust.
            Our commitment to quality craftsmanship,
            transparency, and timely delivery has earned
            the confidence of clients across Nigeria.
          </p>
        </motion.div>

      </div>
    </section>
  );
}