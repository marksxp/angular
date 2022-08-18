import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  alumnos: any = [
    {id: 1, nombre: 'Roman', apellido: 'Garcia', codigoCurso: 'C001', curso: 'NodeJS'},
    {id: 2, nombre: 'Abner', apellido: 'Quintero', codigoCurso: 'C003', curso: 'Angular'},
    {id: 3, nombre: 'Jorge', apellido: 'Zapata', codigoCurso: 'C004', curso: 'Python'},
    {id: 4, nombre: 'Fran', apellido: 'Ledezma', codigoCurso: 'C003', curso: 'Angular'},
    {id: 5, nombre: 'Lautaro', apellido: 'Martinez', codigoCurso: 'C002', curso: 'ReactJS'}
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

  updateObservableAlumnos(alumnos: any) {
    let alumnosOut = this.alumnos;
    if (alumnos.length > 0) {
      //console.log('alumnos: ', alumnos);
      alumnosOut = alumnos;
      }
    
    return new Observable<any>((suscriptor) => {
      suscriptor.next(alumnosOut);
    });
  }
  

}
