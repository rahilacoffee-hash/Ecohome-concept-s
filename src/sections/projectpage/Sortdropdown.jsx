import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

let options = [
  { id: "latest", label: "Latest First" },
  { id: "oldest", label: "Oldest First" },
];

export default function SortDropdown({ sortOrder, onChange }) {
  let [isOpen, setIsOpen] = useState(false);
  let dropdownRef = useRef(null);

  let activeLabel =
    options.find((option) => option.id === sortOrder)?.label ?? "Latest First";

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative shrink-0">
      <button
        onClick={() => setIsOpen((current) => !current)}
        className="
          flex
          items-center
          gap-3
          rounded-full
          border
          border-slate-200
          bg-white
          px-5
          py-2.5
          text-sm
          font-semibold
          text-[#102A72]
          transition-colors
          duration-200
          hover:border-[#73B72B]/40
        "
      >
        {activeLabel}
        <FaChevronDown
          size={11}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="
            absolute
            right-0
            top-full
            z-20
            mt-2
            w-44
            overflow-hidden
            rounded-xl
            border
            border-slate-100
            bg-white
            shadow-[0_20px_45px_rgba(15,23,42,.12)]
          "
        >
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                onChange(option.id);
                setIsOpen(false);
              }}
              className={`
                block
                w-full
                px-5
                py-3
                text-left
                text-sm
                font-semibold
                transition-colors
                duration-150
                hover:bg-[#73B72B]/5
                hover:text-[#73B72B]
                ${option.id === sortOrder ? "text-[#73B72B]" : "text-[#102A72]"}
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}