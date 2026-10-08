import { Activity, Leaf, LineChart, ScanLine } from "lucide-react";
import { projectInfo } from "../data/projectData";

const features = [
  { icon: Leaf, title: "Nutrient + Fruit Detection", text: "Identify deficiency patterns and fruit disease from a smartphone image.", color: "text-[#4f8b52] bg-[#edf6df]" },
  { icon: ScanLine, title: "Leaf Disease Detection", text: "Spot co-occurring early and late blight symptoms at lesion level.", color: "text-[#9a7c22] bg-[#fff7d7]" },
  { icon: Activity, title: "Treatment Monitoring", text: "Track severity changes over a focused seven-day treatment window.", color: "text-[#39718b] bg-[#e4f3f5]" },
  { icon: LineChart, title: "Price Forecasting", text: "Turn market signals into explainable sell or hold recommendations.", color: "text-[#765c8a] bg-[#f1e9f5]" },
];

export default function About() {
  return <section className="bg-[#fbfaf5] px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-start"><div><p className="eyebrow">01 / The idea</p><h2 className="section-title mt-4">About<br /><span>TomatoDoc</span></h2><div className="mt-8 space-y-5 text-[17px] leading-8 text-[#526159]"><p>{projectInfo.title} is a four-component AI mobile application built for Sri Lankan tomato farmers. It brings diagnosis, treatment tracking, and market intelligence into one accessible workflow.</p><p>The system covers nutrient deficiency detection, fruit disease detection, leaf disease co-occurrence detection, treatment monitoring, and price forecasting - connecting the full crop production cycle in a single research platform.</p></div></div><div className="grid gap-4 sm:grid-cols-2">{features.map(({ icon: Icon, title, text, color }) => <div key={title} className="rounded-2xl border border-[#e7e8dc] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className={`mb-8 flex h-12 w-12 items-center justify-center rounded-xl ${color}`}><Icon size={23} /></div><h3 className="text-lg font-bold text-[#1e3027]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#6d7b71]">{text}</p></div>)}</div></div></div></section>;
}
