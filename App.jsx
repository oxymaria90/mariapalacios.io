import React from 'react';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Skills from './src/components/Skills';
import Experience from './src/components/Experience';
import Projects from './src/components/Projects';
import Education from './src/components/Education';
import { translations } from './src/i18n';
import './index.css';


function App() {
  const [isLightMode, setIsLightMode] = React.useState(() => (
    window.localStorage.getItem('portfolio-theme') === 'light'
  ));
  const [language, setLanguage] = React.useState(() => (
    window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'es'
  ));
  const copy = translations[language];

  React.useEffect(() => {
    window.localStorage.setItem('portfolio-theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

  React.useEffect(() => {
    window.localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
    document.title = copy.meta.title;
  }, [language]);

  return (
    <div className={`app-shell${isLightMode ? ' light-mode' : ''}`}>
      
      {/* Top Navigation Bar / Quick Links */}
      <nav className="site-nav">
        <div className="nav-inner">
          <div className="brand">
            <img
              src={`${import.meta.env.BASE_URL}1658849637263.jpg`}
              alt={copy.nav.photoAlt}
              className="profile-image"
            />
            <span>María Palacios</span>
          </div>
          <div className="contact-links">
            <a href="mailto:maria1990palacios@gmail.com" className="contact-email">
              maria1990palacios@gmail.com
            </a>
            <a href="tel:+584125499763" className="contact-phone">
              +584125499763
            </a>
            <button
              type="button"
              className="language-toggle"
              aria-label={copy.nav.language}
              title={copy.nav.language}
              onClick={() => setLanguage((currentLanguage) => (currentLanguage === 'es' ? 'en' : 'es'))}
            >
              {language.toUpperCase()}
            </button>
            <button
              type="button"
              className="theme-toggle"
              aria-label={isLightMode ? copy.nav.darkMode : copy.nav.lightMode}
              aria-pressed={isLightMode}
              title={isLightMode ? copy.nav.darkMode : copy.nav.lightMode}
              onClick={() => setIsLightMode((currentMode) => !currentMode)}
            >
              <span aria-hidden="true">{isLightMode ? '☾' : '☀'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="main-content">
        <Hero copy={copy.hero} />
        <About copy={copy.about} />
        <Skills copy={copy.skills} />
        <Experience copy={copy.experience} />
        <Projects copy={copy.projects} />
        <Education copy={copy.education} />
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} María Palacios · {copy.footer.description}</p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="back-to-top"
        >
          {copy.footer.backToTop}
        </button>
      </footer>

    </div>
  );
}

export default App;