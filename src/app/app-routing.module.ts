import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CirculoComponent } from './components/circulo/circulo.component';
import { CuadradoComponent } from './components/cuadrado/cuadrado.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RectanguloComponent } from './components/rectangulo/rectangulo.component';
import { TrianguloComponent } from './components/triangulo/triangulo.component';

const routes: Routes = [
  {path:'',redirectTo:'principal',pathMatch:'full'},
  {path:'principal', component:PrincipalComponent},
  {path:'circulo',component:CirculoComponent},
  {path:'cuadrado',component:CuadradoComponent},
  {path:'rectangulo',component:RectanguloComponent},
  {path:'triangulo',component:TrianguloComponent},
  {path:'**', redirectTo:'principal',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
