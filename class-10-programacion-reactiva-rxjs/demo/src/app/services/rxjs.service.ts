import { Injectable } from '@angular/core';
import { from, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  profesores: any[] = [
    {id: 1, nombre: 'Abner', curso: 'Angular'},
    {id: 2, nombre: 'Fran', curso: 'ReactJS'},
    {id: 3, nombre: 'Annres', curso: 'NodeJS'},
  ];

  profesoresObservable: Observable<any>;

  cursos: any[] = [];
  cursosSubject: Subject<any> = new Subject();

  alumnos: any = [
    {id: 1, nombre: 'Roman', curso: 'Angular1'},
    {id: 2, nombre: 'Abner', curso: 'Angular'},
    {id: 3, nombre: 'Jorge', curso: 'Angular3'},
    {id: 4, nombre: 'Fran', curso: 'Angular'},
    {id: 5, nombre: 'Lautaro', curso: 'Angular5'}
  ];

  constructor() {
    this.profesoresObservable = new Observable<any>((suscriptor) => {
      suscriptor.next(this.profesores);

      setTimeout(() => {
        this.profesores.push({id: 4, nombre: 'Roman', curso: 'kotlin'});
        suscriptor.next(this.profesores);
      }, 3000)

    });

    this.cursosSubject = new Subject();
   }

  obtenerPromiseProfesores() {
    return new Promise((resolve, reject) => {
      if (this.profesores.length > 0) {
        resolve(this.profesores);
      } else {
        reject({
          codigo: 0,
          mensaje: 'No hay profesores en este arreglo'
        });
      }
    });
  }

  obtenerObservableProfesores() {
    return this.profesoresObservable;
  }

  agregarNuevoProfesor(profesor: any) {
    this.profesores.push(profesor);
    console.log(this.profesores);
  }

  obtenerSubjectCursos() {
    return this.cursosSubject.asObservable();
  }

  agregarNuevoCurso(curso: any) {
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
    console.log(this.cursos);
  }

  obtenerObservableAlumnos() {
    return of(this.alumnos); // emite solo una vez el arreglo
    //return from(this.alumnos); // un evento por cada item
  }
}
