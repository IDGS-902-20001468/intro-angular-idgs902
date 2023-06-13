import { Component } from '@angular/core';

@Component({
  selector: 'app-idgs902',
  template: `
  <div>
    <b>Matricula: </b>
    {{alumno.matricula}}
  </div>
  <div>
    <b>Nombre: </b>
    {{alumno.nombre}}
  </div>
  <div>
    <b>Apellido Paterno: </b>
    {{alumno.apaterno}}
  </div>
  <div>
    <b>fecha de Nacimiento: </b>
    {{alumno.fecahNacimiento | date}}
  </div>
  <div>
    <b>Inscrito: </b>
    {{alumno.inscrito}}
  </div>
  `
})

export class Idgs902{
  constructor(){}
  alumno={
    matricula:20001468,
    nombre:'Jessi',
    inscrito:'Si',
    apaterno: 'Barron',
    fecahNacimiento:new Date()
  };
}
