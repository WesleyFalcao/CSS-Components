import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimacoesComponent } from './animacoes/animacoes.component';

const routes: Routes = [
  {path: 'animacoes', component: AnimacoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
