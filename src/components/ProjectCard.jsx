import { useState } from "react";
import { XIcon } from "lucide-react";

const ProjectCard = ({ title, description, image, tags, longText }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-zinc-900">
            {title}
          </h3>

          <p className="mt-2 text-sm text-zinc-600">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="mt-6 text-sm font-medium text-zinc-900 hover:underline"
          >
            Läs mer →
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <div className="relative w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl">

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-zinc-500 hover:text-zinc-900"
            >
              <XIcon size={20} />
            </button>

            <h2 className="text-2xl font-semibold text-zinc-900">
              {title}
            </h2>

            <p className="mt-4 text-zinc-600">
              {longText}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;