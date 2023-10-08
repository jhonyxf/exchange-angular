import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CambioAtual } from '../models/cambio-atual';
import { CambioDiario } from '../models/cambio-diario';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  private api = environment;

  constructor(private http: HttpClient) {}

  getCurrentExchange(moeda: string): Observable<CambioAtual> {
    return this.http.get<CambioAtual>(
      `${this.api.url}currentExchangeRate?apiKey=${this.api.key}&from_symbol=${moeda}&to_symbol=BRL`
    );
  }

  getDailyExchangeRate(moeda: string): Observable<CambioDiario> {
    return this.http.get<CambioDiario>(
      `${this.api.url}dailyExchangeRate?apiKey=${this.api.key}&from_symbol=${moeda}&to_symbol=BRL`
    );
  }

  get30Cambio(moeda: string): Observable<CambioDiario> {
    return this.getDailyExchangeRate(moeda).pipe(
      map((cambioDiario: CambioDiario) => {
        if (cambioDiario.data && cambioDiario.data.length > 0) {
          const cambios: CambioDiario = {
            success: cambioDiario.success,
            from: cambioDiario.from,
            to: cambioDiario.to,
            lastUpdatedAt: cambioDiario.lastUpdatedAt,
            data: cambioDiario.data.slice(0, 30),
          };
          return cambios;
        } else {
          return cambioDiario;
        }
      })
    );
  }
}
