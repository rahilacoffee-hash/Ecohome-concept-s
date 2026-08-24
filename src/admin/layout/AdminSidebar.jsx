import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  BriefcaseBusiness,
  MessageSquareQuote,
  House,
  Mail,
  LogOut,
  X,
  PanelLeftClose,
  PanelLeftOpen,
  ArrowBigLeft,
  ArrowLeft,
} from "lucide-react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import logo from "../../assets/images/logos/logo.png";

const menuItems = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    path: "/admin/projects",
    icon: FolderKanban,
  },
  {
    label: "Homepage",
    path: "/admin/homepage",
    icon: House,
  },
  {
    label: "Services",
    path: "/admin/services",
    icon: BriefcaseBusiness,
  },
  {
    label: "Testimonials",
    path: "/admin/testimonials",
    icon: MessageSquareQuote,
  },
  {
    label: "Contact Requests",
    path: "/admin/contacts",
    icon: Mail,
  },
];

function NavItem({ item, onClick, end = false, collapsed }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `
          group
          relative
          flex
          items-center
          gap-3
          rounded-xl
          border-l-[3px]
          py-3
          ${collapsed ? "justify-center px-2" : "pl-[9px] pr-3"}
          text-sm
          font-semibold
          transition-all
          duration-200

          ${
            isActive
              ? "border-[#73B72B] bg-white/[0.06] text-white"
              : "border-transparent text-white/50 hover:bg-white/[0.04] hover:text-white/90"
          }
        `
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            size={18}
            strokeWidth={isActive ? 2.3 : 2}
            className={isActive ? "text-[#73B72B]" : "text-white/35 group-hover:text-white/70"}
          />

          {!collapsed && <span>{item.label}</span>}
        </>
      )}
    </NavLink>
  );
}

export default function AdminSidebar({
  sidebarOpen: isOpen,
  setSidebarOpen,
  collapsed,
  setCollapsed,
  admin,
  onLogout,
}) {
  const onClose = () => setSidebarOpen(false);
  const adminName = admin?.name || "Administrator";

  return (
    <>
      {/* ================= MOBILE OVERLAY ================= */}

      <div
        onClick={onClose}
        aria-hidden="true"
        className={`
          fixed
          inset-0
          z-40
          bg-slate-950/60
          backdrop-blur-sm
          transition-opacity
          duration-300
          lg:hidden
          ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      {/* ================= SIDEBAR ================= */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          w-72
          flex-col
          bg-[#0B1A4D]
          shadow-2xl
          transition-transform
          duration-300
          ease-out
          lg:translate-x-0
          lg:border-r
          lg:border-white/5
          lg:shadow-none
          ${collapsed ? "lg:w-20" : "lg:w-72"}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* ================= LOGO ================= */}

        <div className={`flex h-20 items-center justify-between border-b border-white/10 ${collapsed ? "px-4" : "px-6"}`}>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#73B72B] text-base font-black text-white">
                <img
                            src={logo}
                            alt="Ecohome Concepts"
                            className="h-10 sm:h-12 lg:h-16 w-auto object-contain shrink-0"
                          />
              
            </div>

            {!collapsed && <div>
              <h1 className="text-lg font-black leading-tight tracking-tight text-white">
                ECOHOME
              </h1>

              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#73B72B]">
                Concepts Admin
              </p>
            </div>}
          </div>

          {/* Mobile close */}

          <button
            type="button"
            onClick={onClose}
            className="
              rounded-lg
              p-2
              text-white/40
              transition
              hover:bg-white/5
              hover:text-white
              lg:hidden
            "
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
       
        </div>

        {/* ================= NAVIGATION ================= */}

        <nav className={`flex-1 overflow-y-auto py-6 ${collapsed ? "px-2" : "px-4"}`}>
          {/* Main */}

          <div>
            {!collapsed && <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
              Main Menu
            </p>}

            <div className="space-y-1">
              {menuItems.map((item) => (
                <NavItem
                  key={item.path}
                  item={item}
                  end={item.path === "/admin"}
                  onClick={onClose}
                  collapsed={collapsed}
                />
              ))}
            </div>
          </div>
          

        </nav>
           <button type="button" onClick={() => setCollapsed((value) => !value)} className="hidden rounded-lg p-2 mb-8 text-white/45 transition hover:bg-white/5 hover:text-white lg:block" aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
            {collapsed ?
            <>
            <div className="flex justify-center items-center">
            <PanelLeftOpen   size={20} />
            </div>
            </> 
            : 
            <>
            <div className="flex justify-center items-center gap-4  ">
            <div className="animate-slow-drift tansition-all flex items-center justify-center  " size={20} > <FaLessThan className="animation-delay-100  text-[#5ea326]"/> </div>
             <div className="animate-slow-drift tansition-all flex items-center justify-center  transition-all  " size={20} > <FaLessThan className=" transition-allanimation-delay-200 
                   
                    text-[#5ea326] -space-x-4"/> </div>
             <p className="font">Collapse sidebar</p> 
             </div>
            </>
            }
          </button>

        {/* ================= ADMIN PROFILE ================= */}

        <div className={`border-t border-white/10 ${collapsed ? "p-2" : "p-4"}`}>
        
          <div className={`flex items-center justify-between gap-3 rounded-xl bg-white/[0.04] ${collapsed ? "p-2" : "p-3"}`}>
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative shrink-0">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-[#73B72B]
                    to-[#5ea326]
                    text-sm
                    font-black
                    text-white
                    ring-2
                    ring-white/10
                  "
                >
                  {adminName.charAt(0).toUpperCase()}
                </div>

                <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0B1A4D] bg-[#73B72B]" />
              </div>

              {!collapsed && <div className="min-w-0">
                <p className="truncate text-sm font-bold text-white">
                  {adminName}
                </p>

                <p className="truncate text-xs text-white/40">
                  Admin Account
                </p>
              </div>}
            </div>

            {/* Logout */}

            <button
              type="button"
              onClick={onLogout}
              aria-label="Logout"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                text-white/40
                transition-all
                duration-200
                hover:bg-red-500/10
                hover:text-red-400
              "
            >
              <LogOut size={17} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
