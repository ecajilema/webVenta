import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { Response } from '../models/response';

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
export class ApiproductoService {

  url: string="https://localhost:44342/api/Producto";

  constructor(
    private _http: HttpClient
  ) { }

  /*Get*/

getProductos():Observable<Response>{

  return this._http.get<Response>(this.url);
}

/*Post*/

add(producto: Producto): Observable<Response>{

  return this._http.post<Response>(this.url, producto, httpOption)

}

/*Put*/

edit(producto:Producto):Observable<Response> {
  
  return this._http.put<Response>(this.url, producto, httpOption);

}

/*Delete*/


delete(id:number):Observable<Response> {
  
  return this._http.delete<Response>(`${this.url}/${id}`);

}



}
