import React from 'react';

export default function About({ copy }) {
  return (
    <section className="content-section about-section">
      <div>
        <p className="section-kicker">{copy.kicker}</p>
        <h2 className="section-title">{copy.title}</h2>
      </div>
      <p className="about-description">{copy.description}</p>
    </section>
  );
}