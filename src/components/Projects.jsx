import React from 'react';

const projects = [
  {
    title: "The Coach Legacy",
    date: "Sept. 2025 - Actualidad",
    desc: "Plataforma web de gestión y participación en torneos de fútbol de fantasía. Permite registro de usuarios, creación de equipos, torneos privados/públicos, gestión de presupuestos y compras dentro de la app.",
    stack: ["Node.js", "React.js"]
  },
  {
    title: "Savi Pharma +",
    date: "Oct. 2024 - Actualidad",
    desc: "Aplicación diseñada para farmacias orientada a simplificar y optimizar la gestión de promociones y programas de cashback ofrecidos por laboratorios y marcas.",
    stack: ["React Native", "styled-components"]
  },
  {
    title: "NuroLeap",
    date: "Jul. 2025 - Feb. 2026",
    desc: "Aplicación móvil/web de bienestar y superación personal centrada en visualizaciones guiadas, meditación, aprendizaje, experiencias interactivas y soporte de IA durante las sesiones.",
    stack: ["JavaScript", "TypeScript"]
  },
  {
    title: "Sumate",
    date: "Jul. 2020 - Sept. 2020",
    desc: "Proyecto para el colegio de contadores de la República Dominicana encargado de la realización de encuestas y carga de noticias en versión móvil.",
    stack: ["React Native"]
  }
];

export default function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white tracking-tight">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                <span className="text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded">{proj.date}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{proj.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {proj.stack.map((tech, tIdx) => (
                <span key={tIdx} className="text-xs font-medium text-teal-300 bg-teal-950/50 border border-teal-800/50 px-2 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}