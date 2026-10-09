import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Domain from "./components/Domain";
import Components from "./components/Components";
import Results from "./components/Results";
import Milestones from "./components/Milestones";
import Team from "./components/Team";
import Documents from "./components/Documents";
import Presentations from "./components/Presentations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return <><Navbar /><main><Hero /><section id="domain"><Domain /></section><section id="components"><Components /></section><section id="results"><Results /></section><section id="milestones"><Milestones /></section><section id="documents"><Documents /></section><section id="presentations"><Presentations /></section><section id="about"><About /><Team /></section><section id="contact"><Contact /></section></main><Footer /></>;
}
