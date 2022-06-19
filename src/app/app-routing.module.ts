import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimacoesComponent } from './animacoes/animacoes.component';
import { SeletoresComponent } from './seletores/seletores.component';

const routes: Routes = [
  {path: 'animacoes', component: AnimacoesComponent},
  {path: 'selectores', component: SeletoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
