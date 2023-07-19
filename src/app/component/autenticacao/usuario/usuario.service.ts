import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<any>({});

  constructor(private tokenService: TokenService, private http: HttpClient,
  ) {
    if (this.tokenService.possuiToken()) {
      this.recuperaUsuarioLogado();
    }
  }

  private recuperaUsuarioLogado() {
    const token = this.tokenService.retornaToken();

    this.recuperaUser(token).subscribe(response => {
      const user = <any>response.result;
      this.usuarioSubject.next(user as Usuario);
    })

  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string, usuario: Usuario) {
    this.tokenService.salvaToken(token);
    this.recuperaUsuarioLogado();
  }

  logout() {
    this.tokenService.excluiToken();
    this.usuarioSubject.next(null);
    this.usuarioSubject.complete();
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }

  public recuperaUser(token: string): Observable<any> {
    return this.http
      .post('https://parseapi.back4app.com/parse/functions/usuario-logado', {},
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
