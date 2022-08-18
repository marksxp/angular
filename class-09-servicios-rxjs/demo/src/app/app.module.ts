import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { config, configToken } from './config';
import { AlumnoService } from './services/alumno.service';
import { cursos } from './services/curso.data';
import { CursoService } from './services/curso.service';
import { CursosAlphaService } from './services/cursos-alpha.service';

@NgModule({
  declarations: [
    AppComponent,
    Componente2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AlumnoService, // para proveer una sola instancia
    {provide: CursoService, useExisting: CursosAlphaService}, // para probar nuevas funcionales: CursoService es un alias de CursosAlphaService
    {provide: CursoService, useClass: CursosAlphaService}, // para crear 2 instancias por separado
    {provide: CursoService, useValue: cursos}, // se puede utilizar para cambiar de idioma usando una determinada clase
    {provide: CursoService, useFactory: () => {
      return environment.experimental ? new CursosAlphaService() : new CursoService()
    }},
    {provide: configToken, useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
