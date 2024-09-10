import { Component } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';  // Asegúrate de tener HttpClient importado
import { PersonajeService } from '../personaje.service';  // Importa el servicio


interface Personaje {
  id: number;
  name: string;
  // Agrega aquí otras propiedades según lo que devuelva la API
}

interface ApiResponse {
  response: string;
  "results-for": string;
  results: Personaje[];  // Usamos 'Personaje[]' para ser más específicos
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  personajes: any[] = [];
  error: any;

  public alertButtons = ["Confirmar"];
  public alertInputs = [
    { placeholder: 'Nombre' },
    { placeholder: 'Apellido' },
    {
      placeholder: 'Usuario (max 8 caracteres)',
      attributes: { maxlength: 10 }
    },
    { placeholder: 'Password', type: 'password', attributes: { minLength: 8 } },
    { placeholder: 'Email', type: 'email' },
    { placeholder: 'Calle' },
    { placeholder: 'Numero', type: 'number' },
    { placeholder: 'Localidad' },
    { placeholder: 'Codigo postal' },
    { placeholder: 'Telefono', type: 'number' }
  ];

  nombreSuperHeroe: string = ''; // Variable para almacenar el nombre ingresado

  constructor(
    public proveedor: ProveedorService,
    public httpClient: HttpClient,  // Inyecta HttpClient para las peticiones HTTP
    private personajeService: PersonajeService
  ) {}

  verFicha(personaje: any) {
    this.personajeService.setPersonaje(personaje);  // Guarda el personaje
  }
  // Función que se ejecuta al hacer clic en el botón
  ViewCharacter() {
    if (this.nombreSuperHeroe.trim()) { // Verificamos que se haya ingresado un nombre
      this.LlamarApi(this.nombreSuperHeroe);
    } else {
      console.error('Error: No se ingresó ningún nombre');
    }
  }

  LlamarApi(nombre: string) {
    const endPoint = `search/${nombre}`;
    this.httpClient.get(`${this.api}${this.token}${endPoint}`).subscribe(
      (data: any) => {
        if (data.response === 'success') {
          this.personajes = data.results;
          console.log(this.personajes);
        } else {
          console.error('Error: la respuesta no fue exitosa');
        }
      },
      (error: any) => {
        console.error('Error al obtener los personajes:', error);
      }
    );
  }

  api: string = "https://superheroapi.com/api/";
  token: string = "b2db602f073241ccf79529027610df4d/";
}
