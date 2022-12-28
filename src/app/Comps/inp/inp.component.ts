import { Component, OnInit } from '@angular/core';
import { Estudiantes } from 'src/app/models/compartido/compartido.module';
@Component({
  selector: 'app-inp',
  templateUrl: './inp.component.html',
  styleUrls: ['./inp.component.css']
})
export class InpComponent {
  Resultados: Estudiantes[] = [
    new Estudiantes('A1','Lucia','Perez','LP@gmiail.com',9,true),
    new Estudiantes('E215','Marcos','Gutierrez','MG@gmiail.com',3,false),
    new Estudiantes('AB31','Sofia','Alvarez','SA@gmiail.com',10,true),
    new Estudiantes('Ce2','Camila','Itua','CI@gmiail.com',5,false),
    new Estudiantes('Ce2','Pedro','Laces','PL@gmiail.com',8,true),

  ]
  
  constructor() {}
      
  }

