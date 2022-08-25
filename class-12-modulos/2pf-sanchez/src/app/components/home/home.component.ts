import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Alumno, AlumnosService } from 'src/app/services/alumnos.service';
import { Curso, CursosService } from 'src/app/services/cursos.service';
import { Clase, ClasesService } from 'src/app/services/clases.service';

export interface Home {
  id: number;
  nombre: string,
  apellido: string,
  curso: string,
  clase: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  home: Home[] = [];
  home$: Observable<any>;
  
  alumnos: Alumno[] = [];
  alumnos$: Observable<any>;
  alumnosSubcription: Subscription;

  cursos: Curso[] = [];
  cursos$: Observable<any>;
  cursosSubcription: Subscription;

  clases: Clase[] = [];
  clases$: Observable<any>;
  clasesSubcription: Subscription;

  columnas: string[] = ['id', 'nombre', 'apellido', 'curso', 'clase'];

  constructor(
    private alumnosService: AlumnosService,
    private cursosService: CursosService,
    private clasesService: ClasesService
  ) { 
    this.alumnos$ = this.alumnosService.obtenerObservableAlumnos();
    this.alumnosSubcription = this.alumnos$.subscribe();

    this.cursos$ = this.cursosService.obtenerObservableCursos();
    this.cursosSubcription = this.cursos$.subscribe();

    this.clases$ = this.clasesService.obtenerObservableClases();
    this.clasesSubcription = this.clases$.subscribe();

    this.home$ = new Observable<any>;
  }

  ngOnDestroy(): void {
    this.alumnosSubcription.unsubscribe();
    this.cursosSubcription.unsubscribe();
    this.clasesSubcription.unsubscribe();
  }

  ngOnInit(): void {

    this.clases$.subscribe((clases) => {
      this.clases = clases;
      //console.log(this.clases);
    })

    this.cursos$.subscribe((cursos) => {
      this.cursos = cursos;
      //console.log(this.cursos);
    })

    this.alumnos$.subscribe((alumnos) => {
      this.alumnos = alumnos;
      //console.log(this.alumnos);
    })

    this.alumnos.forEach(alumno => {
      
      let cursoNombre = '';
      let claseNombre = '';
      this.cursos.forEach(curso => {
        if (curso.codigo == alumno.codigoCurso) {
          cursoNombre = curso.nombre;

          this.clases.forEach(clase => {
            if (clase.codigo == curso.codigoClase) {
              claseNombre = clase.nombre;
            }
          });

        }
      });

      let home: Home = {
        "id": alumno.id,
        "nombre": alumno.nombre,
        "apellido": alumno.apellido,
        "curso": cursoNombre,
        "clase": claseNombre
      };

      this.home.push(home);
      //console.log(this.home);

    });

    this.home$ = new Observable<any>((suscriptor) => {
      suscriptor.next(this.home);
    });

  }

}
