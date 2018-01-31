import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokedexModule } from './pokedex/pokedex.module';
import { BattleModule } from './battle/battle.module';
import { PokeapiService } from './facade/api/pokeapi.service';
import { PokedexSandboxService } from './facade/sandboxes/pokedex-sandbox.service';
import { PokemonGathererService } from './facade/business-logic/pokemon-gatherer.service';
import { PokeapiFakeService } from './facade/api/pokeapi-fake.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    PokemonRoutingModule,
    PokedexModule,
    BattleModule
  ],
  declarations: [],
  providers: [{
    provide: PokeapiService,
    useClass: PokeapiFakeService
  }, PokedexSandboxService, PokemonGathererService]
})
export class PokemonModule { }
