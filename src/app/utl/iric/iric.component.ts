import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imagenwidth:number=50;
  imagenmargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='$$$';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  alumnosIric:IAlumnosIric[]=
[
  {
    matricula:1234,
    nombre:'Pedro',
    correo:'pedro@gmail.com',
    edad:23,
    foto:'https://i0.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg?fit=1200%2C930&ssl=1'
  },
  {
    matricula:772,
    nombre:'Paulina',
    correo:'paulina@gmail.com',
    edad:23,
    foto:'https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/original/original-por-ti-rostros-activos-personas-luchadoras-12718597-1-esl-es-rostros-activos-personas-luchadoras-jpg.jpg?resize=480:*'
  },
  {
    matricula:342,
    nombre:'Dario',
    edad:27,
    correo:'dario@gmail.com',
    foto:'https://img.freepik.com/foto-gratis/hombre-joven-guapo-nuevo-corte-pelo-estilo_176420-19636.jpg?w=2000'
  },
]

}
