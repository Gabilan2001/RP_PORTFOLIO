import { Mail, MapPin, Send } from "lucide-react";
import { contactInfo, projectInfo } from "../data/projectData";

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <section className="bg-[#12382b] px-5 py-24 text-white lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><p className="eyebrow !text-[#d6ef75]">09 / Stay connected</p><h2 className="section-title mt-4 !text-white">Contact <span>Us</span></h2><div className="mt-12 grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div className="rounded-2xl border border-white/10 bg-white/[.07] p-7"><p className="text-lg leading-8 text-white/70">Have a question about the research, the models, or the project archive? Reach the TomatoDoc team through SLIIT Faculty of Computing.</p><div className="mt-8 space-y-5 text-sm"><div className="flex gap-3"><Mail className="mt-0.5 text-[#d6ef75]" size={18} /><div><p className="font-bold text-white">Group email</p><a href={`mailto:${contactInfo.email}`} className="text-white/60 transition hover:text-[#d6ef75]">{contactInfo.email}</a></div></div><div className="flex gap-3"><MapPin className="mt-0.5 text-[#d6ef75]" size={18} /><div><p className="font-bold text-white">Academic home</p><p className="leading-6 text-white/60">{projectInfo.university}<br />{projectInfo.faculty}<br />{contactInfo.department}</p></div></div><div className="border-t border-white/10 pt-5 text-white/60">Group code <span className="font-mono text-[#d6ef75]">{projectInfo.groupCode}</span></div></div></div><form className="grid gap-4 rounded-2xl bg-white p-7 text-[#1e3027]" onSubmit={handleSubmit}><div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold">Name<input name="name" required className="rounded-lg border border-[#dce4d9] px-4 py-3 font-normal outline-none transition focus:border-[#6b9c52]" placeholder="Your name" /></label><label className="grid gap-2 text-sm font-bold">Email<input name="email" required type="email" className="rounded-lg border border-[#dce4d9] px-4 py-3 font-normal outline-none transition focus:border-[#6b9c52]" placeholder="you@example.com" /></label></div><label className="grid gap-2 text-sm font-bold">Subject<input name="subject" required className="rounded-lg border border-[#dce4d9] px-4 py-3 font-normal outline-none transition focus:border-[#6b9c52]" placeholder="How can we help?" /></label><label className="grid gap-2 text-sm font-bold">Message<textarea name="message" required rows="5" className="resize-y rounded-lg border border-[#dce4d9] px-4 py-3 font-normal outline-none transition focus:border-[#6b9c52]" placeholder="Write your message..." /></label><button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1f6044] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#154d35]"><Send size={16} /> Send Message</button></form></div></div></section>;
}
