import projects from "@/data/projects.json";

export function ProjectsSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold border-b pb-2 mb-6">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, i) => (
          <div key={i}>
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-lg">{project.name}</h3>
              <div className="flex gap-2 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
            <p className="text-gray-700 mt-1">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.highlights.length > 0 && (
              <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700 text-sm">
                {project.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
