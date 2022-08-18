import { Component, Inject } from '@angular/core';
import { configToken, Configuracion } from './config';
import { AlumnoService } from './services/alumno.service';
import { cursos } from './services/curso.data';
import { CursoService } from './services/curso.service';
import { CursosAlphaService } from './services/cursos-alpha.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //providers: [AlumnoService] // provee una instancia independente al componente
})
export class AppComponent {
  alumnos: any[] = [];
  cursos: any[] = [];

  constructor(
    private alumnoService: AlumnoService,
    private cursoService: CursoService,
    private cursoAlphaService: CursosAlphaService,
    @Inject(configToken) config: Configuracion
  ){
    this.alumnos = alumnoService.obtenerAlumno();
    this.cursos = cursoService.obtenerCursos();
    this.cursos = cursos.obtenerCursos();
    console.log(cursoService === cursoAlphaService);
    console.log(config);
  }

}
