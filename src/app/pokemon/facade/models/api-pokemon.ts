export interface PokemonApi {
    forms?: (FormsEntityOrAbilityOrStatOrMoveLearnMethodOrVersionGroupOrMoveOrVersionOrTypeOrSpecies)[] | null;
    abilities?: (AbilitiesEntity)[] | null;
    stats?: (StatsEntity)[] | null;
    name: string;
    weight: number;
    moves?: (MovesEntity)[] | null;
    sprites: Sprites;
    held_items?: (null)[] | null;
    location_area_encounters: string;
    height: number;
    is_default: boolean;
    species: FormsEntityOrAbilityOrStatOrMoveLearnMethodOrVersionGroupOrMoveOrVersionOrTypeOrSpecies;
    id: number;
    order: number;
    game_indices?: (GameIndicesEntity)[] | null;
    base_experience: number;
    types?: (TypesEntity)[] | null;
}
export interface FormsEntityOrAbilityOrStatOrMoveLearnMethodOrVersionGroupOrMoveOrVersionOrTypeOrSpecies {
    url: string;
    name: string;
}
export interface AbilitiesEntity {
    slot: number;
    is_hidden: boolean;
    ability: FormsEntityOrAbilityOrStatOrMoveLearnMethodOrVersionGroupOrMoveOrVersionOrTypeOrSpecies;
}
export interface StatsEntity {
    stat: FormsEntityOrAbilityOrStatOrMoveLearnMethodOrVersionGroupOrMoveOrVersionOrTypeOrSpecies;
    effort: number;
    base_stat: number;
}
export interface MovesEntity {
    version_group_details?: (VersionGroupDetailsEntity)[] | null;
    move: FormsEntityOrAbilityOrStatOrMoveLearnMethodOrVersionGroupOrMoveOrVersionOrTypeOrSpecies;
}
export interface VersionGroupDetailsEntity {
    move_learn_method: FormsEntityOrAbilityOrStatOrMoveLearnMethodOrVersionGroupOrMoveOrVersionOrTypeOrSpecies;
    level_learned_at: number;
    version_group: FormsEntityOrAbilityOrStatOrMoveLearnMethodOrVersionGroupOrMoveOrVersionOrTypeOrSpecies;
}
export interface Sprites {
    back_female?: null;
    back_shiny_female?: null;
    back_default: string;
    front_female?: null;
    front_shiny_female?: null;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}
export interface GameIndicesEntity {
    version: FormsEntityOrAbilityOrStatOrMoveLearnMethodOrVersionGroupOrMoveOrVersionOrTypeOrSpecies;
    game_index: number;
}
export interface TypesEntity {
    slot: number;
    type: FormsEntityOrAbilityOrStatOrMoveLearnMethodOrVersionGroupOrMoveOrVersionOrTypeOrSpecies;
}
