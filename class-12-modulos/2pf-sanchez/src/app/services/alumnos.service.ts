import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Alumno {
  id: number;
  nombre: string,
  apellido: string,
  codigoCurso: string,
}

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnos: Alumno[] = [
    {id: 1, nombre: 'Roman', apellido: 'Garcia', codigoCurso: ''},
    {id: 2, nombre: 'Abner', apellido: 'Quintero', codigoCurso: ''},
    {id: 3, nombre: 'Jorge', apellido: 'Zapata', codigoCurso: ''},
    {id: 4, nombre: 'Franz', apellido: 'Ledezma', codigoCurso: ''},
    {id: 5, nombre: 'Lautaro', apellido: 'Martinez', codigoCurso: ''}
  ];

  alumnosObservable: Observable<any>;

  constructor() { 
    this.alumnosObservable = new Observable<any>((suscriptor) => {
      suscriptor.next(this.alumnos);
    });
  }

  obtenerObservableAlumnos() {
    return this.alumnosObservable;
  }

  filterObservableAlumnos(alumnos: any) {
    let alumnosOut = this.alumnos;
    if (alumnos.length > 0) {
      //console.log('alumnos: ', alumnos);
      alumnosOut = alumnos;
      }
    
    return new Observable<any>((suscriptor) => {
      suscriptor.next(alumnosOut);
    });
  }

  updateObservableAlumno(alumno: any) {
    let index = this.alumnos.findIndex(alum => alum.id == alumno.id);
    this.alumnos[index] = alumno;

    return new Observable<any>((suscriptor) => {
      suscriptor.next(this.alumnos);
    });
  }

  deleteObservableAlumno(alumno: any) {
    this.alumnos = this.alumnos.filter(function(alumn) {
      return alumn.id !== alumno.id;
    });

    return new Observable<any>((suscriptor) => {
      suscriptor.next(this.alumnos);
    });
  }

  addObservableAlumno(alumno: any) {

    const index_max = this.alumnos.length;
        
    if(index_max > 0) {
      const item = this.alumnos[index_max - 1];
      //resultado.id = +item.id + 1;
      alumno.id = Number(item.id) + 1;
    } else {
      alumno.id = 1;
    }

    this.alumnos.push(alumno);

    return new Observable<any>((suscriptor) => {
      suscriptor.next(this.alumnos);
    });
  }

}
