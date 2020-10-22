import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-busca-pokemon',
  templateUrl: './busca-pokemon.component.html',
  styleUrls: ['./busca-pokemon.component.scss']
})
export class BuscaPokemonComponent implements OnInit {

  constructor(
    private pokemonSevice: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonSevice.searchPokemon('Vespiquen')
      .subscribe(res=> console.log(res), 
        error => console.log(error)
      );
  }

}
