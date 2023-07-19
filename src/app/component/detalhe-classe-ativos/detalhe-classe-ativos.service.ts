import { TransacaoAtivo } from './../../model/transacao-ativo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TokenService } from '../autenticacao/token.service';
import { UtilService } from 'src/app/util/util.service';

@Injectable({
  providedIn: 'root'
})
export class DetalheClasseAtivosService {

  constructor(private http: HttpClient, private utilService: UtilService) { }

  public getAtivosUsuarioPorClasse(idClasseAtivo: number): Observable<any> {
    console.log("idClasseAtivo front", idClasseAtivo);

    return this.http.post<TransacaoAtivo[]>
      (this.utilService.getApiPath('listar-transacoes-ativo'),
        { idClasseAtivo },
        { headers: this.utilService.getHeaderPost() }
      )
  }
}
