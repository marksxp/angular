import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor() { }

  obtenerAlumno() {
    return [
      {id: 1, nombre: 'Abner', apellido: 'Garcia'},
      {id: 2, nombre: 'Jorge', apellido: 'Suarez'}
    ];
  }

}
