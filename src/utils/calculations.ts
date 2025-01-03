import { CONSOMMATION_SILENSOR_OPTIMISEE, CONSOMMATION_STARFLO_OPTIMISEE } from '../constants/pumpData';

export interface PumpCalculationParams {
  volumePiscine: number;
  puissanceWatt: number;
  nombreHeuresFiltration: number;
  dureeSaisonJours: number;
  prixKwh: number;
  calculateur: 'SILENSOR/SILENSOR VSD' | 'STARFLO/STARFLO-VS';
}

export interface CalculationResult {
  consoActuelle: number;
  consoOptimisee: number;
  economiesPourcentage: number;
  economiesEuros: number;
  modelePompe: string;
}

export const calculatePumpSavings = ({
  volumePiscine,
  puissanceWatt,
  nombreHeuresFiltration,
  dureeSaisonJours,
  prixKwh,
  calculateur
}: PumpCalculationParams): CalculationResult => {
  // Sélection de la consommation optimisée selon le type de pompe
  const consoWattOptimisee = calculateur === 'SILENSOR/SILENSOR VSD'
    ? CONSOMMATION_SILENSOR_OPTIMISEE[volumePiscine]
    : CONSOMMATION_STARFLO_OPTIMISEE[volumePiscine];

  // Calculs de consommation
  const consoActuelle = (puissanceWatt * nombreHeuresFiltration * dureeSaisonJours) / 1000;
  const consoOptimisee = (consoWattOptimisee * dureeSaisonJours) / 1000;
  
  // Calculs d'économies
  const economiesPourcentage = ((consoActuelle - consoOptimisee) / consoActuelle) * 100;
  const economiesEuros = (consoActuelle - consoOptimisee) * prixKwh;

  // Détermination du modèle de pompe recommandé
  let modelePompe: string;
  if (calculateur === 'SILENSOR/SILENSOR VSD') {
    modelePompe = volumePiscine <= 70 ? 'SP200BT' : 'SP400BT';
  } else {
    modelePompe = volumePiscine <= 50 ? 'DSF250VS' : 'DSF420VS';
  }

  return {
    consoActuelle,
    consoOptimisee,
    economiesPourcentage,
    economiesEuros,
    modelePompe
  };
};