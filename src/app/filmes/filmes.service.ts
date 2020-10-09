import { Injectable } from '@angular/core';
import { Film } from './film';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private filmsUrl = 'https://ghibliapi.herokuapp.com/films';
 // private filmsTitleUrl = `https://ghibliapi.herokuapp.com/films/{id}`;
  constructor(private http: HttpClient) {}

// GET FILMES
// @desc Retornar todos os filmes
// @access public
// @endpoint http://localhost:porta/films
  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmsUrl);
  }
}
