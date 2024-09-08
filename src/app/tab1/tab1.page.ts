import { Attribute, Component } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { AlertButton, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  usuarios: any;
  error:any;

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
      placeholder: 'Email',
      type: 'email',
    },
    {
      placeholder: 'Calle',
    },  
    {
      placeholder: 'Numero',
      type:'number'
    }, 
    {
      placeholder: 'Localidad',
    },   {
      placeholder: 'Codigo postal',
    }, {
      placeholder: 'Telefono',
      type:'number'
    }, 
  ];

  constructor(
    public proveedor: ProveedorService,


  ) {}
  ViewUsers(){
  // esta funcion llama a la funcion LlamarApi y se ejecuta
     this.LlamarApi();
    }
    
    

  LlamarApi(){
    // funcion llamar api accede a provedorService y ejecuta el constructor httpClient que tiene la funcion obtenerDAtos()
    this.proveedor.ObtenerDatos()
      .subscribe(
        (data) => {
          this.usuarios = data; console.log(data)
        },
        (error) => {
          this.error = error.message; console.log(error)
        }
      );
}
}