import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes: any = {};
  termino: string;

  constructor(
    private activateRouter: ActivatedRoute,
    private _heroeService: HeroesService,
    private router: Router){ 

      this.activateRouter.params.subscribe(
        params =>{
          this.heroes = this._heroeService.buscarHeroe(params['nombre']);
          this.termino = params['nombre'];
        }
      ); 
    }

  ngOnInit(): void {
  }

    verHeroe( idx: number ){
      this.router.navigate([ '/heroe' , idx ]);
    }


}
