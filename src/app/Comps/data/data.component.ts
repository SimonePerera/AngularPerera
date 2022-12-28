import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  mailController = new FormControl('',[Validators.email, this.DeValid, Validators.required])
  IDController = new FormControl('',[Validators.minLength(2)])

  reviewForm= new FormGroup({
    mail: this.mailController,
    idC: this.IDController
  })


DeValid(control: FormControl){
    if( control.value?.toLowerCase === 'jyj@mail.com' ){
      return{thisValidat: true};
    }
      return null;
}
}
