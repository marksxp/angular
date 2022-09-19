import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs";
import { Curso } from "src/app/models/curso";
import { CursosService } from "../services/cursos.service";
import { cargarCursos, cursosCargados } from "./cursos.actions";

@Injectable()
export class CursosEffects {

    cargarCursos$ = createEffect(() => this.actions$.pipe(
        //ofType('[Cursos] Cargar Cursos'),
        ofType(cargarCursos),
        //ofType(cargarCursosType),
        mergeMap(() => this.cursosService.obtenerCursos().pipe(
            //map((c: Curso[]) => ({ type: '[Cursos] Cursos Cargados', cursos: c }))
            map((c: Curso[]) => cursosCargados({ cursos: c }) )/*).pipe(
                catchError((error, caught) => [error])*/
        ))
    ));

    constructor(
        private actions$: Actions,
        private cursosService: CursosService
    ) {}
}