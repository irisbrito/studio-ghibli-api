import { FilmesService } from './filmes/filmes.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { FilmesComponent } from './filmes/filmes.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { CriadoraComponent } from './criadora/criadora.component';
// import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'sobre',
    component: SobreComponent, // qual componente ele vai renderizar nessa rota
  },
  {
    path: 'filmes',
    component: FilmesComponent,
  },
  {
    path: 'films',
    component: FilmesComponent,
  },
  {
    path: 'personagens',
    component: PersonagensComponent,
  },
  {
    path: 'criadora',
    component: CriadoraComponent,
  },
  {
    path: '',
    component: SobreComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
