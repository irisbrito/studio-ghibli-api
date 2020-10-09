import { Film } from './filmes/film';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private filmsUrl = 'https://ghibliapi.herokuapp.com/films';
  constructor(private http: HttpClient) {

   }
  // retornar todos os filmes do studio ghibli
  public getFilms(): Observable<any> {
    return this.http.get<Film[]>(this.filmsUrl);
   // return this.http.get('https://ghibliapi.herokuapp.com/films');
  }

  public getByTitle(): Observable<any>{
    return this.http.get<Film[]>(this.filmsUrl);
  }

  public getChapeuSeletor(): Observable<any> {
    return this.http.get('https://www.potterapi.com/v1/sortinghat');
  }

  public getCharacters(): Observable<any> {
    return this.http.get('https://www.potterapi.com/v1/characters');
  }
}
