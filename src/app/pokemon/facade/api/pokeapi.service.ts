import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

import {
  ApiResponse,
  PokemonApi
} from '../models/_api-domain';
import {
  Pokemon
} from '../models/_domain';

export interface IPokeapiService {
  getAllUrls(limit?: number, offset?: number): Observable<string[]>;
  get(url: string): Observable<Pokemon>;
}

@Injectable()
export class PokeapiService implements IPokeapiService {
  static readonly ApiBaseUrl = 'https://pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) { }

  getAllUrls(limit ?: number, offset ?: number): Observable < string[] > {
    if(!limit) {
      limit = 25;
    }
    if(!offset) {
      offset = 0;
    }
    return this.httpClient.get<ApiResponse>(`${PokeapiService.ApiBaseUrl}/pokemon/?limit=${limit}&offset=${offset}`)
      .map(x => _(x.results).map(r => r.url).value());
  }

  get(url: string): Observable < Pokemon > {
    return this.httpClient.get<PokemonApi>(url)
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
