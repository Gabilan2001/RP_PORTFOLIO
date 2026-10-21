import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { contactInfo, projectInfo } from "../data/projectData";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("from_name", "TomatoDoc Portfolio");
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return <section className="bg-[#12382b] px-5 py-24 text-white lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><p className="eyebrow !text-[#d6ef75]">09 / Stay connected</p><h2 className="section-title mt-4 !text-white">Contact <span>Us</span></h2><div className="mt-12 grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div className="rounded-2xl border border-white/10 bg-white/[.07] p-7"><p className="text-lg leading-8 text-white/70">Have a question about the research, the models, or the project archive? Reach the TomatoDoc team through SLIIT Faculty of Computing.</p><div className="mt-8 space-y-5 text-sm"><div className="flex gap-3"><Mail className="mt-0.5 text-[#d6ef75]" size={18} /><div><p className="font-bold text-white">Group email</p><a href={`mailto:${contactInfo.email}`} className="text-white/60 transition hover:text-[#d6ef75]">{contactInfo.email}</a></div></div><div className="flex gap-3"><MapPin className="mt-0.5 text-[#d6ef75]" size={18} /><div><p className="font-bold text-white">Academic home</p><p className="leading-6 text-white/60">{projectInfo.university}<br />{projectInfo.faculty}<br />{contactInfo.department}</p></div></div><div className="border-t border-white/10 pt-5 text-white/60">Group code <span className="font-mono text-[#d6ef75]">{projectInfo.groupCode}</span></div></div></div><form className="grid gap-4 rounded-2xl bg-white p-7 text-[#1e3027]" onSubmit={handleSubmit}><div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold">Name<input name="name" required className="rounded-lg border border-[#dce4d9] px-4 py-3 font-normal outline-none transition focus:border-[#6b9c52]" placeholder="Your name" /></label><label className="grid gap-2 text-sm font-bold">Email<input name="email" required type="email" className="rounded-lg border border-[#dce4d9] px-4 py-3 font-normal outline-none transition focus:border-[#6b9c52]" placeholder="you@example.com" /></label></div><label className="grid gap-2 text-sm font-bold">Subject<input name="subject" required className="rounded-lg border border-[#dce4d9] px-4 py-3 font-normal outline-none transition focus:border-[#6b9c52]" placeholder="How can we help?" /></label><label className="grid gap-2 text-sm font-bold">Message<textarea name="message" required rows="5" className="resize-y rounded-lg border border-[#dce4d9] px-4 py-3 font-normal outline-none transition focus:border-[#6b9c52]" placeholder="Write your message..." /></label><button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1f6044] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#154d35] disabled:opacity-60"><Send size={16} /> {status === "sending" ? "Sending..." : "Send Message"}</button>{status === "sent" && <p className="text-sm font-bold text-[#1f6044]">Message sent. Thank you, we will get back to you soon.</p>}{status === "error" && <p className="text-sm font-bold text-red-600">Could not send the message. Please try again or email us directly.</p>}</form></div></div></section>;
}
