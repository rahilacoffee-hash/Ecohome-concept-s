import { useCallback, useEffect, useMemo, useState } from "react";
import { AlertCircle, Pencil, Plus, Search, Trash2, Upload, X } from "lucide-react";
import axiosInstance from "../../api/axiosInstance";

const definitions = {
  services: {
    singular: "Service",
    description: "Manage the services displayed on your website.",
    initial: { title: "", slug: "", brief: "", description: "", image: "", active: true },
    fields: [
      { name: "title", label: "Title", required: true },
      { name: "slug", label: "Slug", required: true, hint: "Lowercase URL identifier, e.g. interior-design" },
      { name: "brief", label: "Brief", required: true, multiline: true },
      { name: "description", label: "Full description", multiline: true },
      { name: "image", label: "Image URL", type: "url" },
      { name: "active", label: "Visible on website", type: "checkbox" },
    ],
    columns: ["title", "slug", "brief", "active"],
  },
  testimonials: {
    singular: "Testimonial",
    description: "Manage client testimonials displayed on your website.",
    initial: { clientName: "", clientRole: "", company: "", content: "", rating: 5, image: "", published: false },
    fields: [
      { name: "clientName", label: "Client name", required: true },
      { name: "clientRole", label: "Client role" },
      { name: "company", label: "Company" },
      { name: "content", label: "Testimonial", required: true, multiline: true },
      { name: "rating", label: "Rating", type: "number", min: 1, max: 5 },
      { name: "image", label: "Image URL", type: "url" },
      { name: "published", label: "Published on website", type: "checkbox" },
    ],
    columns: ["clientName", "clientRole", "company", "rating", "published"],
  },
};

const labelFor = (name) => name.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase());

export default function AdminResource({ resource, title }) {
  const definition = definitions[resource];
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(definition.initial);
  const [editing, setEditing] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const loadItems = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const { data } = await axiosInstance.get(`/admin/${resource}`);
      setItems(data.data?.[resource] || []);
    } catch (requestError) {
      setError(requestError.response?.data?.message || `Unable to load ${resource}.`);
    } finally {
      setLoading(false);
    }
  }, [resource]);

  useEffect(() => { loadItems(); }, [loadItems]);

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return items;
    return items.filter((item) => definition.columns.some((column) => String(item[column] ?? "").toLowerCase().includes(query)));
  }, [definition.columns, items, search]);

  const openCreate = () => { setError(""); setImageFile(null); setForm({ ...definition.initial }); setEditing("new"); };
  const openEdit = (item) => { setError(""); setImageFile(null); setForm({ ...definition.initial, ...item }); setEditing(item.id); };

  const save = async (event) => {
    event.preventDefault();
    setSaving(true); setError("");
    try {
      const payload = resource === "services"
        ? definition.fields.reduce((data, field) => {
            data.append(field.name, String(form[field.name] ?? ""));
            return data;
          }, new FormData())
        : definition.fields.reduce((data, field) => {
            data[field.name] = form[field.name];
            return data;
          }, {});
      if (resource === "services" && imageFile) payload.append("image", imageFile);
      if (editing === "new") await axiosInstance.post(`/admin/${resource}`, payload);
      else await axiosInstance.patch(`/admin/${resource}/${editing}`, payload);
      setEditing(null);
      await loadItems();
    } catch (requestError) {
      setError(requestError.response?.data?.message || `Unable to save ${definition.singular.toLowerCase()}.`);
    } finally { setSaving(false); }
  };

  const remove = async () => {
    if (!deleteItem) return;
    setDeleting(true);
    try {
      await axiosInstance.delete(`/admin/${resource}/${deleteItem.id}`);
      setItems((current) => current.filter((item) => item.id !== deleteItem.id));
      setDeleteItem(null);
    } catch (requestError) {
      setError(requestError.response?.data?.message || `Unable to delete ${definition.singular.toLowerCase()}.`);
      setDeleteItem(null);
    } finally { setDeleting(false); }
  };

  return <div className="space-y-6">
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#73B72B]">Website content</p><h1 className="mt-1 font-serif text-3xl text-[#102A72]">{title}</h1><p className="mt-2 text-sm text-slate-500">{definition.description}</p></div><button type="button" onClick={openCreate} className="flex w-fit items-center gap-2 rounded-xl bg-[#102A72] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0B1A4D]"><Plus size={18} /> Add {definition.singular}</button></div>
    {error && !editing && <div className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"><AlertCircle size={17} />{error}</div>}
    <div className="rounded-[24px] border border-slate-200 bg-white p-4"><div className="relative max-w-md"><Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={`Search ${resource}...`} className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-[#73B72B]" /></div></div>
    {loading ? <div className="h-72 animate-pulse rounded-[24px] border border-slate-200 bg-white" /> : <div className="overflow-x-auto rounded-[24px] border border-slate-200 bg-white">{filteredItems.length === 0 ? <div className="p-12 text-center"><p className="text-sm text-slate-500">No {resource} found.</p><button type="button" onClick={openCreate} className="mt-4 text-sm font-semibold text-[#73B72B]">Create the first one</button></div> : <table className="min-w-full text-left text-sm"><thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr>{definition.columns.map((column) => <th key={column} className="px-5 py-4 font-semibold">{labelFor(column)}</th>)}<th className="px-5 py-4 text-right font-semibold">Actions</th></tr></thead><tbody>{filteredItems.map((item) => <tr key={item.id} className="border-b border-slate-100 last:border-0">{definition.columns.map((column) => <td key={column} className="max-w-xs px-5 py-4 text-slate-600">{typeof item[column] === "boolean" ? <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${item[column] ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{item[column] ? "Yes" : "No"}</span> : column === "rating" ? `${item[column] || 0}/5` : item[column] || "—"}</td>)}<td className="whitespace-nowrap px-5 py-4 text-right"><button type="button" onClick={() => openEdit(item)} className="mr-2 inline-flex rounded-lg p-2 text-slate-500 hover:bg-slate-50 hover:text-[#73B72B]" aria-label={`Edit ${definition.singular}`}><Pencil size={17} /></button><button type="button" onClick={() => setDeleteItem(item)} className="inline-flex rounded-lg p-2 text-slate-500 hover:bg-red-50 hover:text-red-600" aria-label={`Delete ${definition.singular}`}><Trash2 size={17} /></button></td></tr>)}</tbody></table>}</div>}
    {editing && <Editor definition={definition} form={form} setForm={setForm} isNew={editing === "new"} saving={saving} error={error} imageFile={resource === "services" ? imageFile : null} setImageFile={resource === "services" ? setImageFile : null} onClose={() => { setEditing(null); setError(""); }} onSubmit={save} />}
    {deleteItem && <DeleteDialog item={deleteItem} singular={definition.singular} deleting={deleting} onCancel={() => setDeleteItem(null)} onConfirm={remove} />}
  </div>;
}

function Editor({ definition, form, setForm, isNew, saving, error, imageFile, setImageFile, onClose, onSubmit }) { return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"><form onSubmit={onSubmit} className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[24px] bg-white p-6 shadow-2xl"><div className="mb-6 flex items-start justify-between"><div><h2 className="font-serif text-2xl text-[#102A72]">{isNew ? `Add ${definition.singular}` : `Edit ${definition.singular}`}</h2><p className="mt-1 text-sm text-slate-500">Changes are saved to the website immediately.</p></div><button type="button" onClick={onClose} className="rounded-lg p-2 text-slate-500 hover:bg-slate-50"><X size={20} /></button></div>{error && <p className="mb-4 text-sm text-red-600">{error}</p>}<div className="grid gap-5 sm:grid-cols-2">{definition.fields.map((field) => <Field key={field.name} field={field} value={form[field.name]} onChange={(value) => setForm((current) => ({ ...current, [field.name]: value }))} />)}</div>{setImageFile && <label className="mt-5 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-[#73B72B] px-4 py-3 text-sm font-semibold text-[#102A72]"><Upload size={17} />{imageFile ? imageFile.name : "Choose service image"}<input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(event) => setImageFile(event.target.files[0] || null)} className="hidden" /></label>}<div className="mt-7 flex justify-end gap-3"><button type="button" onClick={onClose} className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600">Cancel</button><button disabled={saving} className="rounded-xl bg-[#102A72] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60">{saving ? "Saving..." : "Save changes"}</button></div></form></div>; }
function Field({ field, value, onChange }) { const className = "w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#73B72B]"; if (field.type === "checkbox") return <label className="flex items-center gap-3 self-end rounded-xl border border-slate-200 p-3 text-sm text-slate-700"><input type="checkbox" checked={Boolean(value)} onChange={(event) => onChange(event.target.checked)} className="h-4 w-4 accent-[#73B72B]" />{field.label}</label>; return <label className={`block ${field.multiline ? "sm:col-span-2" : ""}`}><span className="mb-2 block text-sm font-medium text-slate-700">{field.label}{field.required && <span className="text-red-500"> *</span>}</span>{field.multiline ? <textarea required={field.required} value={value ?? ""} onChange={(event) => onChange(event.target.value)} rows={4} className={className} /> : <input required={field.required} type={field.type || "text"} min={field.min} max={field.max} value={value ?? ""} onChange={(event) => onChange(field.type === "number" ? Number(event.target.value) : event.target.value)} className={className} />}{field.hint && <span className="mt-1 block text-xs text-slate-400">{field.hint}</span>}</label>; }
function DeleteDialog({ item, singular, deleting, onCancel, onConfirm }) { return <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"><div className="w-full max-w-md rounded-[24px] bg-white p-6 shadow-2xl"><h2 className="font-serif text-2xl text-[#102A72]">Delete {singular}?</h2><p className="mt-3 text-sm leading-6 text-slate-500">This will permanently delete <strong className="text-slate-800">{item.title || item.clientName}</strong>. This action cannot be undone.</p><div className="mt-6 flex justify-end gap-3"><button type="button" onClick={onCancel} disabled={deleting} className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600">Cancel</button><button type="button" onClick={onConfirm} disabled={deleting} className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60">{deleting ? "Deleting..." : "Delete"}</button></div></div></div>; }
