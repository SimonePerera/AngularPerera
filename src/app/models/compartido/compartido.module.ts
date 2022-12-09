import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CompartidoModule { }
export class Estudiantes { 
  Nombre : string;
  proyecto : string;
  Nota : number;
  Aprobado : boolean;
  constructor(
      Nombre : string,
      proyecto : string,
      Nota : number,
      Aprobado : boolean,
      ){
      this.Nombre = Nombre;
      this.proyecto = proyecto;
      this.Nota = Nota;
      this.Aprobado = Aprobado;
      }
}
