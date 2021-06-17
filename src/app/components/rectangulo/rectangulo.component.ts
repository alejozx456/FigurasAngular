import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangulo',
  templateUrl: './rectangulo.component.html',
  styleUrls: ['./rectangulo.component.css']
})
export class RectanguloComponent implements OnInit {
base:number;
altura:number;
area:number;
perimetro:number;

  constructor() { }

  ngOnInit(): void {
  }

  AyP(){
    this.area=this.base*this.altura;
    this.perimetro=(2*this.base)+(2*this.altura);
  }
}
