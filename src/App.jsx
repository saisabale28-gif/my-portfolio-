const projectList = [
  {
    title: "Project One",
    description: "A web application built using React that solves a real-world problem."
  },
  {
    title: "Project Two",
    description: "A full-stack application with authentication and database integration."
  },
  {
    title: "Project Three",
    description: "An interactive UI-focused project showcasing clean component architecture."
  }
]

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      {projectList.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}

    </section>
  )
}

export default Projects
