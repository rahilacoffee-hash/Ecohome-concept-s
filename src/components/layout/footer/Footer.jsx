import footerData, {
  contactInfo,
  quickLinks,
  services,
  newsletter,
  footerStats,
  socialLinks,
  legalLinks,
} from "./footer";

import FooterColumn from "./Footercolumn";
import NewsletterForm from "./Newsletterform";
import FooterStats from "./Footerstats";
import SocialLinks from "./Sociallinks";
import logo from "../../../assets/images/logos/logo.png"

export default function Footer({ content = {} }) {
  const footerContent = { ...footerData, ...content };
  const visibleContactInfo = contactInfo.map((item) => ({
    ...item,
    text: item.label === "Our Office" ? footerContent.address : item.label === "Call Us" ? footerContent.phone : item.label === "Email Us" ? footerContent.email : item.text,
  }));

  return (
    <footer className="relative overflow-hidden bg-[#060f2e] pt-12 sm:pt-16">

      {/* ================= Background Decorations ================= */}

      <div className="pointer-events-none absolute -top-16 right-6 h-[150px] w-[150px] rounded-full border border-[#73B72B]/20 sm:-top-24 sm:right-10 sm:h-[260px] sm:w-[260px]" />

      <div className="pointer-events-none absolute -bottom-16 -left-10 h-[150px] w-[150px] rounded-full bg-[#73B72B]/20 blur-[60px] sm:-bottom-24 sm:-left-16 sm:h-[260px] sm:w-[260px] sm:blur-[100px]" />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />

      <div className="pointer-events-none absolute left-10 top-6 hidden sm:grid grid-cols-5 gap-2 opacity-20">
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-white" />
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-24 right-10 hidden sm:grid grid-cols-5 gap-2 opacity-20">
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-white" />
        ))}
      </div>

      <div className="relative px-4 pb-10 sm:px-6 sm:pb-12 lg:px-16">

        {/* ================= Main Columns ================= */}

        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-10">

          {/* ================= Brand Column ================= */}

          <div>
            <div className="flex items-center gap-3">
              <img src={logo} className="object-cover h-14 w-auto sm:h-16 lg:h-20"/>

              <span className="text-lg font-black tracking-wide text-white sm:text-xl">
                {footerData.brandName}
                <span className="block -mt-1 text-[#73B72B]">
                  {footerData.brandHighlight}
                </span>
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300 sm:mt-6 sm:text-base">
              {footerContent.description}
            </p>

            <span className="mt-5 block h-[3px] w-9 rounded-full bg-[#73B72B] sm:mt-6" />

            <ul className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
              {visibleContactInfo.map((info) => {
                let Icon = info.icon;

                return (
                  <li key={info.id} className="flex items-start gap-3">
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#73B72B]/40
                        text-[#73B72B]
                        sm:h-10
                        sm:w-10
                      "
                    >
                      <Icon size={14} />
                    </span>

                    <div>
                      <span className="block text-sm font-bold text-white sm:text-base">
                        {info.label}
                      </span>

                      <span className="block text-sm leading-6 text-slate-300">
                        {info.text}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ================= Quick Links ================= */}

          <FooterColumn
            title="Quick Links"
            items={quickLinks}
            variant="links"
          />

          {/* ================= Our Services ================= */}

          <FooterColumn
            title="Our Services"
            items={services}
            variant="services"
          />

          {/* ================= Newsletter ================= */}

          <NewsletterForm newsletter={newsletter} />
        </div>

        {/* ================= Stats Bar ================= */}

        <div className="mt-10 sm:mt-14">
          <FooterStats footerStats={footerStats} />
        </div>
      </div>

      {/* ================= Bottom Bar ================= */}

      <div className="relative border-t border-white/10 px-4 py-6 sm:px-6 sm:py-8 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-5 sm:gap-6 md:flex-row">

          {/* Follow Us */}

          <div className="flex items-center gap-3 sm:gap-5">
            <span className="text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
              Follow Us
            </span>

            <SocialLinks socialLinks={socialLinks} />
          </div>

          {/* Copyright */}

          <p className="text-center text-xs text-slate-400 sm:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#73B72B]">Ecohome Concepts</span>. All
            Rights Reserved.
          </p>

          {/* Legal Links */}

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 sm:gap-3 sm:text-sm">
            {legalLinks.map((link, index) => (
              <span key={link.id} className="flex items-center gap-2 sm:gap-3">
                <a
                  href={link.href}
                  className="transition-colors duration-200 hover:text-[#73B72B]"
                >
                  {link.label}
                </a>

                {index < legalLinks.length - 1 && (
                  <span className="text-[#73B72B]">&bull;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom glow line */}

      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#73B72B] to-transparent opacity-60" />
    </footer>
  );
}
