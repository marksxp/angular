import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';
import { AppMaterialModule } from './app.material.module';
import { TransformarPipe } from './pipes/transformar.pipe';
import { TextoDirective } from './directives/texto.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { Transformar2Pipe } from './pipes/transformar2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    TablaComponent,
    EditarDialogComponent,
    TransformarPipe,
    TextoDirective,
    Transformar2Pipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
