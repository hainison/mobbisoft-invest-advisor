import { Injectable } from '@angular/core';
import { AtivosSumarizadoClasse } from 'src/app/model/ativos-sumarizado-classe';
import { TransacaoAtivo } from 'src/app/model/transacao-ativo';
import { ClasseAtivo } from 'src/app/model/classe-ativo';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ListaClasseAtivoService {


  constructor(
    private http: HttpClient,
  ) { }

  ativos: TransacaoAtivo[] = [
    {

      idClasseAtivo: 1,
      idTipoAtivo: 1,
      codigoAtivo: 'ABC123',
      codigoTipoOperacao: 1,
      nomeCorretora: 'Corretora X',
      quantidadeTransacionada: 10,
      valorUnitarioTransacionado: 100.50,
      dataTransacao: new Date()
    },
    {

      idClasseAtivo: 2,
      idTipoAtivo: 2,
      codigoAtivo: 'DEF456',
      codigoTipoOperacao: 2,
      nomeCorretora: 'Corretora Y',
      quantidadeTransacionada: 5,
      valorUnitarioTransacionado: 75.20,
      dataTransacao: new Date()
    },
    {

      idClasseAtivo: 1,
      idTipoAtivo: 1,
      codigoAtivo: 'GHI789',
      codigoTipoOperacao: 1,
      nomeCorretora: 'Corretora X',
      quantidadeTransacionada: 8,
      valorUnitarioTransacionado: 95.75,
      dataTransacao: new Date()
    },
    {

      idClasseAtivo: 3,
      idTipoAtivo: 2,
      codigoAtivo: 'JKL012',
      codigoTipoOperacao: 2,
      nomeCorretora: 'Corretora Z',
      quantidadeTransacionada: 12,
      valorUnitarioTransacionado: 150.35,
      dataTransacao: new Date()
    },

    {

      idClasseAtivo: 1,
      idTipoAtivo: 3,
      codigoAtivo: 'ABC123',
      codigoTipoOperacao: 1,
      nomeCorretora: 'Corretora X',
      quantidadeTransacionada: 10,
      valorUnitarioTransacionado: 100.50,
      dataTransacao: new Date()
    },
    {

      idClasseAtivo: 4,
      idTipoAtivo: 1,
      codigoAtivo: 'DEF456',
      codigoTipoOperacao: 2,
      nomeCorretora: 'Corretora Y',
      quantidadeTransacionada: 5,
      valorUnitarioTransacionado: 75.20,
      dataTransacao: new Date()
    },
    {

      idClasseAtivo: 1,
      idTipoAtivo: 3,
      codigoAtivo: 'GHI789',
      codigoTipoOperacao: 5,
      nomeCorretora: 'Corretora X',
      quantidadeTransacionada: 8,
      valorUnitarioTransacionado: 95.75,
      dataTransacao: new Date()
    },
    {

      idClasseAtivo: 3,
      idTipoAtivo: 1,
      codigoAtivo: 'JKL012',
      codigoTipoOperacao: 24,
      nomeCorretora: 'Corretora Z',
      quantidadeTransacionada: 12,
      valorUnitarioTransacionado: 150.35,
      dataTransacao: new Date()
    },
  ];

  getAtivosSumarizadosPorClasse(): AtivosSumarizadoClasse[] {
    const ativosSumarizados: AtivosSumarizadoClasse[] = [];

    const classesDisponiveis = ClasseAtivo.getClassesDisponiveis();
    const totalAtivos = this.ativos.length; // Obter o número total de ativos

    for (const classe of classesDisponiveis) {
      const ativosPorClasse = this.ativos.filter(ativo => ativo.idClasseAtivo === classe.codigo);
      const quantidade = ativosPorClasse.length;
      const subtotal = ativosPorClasse.reduce((total, ativo) => total + ativo.valorUnitarioTransacionado, 0);
      const percentual = (quantidade / totalAtivos) * 100; // Calcular o percentual relativo ao total de ativos

      ativosSumarizados.push({
        idClasseAtivo: classe.codigo,
        nomeClasse: classe.nome,
        quantidade: quantidade,
        subtotal: subtotal,
        percentual: percentual
      });
    }



    return ativosSumarizados;
  }


  public listarViagens(token: string): Observable<any> {
    return this.http
      .post('https://parseapi.back4app.com/parse/functions/listar-viagens', {},
        {
          headers: new HttpHeaders({
            'X-Parse-Application-Id': 'DAi57xIEX4DCqDTfuPdvIScgHeHIPVhhcnfhk3nI',
            'X-Parse-REST-API-Key': 'LrZY2ikNFDi60Jpaw65I59EW577mH0cDFMrranof',
            'X-Parse-Session-Token': token,
            'Content-Type': 'application/json'
          })
        }
      )
  }
}
