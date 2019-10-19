import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente2',
  templateUrl: './meu-componente2.component.html',
  styleUrls: ['./meu-componente2.component.css']
})
export class MeuComponente2Component implements OnInit {

  nome:string = "Rodrigo";
  myValue = 3;
  myList = [1, 2, 3, 4];
  isVisible:boolean = true;

  aluno = {
    dados: {
      nome: 'Freitas'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
