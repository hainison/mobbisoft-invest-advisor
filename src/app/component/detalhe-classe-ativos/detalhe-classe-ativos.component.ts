import { TransacaoAtivo } from './../../model/transacao-ativo';
import { TotaisTransacoes } from './totais-transacao';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalheClasseAtivosService } from './detalhe-classe-ativos.service';
import { ClasseAtivo } from 'src/app/model/classe-ativo';
import { TipoAtivo } from 'src/app/model/tipo-ativo';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-detalhe-classe-ativos',
  templateUrl: './detalhe-classe-ativos.component.html',
  styleUrls: ['./detalhe-classe-ativos.component.scss']
})

export class DetalheClasseAtivosComponent implements OnInit {
  ativosCard: any[] = [];
  idClasseAtivo = 0;
  constructor(private activeRoute: ActivatedRoute, private detalheClasseAtivosService: DetalheClasseAtivosService) { }

  ngOnInit(): void {

    this.activeRoute.queryParams.subscribe(params => {
      this.idClasseAtivo = params['idClasseAtivo'];
      this.listarAtivosUsuario(this.idClasseAtivo);
    });
  }

  getNomeClasseAtivo() {
    return ClasseAtivo.getNomeClassePorCodigo(this.idClasseAtivo);
  }

  getNomeTipoAtivo(codigo: number) {
    return TipoAtivo.getNomeTipoAtivoPorCodigo(codigo);
  }

  listarAtivosUsuario(idClasseAtivo: number) {
    this.detalheClasseAtivosService.getAtivosUsuarioPorClasse(idClasseAtivo)
      .pipe(
        tap((ativos) => {
          const listaTransacaoAtivo = ativos.result;

          console.log("ativos: ", listaTransacaoAtivo);

          const resposta = this.calcularTotaisTransacoes(listaTransacaoAtivo);

          this.ativosCard = this.transformarTotais(resposta);



        }),
        catchError((error) => {
          // Tratar erros
          console.error("ativos erro: ", error);
          return of(null); // Retorna um Observable vazio ou um valor padrão
        })
      )
      .subscribe();
  }


  calcularTotaisTransacoes(transacoes: TransacaoAtivo[]): TotaisTransacoes {
    const totais: TotaisTransacoes = {};

    for (const transacao of transacoes) {
      const chave = `${transacao.idClasseAtivo}_${transacao.idTipoAtivo}_${transacao.codigoAtivo}`;

      if (!totais[chave]) {
        totais[chave] = {
          quantidadeTotal: 0,
          valorTotal: 0,
          precoMedio: 0
        };
      }
      if (transacao.codigoTipoOperacao === 1) {
        totais[chave].quantidadeTotal += transacao.quantidadeTransacionada;
        totais[chave].valorTotal += transacao.quantidadeTransacionada * transacao.valorUnitarioTransacionado;
      } else if (transacao.codigoTipoOperacao === 2) {
        totais[chave].quantidadeTotal -= transacao.quantidadeTransacionada;
        totais[chave].valorTotal -= transacao.quantidadeTransacionada * transacao.valorUnitarioTransacionado;
      }

      // Arredonda os valores para 2 casas decimais
      totais[chave].quantidadeTotal = Number(totais[chave].quantidadeTotal.toFixed(2));
      totais[chave].valorTotal = Number(totais[chave].valorTotal.toFixed(2));

      // Calcula o preço médio apenas com base nas compras (códigoTipoOperacao = 1)
      if (totais[chave].quantidadeTotal !== 0 && transacao.codigoTipoOperacao === 1) {
        totais[chave].precoMedio = totais[chave].valorTotal / totais[chave].quantidadeTotal;
      }
    }

    return totais;
  }

  transformarTotais(totais: TotaisTransacoes): any[] {
    const totaisTransformados: any[] = [];

    for (const chave in totais) {
      const [idClasseAtivo, idTipoAtivo, codigoAtivo] = chave.split('_');
      const { quantidadeTotal, valorTotal, precoMedio } = totais[chave];

      totaisTransformados.push({
        idClasseAtivo: Number(idClasseAtivo),
        idTipoAtivo: Number(idTipoAtivo),
        codigoAtivo,
        quantidadeTotal,
        valorTotal,
        precoMedio,

      });
    }

    return totaisTransformados;
  }


}
