import { motion } from "framer-motion";
import MotionCounter from "../Stats/counter";

function parseStat(rawValue) {
  const value = parseInt(rawValue.replace(/\D/g, ""));
  const suffix = rawValue.replace(/[0-9]/g, "");

  return { value, suffix };
}

// A drafting-style dimension line: tick — line — tick, the way a measurement
// is called out on a blueprint or elevation drawing.
function DimensionLine({ vertical = false }) {
  if (vertical) {
    return (
      <div className="flex flex-1 flex-col items-center py-2">
        <span className="h-px w-2 bg-[#102A72]/30" />
        <span className="w-px flex-1 bg-[#102A72]/15" />
        <span className="h-px w-2 bg-[#102A72]/30" />
      </div>
    );
  }

  return (
    <div className="flex flex-1 items-center gap-0">
      <span className="h-2 w-px bg-[#102A72]/30" />
      <span className="h-px flex-1 bg-[#102A72]/15" />
      <span className="h-2 w-px bg-[#102A72]/30" />
    </div>
  );
}

function StatEntry({ item, index, orientation }) {
  const { value, suffix } = parseStat(item.value);
  const isRow = orientation === "row";

  const number = (
    <span className="whitespace-nowrap font-mono font-bold leading-none text-[#102A72]">
      <MotionCounter value={value} duration={2} />
      <span className="text-[#73B72B]">{suffix}</span>
    </span>
  );

  const label = (
    <p className="font-medium uppercase leading-tight tracking-[0.14em] text-slate-500">
      {item.label}
    </p>
  );

  if (isRow) {
    // Desktop: stacked vertically — number, dimension line, label
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="flex flex-1 flex-col items-center gap-3 px-6 text-center"
      >
        <span className="text-3xl">{number}</span>
        <DimensionLine />
        <span className="text-[10px]">{label}</span>
      </motion.div>
    );
  }

  // Mobile: horizontal row — number, dimension line, label
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.45 }}
      className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
    >
      <span className="w-14 shrink-0 text-lg">{number}</span>
      <DimensionLine />
      <span className="w-24 shrink-0 text-right text-[10px]">{label}</span>
    </motion.div>
  );
}

export default function StatsCard({ statistics }) {
  return (
    <>
      {/* ================= MOBILE / TABLET — drafting sheet, sits below the image ================= */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          relative
          z-20
          mt-5
          overflow-hidden
          rounded-xl
          border
          border-[#102A72]/10
          bg-white
          px-5
          pb-1
          pt-4
          shadow-[0_15px_35px_rgba(16,42,114,.08)]
          lg:hidden
        "
      >
        {/* Faint blueprint grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#102A72 1px, transparent 1px), linear-gradient(90deg, #102A72 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        <p className="relative mb-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#102A72]/50">
          <span className="h-1 w-1 rounded-full bg-[#73B72B]" />
          Project Metrics
        </p>

        <div className="relative divide-y divide-[#102A72]/10">
          {statistics.map((item, index) => (
            <StatEntry key={item.id} item={item} index={index} orientation="col" />
          ))}
        </div>
      </motion.div>

      {/* ================= DESKTOP — drafting sheet floating over the image ================= */}

      <motion.div
        initial={{ opacity: 0, x: 60, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        whileHover={{ y: -6 }}
        className="
          hidden
          lg:block
          absolute
          -bottom-10
          left-10
          z-20
          w-[90%]
          overflow-hidden
          rounded-2xl
          border
          border-[#102A72]/10
          bg-white/95
          px-10
          pb-8
          pt-6
          shadow-[0_35px_80px_rgba(16,42,114,.15)]
          backdrop-blur-md
        "
      >
        {/* Faint blueprint grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#102A72 1px, transparent 1px), linear-gradient(90deg, #102A72 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <p className="relative mb-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#102A72]/50">
          <span className="h-1.5 w-1.5 rounded-full bg-[#73B72B]" />
          Project Metrics
        </p>

        <div className="relative flex divide-x divide-[#102A72]/10">
          {statistics.map((item, index) => (
            <StatEntry key={item.id} item={item} index={index} orientation="row" />
          ))}
        </div>
      </motion.div>
    </>
  );
}