import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonagensComponent } from './personagens/personagens.component';
import { FilmesComponent } from './filmes/filmes.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { CriadoraComponent } from './criadora/criadora.component';


@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    PersonagensComponent,
    FilmesComponent,
    CriadoraComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
