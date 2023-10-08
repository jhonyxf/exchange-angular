export interface CambioDiario {
  success: boolean;
  from?: string;
  to?: string;
  lastUpdatedAt?: string;
  data?: Cambio[];
}

export interface Cambio {
  open: number;
  high: number;
  low: number;
  close: number;
  date: string;
  percent: number;
}
