import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NamesGrupo } from './utl/grupos.component';
import { Idgs902 } from './utl/idgs902.component';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './utl/formulario/formulario.component';
import { SumaComponent } from './utl/formulario/suma/suma.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/formulario/operas/operas.module';
import { DistanciaPuntosModule } from './distancia/distancia-puntos/distancia modulo/distancia-puntos.module';
import { CalificacionAlumnComponent } from './utl/calificacion-alumn/calificacion-alumn.component';
import { AlumnoFilterPipe } from './utl/alumno-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NamesGrupo,
    Idgs902,
    IdgsComponent,
    IricComponent,
    MenuComponent,
    FormularioComponent,
    SumaComponent,
    CalificacionAlumnComponent,
    AlumnoFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    OperasModule,
    DistanciaPuntosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
