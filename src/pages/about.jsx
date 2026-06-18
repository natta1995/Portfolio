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
          

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
           Om mig
          </h2>
          <p className="text-sm font-medium text-zinc-600"> Från frontend till backend - med fokus på att förstå helheten</p>

          <div className="mt-5 space-y-4 text-zinc-600">
           
            <p>
              Jag heter Natalie och studerar just nu backendutveckling med inriktning Cloud. Innan dess studerade jag frontendutveckling med inriktning på webbsäkerhet, vilket har gett mig ett intresse för både det användarnära och det som händer bakom kulisserna.
            </p>
            <p>
              Det jag tycker mest om med programmering är problemlösningen. Att få bryta ner ett större problem i mindre delar, hitta samband och steg för steg bygga fram en lösning. Det är faktiskt något som följer med mig även utanför programmeringen. När jag inte sitter framför datorn ägnar jag gärna tiden åt sudoku, pussel, gamla deckare, broderi eller virkning. Gemensamt för allt är att jag tycker om mönster, logik och att få lösa problem bit för bit.
            </p>
            <p> 
              En annan sak som lockar mig med utveckling är samarbetet. Jag tycker om att höra hur andra angriper samma problem, eftersom olika perspektiv ofta leder till bättre lösningar och nya sätt att tänka.
            </p>
            <p>
              Det finns ett ordspråk som jag tycker passar bra in på utveckling: "Vill du gå fort, gå ensam. Vill du gå långt, gå tillsammans." För mig handlar programmering inte bara om kod, utan också om att lära av andra, dela kunskap och bygga bra lösningar tillsammans.
            </p>
          </div>
            {/* Small clean section under hero */}
      {/* <section className="mt-10 grid gap-4 sm:grid-cols-3">
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
      </section> */}
      {/* <div className="mt-3 flex items-center justify-between px-1">
             
                <a
              href="https://natta1995.github.io/myCV/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-600 hover:underline"
            >
              Öppna CV i nytt fönster
            </a>
            </div> */}
        </div>
      </section>
       

    </main>
  );
}