import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorpaisComponent } from './pages/porpais/porpais.component';
import { PorregionComponent } from './pages/porregion/porregion.component';
import { VerpaisComponent } from './pages/verpais/verpais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorpaisComponent,
    PorregionComponent,
    VerpaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

  ],
  exports:[
    PorCapitalComponent,
    PorpaisComponent,
    PorregionComponent,
    VerpaisComponent
  ]
})
export class PaisModule { }
