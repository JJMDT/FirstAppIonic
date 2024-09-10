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
   api : string = "https://superheroapi.com/api/"
   token: string = "b2db602f073241ccf79529027610df4d/"
   ObtenerDatos(){
   return this.httpClient.get(`${this.api}${this.token}`);


  }
}
