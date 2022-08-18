import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosAlphaService {

  constructor() { }

  obtenerCursos() {
    return [
      {id: 1, nombre: 'Angular [experimental]', comision: '32310'},
      {id: 2, nombre: 'Angular [experimental]', comision: '32320'},
      {id: 3, nombre: 'Angular [experimental]', comision: '32330'},
      {id: 4, nombre: 'Angular [experimental]', comision: '32340'}
    ];
  }
}
