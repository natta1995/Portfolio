

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/60 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-zinc-900">Kontakt</p>
          
              <p className="mt-1 text-sm text-zinc-600">
              Du når mig lättast via mejl eller LinkedIn.
            </p>
            
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a
              className="text-zinc-700 hover:text-zinc-900"
            >
              natalie.hallerdal@yahoo.se
            </a>
            <div className="flex gap-4 text-zinc-600">
         
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