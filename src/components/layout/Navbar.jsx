import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiArrowRight,
  HiBars3,
  HiFolderOpen,
  HiHome,
  HiPhone,
  HiUser,
  HiWrenchScrewdriver,
  HiXMark,
} from "react-icons/hi2";
import { useEffect, useState } from "react";

import Container from "./Container";
import logo from "../../assets/images/logos/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Contact Us", to: "/contact" },
];

const mobLinks = [
  {
    label: "Home",
    id: "home",
    icon: HiHome,
  },
  {
    label: "About Us",
    id: "about",
    icon: HiUser,
  },
  {
    label: "Services",
    id: "services",
    icon: HiWrenchScrewdriver,
  },
  {
    label: "Projects",
    id: "projects",
    icon: HiFolderOpen,
  },
  {
    label: "Contact Us",
    to: "/contact",
    icon: HiPhone,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const offset = 90; // navbar height

      const top =
        section.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }

    setMobileMenu(false);
  };
  const menuVariants = {
    hidden: {
      x: "100%",
    },

    visible: {
      x: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },

    exit: {
      x: "100%",
      transition: {
        duration: 0.35,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 40,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 py-3 sm:py-5 lg:py-7"
    >
      <Container>
        <nav
          className={`flex h-[64px] sm:h-[76px] lg:h-[90px] items-center justify-between rounded-2xl border px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,.08)] border-white/30"
              : "bg-white shadow-md border-gray-100"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img
              src={logo}
              alt="Ecohome Concepts"
              className="h-10 sm:h-12 lg:h-16 w-auto object-contain shrink-0"
            />

            <div className="leading-none min-w-0">
              <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-[#102A72] truncate">
                Ecohome
              </h1>

              <p className="text-base sm:text-xl lg:text-2xl font-bold text-[#102A72] truncate">
                Concepts
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.to ? <Link
                  to={link.to}
                  className="relative text-[15px] font-medium tracking-wide text-slate-700 transition-all duration-300 hover:text-[#73B72B]"
                >
                  {link.label}
                </Link> : <button
                  onClick={() => scrollToSection(link.id)}
                  className="
    relative
    text-[15px]
    font-medium
    tracking-wide
    text-slate-700
    hover:text-[#73B72B]
    transition-all
    duration-300
    group
  "
                >
                  {link.label}

                  <span
                    className="
      absolute
      left-0
      -bottom-1
      h-[2px]
      w-0
      bg-[#73B72B]
      transition-all
      duration-300
      group-hover:w-full
    "
                  />
                </button>}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="
              hidden
              lg:flex
              items-center
              gap-2
              rounded-full
              bg-[#73B72B]
             px-8 py-3.5
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#5fa326]
              hover:shadow-lg
            "
          >
            Get a Quote
            <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <button
            onClick={() => setMobileMenu(true)}
            className="
    lg:hidden
    h-10
    w-10
    sm:h-12
    sm:w-12
    rounded-xl
    border
    border-gray-200
    flex
    items-center
    justify-center
    bg-white
    shadow-md
    transition
    hover:bg-gray-50
    shrink-0
  "
          >
            <HiBars3 size={24} className="sm:hidden" />
            <HiBars3 size={28} className="hidden sm:block" />
          </button>
          <AnimatePresence>
            {mobileMenu && (
              <>
                {/* Backdrop */}

                <motion.div
                  onClick={() => setMobileMenu(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="
          fixed
          inset-0
          z-40
          bg-black/50
          backdrop-blur-md
        "
                />

                {/* Side Menu */}

                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="
          fixed
          top-0
          right-0
          z-50
          h-screen
          w-full
          max-w-[320px]
          sm:max-w-[360px]
          bg-white
          shadow-2xl
          p-5
          sm:p-8
          flex
          flex-col
          overflow-y-auto
        "
                >
                  {/* Close */}

                  <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-3 min-w-0">
                      <img src={logo} className="h-10 sm:h-12 shrink-0" />

                      <div className="min-w-0">
                        <h2 className="font-bold text-lg sm:text-xl text-[#102A72] truncate">
                          Ecohome
                        </h2>

                        <p className="font-bold text-lg sm:text-xl text-[#102A72] truncate">
                          Concepts
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setMobileMenu(false)}
                      className="
        h-10
        w-10
        sm:h-12
        sm:w-12
        rounded-full
        bg-gray-100
        hover:bg-[#73B72B]
        hover:text-white
        transition-all
        duration-300
        flex
        items-center
        justify-center
        shrink-0
        "
                    >
                      <HiXMark size={22} className="sm:hidden" />
                      <HiXMark size={26} className="hidden sm:block" />
                    </button>
                  </div>

                  {/* Links */}

                  <div className="mt-8 sm:mt-14 flex flex-col gap-4 sm:gap-8">
                    {mobLinks.map((links) => {
                      const Icon = links.icon;

                      return (
                        <motion.div key={links.label} variants={itemVariants}>
                          {links.to ? <Link
                            to={links.to}
                            onClick={() => setMobileMenu(false)}
                            className="
    group
    flex
    items-center
    gap-3
    sm:gap-4
    w-full
    px-3
    sm:px-4
    py-2.5
    sm:py-3
    rounded-xl
    transition-all
    duration-300
    hover:bg-[#73B72B]/10
    hover:translate-x-2
  "
                          >
                            <span
                              className="
      h-8
      sm:h-10
      w-1
      rounded-full
      bg-transparent
      transition-all
      duration-300
      group-hover:bg-[#73B72B]
      shrink-0
    "
                            />

                            <Icon
                              size={24}
                              className="
      text-slate-700
      transition-all
      duration-300
      group-hover:text-[#73B72B]
      group-hover:scale-110
      shrink-0
      sm:hidden
    "
                            />
                            <Icon
                              size={28}
                              className="
      text-slate-700
      transition-all
      duration-300
      group-hover:text-[#73B72B]
      group-hover:scale-110
      shrink-0
      hidden
      sm:block
    "
                            />

                            <span
                              className="
      text-[20px]
      sm:text-[26px]
      lg:text-[30px]
      font-bold
      text-slate-800
      transition-colors
      duration-300
      group-hover:text-[#73B72B]
      truncate
    "
                            >
                              {links.label}
                            </span>
                          </Link> : <button
                            onClick={() => scrollToSection(links.id)}
                            className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-300 hover:translate-x-2 hover:bg-[#73B72B]/10 sm:gap-4 sm:px-4 sm:py-3"
                          ><span className="h-8 w-1 shrink-0 rounded-full bg-transparent transition-all duration-300 group-hover:bg-[#73B72B] sm:h-10" /><Icon size={24} className="shrink-0 text-slate-700 transition-all duration-300 group-hover:scale-110 group-hover:text-[#73B72B] sm:hidden" /><Icon size={28} className="hidden shrink-0 text-slate-700 transition-all duration-300 group-hover:scale-110 group-hover:text-[#73B72B] sm:block" /><span className="truncate text-[20px] font-bold text-slate-800 transition-colors duration-300 group-hover:text-[#73B72B] sm:text-[26px] lg:text-[30px]">{links.label}</span></button>}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Spacer */}

                  <div className="flex-1" />

                  {/* CTA */}

                  <motion.div
                    variants={itemVariants}
                    className="
            group
            rounded-full
            bg-[#73B72B]
            py-3.5
            sm:py-4
            text-white
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            hover:bg-[#5da325]
            transition
          "
                  ><Link to="/contact" onClick={() => setMobileMenu(false)} className="group flex items-center justify-center gap-2 rounded-full bg-[#73B72B] py-3.5 font-semibold text-white transition hover:bg-[#5da325] sm:py-4">Get a Quote <HiArrowRight className="transition-transform group-hover:translate-x-1" /></Link></motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
          {/*  */}
        </nav>
      </Container>
    </motion.header>
  );
}
