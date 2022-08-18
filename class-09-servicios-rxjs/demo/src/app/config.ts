import { InjectionToken } from "@angular/core";
import { AlumnoService } from "./services/alumno.service";
import { CursoService } from "./services/curso.service";

export interface Configuracion {
    experimental: boolean;
    servicios: any[];
}

export const config: Configuracion = {
    experimental: true,
    servicios: [
        new CursoService(),
        new AlumnoService
    ]
}

export const configToken = new InjectionToken<Configuracion>('Config');