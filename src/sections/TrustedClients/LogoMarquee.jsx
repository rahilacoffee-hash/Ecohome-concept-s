import { motion } from "framer-motion";
import { useState } from "react";

import ClientLogo from "./ClientLogo";

export default function LogoMarquee({
  clients,
  reverse = false,
  speed = 30,
}) {
  const [paused, setPaused] = useState(false);

  // Duplicate for seamless scrolling
  const marqueeClients = [...clients, ...clients];

  return (
    <div
      className="relative overflow-hidden py-3 sm:py-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fade Left */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-[#F8FAFC] to-transparent sm:w-20 lg:w-32" />

      {/* Fade Right */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-10 bg-gradient-to-l from-[#F8FAFC] to-transparent sm:w-20 lg:w-32" />

      <motion.div
        className="flex w-max gap-4 sm:gap-6 lg:gap-8"
        animate={
          paused
            ? {}
            : {
                x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
              }
        }
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {marqueeClients.map((client, index) => (
          <ClientLogo
            key={`${client.id}-${index}`}
            client={client}
          />
        ))}
      </motion.div>
    </div>
  );
}