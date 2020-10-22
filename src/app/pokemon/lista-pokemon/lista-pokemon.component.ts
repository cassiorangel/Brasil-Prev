import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss']
})
export class ListaPokemonComponent implements OnInit {

  listPokemon: any[];

  public listaIncricao: Subscription;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    return this.listaIncricao = this.pokemonService.getListPokemon()
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

  ngOnDestroy(): void {
    this.listaIncricao.unsubscribe();
  }

}
