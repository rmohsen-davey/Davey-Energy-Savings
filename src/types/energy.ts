export type EnergySource = 'electricity' | 'gas' | 'both';
export type HousingType = 'house' | 'apartment';

export interface EnergyData {
  consumption: number;
  housingType: HousingType;
  energySource: EnergySource;
  region: string;
  hasSolarPanels: boolean;
  consumptionUnit: 'kwh' | 'euros';
}

export interface SavingsResult {
  monthlySavings: number;
  yearlySavings: number;
  co2Reduction: number;
  recommendations: string[];
}