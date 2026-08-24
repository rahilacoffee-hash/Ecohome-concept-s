import { useEffect, useState } from "react";
import { Mail, RefreshCw, Send, X } from "lucide-react";
import axiosInstance from "../../api/axiosInstance";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const loadContacts = async () => {
    try { setLoading(true); setError(""); const { data } = await axiosInstance.get("/admin/contacts"); setContacts(data.data?.contacts || []); }
    catch (requestError) { setError(requestError.response?.data?.message || "Unable to load contact requests."); }
    finally { setLoading(false); }
  };
  useEffect(() => { loadContacts(); }, []);

  const openReply = (contact) => { setSelected(contact); setSubject(`Re: ${contact.subject || "Your quote request"}`); setMessage(""); setError(""); };
  const reply = async (event) => {
    event.preventDefault(); setSending(true); setError("");
    try {
      const { data } = await axiosInstance.post(`/admin/contacts/${selected.id}/reply`, { subject, message });
      setContacts((current) => current.map((contact) => contact.id === selected.id ? data.data.contact : contact));
      setSelected(null);
    } catch (requestError) { setError(requestError.response?.data?.message || "Unable to send reply."); }
    finally { setSending(false); }
  };

  if (loading) return <div className="h-96 animate-pulse rounded-[24px] border border-slate-200 bg-white" />;
  return <div className="space-y-6"><header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#73B72B]">Inbox</p><h1 className="mt-1 font-serif text-3xl text-[#102A72]">Contact requests</h1><p className="mt-2 text-sm text-slate-500">Reply directly to enquiries submitted through the quote form.</p></div><button type="button" onClick={loadContacts} className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 hover:border-[#73B72B]/40"><RefreshCw size={16} /> Refresh</button></header>{error && !selected && <p className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}<section className="overflow-x-auto rounded-[24px] border border-slate-200 bg-white">{contacts.length === 0 ? <p className="p-12 text-center text-sm text-slate-500">No contact requests yet.</p> : <table className="min-w-full text-left text-sm"><thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-4">Sender</th><th className="px-5 py-4">Request</th><th className="px-5 py-4">Status</th><th className="px-5 py-4">Received</th><th className="px-5 py-4" /></tr></thead><tbody>{contacts.map((contact) => <tr key={contact.id} className="border-b border-slate-100 last:border-0"><td className="px-5 py-4"><p className="font-semibold text-slate-800">{contact.name}</p><p className="mt-1 text-xs text-slate-500">{contact.email}</p></td><td className="max-w-md px-5 py-4 text-slate-600"><p className="font-medium text-slate-700">{contact.subject || "Quote request"}</p><p className="mt-1 line-clamp-2 text-xs">{contact.message}</p></td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${contact.status === "CONTACTED" ? "bg-emerald-50 text-emerald-700" : "bg-[#73B72B]/10 text-[#4e8615]"}`}>{contact.status}</span></td><td className="whitespace-nowrap px-5 py-4 text-slate-500">{new Date(contact.createdAt).toLocaleDateString()}</td><td className="px-5 py-4 text-right"><button type="button" onClick={() => openReply(contact)} className="inline-flex items-center gap-2 rounded-xl bg-[#102A72] px-3 py-2 text-xs font-semibold text-white hover:bg-[#0B1A4D]"><Mail size={15} /> Reply</button></td></tr>)}</tbody></table>}</section>{selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"><form onSubmit={reply} className="w-full max-w-xl rounded-[24px] bg-white p-6 shadow-2xl"><div className="flex justify-between gap-4"><div><h2 className="font-serif text-2xl text-[#102A72]">Reply to {selected.name}</h2><p className="mt-1 text-sm text-slate-500">This email will be sent to {selected.email}.</p></div><button type="button" onClick={() => setSelected(null)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-50"><X size={20} /></button></div>{error && <p className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}<label className="mt-5 block text-sm font-medium text-slate-700">Subject<input required value={subject} onChange={(event) => setSubject(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-[#73B72B]" /></label><label className="mt-5 block text-sm font-medium text-slate-700">Message<textarea required rows={7} value={message} onChange={(event) => setMessage(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-[#73B72B]" /></label><div className="mt-6 flex justify-end gap-3"><button type="button" onClick={() => setSelected(null)} className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600">Cancel</button><button disabled={sending} className="inline-flex items-center gap-2 rounded-xl bg-[#73B72B] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"><Send size={16} />{sending ? "Sending..." : "Send reply"}</button></div></form></div>}</div>;
  
}
