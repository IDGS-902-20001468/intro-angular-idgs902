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
import { OperasBasComponent } from './utl/formulario/operas-bas/operas-bas.component';
import {MatInputModule} from '@angular/material/input';

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
    OperasBasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
