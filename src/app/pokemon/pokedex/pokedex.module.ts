import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPipesModule } from 'ngx-pipes';

import { TypesPokedexComponent } from './components/types-pokedex/types-pokedex.component';
import { PokemonGridComponent } from './components/pokemon-grid/pokemon-grid.component';

@NgModule({
  imports: [
    CommonModule,
    NgPipesModule
  ],
  declarations: [TypesPokedexComponent, PokemonGridComponent]
})
export class PokedexModule { }
