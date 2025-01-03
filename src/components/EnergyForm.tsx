import React from 'react';
import { Battery, Home, MapPin, Sun, Zap } from 'lucide-react';
import type { EnergyData } from '../types/energy';

interface EnergyFormProps {
  onSubmit: (data: EnergyData) => void;
}

export default function EnergyForm({ onSubmit }: EnergyFormProps) {
  const [formData, setFormData] = React.useState<EnergyData>({
    consumption: 0,
    housingType: 'house',
    energySource: 'electricity',
    region: '',
    hasSolarPanels: false,
    consumptionUnit: 'kwh'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Battery className="text-green-600" />
        Calculateur d'Économies d'Énergie
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Consommation mensuelle
          </label>
          <div className="flex gap-4">
            <input
              type="number"
              value={formData.consumption}
              onChange={(e) => setFormData({...formData, consumption: Number(e.target.value)})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
            <select
              value={formData.consumptionUnit}
              onChange={(e) => setFormData({...formData, consumptionUnit: e.target.value as 'kwh' | 'euros'})}
              className="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="kwh">kWh</option>
              <option value="euros">€</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
            <Home className="text-gray-600" size={18} />
            Type de logement
          </label>
          <select
            value={formData.housingType}
            onChange={(e) => setFormData({...formData, housingType: e.target.value as 'house' | 'apartment'})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="house">Maison</option>
            <option value="apartment">Appartement</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
            <Zap className="text-yellow-600" size={18} />
            Source d'énergie
          </label>
          <select
            value={formData.energySource}
            onChange={(e) => setFormData({...formData, energySource: e.target.value as 'electricity' | 'gas' | 'both'})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="electricity">Électricité</option>
            <option value="gas">Gaz</option>
            <option value="both">Les deux</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
            <MapPin className="text-red-600" size={18} />
            Région
          </label>
          <input
            type="text"
            value={formData.region}
            onChange={(e) => setFormData({...formData, region: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="solarPanels"
            checked={formData.hasSolarPanels}
            onChange={(e) => setFormData({...formData, hasSolarPanels: e.target.checked})}
            className="rounded border-gray-300 text-green-600 focus:ring-green-500"
          />
          <label htmlFor="solarPanels" className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Sun className="text-yellow-500" size={18} />
            Panneaux solaires installés
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
      >
        Calculer mes économies
      </button>
    </form>
  );
}