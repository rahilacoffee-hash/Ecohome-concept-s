import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceDetails from "./pages/ServiceDetails";
import ScrollToTop from "./components/layout/ScrollToTop";
import ProjectDetails from "./sections/projectpage/Projectdetails";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import VerifyEmail from "./pages/VerifyEmail";
import AdminLayout from "./admin/layout/AdminLayout";
import Dashboard from "./admin/dashboard/Dashboard";
import AdminResource from "./admin/components/AdminResource";
import AdminProjects from "./admin/components/projects/Projects";
import ProjectEdit from "./admin/components/projects/ProjectEdit";
import AdminProjectDetails from "./admin/components/projects/ProjectDetails";
import AuthPage from "./admin/auth/AuthPage";
import RequireAdmin from "./admin/auth/RequireAdmin";
import HomepageCms from "./admin/components/HomepageCms";
import Contacts from "./admin/components/Contacts";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/setup" element={<AuthPage mode="setup" />} />
        <Route path="/admin" element={<RequireAdmin><AdminLayout /></RequireAdmin>}>
          <Route index element={<Dashboard />} />
          <Route path="homepage" element={<HomepageCms />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="projects/new" element={<ProjectEdit />} />
          <Route path="projects/:id" element={<AdminProjectDetails />} />
          <Route path="projects/:id/edit" element={<ProjectEdit />} />
          <Route path="services" element={<AdminResource resource="services" title="Services" />} />
          <Route path="testimonials" element={<AdminResource resource="testimonials" title="Testimonials" />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
