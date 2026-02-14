import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-[#0f0f0f] pt-24">

      {/* Premium Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
