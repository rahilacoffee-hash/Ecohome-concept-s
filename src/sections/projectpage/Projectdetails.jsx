import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Hero from "./Hero";
import Overview from "./Overview";
import Gallery from "./Gallery";
import RelatedProjects from "./Relatedprojects";
import CTA from "../CTA/Cta";
import { fetchProjectBySlug, fetchProjects } from "../../services/projects";



export default function ProjectDetails() {
  let { slug } = useParams();

  let [project, setProject] = useState(null);
  let [relatedProjects, setRelatedProjects] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    setNotFound(false);

    Promise.all([fetchProjectBySlug(slug), fetchProjects()])
      .then(([currentProject, allProjects]) => {
        if (!active) return;
        setProject(currentProject);
        setRelatedProjects(allProjects.filter((item) => item.id !== currentProject.id && item.category === currentProject.category).slice(0, 3));
      })
      .catch(() => active && setNotFound(true))
      .finally(() => active && setIsLoading(false));

    return () => { active = false; };
  }, [slug]);

  if (isLoading) return <main className="flex min-h-[70vh] items-center justify-center bg-[#F8FAFC] font-semibold text-[#102A72]">Loading project…</main>;

  // ================= Not Found Fallback =================

  if (notFound || !project) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#F8FAFC] px-6 text-center">
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#73B72B]">
          404
        </span>

        <h1 className="mt-4 text-3xl font-black text-[#102A72] md:text-4xl">
          Project Not Found
        </h1>

        <p className="mt-3 max-w-md text-slate-500">
          We couldn't find a project matching "{slug}". It may have been
          moved or no longer exists.
        </p>

        <Link
          to="/projects"
          className="
            mt-8
            rounded-xl
            bg-[#73B72B]
            px-7
            py-4
            font-bold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#65a324]
          "
        >
          View All Projects
        </Link>
      </main>
    );
  }

  // ================= Project Page =================

  return (
    <main>
      <Hero project={project} />
      <Overview project={project} />
      <Gallery project={project} />
      <RelatedProjects projects={relatedProjects} />
      <CTA />
    </main>
  );
}
