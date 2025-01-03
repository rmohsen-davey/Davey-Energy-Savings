import React, { useState } from 'react';
import { PUISSANCE_SILENSOR_TABLE, PUISSANCE_STARFLO_TABLE } from '../constants/pumpData';
import { calculatePumpSavings } from '../utils/calculations';
import type { CalculationResult } from '../utils/calculations';
import type { Language } from '../translations';
import CalculatorTypeSelector from './CalculatorTypeSelector';
import CalculatorForm from './CalculatorForm';
import ResultsDisplay from './ResultsDisplay';

interface PumpCalculatorProps {
  language: Language;
}

export default function PumpCalculator({ language }: PumpCalculatorProps) {
  const [calculateur, setCalculateur] = useState<'SILENSOR/SILENSOR VSD' | 'STARFLO/STARFLO-VS'>('SILENSOR/SILENSOR VSD');
  const [volumePiscine, setVolumePiscine] = useState(50);
  const [puissancePompe, setPuissancePompe] = useState<string>(Object.keys(PUISSANCE_SILENSOR_TABLE)[0]);
  const [nombreHeuresFiltration, setNombreHeuresFiltration] = useState(10);
  const [dureeSaison, setDureeSaison] = useState(6);
  const [prixKwh, setPrixKwh] = useState(0.23);
  const [results, setResults] = useState<CalculationResult | null>(null);

  const handleCalculate = () => {
    const puissanceTable = calculateur === 'SILENSOR/SILENSOR VSD' 
      ? PUISSANCE_SILENSOR_TABLE 
      : PUISSANCE_STARFLO_TABLE;

    const result = calculatePumpSavings({
      volumePiscine,
      puissanceWatt: puissanceTable[puissancePompe as keyof typeof puissanceTable],
      nombreHeuresFiltration,
      dureeSaisonJours: dureeSaison * 30,
      prixKwh,
      calculateur
    });

    setResults(result);
  };

  return (
    <div className="space-y-6">
      <CalculatorTypeSelector
        value={calculateur}
        onChange={setCalculateur}
      />

      <CalculatorForm
        calculateur={calculateur}
        prixKwh={prixKwh}
        volumePiscine={volumePiscine}
        puissancePompe={puissancePompe}
        nombreHeuresFiltration={nombreHeuresFiltration}
        dureeSaison={dureeSaison}
        onPrixKwhChange={setPrixKwh}
        onVolumePiscineChange={setVolumePiscine}
        onPuissancePompeChange={setPuissancePompe}
        onNombreHeuresFiltrationChange={setNombreHeuresFiltration}
        onDureeSaisonChange={setDureeSaison}
        onCalculate={handleCalculate}
        language={language}
      />

      {results && <ResultsDisplay results={results} language={language} />}
    </div>
  );
}