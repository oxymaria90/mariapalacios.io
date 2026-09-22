import React from 'react';

export default function Skills({ copy }) {
  return (
    <section className="content-section">
      <h2 className="section-title">{copy.title}</h2>
      <div className="skills-grid">
        {copy.categories.map((cat, index) => (
          <div key={index} className="content-card skill-card">
            <h3 className="card-title">{cat.title}</h3>
            <div className="skill-list">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag">
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