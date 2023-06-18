import { UsuarioService } from './usuario/usuario.service';
import { Usuario } from './usuario/usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  autenticar(usuario: String, senha: String): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        'https://parseapi.back4app.com/parse/functions/login',
        {
          email: usuario,
          password: senha,
        },
        {
          observe: 'response',

          headers: new HttpHeaders({
            'X-Parse-Application-Id': 'DAi57xIEX4DCqDTfuPdvIScgHeHIPVhhcnfhk3nI',
            'X-Parse-REST-API-Key': 'LrZY2ikNFDi60Jpaw65I59EW577mH0cDFMrranof',
            'Content-Type': 'application/json'
          })
        },
      )
      .pipe(
        tap((res) => {
          const body = <any>res.body;

          let user = {
            "username": body.result.username,
            "name": body.result.name,
            "email": body.result.email
          } 

          const authToken = body.result.sessionToken ?? '';
          this.usuarioService.salvaToken(authToken, user as Usuario);

        })
      );
  }
}
