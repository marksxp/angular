import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, mergeMap, Observable, of, Subscription } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  alumnos: any = [];
  alumnos$: Observable<any>;
  alumnosSubcription: Subscription;
  cursos: any = [];

  columnas: string[] = ['id', 'nombre', 'apellido', 'codigoCurso', 'curso'];

  constructor(
    private rxjsService: RxjsService
    ) {
      
      this.alumnosSubcription = this.rxjsService.obtenerObservableAlumnos()
      .subscribe();

      this.alumnos$ = this.rxjsService.obtenerObservableAlumnos();

    }

  ngOnInit(): void {
   }

  ngOnDestroy(): void {
    this.alumnosSubcription.unsubscribe();
    this.cursos.unsubscribe();
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.alumnos$.pipe(
      map((alumnos: any[]) => alumnos.filter((alumno) => alumno.curso.toString().toLocaleLowerCase() === valorObtenido.toLocaleLowerCase())) 
    ).subscribe((alumnos) => {
      this.alumnos$ = this.rxjsService.updateObservableAlumnos(alumnos);
    });
  }
}
