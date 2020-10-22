import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { BuscaPokemonComponent } from './busca-pokemon/busca-pokemon.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [ListaPokemonComponent, BuscaPokemonComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ]
})
export class PokemonModule { }
