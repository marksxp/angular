import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { ClasesEditComponent } from './components/clases-edit/clases-edit.component';
import { ClasesComponent } from './components/clases/clases.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TextoDirective } from '../shared/directives/texto.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ClasesComponent,
    ClasesEditComponent,
    //TextoDirective
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
    //SharedModule
  ]
})
export class ClasesModule { }
