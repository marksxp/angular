import { createAction, props } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';

//export const cargarCursosType = '[Cursos] Cargar Cursos';

export const cargarCursos = createAction(
  '[Cursos] Cargar Cursos'
  //cargarCursosType  
);

export const cursosCargados = createAction(
  '[Cursos] Cursos Cargados',
  props<{ cursos: Curso[] }>()
);
