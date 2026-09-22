import React from 'react';

const experiences = [
  {
    role: "Desarrollador de front-end",
    company: "ConLuc Corp.",
    period: "Septiembre de 2025 - Presente",
    desc: "Desarrollo frontend enfocado en la aplicación The Coach Legacy."
  },
  {
    role: "Quality Assurance Trainee & Intern",
    company: "Shokworks, Inc.",
    period: "Junio de 2024 - Noviembre de 2024",
    desc: "Realización de pruebas manuales en entornos web y móviles, gestionando flujos con Jira y Notion."
  },
  {
    role: "Frontend Web Developer",
    company: "EstereoCode",
    period: "Diciembre de 2023 - Abril de 2024",
    desc: "Participación en el desarrollo de Crumbs App utilizando React Native, ReactJS, Expo y PWA."
  },
  {
    role: "Desarrollador de front-end",
    company: "Agile Dream Team",
    period: "Marzo de 2023 - Agosto de 2023",
    desc: "Desarrollo de aplicaciones en React.js y ejecución de pruebas automatizadas con Jest y Cypress."
  }
];

export default function Experience() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white tracking-tight">Experiencia Profesional</h2>
      <div className="space-y-4 border-l-2 border-slate-800 pl-6 ml-2">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative space-y-1">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-teal-500 rounded-full border-4 border-slate-900"></div>
            <h3 className="text-base font-semibold text-white">{exp.role} <span className="text-teal-400">@ {exp.company}</span></h3>
            <span className="text-xs text-slate-400 block">{exp.period}</span>
            <p className="text-sm text-slate-300 pt-1">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}