export default function FooterStats({ footerStats }) {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-y-6
        rounded-2xl
        border
        border-white/10
        bg-white/[0.02]
        px-4
        py-6
        sm:gap-y-0
        sm:divide-x
        sm:divide-white/10
        sm:grid-cols-4
        sm:px-8
        sm:py-8
      "
    >
      {footerStats.map((stat) => {
        let Icon = stat.icon;

        return (
          <div
            key={stat.id}
            className="flex items-center gap-3 sm:gap-4 sm:pl-8 sm:first:pl-0"
          >
            <span
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#73B72B]/40
                bg-[#73B72B]/10
                text-[#73B72B]
                sm:h-12
                sm:w-12
              "
            >
              <Icon size={16} className="sm:hidden" />
              <Icon size={18} className="hidden sm:block" />
            </span>

            <div>
              <span className="block text-lg font-black text-[#73B72B] sm:text-2xl">
                {stat.value}
              </span>

              <span className="block text-xs text-slate-300 sm:text-sm">
                {stat.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}