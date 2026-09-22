import React from 'react';

export default function Hero({ copy }) {
  return (
    <header className="hero-section">
      <div className="availability-badge">
        <span className="availability-dot"></span>
        {copy.availability}
      </div>

      <h1 className="hero-title">
        {copy.title}
      </h1>

      <div className="hero-subtitle">
        {copy.subtitle}
      </div>

      <p className="hero-description">
        {copy.description} <strong>React, React Native y TypeScript</strong>{copy.descriptionEnd}
      </p>

      {/* Action Links / Pills */}
      <div className="hero-actions">
        <a 
          href="mailto:maria1990palacios@gmail.com" 
          className="button button-primary"
        >
          📧 {copy.email}
        </a>
        <a 
          href={`https://wa.me/584125499763?text=${encodeURIComponent(copy.whatsappMessage)}`}
          target="_blank" 
          rel="noopener noreferrer" 
          className="button button-secondary"
        >
          💬 {copy.whatsapp}
        </a>
        <a
          href={`${import.meta.env.BASE_URL}cv.html`}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-secondary"
        >
          ↗ {copy.cv}
        </a>
      </div>

      <div className="hero-profile-panel">
        <img src={`${import.meta.env.BASE_URL}1658849637263.jpg`} alt={copy.photoAlt} className="hero-profile-image" />
        <div>
          <strong>{copy.profileTitle}</strong>
          <span>{copy.profileText}</span>
        </div>
      </div>
    </header>
  );
}