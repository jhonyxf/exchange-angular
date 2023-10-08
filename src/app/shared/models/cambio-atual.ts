export interface CambioAtual {
  success: boolean;
  lastUpdatedAt?: string;
  fromSymbol?: string;
  toSymbol?: string;
  exchangeRate?: number;
}
