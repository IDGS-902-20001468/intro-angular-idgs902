import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {
  resultado:number=0;
  num1:string='';
  num2:string='';

  sumar():void{
    this.resultado= parseInt(this.num1)+ parseInt(this.num2);
  }
}
