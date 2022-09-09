import { ActionReducerMap } from "@ngrx/store";
import { CursoState } from "../models/cursos.state";
import { cursosReducer } from "./reducers/cursos.reducer";

export interface AppState {
    cursos: CursoState
};

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    cursos: cursosReducer
}

