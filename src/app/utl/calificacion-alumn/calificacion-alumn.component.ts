import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calificacion-alumn',
  templateUrl: './calificacion-alumn.component.html',
  styleUrls: ['./calificacion-alumn.component.css']
})
export class CalificacionAlumnComponent {

@Input() califica!:number;

@Output() calificaClick:EventEmitter<string>=new EventEmitter();
puntosCal!:number;
ngOnChanges():void{
  this.puntosCal=this.califica*76/10
}
onClick(){
  this.calificaClick.emit(`${this.califica}`)
}
}
