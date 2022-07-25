import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Leonel Mesi';
  familiares = [{
    nombre: 'Leonel',
    apellido: 'Mesi'
  }, {
    nombre: 'Karin',
    apellido: 'Benzema'
  }, {
    nombre: 'Kilian',
    apellido: 'Mbappse'
  }];

  contenido1: string = "Este es el contenido del párrafo 1";
  contenido2: string = "Este es el contenido del párrafo 2";
}
