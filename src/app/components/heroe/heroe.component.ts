import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe!: Heroe;

  // Nos suscribimos para obtener los valores del params
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService
  ) {
    this._activatedRoute.params.subscribe( params => {
      let idx: number = parseInt(params['id']);
      this.heroe = this._heroeService.getHeroe(idx);
    });
  } 

  getImageCasa(): string {
    return this.heroe.casa == 'DC' ? 'assets/img/dc_logo.png' : 'assets/img/marvel_logo.png';
  }

}
