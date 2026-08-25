import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Eye,
  FolderKanban,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

import axiosInstance from "../../../api/axiosInstance";
import { useToast } from "../../../components/Toast";

function Projects() {
  const toast = useToast();
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");

  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | Fetch Projects
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axiosInstance.get("/admin/projects");

      setProjects(response.data?.data?.projects || []);
    } catch (error) {
      console.error("Projects error:", error);

      setError(
        error.response?.data?.message ||
          "Unable to load projects."
      );
    } finally {
      setLoading(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Delete Project
  |--------------------------------------------------------------------------
  */

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      setDeleting(true);

      await axiosInstance.delete(`/admin/projects/${deleteId}`);

      setProjects((current) =>
        current.filter((project) => project.id !== deleteId)
      );

      setDeleteId(null);
    } catch (error) {
      console.error("Delete project error:", error);

      toast.error(
        error.response?.data?.message ||
          "Unable to delete project."
      );
    } finally {
      setDeleting(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Filter Projects
  |--------------------------------------------------------------------------
  */

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesSearch =
        !query ||
        project.title?.toLowerCase().includes(query) ||
        project.category?.toLowerCase().includes(query) ||
        project.location?.toLowerCase().includes(query);

      const matchesStatus =
        status === "ALL" ||
        project.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [projects, search, status]);

  /*
  |--------------------------------------------------------------------------
  | Loading
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div className="space-y-6">

        <div className="h-9 w-48 animate-pulse rounded-lg bg-slate-200" />

        <div className="h-[500px] animate-pulse rounded-[24px] border border-slate-200 bg-white" />

      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Error
  |--------------------------------------------------------------------------
  */

  if (error) {
    return (
      <div className="rounded-[24px] border border-slate-200 bg-white p-8">
        <div className="flex flex-col items-center justify-center text-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
            <AlertCircle size={24} />
          </div>

          <h2 className="mt-4 text-xl font-black text-slate-900">
            Unable to load projects
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {error}
          </p>

          <button
            type="button"
            onClick={fetchProjects}
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

  return (
    <div className="space-y-6 pt-9">

      {/* =========================================================
          HEADER
      ========================================================== */}

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

        <div>
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#73B72B]" />
            Portfolio
          </p>

          <h2 className="mt-1 text-3xl font-black text-[#102A72]">
            Projects
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Manage your interior design projects.
          </p>
        </div>

        <Link
          to="/admin/projects/new"
          className="
            flex
            w-fit
            items-center
            gap-2
            rounded-xl
            bg-[#73B72B]
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            hover:bg-[#65a324]
            hover:shadow-[0_10px_30px_rgba(115,183,43,0.25)]
          "
        >
          <Plus size={18} />
          Add Project
        </Link>

      </div>

      {/* =========================================================
          TOOLBAR
      ========================================================== */}

      <div
        className="
          flex
          flex-col
          gap-3
          rounded-[24px]
          border
          border-slate-200
          bg-white
          p-4
          sm:flex-row
        "
      >

        {/* Search */}

        <div className="relative flex-1">

          <Search
            size={17}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects..."
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              pl-11
              pr-4
              text-sm
              text-slate-900
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-[#73B72B]/50
              focus:bg-white
            "
          />

        </div>

        {/* Status */}

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          className="
            h-11
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            px-4
            text-sm
            text-slate-600
            outline-none
            transition
            focus:border-[#73B72B]/50
            focus:bg-white
          "
        >
          <option value="ALL">All Status</option>
          <option value="PUBLISHED">Published</option>
          <option value="DRAFT">Draft</option>
        </select>

        {/* Refresh */}

        <button
          type="button"
          onClick={fetchProjects}
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            text-slate-500
            transition
            hover:border-[#73B72B]/40
            hover:bg-slate-50
            hover:text-[#73B72B]
          "
          title="Refresh"
        >
          <RefreshCw size={17} />
        </button>

      </div>

      {/* =========================================================
          PROJECT TABLE
      ========================================================== */}

      <div
        className="
          overflow-hidden
          rounded-[24px]
          border
          border-slate-200
          bg-white
          shadow-[0_10px_40px_rgba(0,0,0,0.03)]
        "
      >

        {/* Desktop table */}

        <div className="hidden overflow-x-auto md:block">

          <table className="w-full border-collapse">

            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Project
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Location
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">

              {filteredProjects.length ? (
                filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    className="group transition hover:bg-slate-50"
                  >

                    {/* Project */}

                    <td className="px-6 py-4">

                      <div className="flex items-center gap-4">

                        <div
                          className="
                            h-14
                            w-20
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
                                size={20}
                                className="text-[#73B72B]"
                              />
                            </div>
                          )}
                        </div>

                        <div className="min-w-0">

                          <h3 className="truncate font-medium text-slate-800">
                            {project.title}
                          </h3>

                          <p className="mt-1 max-w-[280px] truncate text-xs text-slate-400">
                            {project.brief}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* Category */}

                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-500">
                        {project.category || "—"}
                      </span>
                    </td>

                    {/* Location */}

                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-500">
                        {project.location || "—"}
                      </span>
                    </td>

                    {/* Status */}

                    <td className="px-6 py-4">
                      <ProjectStatus status={project.status} />
                    </td>

                    {/* Actions */}

                    <td className="px-6 py-4">

                      <div className="flex justify-end gap-1">

                        <Link
                          to={`/admin/projects/${project.id}`}
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            text-slate-400
                            transition
                            hover:bg-slate-100
                            hover:text-[#73B72B]
                          "
                          title="View"
                        >
                          <Eye size={17} />
                        </Link>

                        <Link
                          to={`/admin/projects/${project.id}/edit`}
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            text-slate-400
                            transition
                            hover:bg-slate-100
                            hover:text-[#73B72B]
                          "
                          title="Edit"
                        >
                          <Pencil size={17} />
                        </Link>

                        <button
                          type="button"
                          onClick={() => setDeleteId(project.id)}
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            text-slate-400
                            transition
                            hover:bg-red-50
                            hover:text-red-500
                          "
                          title="Delete"
                        >
                          <Trash2 size={17} />
                        </button>

                      </div>

                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-16 text-center"
                  >
                    <FolderKanban
                      size={32}
                      className="mx-auto text-slate-300"
                    />

                    <p className="mt-4 text-lg font-black text-slate-700">
                      No projects found
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {search
                        ? "Try a different search."
                        : "Start by adding your first project."}
                    </p>
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

        {/* =======================================================
            MOBILE CARDS
        ======================================================== */}

        <div className="divide-y divide-slate-100 md:hidden">

          {filteredProjects.length ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-5"
              >

                <div className="flex gap-4">

                  <div
                    className="
                      h-20
                      w-24
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
                          size={22}
                          className="text-[#73B72B]"
                        />
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-3">

                      <h3 className="font-medium text-slate-800">
                        {project.title}
                      </h3>

                      <ProjectStatus status={project.status} />

                    </div>

                    <p className="mt-1 text-xs text-slate-400">
                      {project.category}
                    </p>

                    {project.location && (
                      <p className="mt-1 text-xs text-slate-400">
                        {project.location}
                      </p>
                    )}

                  </div>

                </div>

                <div className="mt-4 flex items-center justify-end gap-2">

                  <Link
                    to={`/admin/projects/${project.id}`}
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-lg
                      border
                      border-slate-200
                      px-3
                      py-2
                      text-xs
                      font-medium
                      text-slate-600
                      transition
                      hover:border-[#73B72B]/40
                      hover:text-[#73B72B]
                    "
                  >
                    <Eye size={14} />
                    View
                  </Link>

                  <Link
                    to={`/admin/projects/${project.id}/edit`}
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-lg
                      border
                      border-slate-200
                      px-3
                      py-2
                      text-xs
                      font-medium
                      text-slate-600
                      transition
                      hover:border-[#73B72B]/40
                      hover:text-[#73B72B]
                    "
                  >
                    <Pencil size={14} />
                    Edit
                  </Link>

                  <button
                    type="button"
                    onClick={() => setDeleteId(project.id)}
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-lg
                      border
                      border-red-100
                      px-3
                      py-2
                      text-xs
                      font-medium
                      text-red-500
                      transition
                      hover:bg-red-50
                    "
                  >
                    <Trash2 size={14} />
                    Delete
                  </button>

                </div>

              </div>
            ))
          ) : (
            <div className="px-6 py-16 text-center">

              <FolderKanban
                size={32}
                className="mx-auto text-slate-300"
              />

              <p className="mt-4 text-lg font-black text-slate-700">
                No projects found
              </p>

            </div>
          )}

        </div>

      </div>

      {/* =========================================================
          RESULT COUNT
      ========================================================== */}

      <div className="flex justify-between text-xs text-slate-400">
        <span>
          Showing {filteredProjects.length} of{" "}
          {projects.length} projects
        </span>
      </div>

      {/* =========================================================
          DELETE MODAL
      ========================================================== */}

      {deleteId && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/30
            p-4
            backdrop-blur-sm
          "
        >

          <div
            className="
              w-full
              max-w-md
              rounded-[24px]
              border
              border-slate-200
              bg-white
              p-6
              shadow-[0_30px_80px_rgba(0,0,0,0.15)]
            "
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
              <Trash2 size={21} />
            </div>

            <h3 className="mt-5 text-2xl font-black text-slate-900">
              Delete Project?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              This action cannot be undone. The project and
              its associated images will be permanently
              removed.
            </p>

            <div className="mt-6 flex justify-end gap-3">

              <button
                type="button"
                onClick={() => setDeleteId(null)}
                disabled={deleting}
                className="
                  rounded-xl
                  border
                  border-slate-200
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-slate-600
                  transition
                  hover:bg-slate-50
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={deleting}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-red-500
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-red-600
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {deleting && (
                  <RefreshCw
                    size={15}
                    className="animate-spin"
                  />
                )}

                {deleting ? "Deleting..." : "Delete Project"}
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Project Status Badge
|--------------------------------------------------------------------------
*/

function ProjectStatus({ status }) {
  if (status === "PUBLISHED") {
    return (
      <span
        className="
          inline-flex
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
        inline-flex
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

export default Projects;
