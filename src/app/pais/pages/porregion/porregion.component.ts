import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-porregion',
  templateUrl: './porregion.component.html',
  styles:[`
      button{
        margin-right: 5px
      }
    `
  ]
})
export class PorregionComponent {
regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN']
regionActiva: string = ''
paises:Country[] = []
error: boolean = false

constructor(private paisService : PaisService){}

buscar(region:string){
  this.error = false
  this.regionActiva = region

  this.paisService.getRegionPorId(region)
  .subscribe(paises =>{this.paises = paises},
            error =>{ this.error = true; this.paises = []})

}

}
