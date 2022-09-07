import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './components/cursos/cursos.component';
import { CursosEditComponent } from './components/cursos-edit/cursos-edit.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosRoutingModule } from './cursos-routing.module';
import { TextoDirective } from '../shared/directives/texto.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CursosComponent,
    CursosEditComponent,
    //TextoDirective
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    ReactiveFormsModule
    //SharedModule
  ]
})
export class CursosModule { }
