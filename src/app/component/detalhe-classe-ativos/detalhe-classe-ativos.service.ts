import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TransacaoAtivo } from 'src/app/model/transacao-ativo';

@Injectable({
  providedIn: 'root'
})
export class DetalheClasseAtivosService {
  private apiUrl = 'URL_DA_API'; // Substitua pela URL da sua API

  //constructor(private http: HttpClient) { }

  getAtivosUsuarioPorClasse(idUsuario: number, idClasseAtivo: number): Observable<TransacaoAtivo[]> {

    const ativosMock: TransacaoAtivo[] = [
      {
        idTransacao: 1,
        idClasseAtivo: idClasseAtivo,
        codigoAtivo: 'ABC123',
        codigoTipoOperacao: 1,
        nomeCorretora: 'Corretora X',
        quantidadeTransacionada: 10,
        valorUnitarioTransacionado: 100.50,
        dataTransacao: new Date()
      },
      // Adicione mais objetos de ativo conforme necessário
    ];

    return of(ativosMock); // Retornar um Observable com o valor fixo


    //const url = `${this.apiUrl}/usuarios/${idUsuario}/ativos?classeAtivo=${idClasseAtivo}`;
    //return this.http.get<TransacaoAtivo[]>(url);
  }
}
