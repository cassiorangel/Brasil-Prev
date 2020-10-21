import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemon-lista',
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
  },
  { 
    path: '',   redirectTo: '/pokemon-lista', pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
