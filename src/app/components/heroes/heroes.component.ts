import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  constructor(
    private _heroesServicios: HeroesService,
    private router: Router
    ) {
    // console.log('constructor');
    
   }

  ngOnInit(): void {
    
    this.heroes = this._heroesServicios.getHeroes();
    //  console.log(this.heroes);
    
  }

  verHeroe( idx: number ){
    this.router.navigate([ '/heroe' , idx ]);
  }

}
