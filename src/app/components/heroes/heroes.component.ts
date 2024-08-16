import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {

  heroes: Heroe[] = [];

  // Inyectamos el servicio
  constructor(private _heroesService: HeroesService) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }
}
