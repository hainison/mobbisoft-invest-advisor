import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  valorTotalInvestimentos = 1000;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirecionarParaInclusaoAtivo(): void {
    // Implemente a lógica de redirecionamento para a página de inclusão de novo ativo aqui
    this.router.navigate(['/incluir-ativo']);
  }

}
