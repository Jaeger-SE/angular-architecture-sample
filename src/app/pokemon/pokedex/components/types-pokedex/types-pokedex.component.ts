import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Observable
} from 'rxjs/Observable';
import * as _ from 'lodash';

import {
  Pokemon,
  PokedexSandboxService
} from '../../../facade/sandboxes/pokedex-sandbox.service';
import {
  SubscriptionHandlerFactory,
  SubscriptionHandler
} from '../../../../shared/utils/subscription-handler/subscription-handler-factory';

@Component({
  selector: 'jaeger-se-types-pokedex',
  templateUrl: './types-pokedex.component.html',
  styleUrls: ['./types-pokedex.component.scss']
})
export class TypesPokedexComponent implements OnDestroy, OnInit {
  private type: string;
  private subscriptionHandler: SubscriptionHandler;

  pokemons: Observable<Pokemon[]>;

  constructor(private pokedexSandbox: PokedexSandboxService, private route: ActivatedRoute) {
    this.pokemons = this.pokedexSandbox.pokemons$;
    this.subscriptionHandler = SubscriptionHandlerFactory.create();
  }

  ngOnDestroy(): void {
    this.subscriptionHandler.clearSubscriptions();
  }

  ngOnInit() {
    const subscription = this.route.params.subscribe(params => {
      this.type = params['type'] || '';
      this.pokedexSandbox.loadPokemonsByType(this.type);
    });
    this.subscriptionHandler.registerSubscription(subscription);
  }

}
