export default function TrustPills({ trustPills }) {
  return (
    <div
      className="
        grid
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-4
        backdrop-blur-sm
        sm:gap-6
        sm:p-6
        sm:grid-cols-3
        sm:divide-x
        sm:divide-white/10
      "
    >
      {trustPills.map((pill) => {
        let Icon = pill.icon;

        return (
          <div
            key={pill.id}
            className="flex items-start gap-2.5 sm:gap-3 sm:pl-6 sm:first:pl-0"
          >
            <Icon size={20} className="mt-0.5 shrink-0 text-[#73B72B] sm:hidden" />
            <Icon size={26} className="mt-0.5 hidden shrink-0 text-[#73B72B] sm:block" />

            <div>
              <span className="block text-sm font-bold text-white sm:text-base">
                {pill.title}
              </span>

              <span className="mt-1 block text-xs leading-5 text-slate-300 sm:text-sm">
                {pill.description}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}