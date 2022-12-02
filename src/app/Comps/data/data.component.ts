import { Component } from '@angular/core';
import { miLista } from 'src/app/models/lista.model.ts';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  Resultados: miLista[] = [
    new miLista('Zapateria de Lourdes','Lourdes',9,true),
    new miLista('Verduleria las flroes','Mirta',5,false),
    new miLista('Cosmetica Perez','Maria',6,true),
    new miLista('Mecainca para todos','Rosa',10,true),
  ]
  constructor() {}
  ngOnInit() : void {}
}