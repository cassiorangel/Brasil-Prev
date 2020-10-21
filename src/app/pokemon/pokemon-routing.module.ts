import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: ListaPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
