import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Curso {
  id: number;
  codigo: string,
  nombre: string,
  codigoProfesor: string,
  codigoClase: string,
}

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: Curso[] = [
    {id: 1, codigo: 'C0001', nombre: 'Angular', codigoProfesor: 'P0001', codigoClase: 'CL001'},
    {id: 2, codigo: 'C0002', nombre: 'ReactJS', codigoProfesor: 'P0002', codigoClase: 'CL002'},
    {id: 3, codigo: 'C0003', nombre: 'Python', codigoProfesor: 'P0003', codigoClase: 'CL003'},
    {id: 4, codigo: 'C0004', nombre: 'JavaScript', codigoProfesor: 'P0004', codigoClase: 'CL004'},
    {id: 5, codigo: 'C0005', nombre: 'NodeJS', codigoProfesor: 'P0005', codigoClase: 'CL005'},
  ];

  cursosObservable: Observable<any>;

  constructor() { 
    this.cursosObservable = new Observable<any>((suscriptor) => {
      suscriptor.next(this.cursos);
    });
  }

  obtenerObservableCursos() {
    return this.cursosObservable;
  }

  filterObservableCursos(cursos: any) {
    let cursosOut = this.cursos;
    if (cursos.length > 0) {
      //console.log('cursos: ', cursos);
      cursosOut = cursos;
      }
    
    return new Observable<any>((suscriptor) => {
      suscriptor.next(cursosOut);
    });
  }

  updateObservableCurso(curso: any) {
    let index = this.cursos.findIndex(alum => alum.id == curso.id);
    this.cursos[index] = curso;

    return new Observable<any>((suscriptor) => {
      suscriptor.next(this.cursos);
    });
  }

  deleteObservableCurso(curso: any) {
    this.cursos = this.cursos.filter(function(alumn) {
      return alumn.id !== curso.id;
    });

    return new Observable<any>((suscriptor) => {
      suscriptor.next(this.cursos);
    });
  }

  addObservableCurso(curso: any) {

    const index_max = this.cursos.length;
        
    if(index_max > 0) {
      const item = this.cursos[index_max - 1];
      //resultado.id = +item.id + 1;
      curso.id = Number(item.id) + 1;
    } else {
      curso.id = 1;
    }

    this.cursos.push(curso);

    return new Observable<any>((suscriptor) => {
      suscriptor.next(this.cursos);
    });
  }

}
