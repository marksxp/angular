import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  //{path: 'login', component: LoginComponent},
  {
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
    canLoad: [AdminGuard],
    canActivate: [AuthGuard, AdminGuard],
  },
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
