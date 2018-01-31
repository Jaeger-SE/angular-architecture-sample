import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PokeapiService, Pokemon } from '../api/pokeapi.service';
import { PokemonGathererService } from '../business-logic/pokemon-gatherer.service';

@Injectable()
export class PokedexSandboxService {

  private _pokemons: Subject<Pokemon[]> = new BehaviorSubject([]);
  get pokemons$(): Observable<Pokemon[]> {
    return this._pokemons.asObservable();
  }

  constructor(private pokemonGathererService: PokemonGathererService) {
  }

  loadPokemonsByType(type: string) {
    this.pokemonGathererService.getAll(type).subscribe(pokemons => { this._pokemons.next(pokemons); });
  }
}
export { Pokemon };
