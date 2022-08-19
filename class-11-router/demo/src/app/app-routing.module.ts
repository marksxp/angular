import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent }, // localhost:4200/inicio
  { path: 'contacto', component: ContactoComponent },
  { 
    path: 'autenticacion',
    children: [
      { path: 'usuarios', component: UsuariosComponent } // localhost:4200/autenticacion/usuarios
    ]
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
