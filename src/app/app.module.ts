import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimacoesComponent } from './animacoes/animacoes.component';
import { SeletoresComponent } from './seletores/seletores.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimacoesComponent,
    SeletoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
