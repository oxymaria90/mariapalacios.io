import React from 'react';

export default function Education({ copy }) {
  return (
    <section className="content-section">
      <h2 className="section-title">{copy.title}</h2>
      
      <div className="education-grid">
        {/* Academic Degrees */}
        <div className="content-card education-card">
          <h3 className="card-title card-title-large">{copy.academicTitle}</h3>
          <div className="education-list">
            {copy.degrees.map((edu, idx) => (
              <div key={idx} className="education-item">
                <h4 className="education-degree">{edu.degree}</h4>
                <p className="education-institution">{edu.institution}</p>
                <span className="education-period">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Languages */}
        <div className="content-card education-card">
          <h3 className="card-title card-title-large">{copy.certificationTitle}</h3>
          <ul className="certification-list">
            {copy.certifications.map((cert, idx) => (
              <li key={idx} className="certification-item">
                <span className="certification-marker">▸</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}