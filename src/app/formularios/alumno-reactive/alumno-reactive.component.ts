import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAlumnosIric } from 'src/app/utl/alumnos-iric';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {
  listaAlumnos!:IAlumnosIric[]
  mat!:number
  nom!:string
  corr!:string
  ed!:number
  cal!:number
  fot!:string

  alumnosForm!:FormGroup;
  constructor(private readonly fb:FormBuilder){
    this.alumnosForm = this.initForm();
  }

  onSubmit():void{
    // console.log('Form-> ', this.alumnosForm.value);
    this.obtenerValor();
  }

  obtenerValor():void{
    this.mat= this.alumnosForm.get('matricula')?.value;
    this.nom= this.alumnosForm.get('nombre')?.value;
    this.corr= this.alumnosForm.get('correo')?.value;
    this.ed= this.alumnosForm.get('edad')?.value;
    this.cal= this.alumnosForm.get('calif')?.value;
    this.fot= this.alumnosForm.get('foto')?.value;
    this.listaAlumnos.push({
      matricula:this.mat,
      nombre:this.nom,
      correo:this.corr,
      edad:this.ed,
      foto: this.fot,
      calif: this.cal,

    })
  }

  initForm():FormGroup{
    return this.fb.group({
      matricula:['', [Validators.required, Validators.minLength(3)]],
      nombre:['', [Validators.required]],
      edad:[''],
      correo:['',[Validators.required]],
      calif:[''],
      foto:[''],
    })
  }
}

