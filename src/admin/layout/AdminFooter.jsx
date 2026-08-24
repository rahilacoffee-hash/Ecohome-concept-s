
import { ExternalLink } from "lucide-react";

function AdminFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto px-4 pb-5 pt-2 md:px-6 lg:px-8">
      <div
        className="
          flex
          flex-col
          gap-4
          rounded-[20px]
          border
          border-slate-200
          bg-white/70
          px-5
          py-4
          backdrop-blur-xl
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* Left */}

        <div className="flex flex-col gap-1">
          <p className="font-serif text-sm text-[#111111]">
            Ecohome Concepts
          </p>

          <p className="text-xs text-[#999999]">
            © {year} Ecohome Concepts. All rights reserved.
          </p>
        </div>

        {/* Right */}

        <div className="flex items-center gap-5">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-1.5
              text-xs
              font-medium
              text-[#777777]
              transition
              hover:text-[#73B72B]
            "
          >
            View Website
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default AdminFooter;
