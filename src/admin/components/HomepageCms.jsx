import { useEffect, useState } from "react";
import { AlertCircle, Plus, Save, Trash2, Upload } from "lucide-react";
import axiosInstance from "../../api/axiosInstance";
import { defaultHomepageContent } from "../../services/homepage";

const iconOptions = ["Building", "Users", "Trophy", "Star"];

export default function HomepageCms() {
  const [content, setContent] = useState(defaultHomepageContent);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [uploadingSection, setUploadingSection] = useState("");

  useEffect(() => {
    axiosInstance.get("/homepage")
      .then(({ data }) => setContent({ hero: { ...defaultHomepageContent.hero, ...data.data?.hero }, stats: data.data?.stats?.length ? data.data.stats : defaultHomepageContent.stats, about: { ...defaultHomepageContent.about, ...data.data?.about }, whyChoose: { ...defaultHomepageContent.whyChoose, ...data.data?.whyChoose }, cta: { ...defaultHomepageContent.cta, ...data.data?.cta }, footer: { ...defaultHomepageContent.footer, ...data.data?.footer } }))
      .catch((requestError) => setError(requestError.response?.data?.message || "Unable to load homepage content."))
      .finally(() => setLoading(false));
  }, []);

  const updateHero = (field, value) => setContent((current) => ({ ...current, hero: { ...current.hero, [field]: value } }));
  const updateStat = (index, field, value) => setContent((current) => ({ ...current, stats: current.stats.map((stat, statIndex) => statIndex === index ? { ...stat, [field]: value } : stat) }));
  const updateSection = (section, field, value) => setContent((current) => ({ ...current, [section]: { ...current[section], [field]: value } }));
  const updateClientLogo = (index, field, value) => setContent((current) => ({ ...current, hero: { ...current.hero, clientLogos: current.hero.clientLogos.map((client, clientIndex) => clientIndex === index ? { ...client, [field]: value } : client) } }));

  const uploadSectionImage = async (section, file) => {
    if (!file) return;
    setUploadingSection(section); setError(""); setMessage("");
    try {
      const payload = new FormData();
      payload.append("image", file);
      const { data } = await axiosInstance.post(`/homepage/images/${section}`, payload);
      setContent((current) => ({ ...current, [section]: { ...current[section], ...data.data?.[section] } }));
      setMessage(`${section === "about" ? "About" : "Why Choose Us"} image uploaded.`);
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to upload homepage image.");
    } finally { setUploadingSection(""); }
  };

  const save = async (event) => {
    event.preventDefault();
    setSaving(true); setMessage(""); setError("");
    try {
      await axiosInstance.put("/homepage", content);
      setMessage("Homepage content saved. Your changes are live.");
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to save homepage content.");
    } finally { setSaving(false); }
  };

  if (loading) return <div className="h-96 animate-pulse rounded-[24px] border border-slate-200 bg-white" />;

  return <form onSubmit={save} className="mx-auto max-w-5xl space-y-6">
    <header><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#73B72B]">Website content</p><h1 className="mt-1 font-serif text-3xl text-[#102A72]">Homepage CMS</h1><p className="mt-2 text-sm text-slate-500">Edit the homepage hero and the four key statistics.</p></header>
    {error && <Notice color="red" message={error} />}{message && <Notice color="green" message={message} />}
    <section className="rounded-[24px] border border-slate-200 bg-white p-6"><h2 className="font-serif text-xl text-[#102A72]">Hero section</h2><div className="mt-6 grid gap-5 md:grid-cols-2"><Field label="Badge" value={content.hero.badge} onChange={(value) => updateHero("badge", value)} /><Field label="Main heading" value={content.hero.title} onChange={(value) => updateHero("title", value)} /><Field label="Green heading" value={content.hero.highlight} onChange={(value) => updateHero("highlight", value)} /><Field label="Background image URL" type="url" value={content.hero.backgroundImage} onChange={(value) => updateHero("backgroundImage", value)} /><Field label="Primary button label" value={content.hero.primaryButtonLabel} onChange={(value) => updateHero("primaryButtonLabel", value)} /><Field label="Primary button link" value={content.hero.primaryButtonHref} onChange={(value) => updateHero("primaryButtonHref", value)} /><Field label="Secondary button label" value={content.hero.secondaryButtonLabel} onChange={(value) => updateHero("secondaryButtonLabel", value)} /><Field label="Secondary button link" value={content.hero.secondaryButtonHref} onChange={(value) => updateHero("secondaryButtonHref", value)} /><div className="md:col-span-2"><Field label="Description" multiline value={content.hero.description} onChange={(value) => updateHero("description", value)} /></div></div></section>
    <section className="rounded-[24px] border border-slate-200 bg-white p-6"><div className="flex items-start justify-between gap-4"><div><h2 className="font-serif text-xl text-[#102A72]">Logo marquee</h2><p className="mt-1 text-sm text-slate-500">Partner logos shown in the scrolling homepage marquee.</p></div><button type="button" onClick={() => updateHero("clientLogos", [...(content.hero.clientLogos || []), { name: "New partner", logo: "" }])} className="inline-flex items-center gap-2 rounded-xl border border-[#73B72B]/30 px-4 py-2 text-sm font-semibold text-[#73B72B]"><Plus size={16} /> Add logo</button></div><div className="mt-6 space-y-4">{(content.hero.clientLogos || []).map((client, index) => <div key={`${client.name}-${index}`} className="grid gap-4 rounded-2xl border border-slate-200 p-4 md:grid-cols-[1fr_2fr_auto]"><Field label="Partner name" value={client.name} onChange={(value) => updateClientLogo(index, "name", value)} /><Field label="Logo image URL" type="url" value={client.logo} onChange={(value) => updateClientLogo(index, "logo", value)} /><button type="button" onClick={() => updateHero("clientLogos", content.hero.clientLogos.filter((_, clientIndex) => clientIndex !== index))} aria-label={`Delete ${client.name || "logo"}`} className="self-end rounded-xl p-3 text-red-600 hover:bg-red-50"><Trash2 size={18} /></button></div>)}</div></section>
    <SectionEditor title="About section" section="about" content={content.about} onChange={updateSection} fields={["eyebrow", "title", "highlight", "description"]} imageUploading={uploadingSection === "about"} onImageSelect={uploadSectionImage} />
    <SectionEditor title="Why Choose Us" section="whyChoose" content={content.whyChoose} onChange={updateSection} fields={["badge", "title", "highlight", "description"]} imageUploading={uploadingSection === "whyChoose"} onImageSelect={uploadSectionImage} />
    <SectionEditor title="Call to action" section="cta" content={content.cta} onChange={updateSection} fields={["eyebrow", "title", "highlight", "description"]} />
    <SectionEditor title="Footer contact" section="footer" content={content.footer} onChange={updateSection} fields={["description", "phone", "email", "address"]} />
    <section className="rounded-[24px] border border-slate-200 bg-white p-6"><div className="flex items-center justify-between gap-4"><div><h2 className="font-serif text-xl text-[#102A72]">Homepage stats</h2><p className="mt-1 text-sm text-slate-500">These appear directly below the hero section.</p></div><button type="button" onClick={() => setContent((current) => ({ ...current, stats: [...current.stats, { value: 0, suffix: "+", label: "New statistic", icon: "Building" }] }))} className="inline-flex items-center gap-2 rounded-xl border border-[#73B72B]/30 px-4 py-2 text-sm font-semibold text-[#73B72B]"><Plus size={16} /> Add stat</button></div><div className="mt-6 space-y-4">{content.stats.map((stat, index) => <div key={`${stat.label}-${index}`} className="grid gap-4 rounded-2xl border border-slate-200 p-4 md:grid-cols-[100px_100px_1fr_150px_auto]"><Field label="Value" type="number" value={stat.value} onChange={(value) => updateStat(index, "value", value)} /><Field label="Suffix" value={stat.suffix} onChange={(value) => updateStat(index, "suffix", value)} /><Field label="Label" value={stat.label} onChange={(value) => updateStat(index, "label", value)} /><label className="block"><span className="mb-2 block text-sm font-medium text-slate-700">Icon</span><select value={stat.icon} onChange={(event) => updateStat(index, "icon", event.target.value)} className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#73B72B]">{iconOptions.map((icon) => <option key={icon}>{icon}</option>)}</select></label><button type="button" onClick={() => setContent((current) => ({ ...current, stats: current.stats.filter((_, statIndex) => statIndex !== index) }))} aria-label="Delete stat" className="self-end rounded-xl p-3 text-red-600 hover:bg-red-50"><Trash2 size={18} /></button></div>)}</div></section>
    <button disabled={saving} className="inline-flex items-center gap-2 rounded-xl bg-[#102A72] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0B1A4D] disabled:opacity-60"><Save size={17} />{saving ? "Saving..." : "Save homepage"}</button>
  </form>;
}

function Field({ label, value, onChange, type = "text", multiline = false }) { const className = "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#73B72B]"; return <label className="block"><span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>{multiline ? <textarea rows={4} value={value ?? ""} onChange={(event) => onChange(event.target.value)} className={className} /> : <input type={type} value={value ?? ""} onChange={(event) => onChange(type === "number" ? Number(event.target.value) : event.target.value)} className={className} />}</label>; }
function SectionEditor({ title, section, content, onChange, fields, imageUploading, onImageSelect }) { return <section className="rounded-[24px] border border-slate-200 bg-white p-6"><h2 className="font-serif text-xl text-[#102A72]">{title}</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{fields.map((field) => <div key={field} className={field === "description" || field === "address" ? "md:col-span-2" : ""}><Field label={field.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase())} type={field === "email" ? "email" : "text"} multiline={field === "description" || field === "address"} value={content?.[field] || ""} onChange={(value) => onChange(section, field, value)} /></div>)}</div>{onImageSelect && <div className="mt-6"><label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-[#73B72B] px-4 py-3 text-sm font-semibold text-[#102A72]"><Upload size={17} />{imageUploading ? "Uploading image..." : "Choose section image"}<input disabled={imageUploading} type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(event) => onImageSelect(section, event.target.files[0])} className="hidden" /></label><p className="mt-2 text-xs text-slate-500">JPG, PNG, WEBP, or GIF up to 10 MB.</p>{content?.image && <img src={content.image} alt={`${title} preview`} className="mt-4 h-48 w-full rounded-xl object-cover" />}</div>}</section>; }
function Notice({ color, message }) { return <div className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm ${color === "red" ? "border-red-100 bg-red-50 text-red-600" : "border-emerald-100 bg-emerald-50 text-emerald-700"}`}><AlertCircle size={17} />{message}</div>; }
