import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss']
})
export class ListaPokemonComponent implements OnInit {

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getListPokemon()
      .subscribe(res => console.log(res), 
        error => console.log(error.message))
  }

}
