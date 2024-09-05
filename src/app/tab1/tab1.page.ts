import { Attribute, Component } from '@angular/core';
import { ProveedorService } from '../proveedor.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  usuarios: any;


  public alertButtons = ["Confirmar"];
  public alertInputs = [
    {
      placeholder: 'Nombre',
    },
    {
      placeholder: 'Apellido'
    },
    {
      placeholder: 'Usuario (max 8 caracteres)',
      attributes: {
        maxlength: 10,
      },
    },   {
      placeholder: 'Password',
      type:'password',
      atributtes:{
        minLength: 8
      }
    },
    {
      type: 'number',
      placeholder: 'Edad',
      min: 1,
      max: 100,
    },
    {
      placeholder: 'Email',
      type: 'email',
    },
  ];

  constructor(
    public proveedor: ProveedorService

  ) {}

  MostrarConsola(){
    this.alertButtons = ['Action'];
    console.log("hola fitness")
  }
  ngOnInit(){
    this.LlamarApi()
  }
  
  LlamarApi(){
    this.proveedor.ObtenerDatos()
    .subscribe(
      (data) => (this.usuarios= data),
      (data) => (console.log(data))
    )
}
}