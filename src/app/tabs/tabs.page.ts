import { Component } from '@angular/core';
import { ProveedorService } from '../proveedor.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  //usuarios: any;

  constructor(
    public proveedor: ProveedorService
  ) {}
  // la funcion ngOnInit es de angular, se llama automaticamente cuando inicia la aplicacion
  // cuando se ejecuta el documento en el que este esta funcion, se ejecuta
ngOnInit(){
 // this.LlamarApi()
}

// LlamarApi(){
//   this.proveedor.ObtenerDatos()
//   .subscribe(
//     (data) => (this.usuarios= data),
//     (data) => (console.log(data))
//   )
// }
}
