import experience from "@/data/experience.json";

function formatDate(date: string | null): string {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  return new Date(Number(year), Number(month) - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function ExperienceSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold border-b pb-2 mb-6">Experience</h2>
      <div className="space-y-8">
        {experience.map((job, i) => (
          <div key={i}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{job.role}</h3>
                <p className="text-gray-600">{job.company} · {job.location}</p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                {formatDate(job.startDate)} – {formatDate(job.endDate)}
              </span>
            </div>
            <ul className="mt-3 space-y-1 list-disc list-inside text-gray-700">
              {job.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
