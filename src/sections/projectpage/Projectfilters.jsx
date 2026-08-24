export default function ProjectFilters({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-6">
      {categories.map((category) => {
        let isActive = category === activeCategory;

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`
              rounded-full
              px-5
              py-2.5
              text-sm
              font-bold
              transition-all
              duration-300
              ${
                isActive
                  ? "bg-[#73B72B] text-white shadow-[0_10px_25px_rgba(115,183,43,.3)]"
                  : "text-[#102A72] hover:text-[#73B72B]"
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}