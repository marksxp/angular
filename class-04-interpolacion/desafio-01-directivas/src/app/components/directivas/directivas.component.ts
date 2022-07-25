import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  variable1: number = 3;
  variable2: string = 'cristiano';
  arreglo: string[] = ['Item 1 ngFor', 'Item 2 ngFor', 'Item 3 ngFor'];
  
  familiares = [{
    nombre: 'karin',
    apellidos: 'benzema'
  },{
    nombre: 'harry',
    apellidos: 'kane'
  }];

  //ahora = undefined;
  ahora = Date();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarVariable1() {
    this.variable1 = Math.round(Math.random() * 10);
  }

}
