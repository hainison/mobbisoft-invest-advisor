import { ClasseAtivo } from 'src/app/model/classe-ativo';
import { TipoAtivo } from './../../model/tipo-ativo';
import { TransacaoAtivo } from './../../model/transacao-ativo';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IncluirAtivoService } from './incluir-ativo.service';
import { catchError, of, tap } from 'rxjs';
import { TipoOperacao } from 'src/app/model/tipo-operacao';

@Component({
  selector: 'app-incluir-ativo',
  templateUrl: './incluir-ativo.component.html',
  styleUrls: ['./incluir-ativo.component.scss']
})
export class IncluirAtivoComponent {
  listaClasseAtivo = ClasseAtivo.getClassesDisponiveis();
  listaTipoAtivo = TipoAtivo.getTipoAtivoDisponiveis();
  listaTipoOperacao = TipoOperacao.getTipoOperacaoDisponiveis();

  novoAtivo: TransacaoAtivo = {
    idClasseAtivo: 0,
    idTipoAtivo: 0,
    codigoAtivo: '',
    codigoTipoOperacao: 0,
    nomeCorretora: '',
    quantidadeTransacionada: null,
    valorUnitarioTransacionado: null,
    dataTransacao: new Date()
  };

  constructor(private router: Router, private incluirAtivoService: IncluirAtivoService) { }

  definirClasseAtivo(idTipoAtivo: number) {
    /*Pela minha lógica o tipo de ativo é definido com os seguintes códigos:
     ** Range > 100 - 'Renda Variável'
      ** Range > 200 - 'Renda Fixa'
      ** Range > 300 - 'Fundo de Investimentos'
      ** Range > 400 - 'Previdência Privada'
      ** Range > 500 - 'Criptoativos'
      ** Range > 600 - 'Outros'
    */
    //Pegar o código e fazer um split tenho "zero" como ponto de quebra, o numero que ficar na posição 0 é o tipo a classe de ativo
    const codigoClasseAtivo = idTipoAtivo.toString().split("0")[0];

    this.novoAtivo.idClasseAtivo = codigoClasseAtivo as unknown as number;

  }

  salvarAtivo() {

    this.definirClasseAtivo(this.novoAtivo.idTipoAtivo);

    this.incluirAtivoService.incluirTransacaoAtivo(this.novoAtivo)
      .pipe(
        tap((retorno) => {

          //retornar para a tela de detalhe da classe de ativos
          this.router.navigate(['/detalhe-classe-ativos'], { queryParams: { idClasseAtivo: this.novoAtivo.idClasseAtivo } });

          console.log("retorno incluirAtivoService", retorno);
        }),
        catchError((error) => {
          // Tratar erros
          console.error("incluirAtivoService erro: ", error);
          return of(null); // Retorna um Observable vazio ou um valor padrão
        })
      )
      .subscribe();
  }

  voltarParaHome() {
    this.router.navigate(['/home']); // Navegar para a rota Home (raiz)
  }
}
