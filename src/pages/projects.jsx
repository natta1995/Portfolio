
import ProjectCard from "../components/ProjectCard";
import projectImage from "../Img/PlaceholderIMG.jpg"; // PLACEHOLDER

const ProjectsPage = () => {
  const projects = [
    {
      title: "Game Tournament API",
      description:
        "ASP.NET Core Web API med EF Core, migrations och full CRUD.",
      image: projectImage,
      tags: ["C#", ".NET", "EF Core", "REST"],
      link: "/projects/game-api",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsiv portfolio byggd med React, Vite och Tailwind.",
      image: projectImage,
      tags: ["React", "Tailwind", "Vite"],
      link: "/projects/portfolio",
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
        Projekt
      </h1>

      <p className="mt-3 text-zinc-600">
        Några projekt jag byggt för att utvecklas och visa mina kunskaper.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
