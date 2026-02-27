import { MailIcon, GithubIcon, LinkedinIcon } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20">
      {/* Rubrik */}
      <section className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Kontakt
        </h1>
        <p className="mt-4 text-zinc-600">
          Vill du prata Jobb, LIA, projekt eller bara säga hej?
          Hör gärna av dig – jag svarar så fort jag kan.
        </p>
      </section>

      {/* Kontaktkort */}
      <section className="mt-14 space-y-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">

        <a
          href="mailto:dinmail@exempel.com"
          className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 transition hover:bg-zinc-50"
        >
          <MailIcon size={20} className="text-zinc-600" />
          <div>
            <p className="text-sm font-medium text-zinc-900">Email</p>
            <p className="text-sm text-zinc-600">natalie.hallerdal@yahoo.se</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/natalie-hällerdal-4b2a9499"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 transition hover:bg-zinc-50"
        >
          <LinkedinIcon size={20} className="text-zinc-600" />
          <div>
            <p className="text-sm font-medium text-zinc-900">LinkedIn</p>
            <p className="text-sm text-zinc-600">
              linkedin.com/in/natalie-hällerdal-4b2a9499
            </p>
          </div>
        </a>

        <a
          href="https://github.com/natta1995"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 transition hover:bg-zinc-50"
        >
          <GithubIcon size={20} className="text-zinc-600" />
          <div>
            <p className="text-sm font-medium text-zinc-900">GitHub</p>
            <p className="text-sm text-zinc-600">
              github.com/natta1995
            </p>
          </div>
        </a>

      </section>
    </main>
  );
};

export default ContactPage;