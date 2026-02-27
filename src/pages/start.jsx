import { Link } from "react-router-dom";
import me from "../Img/Profile.jpg";

export default function StartPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-14">
      {/* Hero wrapper */}
      <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white">
        {/* Subtle background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-zinc-100 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-zinc-100 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_45%)]" />
        </div>

        <div className="relative grid gap-10 p-7 sm:p-10 md:grid-cols-2 md:items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-medium text-zinc-600">
              Backendutvecklare (.NET) • LIA-sökande
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Jag bygger stabila API:er och gillar tydliga, clean lösningar.
            </h1>

            <p className="mt-4 max-w-prose text-zinc-600">
              Jag studerar backend i C#/.NET och har erfarenhet av JS/TS. Jag
              trivs med struktur, bra flöden och “good enough” som faktiskt blir
              klart.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Se projekt
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Kontakta mig
              </Link>
            </div>

            {/* Highlights */}
            <div className="mt-7 flex flex-wrap gap-2">
              {["C#", ".NET", "API", "SQL", "Swagger", "Github", "Gitlab", "JavaScript", "TypeScript", "React"].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>

          {/* Photo card */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
            <div className="overflow-hidden rounded-xl bg-zinc-100">
              <img
                src={me}
                alt="Porträtt"
                className="h-[320px] w-full object-cover sm:h-[360px]"
                loading="lazy"
              />
            </div>

            <div className="mt-3 flex items-center justify-between px-1">
              <p className="text-sm font-medium text-zinc-900">Natalie</p>
              <p className="text-sm text-zinc-600">Göteborg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Small clean section under hero */}
      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          { title: "Fokus", desc: ".NET, API, databas & tydlig struktur." },
          { title: "Stil", desc: "Clean kod, små steg, stabilt resultat." },
          { title: "Mål", desc: "LIA där jag kan växa och bidra direkt." },
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
    </main>
  );
}