//contact = pokemon
//contacts = pokemons, and pokedex

import pokedexApi from './pokedex-api.js';
import pokedexTable from './pokedex-table.js';
import pokedexFilter from './pokedex-filter.js';

const pokemons = pokedexApi.getAll();

pokedexTable.init(pokemons);

pokedexFilter.init(function(nameFilter, typeFilter, hpMinFilter, hpMaxFilter) {
    let filtered;
    if(nameFilter || typeFilter || hpMinFilter || hpMaxFilter) {
        nameFilter = nameFilter.toLowerCase();

        filtered = pokemons.filter(function(pokemon) {
            const hasName = !nameFilter
                || pokemon.pokemon.toLowerCase().includes(nameFilter);
            
            const hasType = !typeFilter
                || pokemon.type_1.toLowerCase().includes(typeFilter)
                || pokemon.type_2.toLowerCase().includes(typeFilter);
            
            const hasMinHP = !hpMinFilter
                || pokemon.hp > hpMinFilter;

            const hasMaxHP = !hpMaxFilter
                || pokemon.hp < hpMaxFilter;

            return hasName && hasType && hasMinHP && hasMaxHP;
        });
    }
    else {
        filtered = pokemons;
        // perhaps change the above "pokemons" to pokedex if doesn't work
    }
    pokedexTable.update(filtered);
});