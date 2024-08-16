import { Component, Input } from '@angular/core';
import { Heroe } from '../../../models/heroe.model';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent {
  @Input() heroe!: Heroe;
  @Input() index!: number;
}
