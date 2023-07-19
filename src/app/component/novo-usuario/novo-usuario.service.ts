import { NovoUsuario } from './novo-usuario';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpClient: HttpClient) { }


  cadastrar(novoUsuario: NovoUsuario): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        'https://parseapi.back4app.com/parse/functions/create-user',
        {
          email: novoUsuario.email,
          name: novoUsuario.name,
          password: novoUsuario.password,
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


        })
      );
  }



  verificaUsuarioExistente(nomeUsuario: string) {
    return this.httpClient.get(`http://3000/user/exists/${nomeUsuario}`);
  }
}
