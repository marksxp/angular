import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MensajeComponent } from './componentes/mensaje/mensaje.component';
import { SinTestComponent } from './componentes/sin-test/sin-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    MensajeComponent,
    SinTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
