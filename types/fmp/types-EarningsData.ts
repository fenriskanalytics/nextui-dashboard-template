export interface EarningsData {
  date: string;
  symbol: string;
  eps: number;
  epsEstimated: number;
  revenue: number;
  revenueEstimated: number;
}

export interface AutocompleteItemData {
  symbol: string;
  name: string;
}

export interface ChartDataPoint {
  x: string;
  y: number;
  goals: Goal[];
}

interface Goal {
  name: string;
  value: number;
  strokeHeight: number;
  strokeColor: string;
  strokeWidth?: number;
  strokeDashArray?: number;
  strokeLineCap?: string;
}
