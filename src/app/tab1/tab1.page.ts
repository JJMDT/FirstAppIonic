import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public alertButtons = ["Confirm"];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Username (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];

  constructor() {}

  MostrarConsola(){
    this.alertButtons = ['Action'];
    console.log("hola fitness")
  }

}
