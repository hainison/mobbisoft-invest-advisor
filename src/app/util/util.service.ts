import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../component/autenticacao/token.service';


@Injectable({
  providedIn: 'root'
})
export class UtilService {
  userToken = this.tokenService.retornaToken();
  constructor(private tokenService: TokenService) { }

  transformaDataRetornadaApi(dataParm: any): Date {
    return dataParm.iso;
  }

  getApiPath(functionPath: string): string {
    return 'https://parseapi.back4app.com/parse/functions/' + functionPath;
  }

  getHeaderPost(): HttpHeaders {

    console.log("token", this.userToken);

    return new HttpHeaders({
      'X-Parse-Application-Id': 'DAi57xIEX4DCqDTfuPdvIScgHeHIPVhhcnfhk3nI',
      'X-Parse-REST-API-Key': 'LrZY2ikNFDi60Jpaw65I59EW577mH0cDFMrranof',
      'X-Parse-Session-Token': this.userToken,
      'Content-Type': 'application/json'
    })
  }
  getHeaderPostNoToken(): HttpHeaders {
    return new HttpHeaders({
      'X-Parse-Application-Id': 'DAi57xIEX4DCqDTfuPdvIScgHeHIPVhhcnfhk3nI',
      'X-Parse-REST-API-Key': 'LrZY2ikNFDi60Jpaw65I59EW577mH0cDFMrranof',
      'Content-Type': 'application/json'
    })
  }
  /** Recebe uma string no formato 2022-10-12T17:31:08.926Z e
   * transforma em um objeto date (Hora, minuto e segundos são desconsiderados)
   */
  converterStringToDate(dataString: string): Date {

    var d1 = dataString.split('-');
    var ano = d1[0] as unknown as number;
    var indiceMes = d1[1] as unknown as number;

    var diaCompleto = d1[2].split('T');
    var dia = diaCompleto[0] as unknown as number;

    return new Date(ano, indiceMes - 1, dia);
  }

  /** Recebe um Date e retorna uma string no formato ISO 2022-10-30T21:14,
   * para utilização em componente html do tipo datetime-local
  */
  converterDateToStringISO(data: Date): string {
    let dataString: string = "";
    const ano = data.getFullYear();
    const mes = this.pad(data.getMonth() + 1, 2);
    const dia = this.pad(data.getDate(), 2);
    const hora = this.pad(data.getHours(), 2);
    const minuto = this.pad(data.getMinutes(), 2);


    dataString = `${ano}-${mes}-${dia}T${hora}:${minuto}`;

    return dataString;
  }

  /**Funcão responsável por adicionar zeros a esquerda de um numero, retornando string */
  pad(numero: number, size: number): string {
    let num = numero.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }
}
