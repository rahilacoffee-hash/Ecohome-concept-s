export default function FooterColumn({ title, items, variant = "links" }) {
  return (
    <div>
      <h3 className="text-base font-bold uppercase tracking-wide text-white sm:text-lg">
        {title}
      </h3>

      <span className="mt-3 block h-[3px] w-9 rounded-full bg-[#73B72B]" />

      <ul
        className={
          variant === "services"
            ? "mt-5 divide-y divide-white/5 sm:mt-6"
            : "mt-5 space-y-3 sm:mt-6 sm:space-y-4"
        }
      >
        {items.map((item) => {
          let Icon = item.icon;

          return (
            <li key={item.id} className={variant === "services" ? "py-3.5 first:pt-0 last:pb-0 sm:py-4" : ""}>
              <a
                href={item.href}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-slate-300
                  transition-colors
                  duration-200
                  hover:text-[#73B72B]
                  sm:text-base
                "
              >
                {variant === "links" ? (
                  <span className="text-[#73B72B] transition-transform duration-200 group-hover:translate-x-0.5">
                    &gt;
                  </span>
                ) : (
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#73B72B]/10
                      text-[#73B72B]
                      sm:h-9
                      sm:w-9
                    "
                  >
                    <Icon size={16} />
                  </span>
                )}

                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}