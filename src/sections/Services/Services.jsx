import { PhoneCall, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fetchServices } from "../../services/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    fetchServices()
      .then((data) => active && setServices(data))
      .catch((requestError) => active && setError(requestError.message))
      .finally(() => active && setIsLoading(false));

    return () => { active = false; };
  }, []);

  return (
    <section
    id="services" className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#73B72B]/10 blur-[180px]" />

      {/* Dots */}
      <div className="hidden sm:grid absolute left-10 top-10 grid-cols-8 gap-2 opacity-20">
        {Array.from({ length: 64 }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-[#73B72B]"
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 sm:mb-16 lg:mb-20 max-w-4xl text-center"
        >
          <div className="mb-4 sm:mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 sm:w-14 bg-[#73B72B]" />
            <span className="font-bold uppercase tracking-widest text-[#73B72B] text-sm sm:text-base">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black leading-tight text-[#102A72] md:text-6xl">
            Comprehensive{" "}
            <span className="text-[#73B72B]">
              Construction Solutions
            </span>
          </h2>

          <p className="mx-auto mt-5 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
            We provide end-to-end construction and engineering
            services designed to meet your needs with quality,
            safety and excellence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid auto-rows-fr gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-2">
          {isLoading && <div className="col-span-full py-16 text-center font-semibold text-[#102A72]">Loading services…</div>}
          {error && <div className="col-span-full py-16 text-center"><p className="font-semibold text-red-600">{error}</p><button onClick={() => window.location.reload()} className="mt-4 font-bold text-[#73B72B]">Try again</button></div>}
          {!isLoading && !error && services.length === 0 && <div className="col-span-full py-16 text-center text-slate-500">Services will appear here once they are active.</div>}
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="h-full"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 sm:mt-18 lg:mt-24"
        >
          <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 rounded-[22px] sm:rounded-[28px] border border-[#73B72B]/10 bg-white px-6 sm:px-10 py-7 sm:py-8 shadow-[0_20px_60px_rgba(0,0,0,.06)] lg:flex-row">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-[#73B72B]/10 text-[#73B72B]">
                <PhoneCall size={22} className="sm:hidden" />
                <PhoneCall size={30} className="hidden sm:block" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#73B72B]">
                  Have a project in mind?
                </h3>

                <p className="mt-2 text-sm sm:text-base text-slate-600">
                  Let's build something amazing together. Get in touch
                  with our team today.
                </p>
              </div>
            </div>

            <Link to="/contact" className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#73B72B] px-8 sm:px-10 py-4 sm:py-5 font-semibold text-white transition hover:scale-105 text-sm sm:text-base">
              Request a Quote

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
