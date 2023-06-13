import { Component } from '@angular/core';

@Component({
  selector: 'app-idgs',
  templateUrl: './idgs.component.html',
  styleUrls: ['./idgs.component.css']
})
export class IdgsComponent {
  constructor(){}
  alumno={
    matricula:20001468,
    nombre:'Jessi',
    inscrito:'Si',
    apaterno: 'Barron',
    fecahNacimiento:new Date()
  };
}
