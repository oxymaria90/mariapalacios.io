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
      </div>
    </header>
  );
}