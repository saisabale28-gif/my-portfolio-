function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-8">
      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        Building Scalable Web Experiences 🚀
      </h2>

      <p className="text-gray-400 max-w-2xl mb-10 text-lg">
        Computer Engineering student focused on React, clean UI architecture,
        and building projects that actually matter.
      </p>

      <div className="flex gap-6">
        <button
          onClick={() => scrollToSection("projects")}
          className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
        >
          View Projects
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="px-8 py-4 border border-zinc-700 rounded-xl hover:bg-zinc-800 transition"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default Hero;
