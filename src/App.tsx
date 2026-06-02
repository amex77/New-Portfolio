import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Approach from "./components/Approach";
import Ecosystem from "./components/Ecosystem";
import About from "./components/About";
import TotalsBar from "./components/TotalsBar";
import CaseStudies from "./components/CaseStudies";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative bg-ink text-paper min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Approach />
        <Ecosystem />
        <About />
        <TotalsBar />
        <CaseStudies />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
