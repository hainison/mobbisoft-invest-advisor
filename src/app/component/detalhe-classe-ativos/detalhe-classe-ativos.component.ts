import { TransacaoAtivo } from './../../model/transacao-ativo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalheClasseAtivosService } from './detalhe-classe-ativos.service';

@Component({
  selector: 'app-detalhe-classe-ativos',
  templateUrl: './detalhe-classe-ativos.component.html',
  styleUrls: ['./detalhe-classe-ativos.component.scss']
})
export class DetalheClasseAtivosComponent implements OnInit {
  listaTransacaoAtivo: TransacaoAtivo[] = [];
  constructor(private route: ActivatedRoute, private detalheClasseAtivosService: DetalheClasseAtivosService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const idClasseAtivo = params['idClasseAtivo'];

      this.consultarAtivosUsuario(0, idClasseAtivo);


    });

  }

  consultarAtivosUsuario(idUsuario: number, idClasseAtivo: number) {
    this.detalheClasseAtivosService.getAtivosUsuarioPorClasse(idUsuario, idClasseAtivo).subscribe(
      ativos => {
        this.listaTransacaoAtivo = ativos;
        // Processar a lista de ativos retornada
        console.log("Ativos", ativos);
      },
      error => {
        // Tratar erros
        console.error("ativos erro: ", error);
      }
    );
  }

}
