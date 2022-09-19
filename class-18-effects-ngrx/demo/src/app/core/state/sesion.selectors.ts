import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSesion from './sesion.reducer';

export const selectSesionState = createFeatureSelector<fromSesion.SessionState>(
  fromSesion.sesionFeatureKey
);

export const selectSesionActivaState = createSelector(
  selectSesionState,
  (state: fromSesion.SessionState) => state.sesionActiva
)

export const selectUsuarioActivoState = createSelector(
  selectSesionState,
  (state: fromSesion.SessionState) => state.usuarioActivo
)

export const selectUsuarioAdminState = createSelector(
  selectSesionState,
  (state: fromSesion.SessionState) => state.usuarioActivo?.admin
)