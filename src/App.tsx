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
      className="min-h-screen relative bg-fixed bg-cover bg-center sm:bg-cover sm:bg-top"
      style={{
        backgroundImage: 'url("/davey-background.png")',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-transparent via-white/0 to-white/10">
        <LanguageSelector value={language} onChange={setLanguage} />
        
        <div className="relative max-w-lg mx-auto px-4 py-8">
          <header className="text-center mb-8">
            <div className="mb-4">
              <img 
                src="/Davey_logotype_Yellow.png" 
                alt="Davey Logo" 
                className="h-12 mx-auto"
              />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {t.title}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              {t.subtitle}
            </p>
          </header>

          <main className="relative z-20">
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
    </div>
  );
}

export default App;
