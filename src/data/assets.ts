// ============================================================
// RUGGED MONITORING — DEMONSTRATION DATA
// All values are conceptual/demonstration only
// ============================================================

export interface AssetData {
  id: string;
  name: string;
  shortName: string;
  health: number;
  parameters: { label: string; value: string }[];
  status: 'normal' | 'attention' | 'critical';
  description: string;
}

export const assetEcosystem: AssetData[] = [
  {
    id: 'transformer',
    name: 'Transformer',
    shortName: 'XFMR',
    health: 94,
    parameters: [
      { label: 'TEMPERATURE', value: '68°C' },
      { label: 'LOAD', value: '73%' },
      { label: 'DGA STATUS', value: 'NORMAL' },
    ],
    status: 'normal',
    description: 'Continuous dissolved gas analysis, thermal monitoring, and load assessment for power transformers.',
  },
  {
    id: 'cable',
    name: 'Power Cable',
    shortName: 'CBL',
    health: 91,
    parameters: [
      { label: 'THERMAL LOAD', value: 'NORMAL' },
      { label: 'PD SIGNAL', value: 'STABLE' },
      { label: 'INSULATION', value: 'GOOD' },
    ],
    status: 'normal',
    description: 'Partial discharge detection, thermal profiling, and insulation condition assessment for power cables.',
  },
  {
    id: 'switchgear',
    name: 'Switchgear',
    shortName: 'SWG',
    health: 88,
    parameters: [
      { label: 'PD LEVEL', value: 'LOW' },
      { label: 'TEMPERATURE', value: '42°C' },
      { label: 'HUMIDITY', value: '38%' },
    ],
    status: 'normal',
    description: 'Partial discharge monitoring, temperature tracking, and environmental condition sensing for switchgear.',
  },
  {
    id: 'circuit-breaker',
    name: 'Circuit Breaker',
    shortName: 'CB',
    health: 96,
    parameters: [
      { label: 'OPERATIONS', value: 'NOMINAL' },
      { label: 'CONTACT WEAR', value: 'LOW' },
      { label: 'TIMING', value: 'NORMAL' },
    ],
    status: 'normal',
    description: 'Operation counting, contact wear assessment, and timing analysis for circuit breakers.',
  },
  {
    id: 'gis',
    name: 'GIS',
    shortName: 'GIS',
    health: 92,
    parameters: [
      { label: 'SF6 PRESSURE', value: 'NORMAL' },
      { label: 'PD ACTIVITY', value: 'STABLE' },
      { label: 'TEMPERATURE', value: '35°C' },
    ],
    status: 'normal',
    description: 'SF6 gas monitoring, partial discharge detection, and thermal assessment for gas-insulated switchgear.',
  },
  {
    id: 'rotating-machine',
    name: 'Rotating Machine',
    shortName: 'ROT',
    health: 89,
    parameters: [
      { label: 'VIBRATION', value: 'NORMAL' },
      { label: 'WINDING TEMP', value: '72°C' },
      { label: 'PD LEVEL', value: 'LOW' },
    ],
    status: 'normal',
    description: 'Vibration analysis, winding temperature, and partial discharge monitoring for generators and motors.',
  },
  {
    id: 'battery',
    name: 'Batteries',
    shortName: 'BAT',
    health: 95,
    parameters: [
      { label: 'VOLTAGE', value: 'STABLE' },
      { label: 'TEMPERATURE', value: '25°C' },
      { label: 'IMPEDANCE', value: 'NORMAL' },
    ],
    status: 'normal',
    description: 'Voltage monitoring, temperature sensing, and impedance tracking for battery systems.',
  },
];

export interface SignalStage {
  number: string;
  label: string;
  sublabel: string;
  description: string;
}

export const signalJourneyStages: SignalStage[] = [
  {
    number: '01',
    label: 'SENSE',
    sublabel: 'IIoT Sensors',
    description: 'Capture critical condition signals from electrical assets in the field.',
  },
  {
    number: '02',
    label: 'CONNECT',
    sublabel: 'Edge Devices',
    description: 'Acquire, process, and communicate asset data from sensor networks.',
  },
  {
    number: '03',
    label: 'UNDERSTAND',
    sublabel: 'RM EYE',
    description: 'Centralized intelligence platform for asset performance management.',
  },
  {
    number: '04',
    label: 'PREDICT',
    sublabel: 'Analytics',
    description: 'Pattern recognition and predictive algorithms for early fault detection.',
  },
  {
    number: '05',
    label: 'ACT',
    sublabel: 'Maintenance Intelligence',
    description: 'Actionable insights that drive informed maintenance decisions.',
  },
];

export interface IndustryData {
  id: string;
  name: string;
  description: string;
  assets: string[];
}

export const industries: IndustryData[] = [
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    description: 'Condition monitoring for critical electrical assets in upstream, midstream, and downstream operations.',
    assets: ['Transformers', 'Switchgear', 'Rotating Machines', 'Cables'],
  },
  {
    id: 'steel-plant',
    name: 'Steel Plant',
    description: 'Reliable monitoring for high-demand electrical infrastructure in steel manufacturing environments.',
    assets: ['Transformers', 'Circuit Breakers', 'Rotating Machines', 'Cables'],
  },
  {
    id: 'solar-farm',
    name: 'Solar Farm',
    description: 'Asset health management for inverter transformers and electrical balance-of-plant systems.',
    assets: ['Transformers', 'Switchgear', 'Cables', 'Batteries'],
  },
  {
    id: 'refinery',
    name: 'Refinery',
    description: 'Continuous monitoring for electrical assets operating in hazardous and high-temperature environments.',
    assets: ['Transformers', 'Switchgear', 'Rotating Machines', 'Circuit Breakers'],
  },
  {
    id: 'wind-farm',
    name: 'Wind Farm',
    description: 'Remote condition monitoring for wind turbine transformers and electrical collection systems.',
    assets: ['Transformers', 'Cables', 'Switchgear', 'Rotating Machines'],
  },
  {
    id: 'data-center',
    name: 'Data Centers',
    description: 'Ensuring uptime and reliability for mission-critical power distribution infrastructure.',
    assets: ['Transformers', 'Switchgear', 'Batteries', 'Circuit Breakers'],
  },
  {
    id: 'ev-charging',
    name: 'EV Charging',
    description: 'Monitoring electrical assets supporting high-power electric vehicle charging networks.',
    assets: ['Transformers', 'Cables', 'Switchgear', 'Batteries'],
  },
  {
    id: 'oem',
    name: 'OEM',
    description: 'Integrated monitoring solutions for original equipment manufacturers of electrical apparatus.',
    assets: ['Transformers', 'Switchgear', 'Rotating Machines', 'Circuit Breakers'],
  },
];

export interface TechLayer {
  id: string;
  label: string;
  sublabel: string;
  description: string;
}

export const technologyLayers: TechLayer[] = [
  {
    id: 'sensors',
    label: 'IIoT SENSORS',
    sublabel: 'FIELD LAYER',
    description: 'Capture critical condition signals directly from electrical assets.',
  },
  {
    id: 'edge',
    label: 'EDGE DEVICES',
    sublabel: 'ACQUISITION LAYER',
    description: 'Acquire, process, and communicate asset data to centralized systems.',
  },
  {
    id: 'rmeye',
    label: 'RM EYE',
    sublabel: 'INTELLIGENCE LAYER',
    description: 'Centralized asset performance management and predictive analytics platform.',
  },
];

export interface MaintenanceLevel {
  id: string;
  label: string;
  description: string;
  level: number;
}

export const maintenanceLevels: MaintenanceLevel[] = [
  {
    id: 'reactive',
    label: 'REACTIVE',
    description: 'Respond after failure occurs.',
    level: 1,
  },
  {
    id: 'condition',
    label: 'CONDITION-BASED',
    description: 'Monitor asset condition continuously.',
    level: 2,
  },
  {
    id: 'predictive',
    label: 'PREDICTIVE',
    description: 'Identify patterns and act earlier.',
    level: 3,
  },
];

// Conceptual trend data for dashboard chart
export const trendData = [
  { time: '00:00', value: 92 },
  { time: '04:00', value: 93 },
  { time: '08:00', value: 91 },
  { time: '12:00', value: 94 },
  { time: '16:00', value: 93 },
  { time: '20:00', value: 95 },
  { time: '24:00', value: 94 },
];

export interface AssetCard {
  id: string;
  name: string;
  description: string;
  parameters: string[];
}

export const assetCards: AssetCard[] = [
  {
    id: 'transformers',
    name: 'Transformers',
    description: 'DGA, thermal, load, and insulation monitoring',
    parameters: ['DGA', 'Temperature', 'Load', 'Oil Quality'],
  },
  {
    id: 'power-cables',
    name: 'Power Cables',
    description: 'Partial discharge and thermal profile monitoring',
    parameters: ['PD Detection', 'Thermal Profile', 'Insulation'],
  },
  {
    id: 'switchgear',
    name: 'Switchgear',
    description: 'PD, temperature, and humidity monitoring',
    parameters: ['PD Level', 'Temperature', 'Humidity'],
  },
  {
    id: 'circuit-breakers',
    name: 'Circuit Breakers',
    description: 'Operation counting and timing analysis',
    parameters: ['Operations', 'Contact Wear', 'Timing'],
  },
  {
    id: 'rotating-machines',
    name: 'Rotating Machines',
    description: 'Vibration, winding, and PD monitoring',
    parameters: ['Vibration', 'Winding Temp', 'PD Level'],
  },
  {
    id: 'batteries',
    name: 'Batteries',
    description: 'Voltage, temperature, and impedance tracking',
    parameters: ['Voltage', 'Temperature', 'Impedance'],
  },
];

export const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];
