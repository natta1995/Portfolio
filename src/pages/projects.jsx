import ProjectCard from "../components/ProjectCard";
import projects from "../Data/projektData";


const ProjectsPage = () => {
  

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
        Projekt
      </h1> */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
