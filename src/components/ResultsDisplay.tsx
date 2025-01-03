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
  
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 sm:col-span-1 bg-white/80 backdrop-blur p-4 rounded-2xl shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <Gauge className="w-5 h-5 text-blue-600" />
          <h3 className="text-sm font-medium text-gray-600">{t.currentConsumption}</h3>
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-semibold text-gray-900">{results.consoActuelle.toFixed(1)} kWh</p>
          <p className="text-sm text-gray-500">{t.singleSpeedPump}</p>
        </div>
      </div>

      <div className="col-span-2 sm:col-span-1 bg-white/80 backdrop-blur p-4 rounded-2xl shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <Battery className="w-5 h-5 text-green-600" />
          <h3 className="text-sm font-medium text-gray-600">{t.optimizedConsumption}</h3>
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-semibold text-gray-900">{results.consoOptimisee.toFixed(1)} kWh</p>
          <p className="text-sm text-gray-500">{t.variableSpeedPump}</p>
        </div>
      </div>

      <div className="col-span-2 sm:col-span-1 bg-white/80 backdrop-blur p-4 rounded-2xl shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <Euro className="w-5 h-5 text-blue-600" />
          <h3 className="text-sm font-medium text-gray-600">{t.savings}</h3>
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-semibold text-gray-900">{results.economiesEuros.toFixed(0)} €</p>
          <p className="text-sm text-gray-500">{t.perYear}</p>
        </div>
      </div>

      <div className="col-span-2 sm:col-span-1 bg-white/80 backdrop-blur p-4 rounded-2xl shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <Leaf className="w-5 h-5 text-green-600" />
          <h3 className="text-sm font-medium text-gray-600">{t.reduction}</h3>
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-semibold text-gray-900">{results.economiesPourcentage.toFixed(0)}%</p>
          <p className="text-sm text-gray-500">{t.electricity}</p>
        </div>
      </div>

      <div className="col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg text-white">
        <h3 className="text-sm font-medium mb-2">{t.recommendedPump}</h3>
        <p className="text-2xl font-semibold">{results.modelePompe}</p>
      </div>
    </div>
  );
}