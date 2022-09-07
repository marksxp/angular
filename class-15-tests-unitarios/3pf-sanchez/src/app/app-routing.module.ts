import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: 'home', component: HomeComponent, canLoad: [AuthGuard], canActivate: [AuthGuard]},
  { path: 'alumnos', loadChildren: () => import('./alumnos/alumnos.module').then((m) => m.AlumnosModule), canLoad: [AdminGuard], canActivate: [AuthGuard, AdminGuard] },
  { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule), canLoad: [AdminGuard], canActivate: [AuthGuard, AdminGuard]  },
  { path: 'clases', loadChildren: () => import('./clases/clases.module').then((m) => m.ClasesModule), canLoad: [AdminGuard], canActivate: [AuthGuard, AdminGuard]  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
