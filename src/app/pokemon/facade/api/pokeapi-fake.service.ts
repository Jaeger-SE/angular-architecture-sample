import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

import { ApiResponse, PokemonApi } from '../models/_api-domain';
import { Pokemon } from '../models/_domain';
import { HttpClient } from '@angular/common/http';
import { IPokeapiService } from './pokeapi.service';

@Injectable()
export class PokeapiFakeService implements IPokeapiService {
  constructor(private httpClient: HttpClient) { }

  getAllUrls(limit?: number, offset?: number): Observable<string[]> {
    if (!limit) {
      limit = 950;
    }
    if (!offset) {
      offset = 0;
    }
    return this.httpClient.get<ApiResponse>('assets/fake-responses/pokemon-list.json')
      .map(x => _(x.results).map(r => r.url).value());
  }

  get(url: string): Observable<Pokemon> {
    return this.httpClient.get('assets/fake-responses/pokemon-details.json')
      .map(x => <PokemonApi>JSON.parse(x[url]))
      .map(x => {
        return <Pokemon>{
          id: x.id,
          name: x.name,
          types: _(x.types).map(t => t.type.name).join(', '),
          illustration: x.sprites.front_default
        };
      });
  }
}

export {
  Pokemon
};
