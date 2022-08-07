import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaComponent } from './components/tabla/tabla.component';
import { AppMaterialModule } from './app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    EditarDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
