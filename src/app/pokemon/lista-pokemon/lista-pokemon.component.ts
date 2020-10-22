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
        this.ordenaNome(this.listPokemon);
      
      }, 
        error => console.log(error.message))
  }
  
  ordenaNome(dadosArray) {
    return dadosArray.sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
  }
  

}
