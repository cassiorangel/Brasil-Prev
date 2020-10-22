import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaPokemonComponent } from './busca-pokemon/busca-pokemon.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: ListaPokemonComponent
  },
  {
    path: 'busca',
    component: BuscaPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
