import React from 'react';
import { Language } from '../translations';

interface LanguageSelectorProps {
  value: Language;
  onChange: (lang: Language) => void;
}

const languages: { code: Language; label: string }[] = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'pt', label: 'Português' },
  { code: 'de', label: 'Deutsch' },
  { code: 'nl', label: 'Nederlands' }
];

export default function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  return (
    <div className="relative w-full">
  <div className="absolute top-1 right-1 z-50"> {/* Ajoutez un z-index élevé si nécessaire */}
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Language)}
      className="bg-white/50 backdrop-blur-sm border rounded-lg px-3 py-1 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500"
    >
      {languages.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  </div>
</div>

  );
}
