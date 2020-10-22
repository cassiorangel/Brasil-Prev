import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-busca-pokemon',
  templateUrl: './busca-pokemon.component.html',
  styleUrls: ['./busca-pokemon.component.scss']
})
export class BuscaPokemonComponent implements OnInit {

  public dadosIncricao: Subscription;

  public listResultBusca: any[];

  profileForm = this.fb.group({
    busca: [null, Validators.required],

  });

  get busca() {
    return this.profileForm.get('busca');
  }

  constructor(
    private pokemonSevice: PokemonService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.buscaPokemon();
  }

  buscaPokemon() {
    this.dadosIncricao = this.pokemonSevice.searchPokemon(this.profileForm.value.busca)
      .subscribe(res => {
        
        if (!res['cards'] || res['cards'].length === 0) {
          return alert('Não foram encontrado resultados para sua busca')
        }
        return this.listResultBusca = res['cards']
      },
        error => console.log(error)
      );
  }

  ngOnDestroy(): void {
    this.dadosIncricao.unsubscribe();
  }

}
