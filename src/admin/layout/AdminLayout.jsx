import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";
import { useAuth } from "../../context/AuthContext";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  // AdminSidebar renders its own backdrop + animation for the mobile
  // overlay now, so this layout no longer needs a second one stacked on top

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Sidebar */}
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        admin={user}
        onLogout={handleLogout}
      />

      {/* Main Section - left margin matches the floating sidebar's
          current width (296px expanded / 96px expanded) plus its 16px
          offset from the edge, so content never sits under it or leaves
          an awkward gap */}
      <div
        className={`flex min-h-screen flex-col transition-[margin] duration-300 ${
          collapsed ? "lg:ml-20" : "lg:ml-72"
        }`}
      >
        {/* Navbar */}
        <AdminNavbar onMenuClick={() => setSidebarOpen(true)} onLogout={handleLogout} admin={user} />

        {/* Content */}
        <main className="flex-1 px-4 py-6 md:px-6 md:py-8 lg:px-8">
          <Outlet />
        </main>

        {/* Footer */}
        <AdminFooter />
      </div>
    </div>
  );
}

export default AdminLayout;
