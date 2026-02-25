export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/60 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-zinc-900">Kontakt</p>
            <p className="mt-1 text-sm text-zinc-600">
              Hör gärna av dig – jag svarar så fort jag kan.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a
              className="text-zinc-700 hover:text-zinc-900"
              href="mailto:dinmail@exempel.com"
            >
              dinmail@exempel.com
            </a>
            <div className="flex gap-4 text-zinc-600">
              <a className="hover:text-zinc-900" href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a className="hover:text-zinc-900" href="#" aria-label="GitHub">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-zinc-500">
          © {year} Natalie Hällerdal
        </div>
      </div>
    </footer>
  );
}