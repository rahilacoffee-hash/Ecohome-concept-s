
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Save,
  RefreshCw,
  AlertCircle,
  Upload,
  ImagePlus,
  X,
} from "lucide-react";

import axiosInstance from "../../../api/axiosInstance";

function ProjectEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = !id;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [coverPreview, setCoverPreview] = useState("");
  const [galleryFiles, setGalleryFiles] = useState([]);
  const galleryPreviewsRef = useRef([]);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    brief: "",
    description: "",
    category: "",
    location: "",
    completionYear: "",
    status: "DRAFT",
    coverImage: "",
  });

  /*
  |--------------------------------------------------------------------------
  | Fetch Project
  |--------------------------------------------------------------------------
  */

  const fetchProject = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axiosInstance.get(`/admin/projects/${id}`);

      const project = response.data?.data?.project;

      if (!project) {
        throw new Error("Project not found.");
      }

      setForm({
        title: project.title || "",
        slug: project.slug || "",
        brief: project.brief || "",
        description: project.description || "",
        category: project.category || "",
        location: project.location || "",
        completionYear: project.completionYear || "",
        status: project.status || "DRAFT",
        coverImage: project.coverImage || "",
      });
      setCoverPreview(project.coverImage || "");
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
          error.message ||
          "Unable to load project."
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (!isNew) fetchProject();
    else setLoading(false);
  }, [isNew, fetchProject]);

  useEffect(() => () => {
    galleryPreviewsRef.current.forEach((preview) => URL.revokeObjectURL(preview));
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Input
  |--------------------------------------------------------------------------
  */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleCoverImageChange = (event) => {
    const [file] = event.target.files;
    if (!file) return;
    setCoverImageFile(file);
    setCoverPreview(URL.createObjectURL(file));
  };

  const handleGalleryImagesChange = (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;

    const selectedImages = files.map((file) => {
      const preview = URL.createObjectURL(file);
      galleryPreviewsRef.current.push(preview);
      return {
        id: `${file.name}-${file.size}-${file.lastModified}-${crypto.randomUUID()}`,
        file,
        preview,
      };
    });
    setGalleryFiles((current) => [...current, ...selectedImages]);
    event.target.value = "";
  };

  const removeGalleryImage = (imageId) => {
    setGalleryFiles((current) => {
      const image = current.find((item) => item.id === imageId);
      if (image) {
        URL.revokeObjectURL(image.preview);
        galleryPreviewsRef.current = galleryPreviewsRef.current.filter((preview) => preview !== image.preview);
      }
      return current.filter((item) => item.id !== imageId);
    });
  };

  const uploadGalleryImages = async (projectId, startOrder = 0) => {
    for (const [index, image] of galleryFiles.entries()) {
      const imagePayload = new FormData();
      imagePayload.append("image", image.file);
      imagePayload.append("sortOrder", String(startOrder + index));
      await axiosInstance.post(`/admin/projects/${projectId}/images`, imagePayload);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Submit
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");

      const payload = new FormData();
      payload.append("title", form.title);
      payload.append("slug", form.slug);
      payload.append("brief", form.brief);
      payload.append("description", form.description);
      payload.append("category", form.category);
      payload.append("location", form.location);
      payload.append("completionYear", form.completionYear);
      payload.append("status", form.status);
      if (coverImageFile) payload.append("coverImage", coverImageFile);

      const response = isNew
        ? await axiosInstance.post("/admin/projects", payload)
        : await axiosInstance.patch(`/admin/projects/${id}`, payload);
      const savedProject = response.data?.data?.project;

      if (galleryFiles.length) {
        await uploadGalleryImages(savedProject?.id || id, savedProject?.images?.length || 0);
      }

      navigate(`/admin/projects/${savedProject?.id || id}`);
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
          "Unable to update project."
      );
    } finally {
      setSaving(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Loading
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-9 w-52 animate-pulse rounded-lg bg-slate-200" />

        <div className="h-[600px] animate-pulse rounded-[24px] border border-slate-200 bg-white" />
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Error
  |--------------------------------------------------------------------------
  */

  if (error && !form.title) {
    return (
      <div className="rounded-[24px] border border-slate-200 bg-white p-8">
        <div className="flex flex-col items-center text-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#73B72B]/10 text-[#73B72B]">
            <AlertCircle size={24} />
          </div>

          <h2 className="mt-4 font-serif text-xl text-[#111111]">
            Unable to load project
          </h2>

          <p className="mt-2 text-sm text-[#888888]">
            {error}
          </p>

          <Link
            to="/admin/projects"
            className="mt-5 flex items-center gap-2 rounded-xl bg-[#102A72] px-5 py-2.5 text-sm font-semibold text-white"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">

      {/* Header */}

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

        <div>
          <Link
            to="/admin/projects"
            className="mb-3 flex w-fit items-center gap-2 text-sm text-slate-500 transition hover:text-[#73B72B]"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#73B72B]">
            Portfolio
          </p>

          <h1 className="mt-1 font-serif text-3xl text-[#111111]">
            {isNew ? "Add Project" : "Edit Project"}
          </h1>

          <p className="mt-2 text-sm text-[#888888]">
            {isNew ? "Create a new project for your portfolio." : "Update your project information."}
          </p>
        </div>

      </div>

      {/* Error */}

      {error && (
        <div className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle size={17} />
          {error}
        </div>
      )}

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* Basic Information */}

        <section className="rounded-[24px] border border-slate-200 bg-white p-6">

          <div className="mb-6">
            <h2 className="font-serif text-xl text-[#111111]">
              Project Information
            </h2>

            <p className="mt-1 text-sm text-[#999999]">
              Basic information about this project.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {/* Title */}

            <Field
              label="Project Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="Modern Residence"
            />

            {/* Slug */}

            <Field
              label="Slug"
              name="slug"
              value={form.slug}
              onChange={handleChange}
              required
              placeholder="modern-residence"
            />

            {/* Category */}

            <Field
              label="Category"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              placeholder="Residential"
            />

            {/* Location */}

            <Field
              label="Location"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Abuja, Nigeria"
            />

            {/* Year */}

            <Field
              label="Completion Year"
              name="completionYear"
              type="number"
              value={form.completionYear}
              onChange={handleChange}
              placeholder="2026"
            />

            {/* Status */}

            <div>
              <label className="mb-2 block text-sm font-medium text-[#444444]">
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#333333] outline-none transition focus:border-[#73B72B] focus:bg-white"
              >
                <option value="DRAFT">Draft</option>
                <option value="PUBLISHED">Published</option>
              </select>
            </div>

          </div>

          {/* Brief */}

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-[#444444]">
              Brief
            </label>

            <textarea
              name="brief"
              value={form.brief}
              onChange={handleChange}
              required
              rows={3}
              placeholder="A short summary used on project cards..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#333333] outline-none transition placeholder:text-[#AAAAAA] focus:border-[#73B72B] focus:bg-white"
            />
          </div>

          {/* Description */}

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-[#444444]">
              Full Description
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={7}
              placeholder="Full project description..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-[#333333] outline-none transition placeholder:text-[#AAAAAA] focus:border-[#73B72B] focus:bg-white"
            />
          </div>

        </section>

        {/* Cover Image */}

        <section className="rounded-[24px] border border-slate-200 bg-white p-6">

          <div className="mb-6">
            <h2 className="font-serif text-xl text-[#111111]">
              Cover Image
            </h2>

            <p className="mt-1 text-sm text-[#999999]">
              Main image displayed for this project.
            </p>
          </div>

          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-[#73B72B] bg-slate-50 px-4 py-4 text-sm font-semibold text-[#102A72] transition hover:bg-[#73B72B]/10">
            <Upload size={18} />
            {coverPreview ? "Replace cover image" : "Choose cover image"}
            <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={handleCoverImageChange} className="hidden" />
          </label>
          <p className="mt-2 text-xs text-slate-500">JPG, PNG, WEBP, or GIF up to 10 MB.</p>

          {coverPreview && (
            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                src={coverPreview}
                alt={form.title}
                className="h-64 w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}

        </section>

        {/* Gallery Images */}

        <section className="rounded-[24px] border border-slate-200 bg-white p-6">
          <div className="mb-6">
            <h2 className="font-serif text-xl text-[#111111]">Project Gallery</h2>
            <p className="mt-1 text-sm text-[#999999]">
              Add one or more images to display on the project details page.
            </p>
          </div>

          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-[#73B72B] bg-slate-50 px-4 py-4 text-sm font-semibold text-[#102A72] transition hover:bg-[#73B72B]/10">
            <ImagePlus size={18} />
            Choose gallery images
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              multiple
              onChange={handleGalleryImagesChange}
              className="hidden"
            />
          </label>
          <p className="mt-2 text-xs text-slate-500">You can select multiple JPG, PNG, WEBP, or GIF images (up to 10 MB each).</p>

          {galleryFiles.length > 0 && (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryFiles.map((image) => (
                <div key={image.id} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <img src={image.preview} alt={image.file.name} className="h-40 w-full object-cover" />
                  <div className="flex items-center justify-between gap-3 px-3 py-2">
                    <span className="truncate text-xs text-slate-600">{image.file.name}</span>
                    <button type="button" onClick={() => removeGalleryImage(image.id)} aria-label={`Remove ${image.file.name}`} className="rounded-lg p-1.5 text-slate-500 transition hover:bg-red-50 hover:text-red-600">
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Actions */}

        <div className="flex flex-col-reverse justify-end gap-3 sm:flex-row">

          <Link
            to="/admin/projects"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-medium text-slate-600 transition hover:bg-slate-50"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={saving}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#102A72] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0B1A4D] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? (
              <>
                <RefreshCw size={16} className="animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save size={16} />
                {isNew ? "Create Project" : "Save Changes"}
              </>
            )}
          </button>

        </div>

      </form>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Field
|--------------------------------------------------------------------------
*/

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder = "",
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#444444]">
        {label}
        {required && (
          <span className="ml-1 text-[#73B72B]">*</span>
        )}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#333333] outline-none transition placeholder:text-[#AAAAAA] focus:border-[#73B72B] focus:bg-white"
      />
    </div>
  );
}

export default ProjectEdit;
