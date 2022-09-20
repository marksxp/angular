import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clase } from 'src/app/models/clase';

/*export interface Clase {
  id: number;
  codigo: string,
  nombre: string,
  temas: string,
}*/

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  clases: Clase[] = [
    {id: 1, codigo: 'CL001', nombre: 'CL-Angular', temas: '1.1.tema; 1.2.tema; 1.3.tema'},
    {id: 2, codigo: 'CL002', nombre: 'CL-ReactJS', temas: '2.1.tema; 2.2.tema; 2.3.tema'},
    {id: 3, codigo: 'CL003', nombre: 'CL-Python', temas: '3.1.tema; 3.2.tema; 3.3.tema'},
    {id: 4, codigo: 'CL004', nombre: 'CL-JavaScript', temas: '4.1.tema; 4.2.tema; 4.3.tema'},
    {id: 5, codigo: 'CL005', nombre: 'CL-NodeJS', temas: '5.1.tema; 5.2.tema; 5.3.tema'},
  ];

  clasesObservable: Observable<any>;

  constructor() { 
    this.clasesObservable = new Observable<any>((suscriptor) => {
      suscriptor.next(this.clases);
    });
  }

  obtenerObservableClases() {
    return this.clasesObservable;
  }

  filterObservableClases(clases: any) {
    let clasesOut = this.clases;
    if (clases.length > 0) {
      //console.log('clases: ', clases);
      clasesOut = clases;
      }
    
    return new Observable<any>((suscriptor) => {
      suscriptor.next(clasesOut);
    });
  }

  updateObservableClase(clase: any) {
    let index = this.clases.findIndex(alum => alum.id == clase.id);
    this.clases[index] = clase;

    return new Observable<any>((suscriptor) => {
      suscriptor.next(this.clases);
    });
  }

  deleteObservableClase(clase: any) {
    this.clases = this.clases.filter(function(alumn) {
      return alumn.id !== clase.id;
    });

    return new Observable<any>((suscriptor) => {
      suscriptor.next(this.clases);
    });
  }

  addObservableClase(clase: any) {

    const index_max = this.clases.length;
        
    if(index_max > 0) {
      const item = this.clases[index_max - 1];
      //resultado.id = +item.id + 1;
      clase.id = Number(item.id) + 1;
    } else {
      clase.id = 1;
    }

    this.clases.push(clase);

    return new Observable<any>((suscriptor) => {
      suscriptor.next(this.clases);
    });
  }
}
