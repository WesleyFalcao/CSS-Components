import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimacoesComponent } from './animacoes/animacoes.component';
import { SeletoresComponent } from './seletores/seletores.component';
import { GaugeComponent } from './gauge/gauge.component';
import { RegistrationEmailComponent } from './registration-email/registration-email.component';
import { FlexGridComponent } from './flex-grid/flex-grid.component';
import { CardHoverComponent } from './card-hover/card-hover.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { MenuComponent } from './menu/menu.component';
import { LoadingComponent } from './loading/loading.component';
import { Button3dComponent } from './button3d/button3d.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimacoesComponent,
    SeletoresComponent,
    GaugeComponent,
    RegistrationEmailComponent,
    FlexGridComponent,
    CardHoverComponent,
    TooltipComponent,
    MenuComponent,
    LoadingComponent,
    Button3dComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
