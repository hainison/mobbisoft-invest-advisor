import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from '../autenticacao/usuario/usuario.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$ = this.usuarioService.retornaUsuario();
  isUserPopupOpen = false; // Variável para controlar o estado da janela flutuante

  openUserPopup() {
    this.isUserPopupOpen = true;
  }

  closeUserPopup() {
    this.isUserPopupOpen = false;
  }
  if(user$: any) {
    console.log("user$:", user$);
  }


  @Input()
  voltarPara = "";

  constructor(private usuarioService: UsuarioService, private router: Router) { }
  ngOnInit(): void {
  }

  logout() {
    this.usuarioService.logout();
    this.user$ = of(null);
    this.router.navigate(['']);
  }
}
