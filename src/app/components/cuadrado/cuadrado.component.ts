import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.css']
})
export class CuadradoComponent implements OnInit {
lado:number;
area:number;
perimetro:number;

  constructor() { }

  ngOnInit(): void {
  }

AyP(){
  this.area=this.lado*this.lado;
  this.perimetro=this.lado*4;
}

}
