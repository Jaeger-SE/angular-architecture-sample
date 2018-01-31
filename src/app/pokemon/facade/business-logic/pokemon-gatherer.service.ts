import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import * as _ from 'lodash';

import { PokeapiService, Pokemon } from '../api/pokeapi.service';
import { ToastrService } from '../../../shared/toastr/toastr.service';

@Injectable()
export class PokemonGathererService {

  constructor(private pokeapiService: PokeapiService, private toastrService: ToastrService) { }

  getAll(type: string): Observable<Pokemon[]> {
    return this.pokeapiService.getAllUrls(25, 0)
      .do(() => {
        this.toastrService.success({
          text: 'Pokemon list fetched'
        });
      })
      .mergeMap(x => x)
      .map(u => {
        return this.pokeapiService.get(u);
      })
      .mergeMap(x => x)
      .filter(x => x.types.toLowerCase().indexOf(type.toLowerCase()) >= 0)
      .toArray()
      .do(() => {
        this.toastrService.success({
          text: 'Pokemon details fetched'
        });
      });
  }
}
