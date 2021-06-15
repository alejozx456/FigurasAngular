import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CirculoComponent } from './components/circulo/circulo.component';
import { CuadradoComponent } from './components/cuadrado/cuadrado.component';
import { RectanguloComponent } from './components/rectangulo/rectangulo.component';
import { TrianguloComponent } from './components/triangulo/triangulo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CirculoComponent,
    CuadradoComponent,
    RectanguloComponent,
    TrianguloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
