import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'lista', component: ListaCursosComponent},
    {path: 'nuevo', component: NuevoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
