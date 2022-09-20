import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, mergeMap } from 'rxjs/operators';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../services/cursos.service';
import { cargarCursos, cursosCargados } from './cursos.actions';

@Injectable()
export class CursosEffects {

  cargarCursoss$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(cargarCursos),
      mergeMap(() => this.cursosService.obtenerObservableCursos().pipe(
          map((c: Curso[]) => cursosCargados({ cursos: c }) )
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private cursosService: CursosService
    ) {}
}
