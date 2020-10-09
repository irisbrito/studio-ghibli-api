import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Film } from './film';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  filmes: Film[];
  dados: any;
  FilmService: any;
  constructor(private service: RequestService) { }

  ngOnInit(): void {
    this.getFilms();

  }

 /* get(): void {
  this.service.getFilmes().subscribe((data) => {
      this.filmes = data;
      console.log(data);
    }, (erro) => {
      console.error(erro);
    }); */

    getFilms(): void {
      this.service.getFilms().subscribe(films => (this.filmes = films));
    }
  }


