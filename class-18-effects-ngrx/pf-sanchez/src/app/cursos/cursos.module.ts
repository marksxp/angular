import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './components/cursos/cursos.component';
import { CursosEditComponent } from './components/cursos-edit/cursos-edit.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosRoutingModule } from './cursos-routing.module';
import { TextoDirective } from '../shared/directives/texto.directive';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromCursos from './state/cursos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './state/cursos.effects';


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
    ReactiveFormsModule,
    StoreModule.forFeature(fromCursos.cursosFeatureKey, fromCursos.reducer),
    EffectsModule.forFeature([CursosEffects])
    //SharedModule
  ]
})
export class CursosModule { }
