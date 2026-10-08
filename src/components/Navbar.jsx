import { useState } from "react";
import { Menu, X } from "lucide-react";
import { projectInfo } from "../data/projectData";

const links = ["about", "domain", "components", "results", "milestones", "team", "documents"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#12382b]/95 text-white shadow-lg shadow-[#12382b]/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          <span className="text-2xl" aria-hidden="true">🍅</span>{projectInfo.title}
        </a>
        <button className="rounded-md p-2 transition hover:bg-white/10 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col border-t border-white/10 bg-[#12382b] px-5 py-3 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
          {links.map((link) => <a key={link} href={`#${link}`} onClick={() => setOpen(false)} className="py-2 text-sm capitalize text-white/75 transition hover:text-[#d6ef75]">{link}</a>)}
        </div>
      </div>
    </nav>
  );
}
