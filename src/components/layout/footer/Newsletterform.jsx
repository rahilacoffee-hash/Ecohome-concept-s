import { useState } from "react";
import { FaPaperPlane, FaLock } from "react-icons/fa";

export default function NewsletterForm({ newsletter }) {
  let Icon = newsletter.icon;

  let [email, setEmail] = useState("");
  let [status, setStatus] = useState("idle");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) return;

    setStatus("submitted");
    setEmail("");

    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <div>
      <h3 className="text-base font-bold uppercase tracking-wide text-white sm:text-lg">
        Stay Updated
      </h3>

      <span className="mt-3 block h-[3px] w-9 rounded-full bg-[#73B72B]" />

      <div
        className="
          mt-5
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          p-5
          sm:mt-6
          sm:p-6
        "
      >
        <span
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-[#73B72B]
            sm:h-12
            sm:w-12
          "
        >
          <Icon size={16} className="text-white sm:hidden" />
          <Icon size={18} className="hidden text-white sm:block" />
        </span>

        <h4 className="mt-4 text-base font-bold text-white sm:text-lg">
          {newsletter.title}
        </h4>

        <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
          {newsletter.description}
        </p>

        <form onSubmit={handleSubmit} className="mt-5">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            required
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3.5
              text-sm
              text-white
              placeholder:text-slate-400
              outline-none
              transition-colors
              duration-200
              focus:border-[#73B72B]/60
              sm:px-5
              sm:py-4
              sm:text-base
            "
          />

          <button
            type="submit"
            className="
              mt-4
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-[#73B72B]
              py-3.5
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#65a324]
              hover:shadow-[0_15px_35px_rgba(115,183,43,.35)]
              sm:py-4
              sm:text-base
            "
          >
            {status === "submitted" ? "Subscribed!" : "Subscribe Now"}
            <FaPaperPlane size={15} />
          </button>
        </form>

        <div className="mt-4 flex items-start gap-2 text-xs text-slate-400 sm:text-sm">
          <FaLock size={13} className="mt-0.5 shrink-0 text-[#73B72B]" />
          <span>We respect your privacy. Unsubscribe anytime.</span>
        </div>
      </div>
    </div>
  );
}