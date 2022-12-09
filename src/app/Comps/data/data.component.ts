import { Component, OnInit } from '@angular/core';
import { Estudiantes } from 'src/app/models/compartido/compartido.module';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  Resultados: Estudiantes[] = [
    new Estudiantes('proyectoLourdesF','Lourdes',9,true),
    new Estudiantes('ProyectoFloresMirta','Mirta',5,false),
    new Estudiantes('ProyectoMariaGutierrez','Maria',6,true),
    new Estudiantes('ProyectoRPmerceria','Rosa',10,true),
  ]
  
  constructor() {}
  ngOnInit(): void {
      
  }
}

