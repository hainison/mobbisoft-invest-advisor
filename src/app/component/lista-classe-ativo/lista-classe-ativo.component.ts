import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ListaClasseAtivoService } from './lista-classe-ativo.service';
import { AtivosSumarizadoClasse } from 'src/app/model/ativos-sumarizado-classe';

@Component({
  selector: 'app-lista-classe-ativo',
  templateUrl: './lista-classe-ativo.component.html',
  styleUrls: ['./lista-classe-ativo.component.scss']
})
export class ListaClasseAtivoComponent {
  ativosSumarizado: AtivosSumarizadoClasse[] = [];
  constructor(private router: Router, private listaClasseAtivoService: ListaClasseAtivoService) { }

  ngOnInit(): void {
    this.ativosSumarizado = this.montarListaClasseAtivos();
  }
  montarListaClasseAtivos(): AtivosSumarizadoClasse[] {
    return this.listaClasseAtivoService.getAtivosSumarizadosPorClasse();
  }

  verDetalhes(classe: AtivosSumarizadoClasse): void {
    this.router.navigate(['/detalhe-classe-ativos'], { queryParams: { idClasseAtivo: classe.idClasseAtivo } });
  }
}
