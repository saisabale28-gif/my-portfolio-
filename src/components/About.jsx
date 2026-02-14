function About() {
  return (
<section id="about" className="py-28 px-8">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a Computer Engineering student focused on building modern,
            scalable web applications that solve real-world problems.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I prioritize mastering fundamentals, writing clean architecture,
            and creating products that deliver real value.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {["React", "JavaScript", "Tailwind", "Node.js", "MongoDB", "Git"].map(
            (skill, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl text-center hover:scale-105 transition"
              >
                {skill}
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}

export default About;
