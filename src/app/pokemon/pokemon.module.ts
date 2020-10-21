import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';


@NgModule({
  declarations: [ListaPokemonComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
