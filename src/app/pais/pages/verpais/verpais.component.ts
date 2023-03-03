import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-verpais',
  templateUrl: './verpais.component.html'
})
export class VerpaisComponent implements OnInit{

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService
    ){ }

  ngOnInit(): void {

    this.activatedRoute.params
    .subscribe(({id}) => {

      this.PaisService.getPaisPorId(id)
      .subscribe(pais => {
        console.log(pais)
        this.pais = pais
      })

    })
  }

}
