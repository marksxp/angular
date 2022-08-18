import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  alumnos: any[] = [];
  profesores: any[] = [];

/*   constructor(
    private alumnoService: AlumnoService
  ) { } */

  alumnoService: AlumnoService;
  rxjsService: RxjsService;
  constructor() {
    this.alumnoService = new AlumnoService();
    this.rxjsService = new RxjsService();
   }

/*   ngOnInit(): void {
    this.alumnos = this.alumnoService.obtenerAlumno();
    this.rxjsService.obtenerProfesores().subscribe((profesores) => {
      this.profesores = profesores;
    }, (error) => {
      this.profesores = ['Hubo un error'];
    });
  } */

  ngOnInit(): void {
    this.alumnos = this.alumnoService.obtenerAlumno();
    this.rxjsService.obtenerProfesores().subscribe({
      next: (profesores) => {
        this.profesores = profesores;
      },
      error: (error) => {
        console.log('Hubo un error', error);
      },
      complete: () => {
        console.log('Completado, finally');
      }
    });
  }

}
