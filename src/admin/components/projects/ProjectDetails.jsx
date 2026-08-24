import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ImagePlus, Pencil, Trash2, Upload } from "lucide-react";
import axiosInstance from "../../../api/axiosInstance";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const loadProject = async () => {
    try {
      setError("");
      const { data } = await axiosInstance.get(`/admin/projects/${id}`);
      setProject(data.data.project);
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to load project.");
    }
  };

  useEffect(() => { loadProject(); }, [id]);

  const addImage = async (event) => {
    event.preventDefault();
    if (!imageFile) return;
    try {
      setIsSaving(true);
      const formData = new FormData();
      formData.append("image", imageFile);
      await axiosInstance.post(`/admin/projects/${id}/images`, formData);
      setImageFile(null);
      event.currentTarget.reset();
      await loadProject();
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to add image.");
    } finally { setIsSaving(false); }
  };

  const deleteImage = async (imageId) => {
    if (!window.confirm("Delete this project image?")) return;
    try {
      await axiosInstance.delete(`/admin/projects/project-images/${imageId}`);
      await loadProject();
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to delete image.");
    }
  };

  if (!project && !error) return <div className="rounded-3xl bg-white p-10 text-center font-semibold text-[#102A72]">Loading project…</div>;
  if (error && !project) return <div className="rounded-3xl bg-white p-10 text-center"><p className="font-semibold text-red-600">{error}</p><Link to="/admin/projects" className="mt-5 inline-block font-bold text-[#73B72B]">Back to projects</Link></div>;

  return <div className="mx-auto max-w-5xl space-y-6">
    <div className="flex items-end justify-between gap-4"><div><Link to="/admin/projects" className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#73B72B]"><ArrowLeft size={16} /> Back to projects</Link><h1 className="mt-4 text-3xl font-black text-[#102A72]">{project.title}</h1><p className="mt-2 text-slate-500">{project.category} {project.location ? `• ${project.location}` : ""}</p></div><Link to={`/admin/projects/${id}/edit`} className="flex items-center gap-2 rounded-xl bg-[#73B72B] px-5 py-3 font-bold text-white"><Pencil size={16} /> Edit project</Link></div>
    {error && <p className="rounded-xl bg-red-50 p-4 text-sm text-red-600">{error}</p>}
    <section className="rounded-3xl bg-white p-6 shadow-sm"><h2 className="text-xl font-black text-[#102A72]">Project details</h2><p className="mt-4 leading-7 text-slate-600">{project.description || project.brief}</p><dl className="mt-6 grid gap-4 sm:grid-cols-3"><Detail label="Slug" value={project.slug} /><Detail label="Status" value={project.status} /><Detail label="Completion year" value={project.completionYear || "—"} /></dl></section>
    <section className="rounded-3xl bg-white p-6 shadow-sm"><h2 className="text-xl font-black text-[#102A72]">Project gallery</h2><form onSubmit={addImage} className="mt-5 flex flex-col gap-3 sm:flex-row"><label className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-[#73B72B] px-4 py-3 text-sm font-semibold text-[#102A72]"><Upload size={17} />{imageFile ? imageFile.name : "Choose gallery image"}<input onChange={(event) => setImageFile(event.target.files[0] || null)} type="file" accept="image/jpeg,image/png,image/webp,image/gif" required className="hidden" /></label><button disabled={isSaving} className="flex items-center justify-center gap-2 rounded-xl bg-[#102A72] px-5 py-3 font-bold text-white disabled:opacity-60"><ImagePlus size={17} /> {isSaving ? "Uploading…" : "Upload image"}</button></form><p className="mt-2 text-xs text-slate-500">JPG, PNG, WEBP, or GIF up to 10 MB.</p><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{project.images?.map((image) => <div key={image.id} className="group relative overflow-hidden rounded-2xl bg-slate-100"><img src={image.url} alt={image.alt || project.title} className="h-48 w-full object-cover" /><button onClick={() => deleteImage(image.id)} className="absolute right-3 top-3 rounded-lg bg-white p-2 text-red-600 shadow"><Trash2 size={16} /></button></div>)}</div>{!project.images?.length && <p className="mt-6 text-slate-500">No gallery images yet.</p>}</section>
  </div>;
}

function Detail({ label, value }) { return <div><dt className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</dt><dd className="mt-1 font-semibold text-slate-700">{value}</dd></div>; }
