import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-porpais',
  templateUrl: './porpais.component.html'
})
export class PorpaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises:Country[] = []

  constructor(private paisService: PaisService){}

  buscar(termino:string){
    this.hayError = false
    this.termino = termino

    this.paisService.buscarPais(this.termino)
    .subscribe(resp =>{this.paises = resp},
              error =>{ this.hayError = true; this.paises = []})

  }

  sugerencias( termino:string){
    this.hayError = false;
  }

}
