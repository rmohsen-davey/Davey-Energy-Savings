import React from 'react';

type CalculatorType = 'SILENSOR/SILENSOR VSD' | 'STARFLO/STARFLO-VS';

interface CalculatorTypeSelectorProps {
  value: CalculatorType;
  onChange: (type: CalculatorType) => void;
}

export default function CalculatorTypeSelector({ value, onChange }: CalculatorTypeSelectorProps) {
  return (
    <div className="bg-white/30 backdrop-blur-lg p-1 rounded-xl inline-flex">
      <button
        onClick={() => onChange('SILENSOR/SILENSOR VSD')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          value === 'SILENSOR/SILENSOR VSD'
            ? 'bg-white text-blue-600 shadow'
            : 'text-gray-600 hover:bg-white/50'
        }`}
      >
        SILENSOR/SILENSOR VSD
      </button>
      <button
        onClick={() => onChange('STARFLO/STARFLO-VS')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          value === 'STARFLO/STARFLO-VS'
            ? 'bg-white text-blue-600 shadow'
            : 'text-gray-600 hover:bg-white/50'
        }`}
      >
        STARFLO/STARFLO VS
      </button>
    </div>
  );
}