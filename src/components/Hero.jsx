import { ArrowDown, ExternalLink } from "lucide-react";
import { projectInfo } from "../data/projectData";

const stats = [["93.30%", "Leaf Accuracy"], ["93.14%", "Fruit Accuracy"], ["0.737", "mAP Score"], ["76.3%", "Co-occurrence"]];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#12382b] px-5 pb-16 pt-28 text-white lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(214,239,117,0.18),transparent_30%),linear-gradient(135deg,#12382b_0%,#1e6043_55%,#7cae42_140%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#d6ef75]"><span className="h-px w-10 bg-[#d6ef75]" /> Sri Lankan research, 2026</div>
          <div className="mb-6 text-7xl drop-shadow-xl float-animation md:text-8xl" aria-hidden="true">🍅</div>
          <h1 className="max-w-3xl text-6xl font-black tracking-[-0.05em] text-white md:text-8xl">{projectInfo.title}<span className="text-[#d6ef75]">.</span></h1>
          <p className="mt-5 max-w-xl text-xl font-medium leading-relaxed text-white/85 md:text-2xl">{projectInfo.subtitle}</p>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/60">{projectInfo.tagline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-[#d6ef75]/40 bg-[#d6ef75]/10 px-4 py-2 font-mono text-sm text-[#d6ef75]">{projectInfo.groupCode}</span>
            <span className="text-sm text-white/50">{projectInfo.faculty} · {projectInfo.university}</span>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#results" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#12382b] transition hover:-translate-y-1 hover:bg-[#d6ef75]">View Research <ArrowDown size={17} /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d6ef75]/70 px-6 py-3 text-sm font-bold text-[#d6ef75] transition hover:-translate-y-1 hover:bg-[#d6ef75] hover:text-[#12382b]">GitHub <ExternalLink size={16} /></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 lg:gap-4">
          {stats.map(([value, label], index) => <div key={label} className={`rounded-2xl border p-5 ${index % 2 === 0 ? "border-white/15 bg-white/10" : "border-[#d6ef75]/25 bg-[#d6ef75]/10"}`}><div className="text-3xl font-black tracking-tight text-[#d6ef75]">{value}</div><div className="mt-1 text-xs uppercase tracking-[0.14em] text-white/55">{label}</div></div>)}
        </div>
      </div>
    </section>
  );
}
