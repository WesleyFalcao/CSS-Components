import { MenuComponent } from './menu/menu.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { CardHoverComponent } from './card-hover/card-hover.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimacoesComponent } from './animacoes/animacoes.component';
import { FlexGridComponent } from './flex-grid/flex-grid.component';
import { GaugeComponent } from './gauge/gauge.component';
import { RegistrationEmailComponent } from './registration-email/registration-email.component';
import { SeletoresComponent } from './seletores/seletores.component';
import { LoadingComponent } from './loading/loading.component';
import { Button3dComponent } from './button3d/button3d.component';

const routes: Routes = [
  {path: '', component: AnimacoesComponent},
  {path: 'selectores', component: SeletoresComponent},
  {path: 'gauge', component: GaugeComponent},
  {path: 'email', component: RegistrationEmailComponent},
  {path: 'flex', component: FlexGridComponent},
  {path: 'card', component: CardHoverComponent},
  {path: 'tooltip', component: TooltipComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'loading', component: LoadingComponent},
  {path: 'button3d', component: Button3dComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
