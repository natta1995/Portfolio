
import ProjectCard from "../components/ProjectCard";
import DearFriendsImage from "../Img/dear.png";
import DetectivTrackerImage from "../Img/DetectivTracker.png";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Socialt Nätverk - DearFriends",
      description:
        "Fullstack applikation - Inspirerad av Facebook.",
      longText:"I applikationen kan du:",
      list: [
        "Skapa och ta bort konto",
        "Logga in och logga ut",
        "Uppdatera personlig information på profilsidan",
        "Se alla egna inlägg",
        "Besöka andra användares profiler",
        "Skicka och ta emot vänförfrågningar",
        "Skapa inlägg med bilder",
        "Gilla och kommentera inlägg",
        "Söka efter andra användare och få vännerförslag",
  ],
      image: DearFriendsImage,
      tags: ["Node.js", "React", "Express.js", "TypeScript", "SQL"],
        links: [
      { label: "Frontend repo", href: "https://github.com/dittnamn/frontend" },
      { label: "Backend repo", href: "https://github.com/dittnamn/backend" },
    ],
    },
    {
      title: "Konsoll Application - TheDetectiveQuestTracker",
      description:
        "Ett textbaserat spel där tar tar rollen som en detektiv som löser mysterier i ett London 1936.",
      longText:"I applikationen kan du:",
      list: [
        
      "Förflytta sig mellan olika miljöer via menyval",
      "Ta sig an nya brottsfall med varierande svårighetsgrad",
      "Undersöka brottsplatser för att samla ledtrådar",
      "Intervjua misstänkta och analysera deras utsagor",
      "Anklaga en misstänkt baserat på insamlad information",
      "Hantera tidsbegränsade fall med olika akutnivåer",
      "Få varning via meddelande när tiden håller på att rinna ut",
      "Riskera att olösta fall försvinner",
      "Se felaktigt lösta fall tas över av Scotland Yard",
      "Ringa Scotland Yard för att få nya fall",
      "Kalla på butlern för vägledning och tips",
      "Navigera spelet genom en loop-baserad spelcykel"
],
  
      image: DetectivTrackerImage,
      tags: [".Net", "C#"],
        links: [
      { label: "Github repo", href: "https://github.com/natta1995/TheDetectiveQuestTracker"},
    ],
    },

  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
        Projekt
      </h1>

      <p className="mt-3 text-zinc-600">
        Projekt jag byggt för att lära mig mer och utmana mig själv.
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
