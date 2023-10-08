import { Component } from '@angular/core';
import { CambioAtual } from 'src/app/shared/models/cambio-atual';
import { ExchangeService } from 'src/app/shared/services/exchange.service';

@Component({
  selector: 'app-form-exchange',
  templateUrl: './form-exchange.component.html',
  styleUrls: ['./form-exchange.component.scss'],
})
export class FormExchangeComponent {
  tipoMoeda!: string;
  cambioAtual!: CambioAtual;
  exibirSpinner = false;
  erro = false;

  constructor(private exchangeService: ExchangeService) {}

  resultadoCambio() {
    this.exibirSpinner = true;
    this.exchangeService.getCurrentExchange(this.tipoMoeda).subscribe({
      next: (cambioAtual: CambioAtual) => {
        if (cambioAtual && cambioAtual.success) {
          this.cambioAtual = {
            success: cambioAtual.success,
            lastUpdatedAt: cambioAtual.lastUpdatedAt,
            fromSymbol: cambioAtual.fromSymbol,
            toSymbol: cambioAtual.toSymbol,
            exchangeRate: cambioAtual.exchangeRate,
          };
        } else {
          this.erro = true;
        }
        this.exibirSpinner = false;
      },
      error: () => {
        console.log('Não encontrado');
      },
    });
  }

  formatarValor(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
  }
}
