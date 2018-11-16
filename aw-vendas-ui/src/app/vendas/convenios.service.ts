import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConveniosService {

  private api = 'http://www.criativatecnologia.com.br/api';

  constructor(private http: HttpClient) { }

  listaConvenios(): Observable<any> {
    return this.http.get<any>(`${this.api}/listaconvenios`);
  }
}
