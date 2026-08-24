import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  Search,
  ExternalLink,
  LogOut,
} from "lucide-react";

export default function AdminNavbar({
  onMenuClick,
  onLogout,
  admin,
}) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const adminName = admin?.name || "Administrator";
  const adminEmail = admin?.email || "Admin Account";
  const initial = adminName.charAt(0).toUpperCase();

  return (
    <header
      className="
        sticky
        top-0
        z-30
        flex
        h-20
        items-center
        justify-between
        gap-4
        border-b
        border-slate-200
        bg-white/90
        px-4
        backdrop-blur-xl
        sm:px-6
        lg:px-8
      "
    >
      {/* ================= LEFT ================= */}

      <div className="flex min-w-0 items-center gap-4">
        {/* Mobile menu */}

        <button
          type="button"
          onClick={onMenuClick}
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            text-slate-600
            transition
            hover:bg-slate-100
            hover:text-[#102A72]
            lg:hidden
          "
          aria-label="Open admin menu"
        >
          <Menu size={22} />
        </button>

        {/* Page title */}

        <div className="hidden min-w-0 sm:block">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#73B72B]" />
            Admin Panel
          </p>

          <h2 className="truncate text-lg font-black text-[#102A72]">
            Welcome back, {adminName.split(" ")[0]}
          </h2>
        </div>
      </div>

      {/* ================= CENTER — SEARCH ================= */}

      <div className="hidden max-w-md flex-1 lg:block">
        <div
          className="
            group
            flex
            items-center
            gap-2.5
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            px-4
            py-2.5
            transition-colors
            duration-200
            focus-within:border-[#73B72B]/50
            focus-within:bg-white
            focus-within:shadow-[0_0_0_4px_rgba(115,183,43,.1)]
          "
        >
          <Search
            size={17}
            className="shrink-0 text-slate-400 transition-colors group-focus-within:text-[#73B72B]"
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search projects, messages, settings…"
            className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none"
          />

          <kbd
            className="
              hidden
              shrink-0
              rounded-md
              border
              border-slate-200
              bg-white
              px-1.5
              py-0.5
              text-[10px]
              font-semibold
              text-slate-400
              xl:block
            "
          >
            ⌘K
          </kbd>
        </div>
      </div>

      {/* ================= RIGHT ================= */}

      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        {/* Search — icon only, below lg */}

        <button
          type="button"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            text-slate-500
            transition
            hover:bg-slate-100
            hover:text-[#102A72]
            lg:hidden
          "
          aria-label="Search"
        >
          <Search size={19} />
        </button>

        {/* Divider */}

        <div className="mx-1 hidden h-8 w-px bg-slate-200 sm:block" />

        {/* ================= PROFILE ================= */}

        <div className="relative">
          <button
            type="button"
            onClick={() => setProfileOpen((prev) => !prev)}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              p-1.5
              transition
              hover:bg-slate-100
            "
          >
            {/* Avatar */}

            <div className="relative shrink-0">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-[#102A72]
                  to-[#1c3a94]
                  text-sm
                  font-black
                  text-white
                "
              >
                {initial}
              </div>

              <span className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full border-2 border-white bg-[#73B72B]" />
            </div>

            {/* User info */}

            <div className="hidden text-left md:block">
              <p className="max-w-[140px] truncate text-sm font-bold text-slate-800">
                {adminName}
              </p>

              <p className="max-w-[140px] truncate text-xs text-slate-500">
                {adminEmail}
              </p>
            </div>

            {/* Arrow */}

            <svg
              className={`
                hidden
                h-4
                w-4
                text-slate-400
                transition-transform
                duration-200
                md:block
                ${profileOpen ? "rotate-180" : ""}
              `}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* ================= DROPDOWN ================= */}

          <AnimatePresence>
            {profileOpen && (
              <>
                {/* Outside click layer */}

                <button
                  type="button"
                  aria-label="Close profile menu"
                  onClick={() => setProfileOpen(false)}
                  className="fixed inset-0 z-40 cursor-default"
                />

                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="
                    absolute
                    right-0
                    top-14
                    z-50
                    w-64
                    origin-top-right
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-[0_20px_60px_rgba(15,23,42,.15)]
                  "
                >
                {/* Profile header */}

                <div className="border-b border-slate-100 bg-slate-50/60 p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-gradient-to-br
                        from-[#102A72]
                        to-[#1c3a94]
                        font-black
                        text-white
                      "
                    >
                      {initial}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-slate-800">
                        {adminName}
                      </p>

                      <p className="truncate text-xs text-slate-500">
                        {adminEmail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Menu */}

                <div className="p-2">
                  <Link
                    to="/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setProfileOpen(false)}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-2.5
                      text-sm
                      font-semibold
                      text-slate-600
                      transition
                      hover:bg-slate-100
                      hover:text-[#102A72]
                    "
                  >
                    <ExternalLink size={18} className="text-slate-400 group-hover:text-[#73B72B]" />
                    View Website
                  </Link>

                  <div className="my-2 h-px bg-slate-100" />

                  <button
                    type="button"
                    onClick={() => {
                      setProfileOpen(false);
                      onLogout?.();
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-2.5
                      text-sm
                      font-semibold
                      text-red-500
                      transition
                      hover:bg-red-50
                    "
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
