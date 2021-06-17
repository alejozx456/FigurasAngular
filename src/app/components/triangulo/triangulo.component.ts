import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.css']
})
export class TrianguloComponent implements OnInit {
lado1:number;
lado2:number;
lado3:number;
base:number;
altura:number;
area:number;
perimetro:number;
  constructor() { }

  ngOnInit(): void {
  }
  AyP(){
    this.area=(this.base*this.altura)/2;
    this.perimetro=this.lado1+this.lado2+this.lado3;
  }
}
