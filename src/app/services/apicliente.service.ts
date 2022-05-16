import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response'
import { Cliente } from '../models/cliente';


/* 
Propiedad para mandar encabezado JSon Post
*/
const httpOption = {
  headers: new HttpHeaders ({
    'Contend-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})

export class ApiclienteService {

  url: string ="https://localhost:44342/api/Cliente";

  constructor(
    private _http: HttpClient
  ) { }


/*Get*/
getClientes(): Observable<Response>{
  return this._http.get<Response>(this.url);

}

/*Post*/
add(cliente: Cliente):Observable<Response>{
  return this._http.post<Response>(this.url, cliente, httpOption);
}

/*Put*/
edit(cliente: Cliente):Observable<Response>{
  return this._http.put<Response>(this.url, cliente, httpOption);
}

/*Delete*/

delete(id: number): Observable<Response> {
  return this._http.delete<Response>(`${this.url}/${id}`); /*comillas Alt96*/
}


}
