function Projects() {
  const projects = [
    {
      title: "AI Chatbot Assistant",
      desc: "Conversational AI chatbot built using OpenAI API with real-time responses and clean UI.",
    },
    {
      title: "E-Commerce Platform",
      desc: "Full-stack web application with cart system, authentication and payment integration.",
    },
    {
      title: "Task Management System",
      desc: "Productivity app for tracking tasks, deadlines and progress with clean dashboard UI.",
    },
    {
      title: "Blog Platform",
      desc: "Dynamic blog system with user authentication and content management features.",
    },
    {
      title: "Weather Application",
      desc: "Real-time weather forecasting app using external API integration.",
    },
    {
      title: "Expense Tracker",
      desc: "Finance tracking application for managing income and expenses with analytics.",
    },
  ];

  return (
    <section id="projects" className="py-28 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-8 rounded-xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
