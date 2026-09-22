import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;