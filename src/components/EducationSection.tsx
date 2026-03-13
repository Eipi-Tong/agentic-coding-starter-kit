import education from "@/data/education.json";

function formatDate(date: string | null): string {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  return new Date(Number(year), Number(month) - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function EducationSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold border-b pb-2 mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div key={i}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{edu.institution}</h3>
                <p className="text-gray-600">
                  {edu.degree} in {edu.field}
                  {edu.gpa && ` · GPA: ${edu.gpa}`}
                </p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
              </span>
            </div>
            {edu.highlights.length > 0 && (
              <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700 text-sm">
                {edu.highlights.map((h, j) => (
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
