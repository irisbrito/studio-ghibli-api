import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  intro: string = 'Olá! Esse é um projeto no qual tem o objetivo de consumir uma API.';
  texto: string = 'A API pública escolhida foi a do Studio Ghibli. O Studio Ghibli é conhecido por ser um estúdio de cinema de animação japonês com sede em Koganei, Tóquio. O estúdio é mais conhecido por seus filmes de animação e também produziu vários curtas, comerciais de televisão e um filme de televisão.';
  titulo: string = 'Studio Ghibli - Filmes - API';
  sobreFilmes: string = 'Alguns filmes do estúdio são: "Meu amigo Totoro", "Os serviços de entrega da Kiki" e "Ponyo" ';
  observacao: string = 'Observação: Os dados da API retornam as informações dos filmes na lingua Inglesa';
 // numero: number = 5;
 // arr = ['Íris', 'Brito' , 'Souza' ];
 // arr1 = [1 , 2 , 3 , 4 , 5 , 6 ];

  constructor() { }

  ngOnInit(): void {
  }

}
