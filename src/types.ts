export type CaseStage = 'Summons' | 'Evidence' | 'Arguments' | 'Orders' | 'Judgment' | 'Pleading' | 'Stay Vac.' | 'Stay Order';

export interface Case {
  id: string;
  cnr: string;
  lan: string;
  parties: string;
  partiesDetail?: string;
  court: string;
  jurisdiction: string;
  stage: CaseStage;
  dpd: number; // Days past deadline
  nextHearing: string;
  lawyer: string;
  caseType?: string;
  status?: 'Active' | 'Disposed';
}

export interface Metric {
  label: string;
  value: string | number;
  trend?: string;
  subtext?: string;
  type: 'primary' | 'secondary' | 'error' | 'warning';
}

export interface ActionRequiredItem {
  id: string;
  cnr: string;
  title: string;
  description: string;
  severity: 'Urgent' | 'Warning' | 'Information';
}
