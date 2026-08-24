import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FolderKanban,
  BriefcaseBusiness,
  MessageSquareQuote,
  Mail,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

import axiosInstance from "../../api/axiosInstance";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*
  |--------------------------------------------------------------------------
  | Fetch Dashboard
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axiosInstance.get("/admin/dashboard");

      setDashboard(response.data?.data || {});
    } catch (error) {
      console.error("Dashboard error:", error);

      setError(
        error.response?.data?.message ||
          "Unable to load dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Loading State
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div className="space-y-8">
        {/* Header skeleton */}

        <div className="space-y-3">
          <div className="h-3 w-24 animate-pulse rounded-full bg-slate-200" />
          <div className="h-9 w-56 animate-pulse rounded-lg bg-slate-200" />
          <div className="h-4 w-72 animate-pulse rounded-full bg-slate-100" />
        </div>

        {/* Stats skeleton */}

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="
                h-36
                animate-pulse
                rounded-[24px]
                border
                border-slate-200
                bg-white
              "
            />
          ))}
        </div>

        {/* Content skeleton */}

        <div className="grid gap-6 xl:grid-cols-2">
          <div
            className="
              h-80
              animate-pulse
              rounded-[24px]
              border
              border-slate-200
              bg-white
            "
          />

          <div
            className="
              h-80
              animate-pulse
              rounded-[24px]
              border
              border-slate-200
              bg-white
            "
          />
        </div>
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Error State
  |--------------------------------------------------------------------------
  */

  if (error) {
    return (
      <div
        className="
          rounded-[24px]
          border
          border-slate-200
          bg-white
          p-8
          shadow-[0_10px_40px_rgba(0,0,0,0.03)]
        "
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-red-50
              text-red-500
            "
          >
            <AlertCircle size={24} />
          </div>

          <h2 className="mt-4 text-xl font-black text-slate-900">
            Something went wrong
          </h2>

          <p className="mt-2 max-w-md text-sm text-slate-500">
            {error}
          </p>

          <button
            type="button"
            onClick={fetchDashboard}
            className="
              mt-5
              flex
              items-center
              gap-2
              rounded-xl
              bg-[#73B72B]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#65a324]
            "
          >
            <RefreshCw size={16} />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Dashboard Data
  |--------------------------------------------------------------------------
  */

  const stats = dashboard?.stats || {};

  /*
  |--------------------------------------------------------------------------
  | Statistics
  |--------------------------------------------------------------------------
  */

  const statCards = [
    {
      title: "Projects",
      value: stats.projects ?? 0,
      icon: FolderKanban,
      description: "Total projects",
      to: "/admin/projects",
    },
    {
      title: "Services",
      value: stats.services ?? 0,
      icon: BriefcaseBusiness,
      description: "Active services",
      to: "/admin/services",
    },
    {
      title: "Testimonials",
      value: stats.testimonials ?? 0,
      icon: MessageSquareQuote,
      description: "Published testimonials",
      to: "/admin/testimonials",
    },
    {
      title: "New Messages",
      value: stats.newContacts ?? 0,
      icon: Mail,
      description: "New contact requests",
    },
  ];

  return (
    <div className="space-y-8">

      {/* =========================================================
          HEADER
      ========================================================== */}

      <section>
        <p
          className="
            flex
            items-center
            gap-1.5
            text-xs
            font-semibold
            uppercase
            tracking-[0.22em]
            text-slate-400
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#73B72B]" />
          Overview
        </p>

        <div className="mt-2 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-black text-[#102A72] md:text-4xl">
              Dashboard Overview
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Keep track of your Ecohome Concepts website.
            </p>
          </div>

          <button
            type="button"
            onClick={fetchDashboard}
            className="
              flex
              w-fit
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-2.5
              text-sm
              font-medium
              text-slate-600
              transition-all
              hover:border-[#73B72B]/40
              hover:bg-slate-50
              hover:text-[#102A72]
            "
          >
            <RefreshCw size={15} />
            Refresh
          </button>
        </div>
      </section>

      {/* =========================================================
          STAT CARDS
      ========================================================== */}

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          const action = <ArrowUpRight size={17} className="text-slate-300 transition group-hover:text-[#73B72B]" />;

          return (
            <div
              key={stat.title}
              className="
                group
                rounded-[24px]
                border
                border-slate-200
                bg-white
                p-5
                shadow-[0_10px_40px_rgba(0,0,0,0.03)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#73B72B]/40
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]
              "
            >
              <div className="flex items-start justify-between">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#73B72B]/10
                    text-[#73B72B]
                    transition
                    group-hover:bg-[#73B72B]
                    group-hover:text-white
                  "
                >
                  <Icon size={20} />
                </div>

                {stat.to ? <Link to={stat.to} aria-label={`Manage ${stat.title.toLowerCase()}`} className="rounded-lg p-1">{action}</Link> : action}
              </div>

              <div className="mt-6">
                <p className="text-3xl font-black text-slate-900">
                  {stat.value}
                </p>

                <h3 className="mt-1 text-sm font-medium text-slate-700">
                  {stat.title}
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* =========================================================
          RECENT PROJECTS + CONTACTS
      ========================================================== */}

      <section className="grid gap-6 xl:grid-cols-2">

        {/* =======================================================
            RECENT PROJECTS
        ======================================================== */}

        <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white">
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-slate-200
              px-6
              py-5
            "
          >
            <div>
              <h3 className="text-xl font-black text-[#102A72]">
                Recent Projects
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Latest projects added
              </p>
            </div>

            <Link
              to="/admin/projects"
              className="
                flex
                items-center
                gap-1
                text-xs
                font-semibold
                text-[#73B72B]
                transition
                hover:text-[#65a324]
              "
            >
              View all
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {dashboard?.recentProjects?.length ? (
              dashboard.recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="
                    flex
                    items-center
                    gap-4
                    px-6
                    py-4
                    transition
                    hover:bg-slate-50
                  "
                >
                  {/* Image */}

                  <div
                    className="
                      h-12
                      w-12
                      shrink-0
                      overflow-hidden
                      rounded-xl
                      bg-[#73B72B]/10
                    "
                  >
                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <FolderKanban
                          size={18}
                          className="text-[#73B72B]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Details */}

                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-semibold text-slate-800">
                      {project.title}
                    </h4>

                    <p className="mt-1 truncate text-xs text-slate-400">
                      {project.category}
                    </p>
                  </div>

                  <ProjectStatus status={project.status} />
                </div>
              ))
            ) : (
              <EmptyState message="No projects yet." />
            )}
          </div>
        </div>

        {/* =======================================================
            RECENT CONTACTS
        ======================================================== */}

        <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white">
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-slate-200
              px-6
              py-5
            "
          >
            <div>
              <h3 className="text-xl font-black text-[#102A72]">
                Recent Messages
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Latest contact requests
              </p>
            </div>

          </div>

          <div className="divide-y divide-slate-100">
            {dashboard?.recentContacts?.length ? (
              dashboard.recentContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="
                    flex
                    items-center
                    gap-4
                    px-6
                    py-4
                    transition
                    hover:bg-slate-50
                  "
                >
                  {/* Avatar */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#73B72B]/10
                      text-sm
                      font-semibold
                      text-[#5ea326]
                    "
                  >
                    {contact.name
                      ?.charAt(0)
                      .toUpperCase()}
                  </div>

                  {/* Details */}

                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-semibold text-slate-800">
                      {contact.name}
                    </h4>

                    <p className="mt-1 truncate text-xs text-slate-400">
                      {contact.subject || contact.email}
                    </p>
                  </div>

                  <ContactStatus status={contact.status} />
                </div>
              ))
            ) : (
              <EmptyState message="No contact requests yet." />
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================== */}

      <section className="overflow-hidden rounded-[24px] border border-slate-200 bg-white">
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-200
            px-6
            py-5
          "
        >
          <div>
            <h3 className="text-xl font-black text-[#102A72]">
              Recent Testimonials
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Latest client testimonials
            </p>
          </div>

          <Link
            to="/admin/testimonials"
            className="
              flex
              items-center
              gap-1
              text-xs
              font-semibold
              text-[#73B72B]
              transition
              hover:text-[#65a324]
            "
          >
            View all
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
          {dashboard?.recentTestimonials?.length ? (
            dashboard.recentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-5
                  transition
                  hover:border-[#73B72B]/40
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                "
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="truncate text-sm font-semibold text-slate-800">
                      {testimonial.clientName}
                    </h4>

                    {testimonial.company && (
                      <p className="mt-0.5 truncate text-xs text-slate-400">
                        {testimonial.company}
                      </p>
                    )}
                  </div>

                  {/* Rating */}

                  <div className="shrink-0 text-sm tracking-wide text-amber-400">
                    {"★".repeat(testimonial.rating || 0)}
                  </div>
                </div>

                {testimonial.content && (
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
                    "{testimonial.content}"
                  </p>
                )}

                <div className="mt-4">
                  {testimonial.published ? (
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-[#73B72B]/30
                        bg-[#73B72B]/10
                        px-3
                        py-1
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wide
                        text-[#5ea326]
                      "
                    >
                      <CheckCircle2 size={12} />
                      Published
                    </div>
                  ) : (
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-100
                        px-3
                        py-1
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wide
                        text-slate-500
                      "
                    >
                      <Clock3 size={12} />
                      Draft
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="md:col-span-2 xl:col-span-3">
              <EmptyState message="No testimonials yet." />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Project Status
|--------------------------------------------------------------------------
*/

function ProjectStatus({ status }) {
  if (status === "PUBLISHED") {
    return (
      <span
        className="
          shrink-0
          rounded-full
          border
          border-[#73B72B]/30
          bg-[#73B72B]/10
          px-3
          py-1
          text-[10px]
          font-semibold
          uppercase
          tracking-wide
          text-[#5ea326]
        "
      >
        Published
      </span>
    );
  }

  return (
    <span
      className="
        shrink-0
        rounded-full
        border
        border-slate-200
        bg-slate-100
        px-3
        py-1
        text-[10px]
        font-semibold
        uppercase
        tracking-wide
        text-slate-500
      "
    >
      Draft
    </span>
  );
}

/*
|--------------------------------------------------------------------------
| Contact Status
|--------------------------------------------------------------------------
*/

function ContactStatus({ status }) {
  const styles = {
    NEW: {
      className:
        "border-slate-200 bg-slate-100 text-slate-500",
      label: "New",
    },

    CONTACTED: {
      className:
        "border-[#102A72]/20 bg-[#102A72]/5 text-[#102A72]",
      label: "Contacted",
    },

    IN_PROGRESS: {
      className:
        "border-amber-200 bg-amber-50 text-amber-700",
      label: "In Progress",
    },

    COMPLETED: {
      className:
        "border-[#73B72B]/30 bg-[#73B72B]/10 text-[#5ea326]",
      label: "Completed",
    },
  };

  const current = styles[status] || {
    className:
      "border-slate-200 bg-slate-100 text-slate-400",
    label: status?.replace("_", " ") || "Unknown",
  };

  return (
    <span
      className={`
        shrink-0
        rounded-full
        border
        px-3
        py-1
        text-[10px]
        font-semibold
        uppercase
        tracking-wide
        ${current.className}
      `}
    >
      {current.label}
    </span>
  );
}

/*
|--------------------------------------------------------------------------
| Empty State
|--------------------------------------------------------------------------
*/

function EmptyState({ message }) {
  return (
    <div className="flex min-h-[120px] items-center justify-center px-6 text-center">
      <p className="text-sm text-slate-400">
        {message}
      </p>
    </div>
  );
}

export default Dashboard;
