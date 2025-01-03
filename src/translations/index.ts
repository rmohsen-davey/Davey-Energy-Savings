export type Language = 'fr' | 'en' | 'es' | 'it' | 'pt';

export const translations = {
  fr: {
    title: "Calculateur d'Économie d'Énergie",
    subtitle: "Calculez vos économies en passant à une pompe à vitesse variable",
    pumpType: "Type de calculateur",
    kwhPrice: "Prix du kWh (€)",
    poolVolume: "Volume de la piscine (m³)",
    pumpPower: "Puissance de la pompe monovitesse (CV)",
    filtrationHours: "Nombre d'heures de filtration par jour",
    seasonDuration: "Durée de la saison",
    months: "mois",
    calculate: "Calculer les économies",
    results: {
      currentConsumption: "Consommation actuelle",
      optimizedConsumption: "Consommation optimisée",
      savings: "Économies",
      reduction: "Réduction",
      recommendedPump: "Pompe recommandée",
      singleSpeedPump: "Pompe monovitesse",
      variableSpeedPump: "Pompe vitesse variable",
      perYear: "par an",
      electricity: "d'électricité"
    },
    footer: [
      "Les résultats sont fournis à titre indicatif uniquement. Ils ne constituent pas une garantie d'économies réelles.",
      "Les calculs sont basés sur le débit maximal que la pompe à vitesse variable peut délivrer à chaque vitesse.",
      "Les résultats excluent les modes spécifiques tels que le mode boost, amorçage, contre-lavage, etc.",
      "Les cycles de filtration supposent que le volume de la piscine est recyclé entre 2.5 et 3 fois par jour (24 heures).",
      "D'autres paramètres externes, comme la température de l'eau, de l'installation hydraulique ou les habitudes d'utilisation, peuvent influencer les consommations réelles."
    ]
  },
  en: {
    title: "Energy Savings Calculator",
    subtitle: "Calculate your savings by switching to a variable speed pump",
    pumpType: "Calculator type",
    kwhPrice: "kWh Price (€)",
    poolVolume: "Pool volume (m³)",
    pumpPower: "Single speed pump power (HP)",
    filtrationHours: "Filtration hours per day",
    seasonDuration: "Season duration",
    months: "months",
    calculate: "Calculate savings",
    results: {
      currentConsumption: "Current consumption",
      optimizedConsumption: "Optimized consumption",
      savings: "Savings",
      reduction: "Reduction",
      recommendedPump: "Recommended pump",
      singleSpeedPump: "Single speed pump",
      variableSpeedPump: "Variable speed pump",
      perYear: "per year",
      electricity: "electricity"
    },
    footer: [
      "Results are provided for information only. They do not constitute a guarantee of actual savings.",
      "Calculations are based on the maximum flow rate that the variable speed pump can deliver at each speed.",
      "Results exclude specific modes such as boost mode, priming, backwashing, etc.",
      "Filtration cycles assume the pool volume is recycled between 2.5 and 3 times per day (24 hours).",
      "Other external parameters, such as water temperature, hydraulic installation or usage habits, may influence actual consumption."
    ]
  },
  es: {
    title: "Calculadora de Ahorro Energético",
    subtitle: "Calcule sus ahorros al cambiar a una bomba de velocidad variable",
    pumpType: "Tipo de calculadora",
    kwhPrice: "Precio del kWh (€)",
    poolVolume: "Volumen de la piscina (m³)",
    pumpPower: "Potencia de la bomba velocidad única (CV)",
    filtrationHours: "Horas de filtración por día",
    seasonDuration: "Duración de la temporada",
    months: "meses",
    calculate: "Calcular ahorros",
    results: {
      currentConsumption: "Consumo actual",
      optimizedConsumption: "Consumo optimizado",
      savings: "Ahorros",
      reduction: "Reducción",
      recommendedPump: "Bomba recomendada",
      singleSpeedPump: "Bomba de velocidad única",
      variableSpeedPump: "Bomba de velocidad variable",
      perYear: "por año",
      electricity: "de electricidad"
    },
    footer: [
      "Los resultados se proporcionan solo con fines informativos. No constituyen una garantía de ahorros reales.",
      "Los cálculos se basan en el caudal máximo que la bomba de velocidad variable puede entregar en cada velocidad.",
      "Los resultados excluyen modos específicos como el modo boost, cebado, contralavado, etc.",
      "Los ciclos de filtración suponen que el volumen de la piscina se recicla entre 2,5 y 3 veces al día (24 horas).",
      "Otros parámetros externos, como la temperatura del agua, la instalación hidráulica o los hábitos de uso, pueden influir en el consumo real."
    ]
  },
  it: {
    title: "Calcolatore di Risparmio Energetico",
    subtitle: "Calcola i tuoi risparmi passando a una pompa a velocità variabile",
    pumpType: "Tipo di calcolatore",
    kwhPrice: "Prezzo del kWh (€)",
    poolVolume: "Volume della piscina (m³)",
    pumpPower: "Potenza della pompa mono-velocità (CV)",
    filtrationHours: "Ore di filtrazione al giorno",
    seasonDuration: "Durata della stagione",
    months: "mesi",
    calculate: "Calcola i risparmi",
    results: {
      currentConsumption: "Consumo attuale",
      optimizedConsumption: "Consumo ottimizzato",
      savings: "Risparmi",
      reduction: "Riduzione",
      recommendedPump: "Pompa consigliata",
      singleSpeedPump: "Pompa mono-velocità",
      variableSpeedPump: "Pompa a velocità variabile",
      perYear: "all'anno",
      electricity: "di elettricità"
    },
    footer: [
      "I risultati sono forniti solo a scopo informativo. Non costituiscono una garanzia di risparmi effettivi.",
      "I calcoli si basano sulla portata massima che la pompa a velocità variabile può fornire a ciascuna velocità.",
      "I risultati escludono modalità specifiche come la modalità boost, adescamento, controlavaggio, ecc.",
      "I cicli di filtrazione suppongono che il volume della piscina venga riciclato tra 2,5 e 3 volte al giorno (24 ore).",
      "Altri parametri esterni, come la temperatura dell'acqua, l'installazione idraulica o le abitudini d'uso, possono influire sul consumo effettivo."
    ]
  },
  pt: {
    title: "Calculadora de Economia de Energia",
    subtitle: "Calcule suas economias ao mudar para uma bomba de velocidade variável",
    pumpType: "Tipo de calculadora",
    kwhPrice: "Preço do kWh (€)",
    poolVolume: "Volume da piscina (m³)",
    pumpPower: "Potência da bomba velocidade única (CV)",
    filtrationHours: "Horas de filtração por dia",
    seasonDuration: "Duração da temporada",
    months: "meses",
    calculate: "Calcular economias",
    results: {
      currentConsumption: "Consumo atual",
      optimizedConsumption: "Consumo otimizado",
      savings: "Economias",
      reduction: "Redução",
      recommendedPump: "Bomba recomendada",
      singleSpeedPump: "Bomba de velocidade única",
      variableSpeedPump: "Bomba de velocidade variável",
      perYear: "por ano",
      electricity: "de eletricidade"
    },
    footer: [
      "Os resultados são fornecidos apenas para fins informativos. Não constituem garantia de economias reais.",
      "Os cálculos são baseados na vazão máxima que a bomba de velocidade variável pode fornecer em cada velocidade.",
      "Os resultados excluem modos específicos como modo boost, escorva, retrolavagem, etc.",
      "Os ciclos de filtração assumem que o volume da piscina é reciclado entre 2,5 e 3 vezes por dia (24 horas).",
      "Outros parâmetros externos, como temperatura da água, instalação hidráulica ou hábitos de uso, podem influenciar o consumo real."
    ]
  }
};