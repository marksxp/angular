import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ClasesEditComponent } from './components/clases-edit/clases-edit.component';
import { CursosEditComponent } from './components/cursos-edit/cursos-edit.component';
import { AlumnosEditComponent } from './components/alumnos-edit/alumnos-edit.component';
import { AppMaterialModule } from './app.material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextoDirective } from './directives/texto.directive';
import { HomeComponent } from './components/home/home.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { HttpClientModule } from '@angular/common/http';
import { CursosService } from './services/cursos.service';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    CursosComponent,
    ClasesComponent,
    ClasesEditComponent,
    CursosEditComponent,
    AlumnosEditComponent,
    NavbarComponent,
    ToolbarComponent,
    TextoDirective,
    HomeComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
