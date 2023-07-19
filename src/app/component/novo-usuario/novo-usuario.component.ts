import { AutenticacaoService } from './../autenticacao/autenticacao.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { NovoUsuario } from './novo-usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {

  erro: boolean = false;
  mensagem: string = '';
  voltarPara = '/';

  novoUsuario: NovoUsuario = {
    email: '',
    name: '',
    password: ''
  };

  constructor(
    private novoUsuarioService: NovoUsuarioService,
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  salvar() {


    this.novoUsuarioService.cadastrar(this.novoUsuario).subscribe(
      () => {
        this.erro = false;
        this.autenticacaoService.autenticar(this.novoUsuario.email, this.novoUsuario.password).subscribe(
          () => {
            this.router.navigate(['/home']);
          }, (error) => {
            this.erro = true;
            this.mensagem = error.error.error;
            console.log(error);
          });

      },
      (error) => {
        this.erro = true;
        this.mensagem = error.error.error;
        console.log(error);
      }
    );

  }
}
