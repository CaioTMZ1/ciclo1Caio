import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArquivoEtapaEntitie } from '../entities/arquivo-etapa.entite';

@Injectable({
  providedIn: 'root'
})
export class ArquivoEtapaService {

  constructor(private httpClient: HttpClient) {}

  public getArquivoEtapas(id: number): Observable<ArquivoEtapaEntitie[]> {
    return this.httpClient.get<ArquivoEtapaEntitie[]>(`http://academico3.rj.senac.br/arquivo/ArquivosEtapa/${id}`);
  }
}
