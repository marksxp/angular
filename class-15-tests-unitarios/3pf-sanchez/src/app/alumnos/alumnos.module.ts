import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosEditComponent } from './components/alumnos-edit/alumnos-edit.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TextoDirective } from '../shared/directives/texto.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnosEditComponent,
    //TextoDirective
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    ReactiveFormsModule
    //SharedModule
  ]
})
export class AlumnosModule { }
