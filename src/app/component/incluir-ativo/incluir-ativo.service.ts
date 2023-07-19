import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransacaoAtivo } from 'src/app/model/transacao-ativo';
import { Observable } from 'rxjs';
import { UtilService } from 'src/app/util/util.service';

@Injectable({
  providedIn: 'root'
})
export class IncluirAtivoService {

  constructor(private http: HttpClient, private utilService: UtilService) { }

  public incluirTransacaoAtivo(transacaoAtivo: TransacaoAtivo): Observable<any> {
    return this.http
      .post<TransacaoAtivo>
      (this.utilService.getApiPath('incluir-transacoes-ativo'),
        transacaoAtivo,
        { headers: this.utilService.getHeaderPost() }
      )
  }
}
