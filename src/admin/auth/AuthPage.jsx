import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import axiosInstance from "../../api/axiosInstance";
import { useAuth } from "../../context/AuthContext";

export default function AuthPage({ mode = "login" }) {
  const isSetup = mode === "setup";
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "", adminSecret: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setMessage("");
    setIsSubmitting(true);

    try {
      if (isSetup) {
        const { data } = await axiosInstance.post("/auth/setup", form);
        setMessage(data.message);
      } else {
        await login({ email: form.email, password: form.password });
        navigate("/admin", { replace: true });
      }
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to complete this request.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-6 py-12">
      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-[0_25px_70px_rgba(16,42,114,.12)] sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A72] text-white"><LockKeyhole size={25} /></div>
        <p className="mt-7 text-sm font-bold uppercase tracking-[.22em] text-[#73B72B]">Echohome Concepts</p>
        <h1 className="mt-3 text-3xl font-black text-[#102A72]">{isSetup ? "Create Admin Account" : "Admin Sign In"}</h1>
        <p className="mt-3 text-slate-500">{isSetup ? "Use the administrator secret to create the first verified admin account." : "Sign in to manage projects, services, and testimonials."}</p>

        {error && <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}
        {message && <p className="mt-6 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">{message}</p>}

        <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
          {isSetup && <Field label="Full name" name="name" value={form.name} onChange={update} autoComplete="name" />}
          <Field label="Email address" name="email" type="email" value={form.email} onChange={update} autoComplete="email" />
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#102A72]" htmlFor="password">Password</label>
            <div className="relative"><input id="password" name="password" type={showPassword ? "text" : "password"} value={form.password} onChange={update} minLength="8" autoComplete={isSetup ? "new-password" : "current-password"} required className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-12 outline-none focus:border-[#73B72B]" /><button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div>
            {isSetup && <p className="mt-1 text-xs text-slate-500">At least 8 characters.</p>}
          </div>
          {isSetup && <Field label="Administrator secret" name="adminSecret" type="password" value={form.adminSecret} onChange={update} autoComplete="off" />}
          <button disabled={isSubmitting} className="w-full rounded-xl bg-[#73B72B] px-5 py-3.5 font-bold text-white transition hover:bg-[#65a324] disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? "Please wait…" : isSetup ? "Create Admin Account" : "Sign In"}</button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-500">{isSetup ? <>Already have an account? <Link to="/login" className="font-bold text-[#73B72B]">Sign in</Link></> : <>Need to create the first account? <Link to="/setup" className="font-bold text-[#73B72B]">Set up admin</Link></>}</p>
      </section>
    </main>
  );
}

function Field({ label, name, type = "text", value, onChange, autoComplete }) {
  return <label className="block" htmlFor={name}><span className="mb-2 block text-sm font-semibold text-[#102A72]">{label}</span><input id={name} name={name} type={type} value={value} onChange={onChange} autoComplete={autoComplete} required className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#73B72B]" /></label>;
}
