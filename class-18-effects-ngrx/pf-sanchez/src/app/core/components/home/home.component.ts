import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { AlumnosService } from 'src/app/alumnos/services/alumnos.service';
import { ClasesService } from 'src/app/clases/services/clases.service';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { Alumno } from 'src/app/models/alumno';
import { Clase } from 'src/app/models/clase';
import { Curso } from 'src/app/models/curso';

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

  dataSource: MatTableDataSource<any>;
  //@ViewChild(MatTable) tabla!: MatTable<Curso>;
  @ViewChild(MatSort) sort!: MatSort;

  alumnos$!: Observable<any>;
  alumnosSubcription!: Subscription;

  cursos$!: Observable<any>;
  cursosSubcription!: Subscription;

  clases$!: Observable<any>;
  clasesSubcription!: Subscription;

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

    this.dataSource = new MatTableDataSource();
  }

  ngOnDestroy(): void {
    this.alumnosSubcription.unsubscribe();
    this.cursosSubcription.unsubscribe();
    this.clasesSubcription.unsubscribe();
  }

  ngOnInit(): void {

    let clasesData: Clase[] = [];
    let alumnosData: Alumno[] = [];

    this.clases$.subscribe((clases) => {
      clasesData = clases;
    })

    this.alumnos$.subscribe((alumnos) => {
      alumnosData = alumnos;
    })

    this.cursos$.subscribe((cursos) => {
      let homeData = this.getHomeData(alumnosData, cursos, clasesData);
      this.dataSource = new MatTableDataSource(homeData);
    });

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  getHomeData(alumnos: Alumno[], cursos: Curso[], clases: Clase[]): Home[] {

    let homeData: Home[] = [];

    alumnos.forEach(alumno => {
      let cursoNombre = '';
      let claseNombre = '';

      cursos.forEach(curso => {
        if (curso.codigo == alumno.codigoCurso) {
          cursoNombre = curso.nombre;

          clases.forEach(clase => {
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

      homeData.push(home);

    });

    return homeData;
  }

}
