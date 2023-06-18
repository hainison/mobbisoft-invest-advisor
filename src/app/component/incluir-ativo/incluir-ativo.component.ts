import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir-ativo',
  templateUrl: './incluir-ativo.component.html',
  styleUrls: ['./incluir-ativo.component.scss']
})
export class IncluirAtivoComponent {
  tiposAtivo: string[] = ['Renda Variável', 'Renda Fixa', 'Fundos de Investimento', 'Previdência Privada', 'Criptomoedas'];
  operacoes: string[] = ['Compra', 'Venda'];

  novoAtivo = {
    tipoAtivo: '',
    operacao: '',
    corretora: '',
    quantidade: null,
    preco: null,
    codigoAtivo: '',
    data: new Date()
  };

  constructor(private router: Router) { }

  salvarAtivo() {
    // Aqui você pode implementar a lógica para salvar o novo ativo
    console.log(this.novoAtivo);
  }
  voltarParaHome() {
    this.router.navigate(['/home']); // Navegar para a rota Home (raiz)
  }
}
