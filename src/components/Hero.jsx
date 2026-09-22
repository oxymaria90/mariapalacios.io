import React from 'react';

export default function Hero() {
  return (
    <header className="space-y-6 border-b border-slate-800 pb-12">
      <div className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 text-xs font-semibold rounded-full border border-teal-500/20">
        Desarrolladora de Software · Mérida, Venezuela
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
        María Palacios
      </h1>
      <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
        Desarrolladora frontend especializada en crear aplicaciones web y móviles de alto impacto con React, React Native y TypeScript.
      </p>
      <div className="flex flex-wrap gap-4 text-sm text-slate-300 pt-2">
        <a href="mailto:maria1990palacios@gmail.com" className="hover:text-teal-400 transition-colors">
          📧 maria1990palacios@gmail.com
        </a>
        <span>•</span>
        <a href="tel:+584125499763" className="hover:text-teal-400 transition-colors">
          📱 (+58) 412 549 9763
        </a>
      </div>
    </header>
  );
}