import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss']
})
export class ListaPokemonComponent implements OnInit {

  listPokemon: any[]

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getListPokemon()
      .subscribe(res => {
        this.listPokemon = res['cards']
        console.log(this.listPokemon)}, 
        error => console.log(error.message))
  }
  

}
