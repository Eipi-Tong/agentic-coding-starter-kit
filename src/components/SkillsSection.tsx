import skills from "@/data/skills.json";

type SkillsData = typeof skills;

const categoryLabels: Record<keyof SkillsData, string> = {
  languages: "Languages",
  frameworks: "Frameworks & Libraries",
  tools: "Tools",
  cloud: "Cloud & DevOps",
  other: "Other",
};

export function SkillsSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold border-b pb-2 mb-6">Skills</h2>
      <div className="space-y-4">
        {(Object.keys(skills) as Array<keyof SkillsData>).map((category) => (
          <div key={category}>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
              {categoryLabels[category]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills[category].map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
