import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Servicio disponible globalmente
})
export class PersonajeService {
  private personajeSeleccionado: any;  // Aquí se almacena el personaje

  constructor() {}

  setPersonaje(personaje: any) {
    this.personajeSeleccionado = personaje;
  }

  getPersonaje() {
    return this.personajeSeleccionado;
  }
}
