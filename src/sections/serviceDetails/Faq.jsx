import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";

export default function FAQ({ faq }) {
  let [openId, setOpenId] = useState(faq.questions[0]?.id ?? null);

  function toggleQuestion(id) {
    setOpenId((current) => (current === id ? null : id));
  }

  let leftColumn = faq.questions.filter((_, index) => index % 2 === 0);
  let rightColumn = faq.questions.filter((_, index) => index % 2 === 1);

  function renderQuestion(item) {
    let isOpen = openId === item.id;

    return (
      <div
        key={item.id}
        className="
          overflow-hidden
          rounded-xl
          border
          border-slate-200
          bg-white
          transition-colors
          duration-200
        "
      >
        <button
          onClick={() => toggleQuestion(item.id)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-semibold text-[#102A72]">
            {item.question}
          </span>

          <span
            className={`
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#73B72B]/10
              text-[#73B72B]
              transition-transform
              duration-300
              ${isOpen ? "rotate-45" : "rotate-0"}
            `}
          >
            <FaPlus size={12} />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 leading-6 text-slate-500">
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-white py-24">

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
            {faq.badge}
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#102A72] md:text-5xl">
            {faq.title} <span className="text-[#73B72B]">{faq.highlight}</span>
          </h2>
        </motion.div>

        {/* ================= Two Column Accordion ================= */}

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2">
          <div className="space-y-4">{leftColumn.map(renderQuestion)}</div>
          <div className="space-y-4">{rightColumn.map(renderQuestion)}</div>
        </div>
      </div>
    </section>
  );
}