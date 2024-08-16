import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor( private _router: Router ) {}

  buscarHeore(filter: string){
    this._router.navigate(['/searchHeroes', filter]);
  }
}
