import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.css']
})
export class CirculoComponent implements OnInit {
  radio:number;
  area:number;
  perimetro:number;

  constructor() { }

  ngOnInit(): void {
  }


  AyP(){
    this.area=Math.PI*Math.pow(this.radio,2);
    this.perimetro=(2*Math.PI)*this.radio;
  }
}
