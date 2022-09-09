import { createReducer, on } from "@ngrx/store";
import { CursoState } from "src/app/models/cursos.state";
import { cargarCursos, cursosCargados } from "../actions/cursos.action";

const estadoInicial: CursoState = {
    cargando: false,
    cursos: []
}

export const cursosReducer = createReducer(
    estadoInicial,
    on(cargarCursos, (estado) => {
        //let c = estado;
        //c.cargando = true;
        //return c;
        return { ...estado, cargando: true } //sintaxis: express operator
    }),
    on(cursosCargados, (estado, {cursos}) => {
        return { ...estado, cargando: false, cursos: cursos }
    })
)