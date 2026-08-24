import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectsHero from "../sections/projectpage/Projectshero";
import Navbar from "../components/layout/Navbar";
import ProjectFilters from "../sections/projectpage/Projectfilters";
import SortDropdown from "../sections/projectpage/Sortdropdown";
import ProjectsGrid from "../sections/projectpage/Projectsgrid";
import { fetchProjects } from "../services/projects";
import Footer from "../components/layout/footer/Footer";
import CTA from "../sections/CTA/Cta";


export default function Projects() {
  let [projects, setProjects] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState("");
  let categories = useMemo(() => {
    let uniqueCategories = [...new Set(projects.map((project) => project.category))];
    return ["All Projects", ...uniqueCategories];
  }, [projects]);

  let [activeCategory, setActiveCategory] = useState("All Projects");
  let [sortOrder, setSortOrder] = useState("latest");

  useEffect(() => {
    let active = true;

    fetchProjects()
      .then((data) => active && setProjects(data))
      .catch((requestError) => active && setError(requestError.message))
      .finally(() => active && setIsLoading(false));

    return () => { active = false; };
  }, []);

  let visibleProjects = useMemo(() => {
    let filtered =
      activeCategory === "All Projects"
        ? [...projects]
        : projects.filter((project) => project.category === activeCategory);

    return filtered.sort((a, b) => {
      let yearA = Number(a.year);
      let yearB = Number(b.year);
      return sortOrder === "latest" ? yearB - yearA : yearA - yearB;
    });
  }, [projects, activeCategory, sortOrder]);

  return (
    <>
     <Navbar />
    <main className="bg-white">
      <ProjectsHero  />

      {/* ================= White panel overlapping hero ================= */}

      <section className="relative -mt-20 px-6 pb-24 lg:-mt-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            relative
            rounded-3xl
            bg-white
            p-6
            shadow-[0_30px_80px_rgba(15,23,42,.12)]
            sm:p-10
          "
        >
          {isLoading ? <div className="py-20 text-center font-semibold text-[#102A72]">Loading projects…</div> : error ? <div className="py-20 text-center"><p className="font-semibold text-red-600">{error}</p><button onClick={() => window.location.reload()} className="mt-4 font-bold text-[#73B72B]">Try again</button></div> : <>
            <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
              <ProjectFilters categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} />
              <SortDropdown sortOrder={sortOrder} onChange={setSortOrder} />
            </div>
            <ProjectsGrid projects={visibleProjects} />
          </>}
        </motion.div>
      </section>
    </main>
    <CTA/>
    <Footer/>
    </>
  );
}
