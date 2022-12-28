import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class CompartidoModule {  
}
export class Estudiantes { 
  Id:String;
  Nombre : string;
  Apellido : string;
  mail:string;
  Nota : number;
  Inscripto : boolean;
  constructor(
      Id : String,
      Nombre : string,
      Apellido : string,
      mail : string,
      Nota : number,
      Inscripto : boolean,
      ){
      this.Id = Id;
      this.Nombre = Nombre;
      this.Apellido = Apellido;
      this.mail = mail;
      this.Nota = Nota;
      this.Inscripto = Inscripto;
      }
      
}