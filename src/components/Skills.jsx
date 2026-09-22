import React from 'react';

const skillCategories = [
  {
    title: "Frontend & Web",
    skills: ["React", "React Native", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Zustand", "Zod"]
  },
  {
    title: "Backend & Bases de Datos",
    skills: ["Node.js", "Firebase", "MongoDB", "SQL", "REST APIs"]
  },
  {
    title: "Herramientas & Metodologías",
    skills: ["Git", "VS Code", "Figma", "Jira", "Notion", "Scrum", "Kanban", "Jest", "Cypress"]
  }
];

export default function Skills() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white tracking-tight">Aptitudes Técnicas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, index) => (
          <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 space-y-3">
            <h3 className="font-semibold text-teal-400">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="bg-slate-700 text-slate-200 text-xs px-2.5 py-1 rounded-md">
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