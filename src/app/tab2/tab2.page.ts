import { Component } from '@angular/core';
import { AlertButton, AlertController } from '@ionic/angular';
import { PersonajeService } from '../personaje.service';  // Importa el servicio


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  personaje: any;

  constructor(
    private alertController: AlertController,
    private personajeService: PersonajeService
  ) {}
  ionViewWillEnter() {
    this.personaje = this.personajeService.getPersonaje();  // Obtén el personaje del servicio
  }
  
async MostrarConsola(){
let alerta= await this.alertController.create({
  header:"Error",
  subHeader:"Debes iniciar sesion antes",
  message:"Error al querer agregar una rutina.",
  buttons:["ok","cancelar"]
})
await alerta.present()
console.log("mostrar click")

}


}
