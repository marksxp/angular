import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import * as SesionActions from './sesion.actions';

export const sesionFeatureKey = 'sesion';

export interface SessionState {
  sesionActiva: boolean;
  usuarioActivo?: Usuario;
}

export const initialState: SessionState = {
  sesionActiva: false
};

export const reducer = createReducer(
  initialState,
  on(SesionActions.cargarSesion, (state, { usuarioActivo }) => {
    return { ...state, sesionActiva: true, usuarioActivo: usuarioActivo }
  }),

);
