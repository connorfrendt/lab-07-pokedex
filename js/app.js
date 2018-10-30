//contact = pokemon
//contacts = pokemons, and pokedex

import pokedexApi from './pokedex-api.js';
import pokedexTable from './pokedex-table.js';

const pokemons = pokedexApi.getAll();

pokedexTable.init(pokemons);

pokedexFilter.init(function(nameFilter, type_1Filter, type_2Filter, hpFilter) {
    let filtered;
    if(nameFilter || type_1Filter || type_2Filter || hpFilter) {
        nameFilter = nameFilter.toLowerCase();

        filtered = pokemons.filter(function(pokemon) {
            const hasName = !nameFilter
                || pokemon.name.toLowerCase().includes(nameFilter);
            
            const hasType_1 = !type_1Filter
                || pokemon.type_1.includes(type_1Filter);

            return hasName && hasType_1;
        });
    }
    else {
        filtered = pokemons;
        // perhaps change the above "pokemons" to pokedex if doesn't work
    }
    pokedexTable.update(filtered);
});