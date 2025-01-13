import React from 'react';
import type { CalculationResult } from '../utils/calculations';
import type { Language } from '../translations';
import { translations } from '../translations';
import { Battery, Leaf, Euro, Gauge } from 'lucide-react';

interface ResultsDisplayProps {
  results: CalculationResult;
  language: Language;
}

export default function ResultsDisplay({ results, language }: ResultsDisplayProps) {
  const t = translations[language].results;
  
  const getPumpImage = (modelePompe: string) => {
    switch (modelePompe) {
      case 'SP200BT':
        return '/SP200BT.png';
      case 'SP400BT':
        return '/SP400BT.png';
      case 'DSF250VS':
      case 'DSF420VS':
        return '/Starflovs.png';
      default:
        return '';
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 animate-fade-in">
      <div className="col-span-2 sm:col-span-1 bg-white/90 backdrop-blur p-5 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-center gap-3 mb-3">
          <Gauge className="w-6 h-6 text-blue-600" />
          <h3 className="text-sm font-medium text-gray-700">{t.currentConsumption}</h3>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold text-gray-900">{results.consoActuelle.toFixed(1)} kWh</p>
          <p className="text-sm text-gray-500">{t.singleSpeedPump}</p>
        </div>
      </div>

      <div className="col-span-2 sm:col-span-1 bg-white/90 backdrop-blur p-5 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-center gap-3 mb-3">
          <Battery className="w-6 h-6 text-blue-600" />
          <h3 className="text-sm font-medium text-gray-700">{t.optimizedConsumption}</h3>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold text-gray-900">{results.consoOptimisee.toFixed(1)} kWh</p>
          <p className="text-sm text-gray-500">{t.variableSpeedPump}</p>
        </div>
      </div>

      <div className="col-span-2 sm:col-span-1 bg-white/90 backdrop-blur p-5 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-center gap-3 mb-3">
          <Euro className="w-6 h-6 text-green-600" />
          <h3 className="text-sm font-medium text-gray-700">{t.savings}</h3>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold text-gray-900">{results.economiesEuros.toFixed(0)} €</p>
          <p className="text-sm text-gray-500">{t.perYear}</p>
        </div>
      </div>

      <div className="col-span-2 sm:col-span-1 bg-white/90 backdrop-blur p-5 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-center gap-3 mb-3">
          <Leaf className="w-6 h-6 text-green-600" />
          <h3 className="text-sm font-medium text-gray-700">{t.reduction}</h3>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold text-gray-900">{results.economiesPourcentage.toFixed(0)}%</p>
          <p className="text-sm text-gray-500">{t.electricity}</p>
        </div>
      </div>

      <div className="col-span-2 bg-gradient-to-br from-[#FACE05] to-[#E5B904] p-5 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-all duration-300">
        <h3 className="text-sm font-medium mb-2 text-gray-900">{t.recommendedPump}</h3>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-3xl font-bold text-gray-900">{results.modelePompe}</p>
          </div>
          <div className="w-32 h-32 rounded-xl overflow-hidden bg-white/30 p-2">
            <img 
              src={getPumpImage(results.modelePompe)}
              alt={results.modelePompe}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
