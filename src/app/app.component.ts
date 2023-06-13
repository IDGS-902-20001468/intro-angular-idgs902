//Invocar los componentes con angular core
import { Component } from '@angular/core';

//decorador que le indica a angular que esta clase es un componente
@Component({
  //Alias para referenciar al componente
  selector: 'app-root',
  //Rutas a los archivos html y css
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro-angular-idgs902';

  alumno={
    matricula:1234,
    nombre:'Mario',
    inscrito:27.5,
    apaterno: 'Lopez',
    fecahNacimiento:new Date()
  };

  duplicarN(n:number):number{
    return n*2;
  }
}
