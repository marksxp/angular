import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, filter, forkJoin, from, interval, map, mergeMap, Observable, of, scan, Subscription, tap } from 'rxjs';
import { RxjsService } from './services/rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit{
  profesores: any = [];
  cursos: any = [];
  cursosSubcription: Subscription;
  cursos$: Observable<any>;

  constructor(
    private rxjsService: RxjsService
  ){
    this.rxjsService.obtenerPromiseProfesores()
    .then((profesores) => {
      console.log('promises: ', profesores);
      this.profesores = profesores;
    }).catch((error) => {
      console.log(error);
    });

    this.rxjsService.obtenerObservableProfesores()
    .subscribe((profesores) => {
      console.log('observable: ', profesores);
    })

    /* this.rxjsService.obtenerSubjectCursos()
    .subscribe((cursos) => {
      this.cursos = cursos;
    }) */

    this.cursosSubcription = this.rxjsService.obtenerSubjectCursos()
    .subscribe((cursos) => {
      this.cursos = cursos;
    })

    this.cursos$ = this.rxjsService.obtenerSubjectCursos();
    console.log(this.cursos$);

  }

  ngOnInit(): void {
    /* this.rxjsService.obtenerObservableAlumnos()
    .subscribe((alumnos) => {
      console.log('alumnos: ', alumnos);
    }) */

    this.rxjsService.obtenerObservableAlumnos().pipe(
      //filter((valor: any) => valor.curso === 'Angular') // solo con from, ya que con of, es un arreglo unico
      map((alumnos: any[]) => alumnos.filter((alumno) => alumno.curso === 'Angular')) // con of
    )
    .subscribe((alumnos) => {
      console.log('alumnos: ', alumnos);
    })

    from([1,2,3,4,5,6,7,8,9,10]).pipe(
      tap(valor => console.log('tap antes del scan', valor)),
      scan((acumulador: number, valor: number) => acumulador + valor),
      filter((valor: number) => valor % 2 === 0),
      tap(valor => console.log('tap despues del filter', valor))
    ).subscribe((data) => {
      console.log("data: ", data);
    });

/*     const letras = of('a', 'b', 'c');
    letras.pipe(
      mergeMap(x => interval(1000).pipe(
        map(i => x + i)))
    ).subscribe(x => console.log('utilizando el MergeMap:', x)) */

    const fork = forkJoin({
      sourceOne: of('Hola'),
      sourceTwo: of('Mundo').pipe(delay(1000))
    }).subscribe((datos) => {
      console.log('utilizando forkJoin: ', datos);
    })
  }

  ngOnDestroy(): void {
    console.log('Ejecutando ngOnDestroy para desuscribirme del observable');
    this.cursosSubcription.unsubscribe();
  }

  agregarNuevoProfesor(){
    let profesor = {
      id: 5,
      nombre: 'Elizabeth',
      curso: 'UI/UX'
    }
    this.rxjsService.agregarNuevoProfesor(profesor);
  }

  agregarNuevoCurso(){
    let curso = {
      id: 5,
      curso: 'UI/UX',
      comision: '32450'
    }
    this.rxjsService.agregarNuevoCurso(curso);
  }
}
