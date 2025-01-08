import React from 'react';
import { PUISSANCE_SILENSOR_TABLE, PUISSANCE_STARFLO_TABLE } from '../constants/pumpData';
import { translations, Language } from '../translations';

interface CalculatorFormProps {
  calculateur: 'SILENSOR/SILENSOR VSD' | 'STARFLO/STARFLO-VS';
  prixKwh: number;
  volumePiscine: number;
  puissancePompe: string;
  nombreHeuresFiltration: number;
  dureeSaison: number;
  onPrixKwhChange: (value: number) => void;
  onVolumePiscineChange: (value: number) => void;
  onPuissancePompeChange: (value: string) => void;
  onNombreHeuresFiltrationChange: (value: number) => void;
  onDureeSaisonChange: (value: number) => void;
  onCalculate: () => void;
  language: Language;
}

export default function CalculatorForm({
  calculateur,
  prixKwh,
  volumePiscine,
  puissancePompe,
  nombreHeuresFiltration,
  dureeSaison,
  onPrixKwhChange,
  onVolumePiscineChange,
  onPuissancePompeChange,
  onNombreHeuresFiltrationChange,
  onDureeSaisonChange,
  onCalculate,
  language
}: CalculatorFormProps) {
  const t = translations[language];
  const puissanceTable = calculateur === 'SILENSOR/SILENSOR VSD' 
    ? PUISSANCE_SILENSOR_TABLE 
    : PUISSANCE_STARFLO_TABLE;

  const maxVolume = calculateur === 'SILENSOR/SILENSOR VSD' ? 100 : 110;
  const volumeOptions = Array.from({ length: (maxVolume - 10) / 10 }, (_, i) => (i + 2) * 10);
  const filtrationHoursOptions = Array.from({ length: 17 }, (_, i) => i + 8);
  const seasonDurationOptions = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 sm:col-span-1">
        <label className="text-sm text-gray-600">{t.kwhPrice}</label>
        <div className="mt-1 relative">
          <input
            type="number"
            value={prixKwh}
            onChange={(e) => onPrixKwhChange(Number(e.target.value))}
            step="0.01"
            min="0.10"
            max="1.00"
            className="w-full rounded-xl bg-white/50 backdrop-blur p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 border-none"
          />
          <span className="absolute right-3 top-2 text-gray-400">€</span>
        </div>
      </div>

      <div className="col-span-2 sm:col-span-1">
        <label className="text-sm text-gray-600">{t.poolVolume}</label>
        <select
          value={volumePiscine}
          onChange={(e) => onVolumePiscineChange(Number(e.target.value))}
          className="w-full mt-1 rounded-xl bg-white/50 backdrop-blur p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 border-none"
        >
          {volumeOptions.map(volume => (
            <option key={volume} value={volume}>{volume} m³</option>
          ))}
        </select>
      </div>

      <div className="col-span-2 sm:col-span-1">
        <label className="text-sm text-gray-600">{t.pumpPower}</label>
        <select
          value={puissancePompe}
          onChange={(e) => onPuissancePompeChange(e.target.value)}
          className="w-full mt-1 rounded-xl bg-white/50 backdrop-blur p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 border-none"
        >
          {Object.keys(puissanceTable).map(power => (
            <option key={power} value={power}>{power}</option>
          ))}
        </select>
      </div>

      <div className="col-span-2 sm:col-span-1">
        <label className="text-sm text-gray-600">{t.filtrationHours}</label>
        <select
          value={nombreHeuresFiltration}
          onChange={(e) => onNombreHeuresFiltrationChange(Number(e.target.value))}
          className="w-full mt-1 rounded-xl bg-white/50 backdrop-blur p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 border-none"
        >
          {filtrationHoursOptions.map(hours => (
            <option key={hours} value={hours}>{hours} h</option>
          ))}
        </select>
      </div>

      <div className="col-span-2 sm:col-span-1">
        <label className="text-sm text-gray-600">{t.seasonDuration}</label>
        <select
          value={dureeSaison}
          onChange={(e) => onDureeSaisonChange(Number(e.target.value))}
          className="w-full mt-1 rounded-xl bg-white/50 backdrop-blur p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 border-none"
        >
          {seasonDurationOptions.map(months => (
            <option key={months} value={months}>{months} {t.months}</option>
          ))}
        </select>
      </div>

      <button
        onClick={onCalculate}
        className="col-span-2 bg-[#FACE05] text-gray-900 py-3 px-4 rounded-xl font-medium hover:bg-[#E5B904] transition-colors shadow-lg shadow-[#FACE05]/20"
      >
        {t.calculate}
      </button>
    </div>
  );
}
