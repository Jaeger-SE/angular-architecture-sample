import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypesPokedexComponent } from './pokedex/components/types-pokedex/types-pokedex.component';

const routes: Routes = [
  { path: '', component: TypesPokedexComponent },
  { path: ':type', component: TypesPokedexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
