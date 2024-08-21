import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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

  constructor() {}

  MostrarConsola(){
    this.alertButtons = ['Action'];
    console.log("hola fitness")
  }

}
