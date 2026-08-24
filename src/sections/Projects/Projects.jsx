import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { fetchProjects } from "../../services/projects";

import FeaturedProject from "../../sections/Projects/FeaturedProject";
import ProjectCard from "../../sections/Projects/ProjectCard";
import ProjectFilters from "../../sections/Projects/ProjectFilters";
import ProjectStats from "./ProjectStats";
import { Link } from "react-router-dom";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    fetchProjects()
      .then((data) => active && setProjects(data))
      .catch((requestError) => active && setError(requestError.message))
      .finally(() => active && setIsLoading(false));

    return () => { active = false; };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter, projects]);

  const featuredProject = filteredProjects[0];
  const gridProjects = filteredProjects.filter((project) => project.id !== featuredProject?.id).slice(0, 6);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-32"
    >
      {/* ================= Background Decorations ================= */}

     <div className="absolute -left-32 top-20 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] rounded-full bg-[#73B72B]/10 blur-[100px] sm:blur-[150px]" />

      <div className="absolute -right-32 bottom-20 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] rounded-full bg-[#102A72]/10 blur-[100px] sm:blur-[150px]" />

      <motion.div
    animate={{
        y:[0,-20,0],
        x:[0,10,0]
    }}
    transition={{
        duration:8,
        repeat:Infinity
    }}
    className="
        hidden
        sm:block
        absolute
        right-40
        top-32
        h-6
        w-6
        rounded-full
        bg-[#73B72B]/40
        blur-sm
    "
/>

<motion.div
    animate={{
        y:[0,20,0]
    }}
    transition={{
        duration:10,
        repeat:Infinity
    }}
    className="
        hidden
        sm:block
        absolute
        left-1/4
        bottom-24
        h-10
        w-10
        rounded-full
        bg-[#102A72]/20
        blur-md
    "
/>

<div
    className="
        absolute
        inset-0
        opacity-[0.03]
        pointer-events-none
    "
    style={{
        backgroundImage:`
            linear-gradient(#102A72 1px, transparent 1px),
            linear-gradient(90deg,#102A72 1px,transparent 1px)
        `,
        backgroundSize:"80px 80px"
    }}
/>

      {/* Dot Pattern */}

      <div className="hidden sm:grid absolute left-10 top-16 grid-cols-8 gap-2 opacity-20">
        {Array.from({ length: 64 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[#73B72B]"
          />
        ))}
      </div>

      {/* ================= Container ================= */}

      <div className="container relative mx-auto px-4 sm:px-6">

        {/* ================= Header ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Small Heading */}

          <div className="mb-4 sm:mb-5 flex items-center justify-center gap-2 sm:gap-4">

            <span className="h-[2px] w-8 sm:w-14 bg-[#73B72B]" />

            <span className="font-bold uppercase tracking-widest sm:tracking-[0.35em] text-[#73B72B] text-xs sm:text-base">
              OUR PROJECTS
            </span>

            <span className="h-[2px] w-8 sm:w-14 bg-[#73B72B]" />

          </div>

          {/* Main Heading */}

          <h2 className="text-3xl sm:text-4xl font-black leading-tight text-[#102A72] md:text-6xl">
            Building Landmark
            <span className="block text-[#73B72B]">
              Projects Across Nigeria
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 sm:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">
            Our portfolio showcases exceptional government,
            commercial and residential developments that
            reflect our commitment to quality, innovation
            and engineering excellence.
          </p>
        </motion.div>

        {/* ================= Filters ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .2,
          }}
          className="mt-10 sm:mt-16"
        >
        {!isLoading && !error && <ProjectFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} projects={projects} />}
        </motion.div>

        {/* ================= Featured Project ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .3,
            duration: .8,
          }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          {isLoading ? <div className="py-16 text-center font-semibold text-[#102A72]">Loading projects…</div> : error ? <div className="py-16 text-center"><p className="font-semibold text-red-600">{error}</p><Link to="/projects" className="mt-4 inline-block font-bold text-[#73B72B]">View all projects</Link></div> : featuredProject ? <FeaturedProject project={featuredProject} /> : <div className="py-16 text-center text-slate-500">Projects will appear here once they are published.</div>}
        </motion.div>

        {/* ================= Project Grid ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          {!isLoading && !error && gridProjects.length > 0 && <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {gridProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>}
        </motion.div>

        {/* Project Statistics */}

<ProjectStats />


        {/* ================= View All Button ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
          }}
          className="mt-10 sm:mt-16 flex justify-center"
        >
          <Link to="/projects" className="w-full sm:w-auto">
          <button
            className="
              group
              w-full
              sm:w-auto
              rounded-full
              border-2
              border-[#73B72B]
              px-6
              sm:px-10
              py-3.5
              sm:py-4
              font-semibold
              text-[#73B72B]
              text-sm
              sm:text-base
              transition-all
              duration-300
              hover:bg-[#73B72B]
              hover:text-white
              hover:shadow-xl
            "
          >
            <span className="flex items-center justify-center gap-3">
              Explore All Projects

              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                →
              </motion.span>
            </span>
          </button>
          </Link>
        </motion.div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          className="mt-16 sm:mt-20 lg:mt-28"
        >
          <div
            className="
              overflow-hidden
              rounded-[24px]
              sm:rounded-[36px]
              bg-[#102A72]
              px-6
              py-10
              sm:px-10
              sm:py-14
              lg:px-16
            "
          >
            <div className="flex flex-col items-center justify-between gap-8 sm:gap-10 lg:flex-row text-center lg:text-left">
              <div className="max-w-2xl">
                <span className="font-semibold uppercase tracking-widest sm:tracking-[0.3em] text-[#73B72B] text-sm sm:text-base">
                  Ready To Build?
                </span>

                <h3 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-black leading-tight text-white md:text-5xl">
                  Let's Turn Your Vision
                  <span className="block text-[#73B72B]">
                    Into Reality.
                  </span>
                </h3>

                <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-300">
                  Whether it's a government project,
                  commercial development or residential
                  construction, our experienced team is
                  ready to deliver exceptional results
                  from concept to completion.
                </p>
              </div>

              <Link
                to="/contact"
                className="
                  w-full
                  lg:w-auto
                  rounded-full
                  bg-[#73B72B]
                  px-8
                  sm:px-10
                  py-4
                  sm:py-5
                  text-base
                  sm:text-lg
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#5EA628]
                  hover:shadow-2xl
                "
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
