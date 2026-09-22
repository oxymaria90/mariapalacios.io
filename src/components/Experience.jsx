import React from 'react';

export default function Experience({ copy }) {
  return (
    <section className="content-section">
      <h2 className="section-title">{copy.title}</h2>
      <div className="experience-list">
        {copy.items.map((exp, idx) => (
          <div key={idx} className="experience-item">
            <div className="experience-marker"></div>
            <h3 className="experience-role">{exp.role} <span>@ {exp.company}</span></h3>
            <span className="experience-period">{exp.period}</span>
            <p className="experience-description">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}