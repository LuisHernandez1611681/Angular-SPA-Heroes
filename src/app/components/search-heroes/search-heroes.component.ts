import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html'
})
export class SearchHeroesComponent {
  heroes: Heroe[] = [];
  filter!: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.filter = params['filter'];
      this.heroes = this._heroesService.searchHeroes(this.filter);
      console.log(this.heroes);
    });
  }

}
