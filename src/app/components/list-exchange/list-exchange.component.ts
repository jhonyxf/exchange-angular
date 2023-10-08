import { Component, Input } from '@angular/core';
import { Cambio, CambioDiario } from 'src/app/shared/models/cambio-diario';
import { ExchangeService } from 'src/app/shared/services/exchange.service';

@Component({
  selector: 'app-list-exchange',
  templateUrl: './list-exchange.component.html',
  styleUrls: ['./list-exchange.component.scss'],
})
export class ListExchangeComponent {
  @Input()
  tipoMoeda!: string;

  cambioDiario?: CambioDiario;

  painelAberto = false;

  constructor(private exchangeService: ExchangeService) {}

  resultadoCambio() {
    this.painelAberto = !this.painelAberto;
    if (this.painelAberto) {
      this.exchangeService.get30Cambio(this.tipoMoeda).subscribe({
        next: (cambioDiario: CambioDiario) => {
          if (cambioDiario.success) {
            this.calcularVariacaoPercentual(cambioDiario);
            this.cambioDiario = cambioDiario;
          } else {
            console.error('Erro ao buscar dados da API');
          }
        },
        error: () => {
          console.error('Não encontrado');
        },
      });
    }
  }

  calcularVariacaoPercentual(cambioDiario: CambioDiario): void {
    const data = cambioDiario.data;
    let cambioAnterior: Cambio | null = null;

    if (data) {
      // Calcular a variação percentual para cada elemento de dados
      data.forEach((cambio, index) => {
        if (cambioAnterior) {
          cambio.percent =
            ((cambio.close - cambioAnterior.close) / cambioAnterior.close) *
            100;
        } else {
          cambio.percent = 0; // Primeiro elemento, variação é zero.
        }

        cambioAnterior = cambio; // Atualizar o câmbio anterior para o próximo cálculo.
      });
    }
  }

  fixarValor(valor: number, casasDecimais: number) {
    return valor.toFixed(casasDecimais);
  }
}
