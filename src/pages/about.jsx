import me from "../Img/Profile.jpg";

export default function AboutPage() {
  const skills = [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Entity Framework Core",
    "SQL",
    "REST API",
    "JavaScript",
    "TypeScript",
    "React",
    "Git",
    "GitHub",
    "HTML",
    "CSS",
    "Tailwind",
    "Vite",
  ];


  return (
    <main className="mx-auto max-w-5xl px-4 py-14">

      {/* Journey / extra text */}
      <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-7 sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-zinc-600">Min resa som junior utvecklare</p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
            Från frontend till backend — med fokus på att förstå helheten.
          </h2>

          <div className="mt-5 space-y-4 text-zinc-600">
            <p>
              Jag tycker om att kombinera det visuella och användarnära med det
              logiska och tekniska bakom kulisserna. Därför känns fullstack som
              ett naturligt och roligt område för mig att växa inom.
            </p>

            <p>
              Det som driver mig mest är att få lösa problem, lära mig nya
              saker och steg för steg bygga upp kunskap som gör att jag kan
              skapa bättre och mer genomtänkta lösningar.
            </p>

            <p>
              Jag vill gärna vara en utvecklare som inte bara skriver kod som
              fungerar, utan som också bryr sig om struktur, kvalitet och
              användbarhet.
            </p>
          </div>
            {/* Small clean section under hero */}
      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          { title: "Fokus", desc: "Att utvecklas som fullstackutvecklare med fokus på C#/.NET och Cloud." },
          { title: "Stil", desc: "Clean kod, små steg, stabilt resultat." },
          { title: "Mål", desc: "Arbeta med problemlösning och skapa användarvänliga lösningar." },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5"
          >
            <p className="text-sm font-medium text-zinc-900">{c.title}</p>
            <p className="mt-2 text-sm text-zinc-600">{c.desc}</p>
          </div>
        ))}
      </section>
      <div className="mt-3 flex items-center justify-between px-1">
             
                <a
              href="https://natta1995.github.io/myCV/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-600 hover:underline"
            >
              Öppna CV i nytt fönster
            </a>
            </div>
        </div>
      </section>
       

    </main>
  );
}