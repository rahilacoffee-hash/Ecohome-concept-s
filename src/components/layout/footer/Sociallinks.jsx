export default function SocialLinks({ socialLinks }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      {socialLinks.map((social) => {
        let Icon = social.icon;

        return (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              text-white
              transition-all
              duration-300
              hover:border-[#73B72B]
              hover:bg-[#73B72B]
              hover:-translate-y-0.5
              sm:h-10
              sm:w-10
            "
          >
            <Icon size={14} className="sm:hidden" />
            <Icon size={15} className="hidden sm:block" />
          </a>
        );
      })}
    </div>
  );
}