import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiCheckCircle,
  HiChevronRight,
  HiEnvelope,
  HiHome,
  HiMapPin,
  HiPhone,
  HiSparkles,
} from "react-icons/hi2";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer/Footer";
import Container from "../components/layout/Container";
import backgroundImage from "../assets/images/backgrounds/office.png";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const configuredApiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const apiUrl = configuredApiUrl.replace(/\/api\/?$/, "");
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const contentType = response.headers.get("content-type") || "";
      const result = contentType.includes("application/json")
        ? await response.json()
        : { message: "The server returned an unexpected response. Please try again shortly." };

      if (!response.ok) throw new Error(result.message || "Unable to submit your quote request");
      setSubmitted(true);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden bg-[#060f2e] pb-20 pt-40 sm:pb-28 sm:pt-48">
          <div className="absolute inset-0 -z-20">
            <img src={backgroundImage} alt="Modern Ecohome project" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060f2e]/95 via-[#060f2e]/86 to-[#060f2e]/55" />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:54px_54px]" />
          <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#73B72B]/20 blur-[100px]" />

          <Container>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#73B72B]/40 bg-[#73B72B]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a8df6a]">
                <HiSparkles className="text-base" /> Start your project
              </span>
              <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
                Request a quote for your <span className="text-[#73B72B]">next landmark.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Tell us about your vision. Our construction and engineering team will review your requirements and get back to you with the right next steps.
              </p>
              <nav aria-label="Breadcrumb" className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-200">
                <Link to="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-[#a8df6a]">
                  <HiHome className="text-base" /> Home
                </Link>
                <HiChevronRight className="text-slate-400" />
                <span aria-current="page" className="text-[#a8df6a]">Contact</span>
              </nav>
            </motion.div>
          </Container>
        </section>

        <section className="bg-[#f7f9fc] py-16 sm:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#73B72B]">Let’s talk</span>
                <h2 className="mt-3 text-3xl font-black leading-tight text-[#102A72] sm:text-4xl">Built around your goals.</h2>
                <p className="mt-5 max-w-md leading-7 text-slate-600">From feasibility to handover, share the details that matter and we’ll help shape a clear way forward.</p>

                <div className="mt-8 space-y-5">
                  <ContactDetail icon={HiPhone} title="Call us" text="+234 801 234 5678" />
                  <ContactDetail icon={HiEnvelope} title="Email us" text="info@ecohomeconcepts.com" />
                  <ContactDetail icon={HiMapPin} title="Visit our office" text="Central Business District, Abuja, Nigeria" />
                </div>

                <div className="mt-10 rounded-2xl border border-[#73B72B]/20 bg-white p-5 shadow-sm">
                  <HiCheckCircle className="text-2xl text-[#73B72B]" />
                  <p className="mt-3 font-bold text-[#102A72]">A straightforward first conversation.</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">No obligation—just practical guidance for your project.</p>
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="rounded-3xl bg-white p-6 shadow-[0_22px_60px_rgba(16,42,114,.10)] sm:p-10">
                {submitted ? (
                  <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#73B72B]/15 text-[#73B72B]"><HiCheckCircle className="text-4xl" /></span>
                    <h2 className="mt-6 text-3xl font-black text-[#102A72]">Quote request received.</h2>
                    <p className="mt-3 max-w-md leading-7 text-slate-600">Thank you, {form.name}. Our team will review your request and contact you shortly.</p>
                    <button onClick={() => { setForm(initialForm); setSubmitted(false); }} className="mt-7 font-bold text-[#102A72] underline decoration-[#73B72B] decoration-2 underline-offset-4">Submit another request</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6">
                      <div><h2 className="text-2xl font-black text-[#102A72]">Tell us about your project</h2><p className="mt-1 text-sm text-slate-500">Fields marked * are required.</p></div>
                    </div>
                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <Field label="Full name" name="name" value={form.name} onChange={updateField} required placeholder="Your name" />
                      <Field label="Email address" name="email" type="email" value={form.email} onChange={updateField} required placeholder="you@example.com" />
                      <Field label="Phone number" name="phone" type="tel" value={form.phone} onChange={updateField} required placeholder="+234 ..." />
                      <SelectField label="Project type" name="projectType" value={form.projectType} onChange={updateField} required options={["Residential construction", "Commercial building", "Government project", "Engineering consultancy", "Project management"]} />
                      <div className="sm:col-span-2"><SelectField label="Estimated budget" name="budget" value={form.budget} onChange={updateField} options={["Under ₦10m", "₦10m – ₦50m", "₦50m – ₦250m", "Above ₦250m", "Prefer to discuss"]} /></div>
                      <div className="sm:col-span-2"><label className="block text-sm font-bold text-slate-700">Project details <span className="text-[#73B72B]">*</span></label><textarea name="message" value={form.message} onChange={updateField} required rows="5" placeholder="Location, timeline, scope, or anything else we should know…" className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-[#73B72B] focus:bg-white focus:ring-4 focus:ring-[#73B72B]/10" /></div>
                    </div>
                    {error && <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}
                    <button type="submit" disabled={isSubmitting} className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#73B72B] px-6 py-4 font-bold text-white shadow-[0_12px_28px_rgba(115,183,43,.30)] transition hover:-translate-y-0.5 hover:bg-[#65a324] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                      {isSubmitting ? "Sending request…" : "Request my quote"} <HiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactDetail({ icon: Icon, title, text }) {
  return <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#102A72] text-[#73B72B]"><Icon className="text-xl" /></span><div><p className="font-bold text-[#102A72]">{title}</p><p className="mt-0.5 text-sm leading-6 text-slate-600">{text}</p></div></div>;
}

function Field({ label, name, type = "text", value, onChange, required, placeholder }) {
  return <label className="block text-sm font-bold text-slate-700">{label} {required && <span className="text-[#73B72B]">*</span>}<input name={name} type={type} value={value} onChange={onChange} required={required} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#73B72B] focus:bg-white focus:ring-4 focus:ring-[#73B72B]/10" /></label>;
}

function SelectField({ label, name, value, onChange, required, options }) {
  return <label className="block text-sm font-bold text-slate-700">{label} {required && <span className="text-[#73B72B]">*</span>}<select name={name} value={value} onChange={onChange} required={required} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-[#73B72B] focus:bg-white focus:ring-4 focus:ring-[#73B72B]/10"><option value="">Select an option</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
}
