import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'pokemon-lista',
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
  },
  { 
    path: '',   redirectTo: '/pokemon-lista', pathMatch: 'full' 
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
