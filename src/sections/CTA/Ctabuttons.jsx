import { Link } from "react-router-dom";

export default function CTAButtons({ buttons }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
      {buttons.map((button) => {
        let Icon = button.icon;
        let ArrowIcon = button.arrowIcon;
        let isPrimary = button.variant === "primary";

        return (
          <Link
            key={button.id}
            to={button.href}
            className={`
              group
              flex
              w-full
              items-center
              justify-center
              gap-2.5
              rounded-2xl
              px-5
              py-3.5
              text-sm
              font-bold
              transition-all
              duration-300
              hover:-translate-y-0.5
              sm:w-auto
              sm:gap-3
              sm:px-7
              sm:py-4
              sm:text-base
              ${
                isPrimary
                  ? "bg-[#73B72B] text-white shadow-[0_15px_40px_rgba(115,183,43,.35)] hover:bg-[#65a324] hover:shadow-[0_20px_50px_rgba(115,183,43,.45)]"
                  : "border border-white/15 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10"
              }
            `}
          >
            <Icon size={16} className="sm:hidden" />
            <Icon size={18} className="hidden sm:block" />

            {button.label}

            <ArrowIcon
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        );
      })}
    </div>
  );
}
