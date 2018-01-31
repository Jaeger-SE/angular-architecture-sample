import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pokemon } from '../../../facade/models/_domain';

@Component({
  selector: 'jaeger-se-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss']
})
export class PokemonGridComponent implements OnInit {

  @Input()
  pokemons: Observable<Pokemon>;

  constructor() { }

  ngOnInit() {
  }

}
