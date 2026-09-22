import React from 'react';

export default function Projects({ copy }) {
  return (
    <section className="content-section">
      <h2 className="section-title">{copy.title}</h2>
      <div className="projects-grid">
        {copy.items.map((proj, idx) => (
          <div key={idx} className="content-card project-card">
            <div className="project-copy">
              <div className="project-heading">
                <h3 className="project-title">{proj.title}</h3>
                <span className="project-date">{proj.date}</span>
              </div>
              <p className="project-description">{proj.desc}</p>
            </div>
            <div className="project-stack">
              {proj.stack.map((tech, tIdx) => (
                <span key={tIdx} className="stack-tag">
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