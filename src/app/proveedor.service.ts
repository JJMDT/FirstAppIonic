import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(
    public httpClient: HttpClient 
  ) {
    //console.log("hola proveedor")

   }
   // Estamos llamando a la variable de clase httpClient que creamos en el constructor la cual importamos de angular
   // hacemos un get a la api
   ObtenerDatos(){
   return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    // forzando el error, poniendo una web que no exista  ↓ 
    //return this.httpClient.get('https://jsonplaceholder.typicode.com/usersss');
  }
}
