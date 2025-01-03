// Tableaux de référence pour les puissances des pompes
export const PUISSANCE_SILENSOR_TABLE = {
  "3/4 CV": 860,
  "1 CV": 1130,
  "1.5 CV": 1400,
  "2 CV": 1760
} as const;

export const PUISSANCE_STARFLO_TABLE = {
  "0.5 CV": 550,
  "0.75 CV": 750,
  "1 CV": 870,
  "1.2 CV": 1100,
  "2 CV": 1650
} as const;

// Consommation optimisée pour chaque volume
export const CONSOMMATION_SILENSOR_OPTIMISEE: Record<number, number> = {
  20: 3072, 30: 3072, 40: 3862, 50: 3783, 60: 4213, 70: 4528,
  80: 4465, 90: 4990, 100: 5950, 110: 6224, 120: 7192
};

export const CONSOMMATION_STARFLO_OPTIMISEE: Record<number, number> = {
  20: 2700, 30: 3000, 40: 3000, 50: 3320, 60: 4600, 70: 5160,
  80: 5160, 90: 5160, 100: 7260, 110: 7680, 120: 8420
};