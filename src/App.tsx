import React, { useState } from 'react';
import PumpCalculator from './components/PumpCalculator';
import LanguageSelector from './components/LanguageSelector';
import { translations, Language } from './translations';
import { Waves } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const t = translations[language];

  return (
    <div 
      className="min-h-screen relative bg-fixed bg-contain bg-center sm:bg-fixed sm:bg-contain sm:bg-center"
      style={{
        backgroundImage: 'url("/davey-background.png")',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/10"></div>
      
      <LanguageSelector value={language} onChange={setLanguage} />
      
      <div className="relative max-w-lg mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl mb-4">
            <Waves className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {t.title}
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {t.subtitle}
          </p>
        </header>

        <main>
          <PumpCalculator language={language} />
        </main>

        <footer className="mt-8 space-y-2 bg-white/50 backdrop-blur-sm rounded-xl p-4">
          {t.footer.map((note, index) => (
            <p key={index} className="text-xs text-gray-600">
              * {note}
            </p>
          ))}
        </footer>
      </div>
    </div>
  );
}

export default App;
