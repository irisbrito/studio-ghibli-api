import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {
  name: any;
  constructor(private service: RequestService) { }

  ngOnInit(): void {
    this.get();
  }


  get(): void {
    this.service.getCharacters().subscribe((data) => {
      this.name = data;
      console.log(data);
    }, (erro) => {
      console.error(erro);
    });
  }

}
