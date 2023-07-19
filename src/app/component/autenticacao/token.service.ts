import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  retornaToken() {
    console.log("retornaToken:", KEY);

    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string) {
    console.log("salvaToken", token);
    localStorage.setItem(KEY, token);
  }

  excluiToken() {
    localStorage.removeItem(KEY);
    console.log("excluiToken:", localStorage);

  }

  possuiToken() {
    const retorno = !!this.retornaToken();
    console.log("possuiToken:", retorno);

    return retorno;
  }
}
